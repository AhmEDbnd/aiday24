import React, { useState } from 'react';
import { FiUser, FiBell, FiGlobe, FiCreditCard, FiLogOut } from 'react-icons/fi';

const Settings = () => {
  // State management
  const [activeSection, setActiveSection] = useState('account');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    companyName: 'Acme Inc',
    email: 'john@example.com',
    currentPlan: 'Professional',
    language: 'English',
    timezone: 'UTC-5',
    notifications: {
      email: true,
      marketing: false,
      aiSuggestions: true
    }
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle notification toggles
  const handleNotificationToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  return (
    <div className="flex h-full bg-gray-50">
      {/* Settings Navigation */}
      <div className="w-64 bg-white border-r">
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveSection('account')}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === 'account' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
            }`}
          >
            <FiUser />
            <span>Account</span>
          </button>
          <button
            onClick={() => setActiveSection('notifications')}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === 'notifications' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
            }`}
          >
            <FiBell />
            <span>Notifications</span>
          </button>
          <button
            onClick={() => setActiveSection('general')}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === 'general' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
            }`}
          >
            <FiGlobe />
            <span>General</span>
          </button>
          <button
            onClick={() => setActiveSection('billing')}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === 'billing' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
            }`}
          >
            <FiCreditCard />
            <span>Billing</span>
          </button>
        </nav>
        <div className="p-4 mt-auto border-t">
          <button className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 p-8 overflow-auto">
        {activeSection === 'account' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Account Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full p-2 border rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Notification Preferences</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive updates about your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications.email}
                    onChange={() => handleNotificationToggle('email')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">Marketing Updates</h3>
                  <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications.marketing}
                    onChange={() => handleNotificationToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2 border-t">
                <div>
                  <h3 className="font-medium">AI Suggestions</h3>
                  <p className="text-sm text-gray-500">Get AI-powered content recommendations</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications.aiSuggestions}
                    onChange={() => handleNotificationToggle('aiSuggestions')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'general' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">General Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timezone
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (London)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Save Changes Button */}
        <div className="mt-6">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
