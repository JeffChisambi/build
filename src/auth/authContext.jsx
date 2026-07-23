"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { mockUsers } from "./mockUsers";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("nasfam_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      const { password: _password, ...userWithoutPassword } = foundUser;
      const authenticatedUser = { ...userWithoutPassword, authenticated: true };
      setUser(authenticatedUser);
      localStorage.setItem("nasfam_user", JSON.stringify(authenticatedUser));
      return { success: true, user: authenticatedUser };
    }
    return { success: false, error: "Invalid email or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nasfam_user");
  };

  const updateUser = (updates) => {
    setUser((currentUser) => {
      const nextUser = { ...(currentUser || {}), ...updates };
      localStorage.setItem("nasfam_user", JSON.stringify(nextUser));

      if (updates.password) {
        const persistedUser = mockUsers.find((entry) => entry.id === nextUser.id || entry.email === nextUser.email);
        if (persistedUser) {
          persistedUser.password = updates.password;
        }
      }

      return nextUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
