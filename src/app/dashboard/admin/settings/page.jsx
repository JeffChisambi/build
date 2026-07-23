"use client";

import { useState } from "react";
import { useAuth } from "@/auth/authContext";

const Icons = {
  save: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  bell: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  lock: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  mail: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  server: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  key: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  eye: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  eyeOff: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ),
};

// Settings Section
function SettingsSection({ icon, title, description, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
        <div className="p-2 bg-gray-100 text-gray-500 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
        </div>
      </div>
      <div className="px-5 py-0.5">
        {children}
      </div>
    </div>
  );
}

function ToggleSwitch({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-b-0">
      <div>
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        aria-checked={checked}
        role="switch"
        className={[
          "relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5c2a] focus-visible:ring-offset-2",
          checked ? "bg-[#1a5c2a]" : "bg-[#d1d5db]",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200",
            checked ? "translate-x-[18px]" : "translate-x-[3px]",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

function SelectInput({ label, value, options, onChange }) {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a5c2a] bg-white"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a5c2a] bg-white"
      />
    </div>
  );
}

// Password input with show/hide toggle
function PasswordInput({ label, value, onChange, placeholder, error }) {
  const [show, setShow] = useState(false);
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-3 py-1.5 pr-9 border rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 bg-white ${
            error ? "border-red-400 focus:ring-red-300" : "border-gray-200 focus:ring-[#1a5c2a]"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {show ? Icons.eyeOff : Icons.eye}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// Default values for reset
const DEFAULTS = {
  emailAlerts: true,
  syncNotifications: true,
  userActivityAlerts: true,
  weeklyReports: true,
  maxLoginAttempts: "5",
  sessionTimeout: "30",
  backupFrequency: "daily",
  emailServer: "smtp.nasfam.org",
  emailPort: "587",
  fromEmail: "admin@nasfam.org",
};

export default function SettingsPage() {
  const { user, updateUser } = useAuth();

  // Notification settings
  const [emailAlerts, setEmailAlerts]               = useState(true);
  const [syncNotifications, setSyncNotifications]   = useState(true);
  const [userActivityAlerts, setUserActivityAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports]           = useState(true);

  // Security settings
  const [maxLoginAttempts, setMaxLoginAttempts] = useState("5");
  const [sessionTimeout, setSessionTimeout]     = useState("30");
  const [backupFrequency, setBackupFrequency]   = useState("daily");

  // Email config
  const [emailServer, setEmailServer] = useState("smtp.nasfam.org");
  const [emailPort, setEmailPort]     = useState("587");
  const [fromEmail, setFromEmail]     = useState("admin@nasfam.org");

  // Change password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword]         = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwErrors, setPwErrors]               = useState({});
  const [pwSaved, setPwSaved]                 = useState(false);

  // General save feedback
  const [saved, setSaved]   = useState(false);
  const [toast, setToast]   = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSave = () => {
    setSaved(true);
    showToast("System settings saved successfully.");
    setTimeout(() => setSaved(false), 3500);
  };

  const handleResetDefaults = () => {
    if (!window.confirm("Reset all settings to their defaults?")) return;
    setEmailAlerts(DEFAULTS.emailAlerts);
    setSyncNotifications(DEFAULTS.syncNotifications);
    setUserActivityAlerts(DEFAULTS.userActivityAlerts);
    setWeeklyReports(DEFAULTS.weeklyReports);
    setMaxLoginAttempts(DEFAULTS.maxLoginAttempts);
    setSessionTimeout(DEFAULTS.sessionTimeout);
    setBackupFrequency(DEFAULTS.backupFrequency);
    setEmailServer(DEFAULTS.emailServer);
    setEmailPort(DEFAULTS.emailPort);
    setFromEmail(DEFAULTS.fromEmail);
    showToast("Settings reset to defaults.");
  };

  const handleChangePassword = () => {
    const errs = {};
    if (!currentPassword) errs.currentPassword = "Enter your current password.";
    else if (currentPassword !== "Admin@123" && currentPassword !== (user?.password || "")) {
      // Compare against the auth store's current value
      const storedPw = (typeof window !== "undefined" && window.__nasfam_admin_pw) || "Admin@123";
      if (currentPassword !== storedPw) errs.currentPassword = "Current password is incorrect.";
    }
    if (!newPassword) errs.newPassword = "Enter a new password.";
    else if (newPassword.length < 8) errs.newPassword = "Password must be at least 8 characters.";
    if (!confirmPassword) errs.confirmPassword = "Confirm your new password.";
    else if (newPassword !== confirmPassword) errs.confirmPassword = "Passwords do not match.";

    if (Object.keys(errs).length) { setPwErrors(errs); return; }

    // Persist via auth context
    if (updateUser) updateUser({ password: newPassword });
    if (typeof window !== "undefined") window.__nasfam_admin_pw = newPassword;

    setPwErrors({});
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPwSaved(true);
    showToast("Password changed successfully.");
    setTimeout(() => setPwSaved(false), 4000);
  };

  return (
    <div className="p-6 space-y-5 max-w-[1000px] mx-auto">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {/* Success banner */}
      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3.5 flex items-center gap-3">
          <div className="text-green-600 flex-shrink-0">{Icons.save}</div>
          <div>
            <p className="text-sm font-semibold text-green-900">Settings Saved</p>
            <p className="text-xs text-green-700">Your changes have been applied.</p>
          </div>
        </div>
      )}

      {/* Change Password */}
      <SettingsSection icon={Icons.key} title="Change Password" description="Update the admin account password">
        {pwSaved && (
          <div className="mt-2.5 mb-1 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <div className="text-green-600 flex-shrink-0">{Icons.save}</div>
            <p className="text-xs text-green-800 font-semibold">Password changed successfully.</p>
          </div>
        )}
        <PasswordInput
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
          placeholder="Enter current password"
          error={pwErrors.currentPassword}
        />
        <PasswordInput
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="At least 8 characters"
          error={pwErrors.newPassword}
        />
        <PasswordInput
          label="Confirm New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Re-enter new password"
          error={pwErrors.confirmPassword}
        />
        <div className="py-3">
          <button
            onClick={handleChangePassword}
            className="flex items-center gap-1.5 bg-[#1a5c2a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#134520] transition-colors"
          >
            {Icons.key}
            Change Password
          </button>
        </div>
      </SettingsSection>

      {/* Notifications */}
      <SettingsSection icon={Icons.bell} title="Notifications" description="Manage system notifications and alerts">
        <ToggleSwitch label="Email Alerts"         description="Receive important alerts via email"                    checked={emailAlerts}        onChange={setEmailAlerts}        />
        <ToggleSwitch label="Sync Notifications"   description="Notify on mobile device synchronization events"        checked={syncNotifications}  onChange={setSyncNotifications}  />
        <ToggleSwitch label="User Activity Alerts" description="Alert on suspicious user activities"                   checked={userActivityAlerts} onChange={setUserActivityAlerts} />
        <ToggleSwitch label="Weekly Reports"       description="Send weekly system health reports"                     checked={weeklyReports}      onChange={setWeeklyReports}      />
      </SettingsSection>

      {/* Security */}
      <SettingsSection icon={Icons.lock} title="Security" description="Configure security policies and access controls">
        <SelectInput
          label="Maximum Login Attempts"
          value={maxLoginAttempts}
          options={[
            { value: "3",  label: "3 Attempts"  },
            { value: "5",  label: "5 Attempts"  },
            { value: "10", label: "10 Attempts" },
          ]}
          onChange={setMaxLoginAttempts}
        />
        <SelectInput
          label="Session Timeout (minutes)"
          value={sessionTimeout}
          options={[
            { value: "15",  label: "15 Minutes" },
            { value: "30",  label: "30 Minutes" },
            { value: "60",  label: "1 Hour"     },
            { value: "120", label: "2 Hours"    },
          ]}
          onChange={setSessionTimeout}
        />
      </SettingsSection>

      {/* Data Management */}
      <SettingsSection icon={Icons.server} title="Data Management" description="Configure backups and data retention">
        <SelectInput
          label="Backup Frequency"
          value={backupFrequency}
          options={[
            { value: "hourly",  label: "Every Hour" },
            { value: "daily",   label: "Daily"      },
            { value: "weekly",  label: "Weekly"     },
            { value: "monthly", label: "Monthly"    },
          ]}
          onChange={setBackupFrequency}
        />
        <div className="py-2.5 border-b border-gray-100 last:border-b-0">
          <p className="text-xs font-semibold text-gray-500 mb-1">Last Backup</p>
          <p className="text-xs text-gray-700">2024-07-13 02:00 AM</p>
        </div>
      </SettingsSection>

      {/* Email Configuration */}
      <SettingsSection icon={Icons.mail} title="Email Configuration" description="Configure SMTP settings for system emails">
        <TextInput label="SMTP Server"        value={emailServer} onChange={setEmailServer} placeholder="smtp.example.com"    />
        <TextInput label="SMTP Port"          value={emailPort}   onChange={setEmailPort}   placeholder="587"                 />
        <TextInput label="From Email Address" value={fromEmail}   onChange={setFromEmail}   placeholder="noreply@example.com" />
      </SettingsSection>

      {/* Actions */}
      <div className="flex items-center gap-2.5 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 bg-[#1a5c2a] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#134520] transition-colors"
        >
          {Icons.save}
          Save Settings
        </button>
        <button
          onClick={handleResetDefaults}
          className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Reset to Defaults
        </button>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3.5">
        <p className="text-xs text-blue-900">
          <span className="font-semibold">Note:</span> Some settings may require a system restart to take effect.
        </p>
      </div>

    </div>
  );
}
