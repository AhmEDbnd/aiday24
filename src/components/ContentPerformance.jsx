export const ContentPerformance = ({ topPosts }) => {
  return (
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
  );
};