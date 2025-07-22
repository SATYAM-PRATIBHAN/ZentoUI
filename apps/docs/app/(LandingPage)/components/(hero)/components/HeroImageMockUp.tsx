const HeroImageMockUp = () => (
  <div className="mx-auto max-w-6xl py-10" style={{ minHeight: "800px" }}>
    <div className="rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-2xl backdrop-blur-sm sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Welcome Section */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
          <h3 className="font-semibold text-black">Welcome Aboard</h3>
          <p className="mt-2 text-gray-500 text-sm">
            Start your journey with us today!
          </p>
          <div className="mt-4 flex h-10 w-24 items-center justify-center rounded-full bg-black text-white transition-colors">
            Explore
          </div>
        </div>

        {/* Card 2: Stats Section */}
        <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
          <h3 className="font-semibold text-blue-900">Your Stats</h3>
          <div className="mt-3 space-y-2">
            <div className="h-4 w-3/4 rounded-full bg-blue-100/60" />
            <div className="h-4 w-1/2 rounded-full bg-blue-200/60" />
            <div className="h-4 w-2/3 rounded-full bg-blue-300/60" />
          </div>
          <p className="mt-2 text-gray-600 text-xs">
            Track your progress here.
          </p>
        </div>

        {/* Card 3: Notification Section */}
        <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-blue-400/70" />
            <h3 className="font-semibold text-blue-900">Notifications</h3>
          </div>
          <p className="mt-2 text-gray-600 text-xs">
            You have 3 new updates waiting!
          </p>
        </div>

        {/* Card 4: Featured Content */}
        <div className="col-span-1 rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg sm:col-span-2 lg:col-span-3">
          <h3 className="font-semibold text-blue-900">Featured Content</h3>
          <p className="mt-2 text-gray-700 text-sm">
            Check out our latest updates and features.
          </p>
          <div className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 font-medium text-white">
            Learn More
          </div>
        </div>

        {/* Card 5: Recent Activity */}
        <div className="col-span-1 rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg sm:col-span-1 lg:col-span-2">
          <h3 className="font-semibold text-blue-900">Recent Activity</h3>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-600 text-sm">Logged in at 09:00 PM IST</li>
            <li className="text-gray-600 text-sm">Updated profile settings</li>
            <li className="text-gray-600 text-sm">
              Viewed dashboard analytics
            </li>
          </ul>
          <p className="mt-2 text-gray-600 text-xs">
            See all activity in your history.
          </p>
        </div>

        {/* Card 6: Quick Links */}
        <div className="rounded-xl border border-blue-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
          <h3 className="font-semibold text-blue-900">Quick Links</h3>
          <div className="mt-3 space-y-2">
            <div className="flex h-8 w-full items-center rounded-md bg-blue-50 px-2 text-gray-700 text-sm">
              Support Center
            </div>
            <div className="flex h-8 w-full items-center rounded-md bg-blue-50 px-2 text-gray-700 text-sm">
              User Guide
            </div>
            <div className="flex h-8 w-full items-center rounded-md bg-blue-50 px-2 text-gray-700 text-sm">
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 flex items-center justify-between rounded-lg border border-black bg-white p-4">
        <p className="text-gray-600 text-sm">Powered by ZentoUI | © 2025</p>
        <div className="flex space-x-2">
          <div className="h-6 w-6 rounded-full bg-red-600" />
          <div className="h-6 w-6 rounded-full bg-yellow-300" />
          <div className="h-6 w-6 rounded-full bg-green-400" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroImageMockUp;
