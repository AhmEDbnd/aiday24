import React from 'react';
import { AccountManager } from './AccountManager';

export const DashboardHeader = ({ 
  activeTab, 
  selectedAccount,
  accounts,
  setSelectedAccount,
  onAddAccount 
}) => {
  return (
    <div className="bg-white border-b p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {activeTab === 'dashboard' && selectedAccount}
          {activeTab === 'assistant' && 'AI Assistant'}
          {activeTab === 'audience' && 'Audience Targeting'}
          {activeTab === 'settings' && 'Settings'}
          {activeTab === 'help' && 'Help'}
        </h2>

        {activeTab === 'dashboard' && (
          <AccountManager
            accounts={accounts}
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
            onAddAccount={onAddAccount}
          />
        )}
      </div>
    </div>
  );
};