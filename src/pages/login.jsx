import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth({ setIsAuthenticated }) {
    const [isLogin, setIsLogin] = useState(true);
    // Removed unused error state
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // For testing: always authenticate and navigate
        setIsAuthenticated(true);
        navigate('/dashboard');
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // For testing: just switch to login form
        setIsLogin(true);
    };

    return (
        <div className="min-h-screen bg-[#2c3e50] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Logo/Header */}
                    <div className="p-6 bg-[#2c3e50] text-white text-center">
                        <h1 className="text-2xl font-bold">Muchas AI</h1>
                        <p className="mt-2 text-gray-300">Social Media Analytics Platform</p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex border-b">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 p-4 text-sm font-medium ${
                                isLogin
                                    ? 'text-[#2c3e50] border-b-2 border-[#2c3e50]'
                                    : 'text-gray-500 hover:text-[#2c3e50]'
                            }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 p-4 text-sm font-medium ${
                                !isLogin
                                    ? 'text-[#2c3e50] border-b-2 border-[#2c3e50]'
                                    : 'text-gray-500 hover:text-[#2c3e50]'
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="p-6">
                        {isLogin ? (
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                                    />
                                </div>
                                {/* Removed unused error display */}
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-[#2c3e50] hover:bg-gray-700 text-white rounded-lg transition-colors"
                                >
                                    Sign In
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleSignup} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-[#2c3e50] hover:bg-gray-700 text-white rounded-lg transition-colors"
                                >
                                    Create Account
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
