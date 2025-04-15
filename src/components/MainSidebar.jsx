import { FiHome, FiMessageSquare, FiUsers, FiSettings, FiHelpCircle } from 'react-icons/fi';

const MainSidebar = ({ activeTab, setActiveTab, onAssistantClick }) => {
  return (
    <div className="w-64 bg-[#2c3e50] text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Muchas AI</h1>
      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center w-full p-3 rounded-lg ${
            activeTab === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiHome className="mr-3" />
          Dashboard
        </button>
        <button
          onClick={() => {
            setActiveTab('assistant');
            onAssistantClick();
          }}
          className={`flex items-center w-full p-3 rounded-lg ${
            activeTab === 'assistant' ? 'bg-indigo-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiMessageSquare className="mr-3" />
          AI Assistant
        </button>
        <button
          onClick={() => setActiveTab('audience')}
          className={`flex items-center w-full p-3 rounded-lg ${
            activeTab === 'audience' ? 'bg-indigo-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiUsers className="mr-3" />
          Audience Targeting
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center w-full p-3 rounded-lg ${
            activeTab === 'settings' ? 'bg-indigo-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiSettings className="mr-3" />
          Settings
        </button>
        <button
          onClick={() => setActiveTab('help')}
          className={`flex items-center w-full p-3 rounded-lg ${
            activeTab === 'help' ? 'bg-indigo-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiHelpCircle className="mr-3" />
          Help
        </button>
      </nav>
    </div>
  );
};

export default MainSidebar;
