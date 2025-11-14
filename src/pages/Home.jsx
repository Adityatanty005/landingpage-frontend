import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-5">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 text-center">
        Select a University
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/lpu"
          className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 text-center border-t-4 border-orange-600"
        >
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            Lovely Professional University
          </h2>
          <p className="text-gray-600">
            Explore Courses, Fees, Placements & More
          </p>
          <button className="mt-6 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold">
            View Landing Page
          </button>
        </Link>

        <Link
          to="/giet"
          className="bg-white shadow-lg hover:shadow-2xl transition rounded-2xl p-8 text-center border-t-4 border-blue-700"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            GIET University
          </h2>
          <p className="text-gray-600">Discover Programs, Fees & Campus Life</p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold">
            View Landing Page
          </button>
        </Link>
      </div>
    </div>
  );
}
