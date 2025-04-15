import { useState } from 'react';

const Audience = () => {
  const [audienceTargets] = useState([
    {
      title: 'Young Professionals',
      demographics: '25-34 years old',
      interests: ['Technology', 'Career Growth', 'Fitness'],
      engagement: '32%',
      icon: '👥'
    },
    {
      title: 'Parents',
      demographics: '30-45 years old',
      interests: ['Family', 'Education', 'Wellness'],
      engagement: '28%',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Tech Enthusiasts',
      demographics: '18-35 years old',
      interests: ['Gadgets', 'Innovation', 'Gaming'],
      engagement: '25%',
      icon: '💻'
    },
    {
      title: 'Creative Professionals',
      demographics: '22-38 years old',
      interests: ['Design', 'Arts', 'Photography'],
      engagement: '22%',
      icon: '🎨'
    }
  ]);

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {audienceTargets.map((target, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{target.icon}</span>
                  <h3 className="text-xl font-bold text-indigo-800">{target.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{target.demographics}</p>
              </div>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {target.engagement} Engagement
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {target.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-end">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View Detailed Analytics →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-semibold text-indigo-800 mb-4">Audience Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Total Reach</p>
            <p className="text-2xl font-bold text-indigo-800">2.4M</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Average Engagement</p>
            <p className="text-2xl font-bold text-indigo-800">26.8%</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Growth Rate</p>
            <p className="text-2xl font-bold text-green-600">+12.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;