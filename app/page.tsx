"use client";
import { useState } from "react";
import Image from "next/image";
export default function Home() 
{
  const [message, setMessage] = useState("");
  const [enrollMessage, setEnrollMessage] = useState("");
  return (
    <main className="min-h-screen bg-[#ba9eee]">
     <section className="relative overflow-hidden bg-linear-to-b from-[#F7F3FF] via-white to-[#F7F3FF] py-24 px-6">

  <div className="max-w-6xl mx-auto text-center">
    {/* Brand Name */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-[#21133c] mb-8 tracking-wide">
  KRIYATIVE MINDS
</h1>
    {/* Tagline */}
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4B2E83] mb-6 text-center">
  Where Creativity Meets Technology
</h2>

    <p className="mt-6 text-xl md:text-2xl text-[#6B3FA0] font-medium">
      Empowering Young Innovators Through Coding & AI
    </p>
   <p className="mt-4 text-lg text-[#4B2E83] font-semibold">
    Former BrightCHAMPS Educator • Project-Based Learning • School Workshops
    </p>
    {/* Company Lines */}

    <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
      Helping children transform ideas into games, websites,
      AI projects and digital creations through engaging,
      hands-on learning experiences.
    </p>

    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
      Building confidence, creativity and future-ready skills
      that prepare students to become creators rather than
      consumers of technology.
    </p>

    {/* Buttons */}

   <div className="flex flex-wrap justify-center gap-6 mt-12 mb-20">

  <a
  href="#school-workshop"
  style={{ backgroundColor: "#23113f", color: "#ffffff" }}
  className="px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
>
  Explore School Workshop Details
</a>

  <a
    href="#programs"
    style={{ backgroundColor: "#23113f", color: "#ffffff" }}
    className="px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
  >
    Explore Programs
  </a>

  <a
    href="#enroll-card"
    style={{ backgroundColor: "#23113f", color: "#ffffff" }}
    className="px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
  >
    Enroll Now
  </a>

</div>

    {/* Stats */}

    <div className="flex flex-wrap justify-center gap-4 mt-12">

      <div className="bg-white rounded-3xl p-6 shadow-lg w-full md:w-55">
        <h3 className="text-4xl font-bold text-[#4B2E83]">
          100+
        </h3>
        <p className="text-gray-600 mt-2">
          Students Trained
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg w-full md:w-55">
        <h3 className="text-4xl font-bold text-[#4B2E83]">
          15+
        </h3>
        <p className="text-gray-600 mt-2">
         Online Workshops
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg w-full md:w-55">
        <h3 className="text-4xl font-bold text-[#4B2E83]">
          100%
        </h3>
        <p className="text-gray-600 mt-2">
          Hands-On Learning
        </p>
      </div>

    </div>

  </div>

</section>
          
  <section className="py-32 px-6 bg-white">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-[#4B2E83]">
      What is KriyativeMinds?
    </h2>

    <p className="mt-8 text-xl text-gray-700 leading-relaxed">
      KriyativeMinds is a Coding & AI learning initiative inspired by
      the Sanskrit word <strong>Kriya</strong>, meaning action.
    </p>

    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
      We believe creativity becomes meaningful when students transform
      ideas into real projects through technology.
    </p>

    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
      At KriyativeMinds, children don't just learn coding.
      They create apps, games, websites, AI projects and gain the
      confidence to present their ideas to the world.
    </p>

    <div className="mt-12">

     <a
  href="#founder-section"
  className="bg-[#23113f] text-white px-8 py-4 rounded-xl font-semibold"
>
  Meet The Founder
</a>

    </div>

  </div>

</section>
<section
  id="why-us"
  className="bg-[#F7F3FF] py-24 px-6"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-[#4B2E83] text-center">
      Why Choose KriyativeMinds?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="bg-white p-8 rounded-3xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#4B2E83]">
          💻 Hands-On Learning
        </h3>
        <p className="mt-4 text-gray-700">
          Students learn by building games, animations and projects instead of only watching tutorials.
        </p>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#4B2E83]">
          🧠 Logical Thinking
        </h3>
        <p className="mt-4 text-gray-700">
          Coding develops problem-solving skills, creativity and computational thinking.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#4B2E83]">
          🏆 Project Showcase
        </h3>
        <p className="mt-4 text-gray-700">
          Every student presents a final project and receives recognition for their effort.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-[#4B2E83]">
      Why Schools & Parents Choose KriyativeMinds
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="bg-[#F7F3FF] p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-[#4B2E83]">
          100+
        </h3>
        <p className="mt-2 text-gray-700">
          Students taught through coding and AI programs
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-[#4B2E83]">
          Former BrightCHAMPS Educator
        </h3>
        <p className="mt-2 text-gray-700">
          Experience teaching students from multiple countries
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl">
        <h3 className="text-3xl font-bold text-[#4B2E83]">
          Project-Based Learning
        </h3>
        <p className="mt-2 text-gray-700">
          Students build real games, animations and AI projects
        </p>
      </div>
    </div>
  </div>
  </section>
  {/* ================= Founding Partner School Program ================= */}

<section
  id="founding-partner"
  className="py-20 bg-[#f6f0ff]"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="inline-block bg-[#23113f] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
        EXCLUSIVE LAUNCH INITIATIVE
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-[#23113f] mt-5">
        Founding Partner School Program
      </h2>

      <p className="mt-5 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
        Become one of the first schools to partner with KriyativeMinds and
        provide students with an engaging creative coding experience through our
        exclusive launch initiative.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Side */}

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <h3 className="text-3xl font-bold text-[#23113f] mb-8">
          Why Become a Founding Partner?
        </h3>

        <div className="space-y-5 text-lg">

          <div>✅ Exclusive Founding Partner Recognition</div>

          <div>✅ Special Launch Pricing</div>

          <div>✅ Hands-on Creative Coding Workshop</div>

          <div>✅ Scratch Programming for Grades 3–10</div>

          <div>✅ Interactive Game & Animated Story Creation</div>

          <div>✅ Participation Certificate for Every Student</div>

          <div>✅ Beginner Friendly – No Prior Coding Experience Required</div>

          <div>✅ Priority Access to Future KriyativeMinds Programs</div>

        </div>

      </div>

      {/* Right Side */}

      <div className="bg-[#23113f] rounded-3xl shadow-xl p-10 text-white">

        <span className="bg-white text-[#23113f] px-4 py-2 rounded-full font-bold text-sm">
          FOUNDING PARTNER OFFER
        </span>

        <h3 className="text-4xl font-bold mt-6">
          Launch Price
        </h3>

        <p className="text-7xl font-extrabold mt-5">
          ₹200
        </p>

        <p className="text-xl mt-2">
          per student
        </p>

        <p className="mt-6 text-[#ddd1f5] leading-relaxed">
          Applicable for schools with a minimum participation of
          <span className="font-bold text-white"> 350 students.</span>
        </p>

        <div className="mt-8 space-y-3">

          <p>✔ 2-Hour Hands-on Workshop</p>

          <p>✔ Project-Based Learning</p>

          <p>✔ Interactive Game Development</p>

          <p>✔ Animated Story Creation</p>

          <p>✔ Participation Certificate Included</p>

        </div>

        <a
          href="#contact"
          className="block mt-10 bg-white text-[#23113f] text-center py-4 rounded-xl font-bold hover:bg-gray-100 transition"
        >
          Request an Appointment
        </a>

      </div>

    </div>

    {/* Bottom Highlight */}

    <div className="mt-12 bg-[#e8dbff] rounded-3xl p-8 text-center">

      <h4 className="text-2xl font-bold text-[#23113f]">
        Limited Launch Opportunity
      </h4>

      <p className="mt-4 text-gray-700 text-lg max-w-4xl mx-auto">
        We are partnering with a limited number of schools as our
        <span className="font-semibold text-[#23113f]">
          {" "}Founding Partner Schools{" "}
        </span>
        during the launch phase of KriyativeMinds. Partner schools will receive
        exclusive introductory pricing and be recognized as our early education
        partners.
      </p>

    </div>

  </div>
</section>
<section id="school-workshop" className="bg-[#d7b8ff] py-16">
  <div className="max-w-7xl mx-auto px-8">
    <div className="bg-[#23113f] rounded-3xl p-10 shadow-xl">
  <div className="inline-block bg-white text-[#23113f] px-4 py-1 rounded-full text-sm font-bold">
    SCHOOL PARTNERSHIP INITIATIVE
  </div>

 <h3 className="text-3xl md:text-4xl font-bold mt-4 text-white">
    2-Day Coding Workshop for Schools
  </h3>

  <p className="mt-6 text-lg text-[#d3c4ee] max-w-3xl">
    A hands-on coding experience designed to introduce students to
    technology through creativity, problem-solving, and project-based learning.
    Students build their own games and animated stories while gaining
    confidence in logical thinking and digital skills.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mt-8">

    <div className="bg-white/10 rounded-2xl p-5">
      <h4 className="font-semibold text-lg mb-3 text-white">
        What Students Learn
      </h4>

      <ul className="space-y-2 text-[#e7dcff]">
        <li>✅ Create an Interactive Game</li>
        <li>✅ Build an Animated Story</li>
        <li>✅ Introduction to Coding Concepts</li>
        <li>✅ Creativity & Logical Thinking Activities</li>
        <li>✅ Participation Certificate</li>
      </ul>
    </div>

    <div className="bg-white/10 rounded-2xl p-5">
      <h4 className="font-semibold text-lg mb-3 text-white">
        Workshop Highlights
      </h4>

      <ul className="space-y-2 text-[#e7dcff]">
        <li>🎯 Beginner-Friendly</li>
        <li>👩‍🏫 Guided Learning Sessions</li>
        <li>💻 Project-Based Activities</li>
        <li>🏫 Conducted in Collaboration with Schools</li>
        <li>🚀 Pathway to Advanced Learning Programs</li>
      </ul>
    </div>

  </div>
<div className="mt-8 border-t border-white/20 pt-6">
  <p className="text-sm uppercase tracking-wider text-purple-200">
    Workshop Fee
  </p>

  <div className="mt-2">
    <span className="text-5xl font-bold text-white">₹500</span>
    <span className="ml-2 text-lg text-purple-200">
      per student
    </span>
  </div>

  <p className="mt-3 text-purple-100">
    Includes hands-on learning, workshop activities, and a participation certificate for every student.
  </p>
</div>
  <div className="mt-8 border-t border-white/20 pt-6">
    <p className="text-[#d3c4ee]">
      Interested in conducting this workshop at your school?
      Contact us to discuss partnership opportunities and scheduling.
    </p>
    <p className="text-sm text-purple-200 mt-4">
  Ideal for Grades 3–10 • Hands-on activities • Certificate included
</p>
  </div>
</div>
</div>
</section>
<section
  id="programs"
  className="bg-white py-24 px-6"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-[#4B2E83]">
      Beyond the Workshop
    </h2>

    <p className="text-center text-gray-600 mt-4">
      Choose a learning journey that suits your child.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      {/* 10 Day Camp */}

      <div className="bg-[#F7F3FF] rounded-3xl p-8 shadow-lg">
        <h3 className="text-3xl font-bold text-[#4B2E83]">
          10-Day Coding Bootcamp
        </h3>

        <p className="text-5xl font-bold mt-6 text-[#6B3FA0]">
          ₹3,499
        </p>

        <ul className="mt-8 space-y-3 text-gray-700">
          <li>✅ Scratch Programming</li>
          <li>✅ Interactive Games</li>
          <li>✅ Animations</li>
          <li>✅ Logic Building</li>
          <li>✅ Mini Projects</li>
          <li>✅ Project Presentation</li>
          <li>✅ Participation Certificate</li>
          <li>✅ Appreciation Certificate</li>
        </ul>

        
      </div>

      {/* 21 Day Camp */}

      <div className="bg-[#4B2E83] rounded-3xl p-8 shadow-xl text-white">
        <div className="inline-block bg-white text-[#4B2E83] px-4 py-1 rounded-full text-sm font-semibold">
          MOST POPULAR
        </div>

        <h3 className="text-3xl font-bold mt-4">
          21-Day Coding & AI Master Camp
        </h3>

        <p className="text-5xl font-bold mt-6">
          ₹5,499
        </p>

        <ul className="mt-8 space-y-3">
          <li>✅ Everything in Bootcamp</li>
          <li>✅ EduBlocks</li>
          <li>✅ AI Fundamentals</li>
          <li>✅ Advanced Logic Building</li>
          <li>✅ Computational Thinking</li>
          <li>✅ Project Development</li>
          <li>✅ Project Showcase Event</li>
          <li>✅ Personalized Feedback</li>
        </ul>

        
      </div>

    </div>
  </div>
  <section
  id="enroll-card"
  className="bg-white py-35 px-6"
>
  <div className="max-w-4xl mx-auto text-center bg-[#F7F3FF] p-8 rounded-3xl">

    <h2 className="text-4xl font-bold text-[#4B2E83]">
      Already Attended Our School Workshop
    </h2>

    <p className="mt-4 text-black">
      Secure your child's seat for the upcoming Coding & AI Camp.
    </p>

    <a
      href="#enrollment-form"
      className="inline-block mt-8 bg-[#4B2E83] text-white px-8 py-4 rounded-xl"
    >
      Complete Enrollment
    </a>

  </div>
</section>
  </section>
  <section
  id="enrollment-form"
  className="bg-white py-10 px-6"
>
  <div className="max-w-4xl mx-auto">

    <div className="text-center">
      <h2 className="text-5xl font-bold text-[#4B2E83]">
        Enroll for the Camp
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Already attended our school demo?
        Fill in the details below and we'll contact you regarding payment and enrollment confirmation.
      </p>
    </div>
<form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget as HTMLFormElement
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "Enrollment Request",
          parentName: formData.get("parentName"),
          studentName: formData.get("studentName"),
          grade: formData.get("grade"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          school: formData.get("school"),
          camp: formData.get("camp"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setEnrollMessage(
          "🎉 Enrollment request submitted successfully!"
        );

        const form = e.target as HTMLFormElement;
form.reset();
      } else {
        setEnrollMessage(
          "❌ Something went wrong."
        );
      }
    } catch (error) {
      console.error(error);

      setEnrollMessage(
        "❌ Server error. Please try again."
      );
    }
  }}
 className="mt-12 bg-[#F7F3FF] p-6 md:p-10 rounded-3xl shadow-xl">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      name="studentName"
      type="text"
      placeholder="Student Name"
      required
      className="border p-4 rounded-xl text-black"
    />

    <input
      name="parentName"
      type="text"
      placeholder="Parent Name"
      required
      className="border p-4 rounded-xl text-black"
    />

    <input
      name="grade"
      type="text"
      placeholder="Grade"
      required
      className="border p-4 rounded-xl text-black"
    />

    <input
      name="phone"
      type="tel"
      placeholder="Phone Number"
      required
      pattern="[0-9]{10}"
      maxLength={10}
      inputMode="numeric"
      className="border p-4 rounded-xl text-black"
    />

    <input
      name="email"
      type="email"
      placeholder="Email Address"
      required
      className="border p-4 rounded-xl text-black"
    />

    <input
      name="school"
      type="text"
      placeholder="School Name"
      className="border p-4 rounded-xl text-black"
    />

    <select
      name="camp"
      required
      className="border p-4 rounded-xl md:col-span-2 text-black"
    >
      <option value="">
        Select Camp
      </option>

      <option>
        2-Day Workshop(special initiative)
      </option>

      <option>
        10-Day Coding Bootcamp
      </option>

      <option>
        21-Day Coding & AI Master Camp
      </option>
    </select>

  </div>
<button
  type="submit"
  style={{
    backgroundColor: "#23113f",
    color: "#ffffff",
  }}
  className="mt-8 w-full py-4 rounded-xl text-lg font-bold shadow-lg"
>
  Submit Enrollment Request
</button>
 
  {enrollMessage && (
    <div className="mt-6 bg-white border border-[#23113f] rounded-xl p-4">
      <p className="text-center text-black font-semibold">
        {enrollMessage}
      </p>
    </div>
  )}
</form>
   
  </div>
</section>
  <section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83]">
      Your Learning Journey
    </h2>

  
      <p className="mt-4 text-lg text-gray-600">
  From your first coding experience to presenting your final project.
</p>

    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-16">

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🎁</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          School Workshops
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">💻</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Join Camp
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🧠</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Learn Concepts
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🎮</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Build Projects
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🎤</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Present Project
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🏆</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Get Certified
        </h3>
      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83]">
        Why Parents Trust Kriyative Minds
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Real teaching experience combined with project-based learning.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div className="bg-[#F7F3FF] p-8 rounded-3xl shadow-md text-center">
        <div className="text-5xl">🎓</div>
        <h3 className="mt-4 text-xl font-bold text-[#4B2E83]">
          Former BrightCHAMPS Educator
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl shadow-md text-center">
        <div className="text-5xl">🌎</div>
        <h3 className="mt-4 text-xl font-bold text-[#4B2E83]">
          Students From India, US & UK
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl shadow-md text-center">
        <div className="text-5xl">💻</div>
        <h3 className="mt-4 text-xl font-bold text-[#4B2E83]">
          Project-Based Learning
        </h3>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl shadow-md text-center">
        <div className="text-5xl">🚀</div>
        <h3 className="mt-4 text-xl font-bold text-[#4B2E83]">
          Coding & AI Focused Programs
        </h3>
      </div>

    </div>

  </div>

</section>
<section className="bg-[#F7F3FF] py-24 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83]">
        What Students Will Build
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Learning becomes exciting when students create real projects.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div className="bg-white p-8 rounded-3xl shadow-md text-center">
        <div className="text-6xl">🎮</div>
        <h3 className="mt-4 text-2xl font-bold text-[#4B2E83]">
          Games
        </h3>
        <p className="mt-3 text-gray-600">
          Design and build interactive games using coding concepts.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md text-center">
        <div className="text-6xl">🌐</div>
        <h3 className="mt-4 text-2xl font-bold text-[#4B2E83]">
          Websites
        </h3>
        <p className="mt-3 text-gray-600">
          Create beginner-friendly websites and learn web development basics.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md text-center">
        <div className="text-6xl">🤖</div>
        <h3 className="mt-4 text-2xl font-bold text-[#4B2E83]">
          AI Projects
        </h3>
        <p className="mt-3 text-gray-600">
          Explore Artificial Intelligence through fun and engaging activities.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md text-center">
        <div className="text-6xl">🎨</div>
        <h3 className="mt-4 text-2xl font-bold text-[#4B2E83]">
          Animations
        </h3>
        <p className="mt-3 text-gray-600">
          Bring stories and ideas to life through creative animations.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="bg-white py-24 px-6">

  <div className="max-w-5xl mx-auto">

    <div className="text-center">

      <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E83]">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        Everything parents usually ask before enrolling.
      </p>

    </div>

    <div className="mt-16 space-y-6">

      <div className="bg-[#F7F3FF] p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-xl text-[#4B2E83]">
          Does my child need prior coding experience?
        </h3>
        <p className="mt-3 text-gray-700">
          Not at all. Our programs are beginner-friendly and designed for students with no prior coding knowledge.
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-xl text-[#4B2E83]">
          What age group is suitable?
        </h3>
        <p className="mt-3 text-gray-700">
          Our camps are designed for school students who are curious about technology, creativity and problem-solving.
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-xl text-[#4B2E83]">
          What device is required?
        </h3>
        <p className="mt-3 text-gray-700">
          A laptop or desktop computer with internet access is recommended for the best learning experience.
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-xl text-[#4B2E83]">
          Will students receive certificates?
        </h3>
        <p className="mt-3 text-gray-700">
          Yes. Students receive a Certificate of Participation and may also receive special recognition certificates.
        </p>
      </div>

      <div className="bg-[#F7F3FF] p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-xl text-[#4B2E83]">
          Are classes theory-based or practical?
        </h3>
        <p className="mt-3 text-gray-700">
          Our approach is highly practical. Students learn by creating games, animations, websites and AI projects.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="bg-[#F7F3FF] py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-[#4B2E83]">
      Certificates & Recognition
    </h2>

    <p className="mt-4 text-gray-600">
      Every student's effort deserves recognition.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <div className="text-6xl">🎓</div>

        <h3 className="text-2xl font-bold mt-6 text-[#4B2E83]">
          Certificate of Participation
        </h3>

        <p className="mt-4 text-gray-600">
          Awarded to every student who successfully completes the camp.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-10 shadow-lg">
        <div className="text-6xl">🏆</div>

        <h3 className="text-2xl font-bold mt-6 text-[#4B2E83]">
          Certificate of Appreciation
        </h3>

        <p className="mt-4 text-gray-600">
          Awarded to students demonstrating creativity, innovation and outstanding participation.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24 px-6">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-[#4B2E83]">
      Sample Certificates
    </h2>

    <p className="mt-4 text-gray-600 text-lg">
      Every student receives a beautifully designed certificate
      to celebrate their creativity, effort and achievements.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      {/* Participation Certificate */}

      <div className="bg-[#F7F3FF] rounded-3xl p-6 shadow-xl">

        <img
          src="/participation-certificate.png"
          alt="Certificate of Participation"
          className="rounded-2xl w-full shadow-lg"
        />

        <h3 className="mt-6 text-2xl font-bold text-[#4B2E83]">
          Certificate of Participation
        </h3>

        <p className="mt-3 text-gray-600">
          Awarded to every student who successfully completes
          the Coding & AI Camp.
        </p>

      </div>

      {/* Appreciation Certificate */}

      <div className="bg-[#F7F3FF] rounded-3xl p-6 shadow-xl">

        <img
          src="/appreciation-certificate.png"
          alt="Certificate of Appreciation"
          className="rounded-2xl w-full shadow-lg"
        />

        <h3 className="mt-6 text-2xl font-bold text-[#4B2E83]">
          Certificate of Appreciation
        </h3>

        <p className="mt-3 text-gray-600">
          Presented to students who demonstrate outstanding
          creativity, innovation and participation.
        </p>

      </div>

    </div>

  </div>

</section>
<section className="bg-[#F7F3FF] py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-[#4B2E83]">
      School Coding Workshops
    </h2>

    <p className="mt-6 text-xl text-gray-700">
      Interactive coding workshops conducted directly at schools.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold text-[#4B2E83]">
          Grades 3-5
        </h3>
        <p className="mt-4 text-gray-700">
          Scratch Games & Animation Workshop
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold text-[#4B2E83]">
          Grades 6-8
        </h3>
        <p className="mt-4 text-gray-700">
          Game Design & Logic Building
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold text-[#4B2E83]">
          Grades 9-10
        </h3>
        <p className="mt-4 text-gray-700">
          AI, Websites & Future Tech
        </p>
      </div>

    </div>

  </div>
</section>
<section
  id="founder-section"
  className="bg-white py-24 px-6"
>

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Founder Image */}

      <div>
        <img
          src="/founder.png"
          alt="Founder"
          className="w-full rounded-3xl shadow-2xl object-cover"
        />
      </div>

      {/* Founder Content */}

      <div>

        <p className="text-[#6B3FA0] font-semibold uppercase tracking-wider">
          Meet The Founder
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-[#4B2E83] mt-3">
          Punya Channegowda
        </h2>

        <p className="mt-4 text-xl text-gray-700">
          Founder & Coding Educator @ KriyativeMinds
        </p>

        <div className="w-24 h-1 bg-[#6B3FA0] mt-6 rounded-full"></div>
<p className="mt-8 text-lg text-gray-700 leading-relaxed">
I am a Coding & AI Educator and Founder of KriyativeMinds. Prior to starting KriyativeMinds, I worked with BrightCHAMPS teaching Coding and Artificial Intelligence to students across the US, UK and other regions through one-on-one classes and workshops.
</p>

<p className="mt-6 text-lg text-gray-700 leading-relaxed">
My mission is to help students move beyond passive technology consumption and become creators by building games, websites, animations and AI-powered projects through hands-on learning.
</p>   

        <div className="mt-8 bg-[#F7F3FF] p-6 rounded-2xl">
          <p className="font-semibold text-[#4B2E83]">
            Former Educator @ BrightCHAMPS
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
<section
  id="school-workshops"
  className="bg-white py-24 px-6"
>
  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-[#4B2E83]">
      School Workshop Programs
    </h2>

    <p className="mt-6 text-center text-lg text-gray-700">
      Practical Coding & AI workshops designed for schools.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="bg-[#F7F3FF] p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#4B2E83]">
          Coding Workshop
        </h3>

        <ul className="mt-6 space-y-3">
          <li>✅ Scratch Programming</li>
          <li>✅ Game Development</li>
          <li>✅ Animations</li>
          <li>✅ Computational Thinking</li>
          <li>✅ Project Showcase</li>
        </ul>
      </div>

      <div className="bg-[#F7F3FF] p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-[#4B2E83]">
          AI & Innovation Workshop
        </h3>

        <ul className="mt-6 space-y-3">
          <li>✅ Introduction to AI</li>
          <li>✅ Prompt Engineering</li>
          <li>✅ AI Tools for Students</li>
          <li>✅ Creative AI Projects</li>
          <li>✅ Ethical AI Awareness</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#23113f] py-24 px-6">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-white">
      Ready to Begin Your Child's Coding Journey?
    </h2>

    <p className="mt-6 text-xl text-[#d3c4ee]">
      Your child has already experienced the excitement of coding through our school demo.
      Now it's time to take the next step and build real projects, creativity and future-ready skills.
    </p>

    <p className="mt-6 text-lg text-[#d3c4ee]">
      Limited seats available for the upcoming Coding & AI Camp.
    </p>

    <a
      href="#enrollment-form"
      className="inline-block mt-10 bg-white text-[#23113f] px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all"
    >
      Enroll Now
    </a>

  </div>

</section>
<section className="bg-[#23113f] text-white py-16 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <h2 className="text-4xl font-bold">
        Kriyative Minds
      </h2>

      <p className="mt-4 text-lg text-gray-300">
        Where Creativity Meets Technology
      </p>

      <p className="mt-6 max-w-2xl mx-auto text-gray-400">
        Empowering young innovators through Coding, AI,
        creativity and project-based learning experiences.
      </p>

    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-8 text-lg">

      <a href="/" className="hover:text-white text-gray-300">
        Home
      </a>

      <a href="#programs" className="hover:text-white text-gray-300">
        Programs
      </a>

     <a href="#founder-section" className="hover:text-white text-gray-300">
  Founder
</a>

 <a href="#school-workshops"className="hover:text-white text-gray-300">
    School Workshops
  </a>

  <a href="#programs"className="hover:text-white text-gray-300">
    Explore Programs
  </a>

  <a href="#enroll-card"className="hover:text-white text-gray-300">
    Enroll Now
  </a>

    </div>

    <div className="mt-12 border-t border-gray-600 pt-8 text-center text-gray-400">

      <p>
        © 2026 Kriyative Minds. All Rights Reserved.
      </p>

      <p className="mt-2">
        Coding • AI • Creativity
      </p>
    </div>
  </div>
</section>
<a
  href="https://wa.me/917019427213"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300"
>
  💬 WhatsApp
</a>
    </main>
  );
}