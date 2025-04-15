import { useState } from 'react';
import MainSidebar from '../components/MainSidebar';
import SecondarySidebar from '../components/SecondarySidebar';
import AIChatPanel from '../components/AIChatPanel';
import Settings from './settings';
import Audience from './audiencetargeting'; // Fixed import path
import ErrorBoundary from '../components/ErrorBoundary';
import { FiChevronDown, FiChevronRight, FiPlus, FiMessageCircle, FiLink } from 'react-icons/fi';
import { MetricsPanel } from '../components/MetricsPanel';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAccount, setSelectedAccount] = useState('My Facebook Page');
  const [accounts, setAccounts] = useState([
    { name: 'My Facebook Page' },
    { name: 'My Instagram' },
    { name: 'My Twitter' },
    { name: 'Company Facebook' },
    { name: 'Company Instagram' },
  ]);
  const [newAccountName, setNewAccountName] = useState('');
  const [isAddAccountModalOpen, setAddAccountModalOpen] = useState(false);
  const [isAIChatOpen, setAIChatOpen] = useState(false);
  const [isUrlModalOpen, setUrlModalOpen] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const [metrics] = useState({
    followers: { value: '12,345', change: '+5.2%' },
    engagement: { value: '4.8%', change: '+0.7%' },
    reach: { value: '45,678', change: '-2.1%' },
  });
  const [topPosts] = useState([
    { title: 'Product launch announcement', likes: '2,345', comments: '452' },
    { title: 'Behind the scenes video', likes: '1,987', comments: '215' },
    { title: 'Customer testimonial', likes: '1,456', comments: '178' },
  ]);

  const handleAddAccount = () => {
    if (newAccountName) {
      setAccounts([...accounts, { name: newAccountName }]);
      setNewAccountName('');
      setAddAccountModalOpen(false);
    }
  };

  const handleAIChatToggle = () => {
    setAIChatOpen(!isAIChatOpen);
    if (!isAIChatOpen) {
      setActiveTab('assistant');
    }
  };

  const handleAddUrl = () => {
    if (postUrl) {
      setUrlModalOpen(false);
      setPostUrl("");
      setActiveTab('assistant');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <MainSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onAssistantClick={handleAIChatToggle}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative">
        {activeTab === 'assistant' ? (
          <ErrorBoundary fallback={<div>Error loading chat</div>}>
            <AIChatPanel 
              closeChat={() => {
                setAIChatOpen(false);
                setActiveTab('dashboard');
              }}
              isFullPage={true}
            />
          </ErrorBoundary>
        ) : (
          <>
            {/* Header */}
            <div className="bg-white border-b p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Muchas AI
                </h2>

                {activeTab === 'dashboard' && (
                  <div className="flex items-center space-x-2">
                    {/* Account Buttons */}
                    {accounts.map((account) => (
                      <button
                        key={account.name}
                        onClick={() => setSelectedAccount(account.name)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedAccount === account.name
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-gray-100'
                        }`}
                      >
                        {account.name}
                      </button>
                    ))}
                    {/* Add Account Button */}
                    <button
                      onClick={() => setAddAccountModalOpen(true)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm flex items-center space-x-1"
                    >
                      <FiPlus />
                      <span>Add Account</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Add Account Modal */}
            {isAddAccountModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-1/3">
                  <h3 className="text-xl font-bold mb-4">Add New Account</h3>
                  <input
                    type="text"
                    value={newAccountName}
                    onChange={(e) => setNewAccountName(e.target.value)}
                    placeholder="Enter account name"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setAddAccountModalOpen(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddAccount}
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Add Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content Per Tab */}
            {activeTab === 'dashboard' && (
              <div className="p-6 space-y-8">
                <MetricsPanel metrics={metrics} />
                {/* Content Performance */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Content Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Top Performing Posts</h3>
                      <div className="space-y-4">
                        {topPosts.map((post, i) => (
                          <div key={i} className="border-b pb-4 last:border-0">
                            <p className="font-medium">{post.title}</p>
                            <p className="text-sm text-gray-500">
                              {post.likes} likes • {post.comments} comments
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4">Content Type Performance</h3>
                      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                        Content type chart would appear here
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Audience Targeting Page */}
            {activeTab === 'audience' && <Audience />}

            {/* Settings Page */}
            {activeTab === 'settings' && <Settings />}

            {/* Bottom Right Add Post URL Button - Only show in dashboard tab */}
            {activeTab === 'dashboard' && (
              <>
                <div className="fixed bottom-4 right-4">
                  <button
                    onClick={() => setUrlModalOpen(true)}
                    className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-full flex items-center space-x-2 transition-colors shadow-lg"
                  >
                    <FiLink className="text-lg" />
                    <span>Add Post URL</span>
                  </button>
                </div>

                {/* URL Modal */}
                {isUrlModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md mx-4 shadow-xl">
                      <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-semibold">Add Social Media Post</h3>
                        <button
                          onClick={() => setUrlModalOpen(false)}
                          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="p-4">
                        <input
                          type="url"
                          value={postUrl}
                          onChange={(e) => setPostUrl(e.target.value)}
                          placeholder="Enter post URL"
                          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <div className="flex justify-end space-x-3">
                          <button
                            onClick={() => setUrlModalOpen(false)}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddUrl}
                            disabled={!postUrl.trim()}
                            className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Analyze Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
