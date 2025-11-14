import { useState } from "react";
import FeesModal from "../components/FeesModal";
import feesData from "../data/fees.json";

export default function University1() {
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
      alert("You must agree to receive updates before submitting.");
      return;
    }

    const formData = { name, email, phone, state, course, intake, consent };

    try {
      const response = await fetch("https://eoyiqo7r02x3089.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        e.target.reset();
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="w-full bg-linear-to-r from-orange-700 to-orange-600 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-white font-bold text-2xl">
            Lovely Professional University
          </h1>

          <nav className="flex gap-8 text-white font-medium">
            <a href="#overview" className="hover:text-yellow-300">
              Overview
            </a>
            <a href="#courses" className="hover:text-yellow-300">
              Courses
            </a>
            <a href="#placements" className="hover:text-yellow-300">
              Placements
            </a>
            <a href="#apply" className="hover:text-yellow-300">
              Apply
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-linear-to-br from-orange-700 to-orange-500 text-white pt-24 pb-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Lovely Professional University
        </h1>

        <p className="mt-4 text-lg opacity-90">
          Founded in 2005 | Premier Engineering Institute of North India
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() => setIsFeesModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Check Course-wise Fees
          </button>

          <a
            href="#apply"
            className="border border-white hover:bg-white hover:text-orange-600 transition px-8 py-3 rounded-lg font-semibold"
          >
            Apply Now
          </a>
        </div>
      </section>

      <section id="overview" className="py-20 px-6 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-center text-orange-800">
          About LPU
        </h3>

        <p className="text-lg text-gray-600 text-center mt-2 mb-14">
          Excellence in Engineering and Technical Education
        </p>

        <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-700 leading-7 text-lg">
            Lovely Professional University is one of the premier engineering
            institutions in North India. Founded in 2005, it provides
            world-class education, research opportunities, and innovation-driven
            learning.
          </p>

          <p className="text-gray-700 leading-7 text-lg mt-6">
            Located in Punjab, LPU has top-tier infrastructure, expert faculty,
            and a thriving student community shaping future engineering leaders.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white p-10 rounded-2xl shadow-md text-center border">
            <h4 className="text-3xl font-extrabold text-orange-600">92%</h4>
            <p className="text-gray-600 mt-2">Placement Rate</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-md text-center border">
            <h4 className="text-3xl font-extrabold text-orange-600">18 LPA</h4>
            <p className="text-gray-600 mt-2">Average Package</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-md text-center border">
            <h4 className="text-3xl font-extrabold text-orange-600">70 LPA</h4>
            <p className="text-gray-600 mt-2">Highest Package</p>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#8B3200]">
          Engineering Programs
        </h2>

        <p className="text-center text-gray-500 mt-2 text-lg">
          4-Year B.Tech Programs
        </p>

        <div className="max-w-6xl mx-auto mt-10 space-y-4">
          {[
            "Computer Science & Engineering",
            "Electronics & Communication Engineering",
            "Mechanical Engineering",
            "Production Engineering",
          ].map((course, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 p-5 rounded-lg shadow-sm border-l-4 border-[#C4471A]"
            >
              <span className="text-lg font-semibold text-gray-800">
                {course}{" "}
                <span className="text-gray-500 ml-2 text-sm">B.Tech</span>
              </span>
              <span className="text-gray-600">4 Years</span>
            </div>
          ))}
        </div>
      </section>

      <section id="placements" className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-[#8B3200]">
          Placement Statistics
        </h2>

        <p className="text-center text-gray-500 mt-2 text-lg">
          Career opportunities with leading companies
        </p>

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 shadow-md rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-[#C4471A]">18 LPA</h3>
            <p className="mt-2 text-gray-600 text-lg">Average Package</p>
          </div>

          <div className="bg-white p-8 shadow-md rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-[#C4471A]">70 LPA</h3>
            <p className="mt-2 text-gray-600 text-lg">Highest Package</p>
          </div>

          <div className="bg-white p-8 shadow-md rounded-xl text-center border">
            <h3 className="text-3xl font-bold text-[#C4471A]">92%</h3>
            <p className="mt-2 text-gray-600 text-lg">Placement Rate</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white p-8 shadow-md rounded-xl text-center border">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Top Recruiters
            </h3>
            <p className="text-gray-600 text-lg">
              Infosys, TCS, Accenture, HCL, Cognizant
            </p>
          </div>
        </div>
      </section>

      <section id="facilities" className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-[#8B3200]">
          Modern Facilities
        </h2>

        <p className="text-center text-gray-500 mt-2 text-lg">
          Advanced infrastructure for comprehensive learning
        </p>

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            "Research Centers",
            "Central Library",
            "Sports Complex",
            "Student Hostels",
            "Tech Park",
            "Health Center",
          ].map((item) => (
            <div
              key={item}
              className="w-full py-4 px-6 text-center text-white font-semibold rounded-lg shadow-md cursor-pointer bg-linear-to-r from-orange-500 to-[#7B2D0F] hover:scale-[1.03] transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-extrabold text-center text-orange-700">
          Apply Now
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Begin your journey at LPU
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-10 shadow-xl rounded-xl grid grid-cols-1 gap-5"
        >
          <input
            type="text"
            placeholder="Full Name *"
            required
            className="border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            className="border p-3 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number (10-digit) *"
            required
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="State *"
            required
            className="border p-3 rounded"
          />

          <select required className="border p-3 rounded">
            <option value="">Select Course</option>
            <option>B.Tech</option>
            <option>BBA</option>
            <option>BCA</option>
            <option>MBA</option>
          </select>

          <select required className="border p-3 rounded">
            <option value="">Intake Year</option>
            <option>2024</option>
            <option>2025</option>
          </select>

          <label className="flex gap-3 items-center mt-2">
            <input type="checkbox" required />
            <span className="text-gray-700">
              I agree to receive communications and updates *
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-orange-700 text-white rounded-lg text-lg font-semibold hover:bg-orange-800 transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      <footer className="bg-orange-900 text-white py-6 text-center mt-10">
        <p>© 2024 LPU. All rights reserved.</p>
        <p className="mt-1">Contact: admissions@lpu.in | Phone: 01824-XXXXXX</p>
      </footer>

      <FeesModal
        isOpen={isFeesModalOpen}
        onClose={() => setIsFeesModalOpen(false)}
        fees={feesData}
      />
    </div>
  );
}
