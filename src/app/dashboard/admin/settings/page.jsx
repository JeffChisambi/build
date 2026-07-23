"use client";

import { useState } from "react";

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

// Toggle Switch — uses arbitrary colour classes to bypass the global dark-mode
// !important overrides that make bg-gray-300 near-black in dark mode.
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
          "relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5c2e] focus-visible:ring-offset-2",
          checked
            ? "bg-[#1a5c2e]"
            : "bg-[#d1d5db] dark:bg-[#4b5563]",
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

// Select Input
function SelectInput({ label, value, options, onChange }) {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a5c2e] bg-white"
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

// Text Input
function TextInput({ label, value, onChange, placeholder }) {
  return (
    <div className="py-2.5 border-b border-gray-100 last:border-b-0">
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a5c2e] bg-white"
      />
    </div>
  );
}

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [syncNotifications, setSyncNotifications] = useState(true);
  const [userActivityAlerts, setUserActivityAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const [maxLoginAttempts, setMaxLoginAttempts] = useState("5");
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [backupFrequency, setBackupFrequency] = useState("daily");

  const [emailServer, setEmailServer] = useState("smtp.nasfam.org");
  const [emailPort, setEmailPort] = useState("587");
  const [fromEmail, setFromEmail] = useState("admin@nasfam.org");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 space-y-5 max-w-[1000px] mx-auto">

      {/* Success Message */}
      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3.5 flex items-center gap-3">
          <div className="text-green-600 flex-shrink-0">{Icons.save}</div>
          <div>
            <p className="text-sm font-semibold text-green-900">Settings Saved</p>
            <p className="text-xs text-green-700">Your changes have been saved successfully.</p>
          </div>
        </div>
      )}

      {/* Notifications */}
      <SettingsSection icon={Icons.bell} title="Notifications" description="Manage system notifications and alerts">
        <ToggleSwitch label="Email Alerts"          description="Receive important alerts via email"                    checked={emailAlerts}        onChange={setEmailAlerts}        />
        <ToggleSwitch label="Sync Notifications"    description="Notify on mobile device synchronization events"        checked={syncNotifications}  onChange={setSyncNotifications}  />
        <ToggleSwitch label="User Activity Alerts"  description="Alert on suspicious user activities"                   checked={userActivityAlerts} onChange={setUserActivityAlerts} />
        <ToggleSwitch label="Weekly Reports"        description="Send weekly system health reports"                     checked={weeklyReports}      onChange={setWeeklyReports}      />
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
        <div className="py-2.5 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 mb-1">Last Backup</p>
          <p className="text-xs text-gray-700">2024-07-13 02:00 AM</p>
        </div>
      </SettingsSection>

      {/* Email Configuration */}
      <SettingsSection icon={Icons.mail} title="Email Configuration" description="Configure SMTP settings for system emails">
        <TextInput label="SMTP Server"         value={emailServer} onChange={setEmailServer} placeholder="smtp.example.com"     />
        <TextInput label="SMTP Port"           value={emailPort}   onChange={setEmailPort}   placeholder="587"                  />
        <TextInput label="From Email Address"  value={fromEmail}   onChange={setFromEmail}   placeholder="noreply@example.com"  />
      </SettingsSection>

      {/* Actions */}
      <div className="flex items-center gap-2.5 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 bg-[#1a5c2e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#134520] transition-colors"
        >
          {Icons.save}
          Save Settings
        </button>
        <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
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
