"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { authService } from "@/lib/api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Re-hydrate session from the server on mount (reads the httpOnly cookie via /me).
  useEffect(() => {
    authService
      .me()
      .then(({ user }) => setUser(user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  /**
   * Login — credentials are sent to /api/v1/auth/login.
   * Returns { success, user?, error? }
   */
  const login = useCallback(async (email, password) => {
    try {
      const { user } = await authService.login(email, password);
      setUser(user);
      return { success: true, user };
    } catch (err) {
      return {
        success: false,
        error:
          err.status === 503
            ? err.data?.hint ?? "Authentication backend is not configured. Contact your system administrator."
            : err.message ?? "Invalid email or password.",
      };
    }
  }, []);

  /**
   * Logout — clears the httpOnly cookie via /api/v1/auth/logout.
   */
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  }, []);

  /**
   * Change password via /api/v1/auth/change-password.
   * Returns { success, error? }
   */
  const changePassword = useCallback(async (currentPassword, newPassword) => {
    try {
      await authService.changePassword(currentPassword, newPassword);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message ?? "Password change failed." };
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, changePassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
