const HeroImageMockUp = () => (
    <div className="max-w-5xl mx-auto py-10" style={{ minHeight: "800px" }}>
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-2xl border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Welcome Section */}
          <div className="bg-white flex flex-col justify-center items-center rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-black font-semibold">Welcome Aboard</h3>
            <p className="mt-2 text-sm text-gray-500">Start your journey with us today!</p>
            <div className="mt-4 h-10 w-24 rounded-full bg-black text-white flex items-center justify-center cursor-pointer transition-colors">
              Explore
            </div>
          </div>
  
          {/* Card 2: Stats Section */}
          <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-blue-900 font-semibold">Your Stats</h3>
            <div className="mt-3 space-y-2">
              <div className="h-4 w-3/4 bg-blue-100/60 rounded-full" />
              <div className="h-4 w-1/2 bg-blue-200/60 rounded-full" />
              <div className="h-4 w-2/3 bg-blue-300/60 rounded-full" />
            </div>
            <p className="mt-2 text-xs text-gray-600">Track your progress here.</p>
          </div>
  
          {/* Card 3: Notification Section */}
          <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-blue-400/70" />
              <h3 className="text-blue-900 font-semibold">Notifications</h3>
            </div>
            <p className="mt-2 text-xs text-gray-600">You have 3 new updates waiting!</p>
          </div>
  
          {/* Card 4: Featured Content */}
          <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow col-span-1 sm:col-span-2 lg:col-span-3">
            <h3 className="text-blue-900 font-semibold">Featured Content</h3>
            <p className="mt-2 text-sm text-gray-700">Check out our latest updates and features.</p>
            <div className="mt-4 h-12 w-full bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg flex items-center justify-center text-white font-medium">
              Learn More
            </div>
          </div>
  
          {/* Card 5: Recent Activity */}
          <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="text-blue-900 font-semibold">Recent Activity</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-gray-600">Logged in at 09:00 PM IST</li>
              <li className="text-sm text-gray-600">Updated profile settings</li>
              <li className="text-sm text-gray-600">Viewed dashboard analytics</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">See all activity in your history.</p>
          </div>
  
          {/* Card 6: Quick Links */}
          <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-blue-900 font-semibold">Quick Links</h3>
            <div className="mt-3 space-y-2">
              <div className="h-8 w-full bg-blue-50 rounded-md flex items-center px-2 text-sm text-gray-700">Support Center</div>
              <div className="h-8 w-full bg-blue-50 rounded-md flex items-center px-2 text-sm text-gray-700">User Guide</div>
              <div className="h-8 w-full bg-blue-50 rounded-md flex items-center px-2 text-sm text-gray-700">Settings</div>
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="mt-6 p-4 bg-white rounded-lg border border-black flex justify-between items-center">
          <p className="text-sm text-gray-600">Powered by ZentoUI | © 2025</p>
          <div className="flex space-x-2">
            <div className="h-6 w-6 bg-red-600 rounded-full" />
            <div className="h-6 w-6 bg-yellow-300 rounded-full" />
            <div className="h-6 w-6 bg-green-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
  
  export default HeroImageMockUp;