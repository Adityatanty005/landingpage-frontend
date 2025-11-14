import { useState } from "react";
import FeesModal from "../components/FeesModal";
import feesData from "../data/fees2.json";

export default function University2() {
  const [isFeesModalOpen, setIsFeesModalOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();
    const state = e.target[3].value.trim();
    const course = e.target[4].value;
    const intake = e.target[5].value;
    const consent = e.target[6].checked;

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!consent) {
      alert("Please agree to receive updates.");
      return;
    }

    const formData = { name, email, phone, state, course, intake, consent };

    try {
      const resp = await fetch("https://eon41mjkre158x9.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      resp.ok
        ? alert("Form submitted successfully!")
        : alert("Submission failed");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }

    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-5 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">GIET University</h1>

          <div className="hidden md:flex gap-8 text-lg">
            <a href="#overview" className="hover:text-gray-300">
              Overview
            </a>
            <a href="#courses" className="hover:text-gray-300">
              Courses
            </a>
            <a href="#placements" className="hover:text-gray-300">
              Placements
            </a>
            <a href="#apply" className="hover:text-gray-300">
              Apply
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION  */}
      <section className="bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          GIET University
        </h2>

        <p className="text-lg md:text-xl mt-4 opacity-90">
          Admissions Open for 2025 • Premium Global Education
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => setIsFeesModalOpen(true)}
            className="px-8 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition"
          >
            Check Course-wise Fees
          </button>

          <a
            href="YOUR_BROCHURE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-800 transition"
          >
            Download Brochure
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h3 className="text-4xl font-extrabold text-center text-blue-900 tracking-tight">
            About GIET University
          </h3>

          <p className="text-lg text-gray-600 text-center mt-3 mb-12">
            Excellence in Global Education and Research
          </p>

          {/* White Card Overview */}
          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mx-auto max-w-5xl">
            <p className="text-gray-700 leading-relaxed text-lg">
              GIET is a premier institution committed to excellence in
              education, research, and innovation. With modern facilities,
              highly experienced faculty, and strong global partnerships, the
              university prepares students to become leaders in their fields.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              The campus offers state-of-the-art infrastructure, advanced
              laboratories, digital learning resources, global exposure
              programs, and industry-oriented training modules. Students excel
              in academics, research, sports, and entrepreneurship.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Placement Rate */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-bold text-blue-600">95%</h4>
              <p className="mt-2 text-gray-700">Placement Rate</p>
            </div>

            {/* Average Package */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-bold text-blue-600">25 LPA</h4>
              <p className="mt-2 text-gray-700">Average Package</p>
            </div>

            {/* Highest Package */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-bold text-blue-600">85 LPA</h4>
              <p className="mt-2 text-gray-700">Highest Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES  */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h3 className="text-4xl font-extrabold text-center text-blue-900 tracking-tight">
            Engineering Programs
          </h3>

          <p className="text-lg text-gray-600 text-center mt-2 mb-12">
            4-Year B.Tech Programs
          </p>

          {/* Courses List */}
          <div className="space-y-6">
            {/* One Course Item */}
            {[
              {
                name: "Computer Science & Engineering",
                degree: "B.Tech",
                duration: "4 Years",
              },
              {
                name: "Mechanical Engineering",
                degree: "B.Tech",
                duration: "4 Years",
              },
              {
                name: "Civil Engineering",
                degree: "B.Tech",
                duration: "4 Years",
              },
              {
                name: "Electrical Engineering",
                degree: "B.Tech",
                duration: "4 Years",
              },
            ].map((course) => (
              <div
                key={course.name}
                className="flex justify-between items-center bg-gray-50 rounded-xl shadow-sm p-5 border-l-4 border-blue-600"
              >
                <div className="text-gray-800 text-lg font-semibold">
                  {course.name}{" "}
                  <span className="text-gray-500 font-normal">
                    {course.degree}
                  </span>
                </div>

                <div className="text-gray-500 text-md">{course.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  PLACEMENTS  */}
      <section id="placements" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h3 className="text-4xl font-extrabold text-center text-blue-900 tracking-tight">
            Placement Statistics
          </h3>

          <p className="text-lg text-gray-600 text-center mt-3 mb-16">
            Leading careers with top recruiters
          </p>

          {/* Three Placement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Average Package */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-extrabold text-blue-600">25 LPA</h4>
              <p className="text-gray-600 mt-2 text-lg">Average Package</p>
            </div>

            {/* Highest Package */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-extrabold text-blue-600">85 LPA</h4>
              <p className="text-gray-600 mt-2 text-lg">Highest Package</p>
            </div>

            {/* Placement Rate */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-3xl font-extrabold text-blue-600">95%</h4>
              <p className="text-gray-600 mt-2 text-lg">Placement Rate</p>
            </div>
          </div>

          {/* Recruiters Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-md rounded-2xl py-10 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Top Recruiters
              </h4>

              <p className="text-gray-600 text-lg leading-relaxed">
                Google, Microsoft, Amazon, Goldman Sachs, JP Morgan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  FACILITIES  */}
      <section id="facilities" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h3 className="text-4xl font-extrabold text-center text-blue-900 tracking-tight">
            World-Class Facilities
          </h3>

          <p className="text-lg text-gray-600 text-center mt-3 mb-16">
            State-of-the-art infrastructure for comprehensive learning
          </p>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Modern Laboratories",
              "Library with 300000+ Books",
              "Sports Complex",
              "Hostel Facilities",
              "WiFi Campus",
              "Medical Center",
            ].map((facility) => (
              <div
                key={facility}
                className="bg-linear-to-r from-blue-500 to-blue-800 text-white text-center px-6 py-10 rounded-xl shadow-md font-semibold text-lg"
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES MODAL  */}
      <FeesModal
        isOpen={isFeesModalOpen}
        onClose={() => setIsFeesModalOpen(false)}
        fees={feesData}
      />

      {/*  APPLY NOW FORM  */}
      <section id="apply" className="bg-light">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-extrabold text-center text-blue-900">
            Apply Now
          </h3>
          <p className="text-gray-600 text-center mt-2 mb-10">
            Join India’s Premier Engineering Institute
          </p>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Phone Number (10-digit) *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* State */}
              <div class="form-group">
                <label className="block font-medium text-gray-700 mb-1">
                  State *
                </label>
                <select
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Course Interested *
                </label>
                <select
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Course</option>
                  <option value="Computer Science & Engineering">
                    Computer Science & Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Intake Year *
                </label>
                <select
                  required
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Year</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required className="mt-1 h-5 w-5" />
                <p className="text-gray-700 text-sm">
                  I agree to receive communications and information about
                  programs and events *
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-900 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <div className="text-center text-sm space-y-2">
          <p className="opacity-80">© 2025 GIET. All rights reserved.</p>

          <p className="opacity-80">
            Contact:{" "}
            <a href="mailto:admissions@iitd.ac.in" className="underline">
              admissions@giet.ac.in
            </a>{" "}
            | Phone: 011-XXXX-XXXX
          </p>
        </div>
      </footer>
    </div>
  );
}
