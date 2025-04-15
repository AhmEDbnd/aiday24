import React from 'react';

export default function SecondarySidebar({ isCollapsed, onToggle }) {
  return (
    <div className={`transition-all duration-300 bg-gray-200 ${isCollapsed ? 'w-12' : 'w-64'} p-4 relative`}>
      <button
        className="absolute top-2 right-2 text-gray-600"
        onClick={onToggle}
      >
        {isCollapsed ? '➡️' : '⬅️'}
      </button>

      {!isCollapsed && (
        <>
          <h3 className="text-lg font-semibold mb-4">Accounts</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">facebook</span>
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-pink-500">instagram</span>
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-blue-400">twitter</span>
              <span>Twitter</span>
            </li>
          </ul>

          <div className="mt-6 space-y-2">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add Account</button>
            <button className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Edit Accounts</button>
          </div>
        </>
      )}
    </div>
  );
}
