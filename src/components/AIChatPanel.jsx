import { useState } from "react"
import { MessageSquare, Send, User, Bot, Link, X } from "lucide-react"
import { Button } from "./button"

export default function AIChatPanel({ isFullPage = false }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI Assistant. I can help you analyze social media posts and provide insights. Paste a post URL to get started!",
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUrlModalOpen, setUrlModalOpen] = useState(false)
  const [postUrl, setPostUrl] = useState("")

  // Responsive container styles
  const containerStyles = isFullPage
    ? "flex flex-col h-full bg-white rounded-lg shadow-lg"
    : "fixed bottom-4 right-4 w-full max-w-md h-[70vh] max-h-[600px] bg-white rounded-lg shadow-xl flex flex-col"

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const newMessages = [...messages, { role: "user", content: input.trim() }]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "I understand you're asking about that. Let me help you with a detailed response...",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddUrl = () => {
    if (postUrl) {
      setMessages([
        ...messages,
        { role: "user", content: `Analyzing post: ${postUrl}` }
      ])
      setPostUrl("")
      setUrlModalOpen(false)
      // Simulate analysis response
      setIsLoading(true)
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "I've analyzed the post. Here are my insights:\n\n1. Engagement rate: 4.8% (above average)\n2. Best performing demographic: Women 25-34\n3. Optimal posting time: 2-4pm weekdays\n4. Suggested content improvements: Add more call-to-action phrases"
        }])
        setIsLoading(false)
      }, 1500)
    }
  }

  return (
    <>
      <div className={containerStyles}>
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-[#2c3e50] text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <MessageSquare size={20} className="text-white" />
            <h2 className="font-semibold text-lg">AI Social Media Assistant</h2>
          </div>
          <button
            onClick={() => setUrlModalOpen(true)}
            className="flex items-center gap-2 bg-indigo-700 hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm transition-colors"
          >
            <Link size={16} className="text-white" />
            <span>Add Post</span>
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-[#2c3e50] text-white"
                      : "bg-white border border-gray-200 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 text-xs text-opacity-80">
                    {msg.role === "user" ? (
                      <>
                        <User size={12} className={msg.role === "user" ? "text-indigo-200" : "text-gray-500"} />
                        <span className={msg.role === "user" ? "text-indigo-200" : "text-gray-500"}>You</span>
                      </>
                    ) : (
                      <>
                        <Bot size={12} className="text-indigo-600" />
                        <span className="text-gray-600">Assistant</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-3 rounded-lg bg-white border border-gray-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5 text-xs text-gray-500">
                    <Bot size={12} className="text-indigo-600" />
                    <span>Assistant is typing...</span>
                  </div>
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the post or paste a URL..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-[#2c3e50] hover:bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>

      {/* URL Modal */}
      {isUrlModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-[#2c3e50] text-white">
              <h3 className="text-lg font-semibold">Analyze Social Media Post</h3>
              <button
                onClick={() => setUrlModalOpen(false)}
                className="text-white hover:bg-gray-700 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="post-url" className="block text-sm font-medium text-gray-700 mb-1">
                    Post URL
                  </label>
                  <input
                    id="post-url"
                    type="url"
                    value={postUrl}
                    onChange={(e) => setPostUrl(e.target.value)}
                    placeholder="https://instagram.com/p/..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setUrlModalOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddUrl}
                    disabled={!postUrl.trim()}
                    className="px-4 py-2 bg-[#2c3e50] hover:bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Analyze Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}