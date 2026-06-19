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
    href="#demo-form"
    style={{ backgroundColor: "#23113f", color: "#ffffff" }}
    className="px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
  >
    Book Free Demo
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
<div className="bg-[#23113f] text-white rounded-3xl p-8 shadow-xl mb-10">

  <div className="inline-block bg-white text-[#23113f] px-4 py-1 rounded-full text-sm font-bold">
    SPECIAL INITIATIVE
  </div>

  <h3 className="text-3xl font-bold mt-4">
    2-Day School Coding Workshop
  </h3>

  <p className="text-5xl font-bold mt-6">
    ₹500
  </p>

  <p className="mt-4 text-[#d3c4ee]">
    A beginner-friendly coding experience designed for students who want to explore creativity through technology.
  </p>

  <ul className="mt-8 space-y-3">
    <li>✅ Create an Interactive Game</li>
    <li>✅ Build an Animated Story</li>
    <li>✅ Introduction to Coding Concepts</li>
    <li>✅ Creativity & Logical Thinking Activities</li>
    <li>✅ Participation Certificate</li>
  </ul>

  <a
    href="#enrollment-form"
    className="block mt-8 bg-white text-[#23113f] py-4 rounded-xl text-center font-bold"
  >
    Enroll Now
  </a>

</div>
<section
  id="programs"
  className="bg-white py-24 px-6"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-[#4B2E83]">
      Our Coding Camps
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

        <a
  href="#demo-form"
  className="block mt-8 w-full bg-[#4B2E83] text-white py-4 rounded-xl text-center"
>
  Book Free Demo
</a>
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

        <a
  href="#demo-form"
  className="block mt-8 w-full bg-white text-[#4B2E83] py-4 rounded-xl text-center font-semibold"
>
  Book Free Demo
</a>
      </div>

    </div>
  </div>
  <section
  id="enroll-card"
  className="bg-white py-35 px-6"
>
  <div className="max-w-4xl mx-auto text-center bg-[#F7F3FF] p-8 rounded-3xl">

    <h2 className="text-4xl font-bold text-[#4B2E83]">
      Already Attended Our School Demo?
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
      From your first demo to presenting your final project.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-16">

      <div className="bg-[#F7F3FF] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">
        <div className="text-5xl">🎁</div>
        <h3 className="mt-4 font-semibold text-[#4B2E83]">
          Free Demo
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
  Hi, I'm Punya Channegowda, the founder of Kriyative Minds.
  Over the years, I've had the opportunity to work with students from
  different backgrounds, age groups and learning styles, and one thing
  I've consistently noticed is that children learn best when they're
  encouraged to explore, create and build things on their own. That's
  exactly why I started Kriyative Minds — a place where children don't
  just learn technology, but use it to bring their ideas to life with
  confidence and creativity.
</p>
  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
  Before starting Kriyative Minds, I worked as an educator with
  BrightCHAMPS, where I taught Coding and AI to students across
  different parts of the world, primarily in the US and UK. Through
  one-on-one classes, workshops and project-based learning sessions,
  I had the privilege of interacting with hundreds of young learners
  and understanding what truly keeps them engaged. Those experiences
  helped me design learning programs that are practical, interactive
  and enjoyable. My goal is simple — to help every child build
  confidence, develop problem-solving skills and discover that they
  are capable of creating amazing things with technology.
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
<section className="bg-[#F7F3FF] py-24 px-6">

  <div className="max-w-4xl mx-auto">

    <div className="text-center">

      <section
  id="demo-form"
  className="bg-[#F7F3FF] py-24 px-6"
></section>

      <p className="mt-4 text-gray-600">
        Fill out the form and we'll contact you shortly.
      </p>

    </div>

   <form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget as HTMLFormElement
    );

    const phone = formData.get("phone")?.toString() || "";

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName: formData.get("parentName"),
          studentName: formData.get("studentName"),
          grade: formData.get("grade"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          mode: formData.get("mode"),
          camp: formData.get("camp"),
          school: formData.get("school"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("🎉 Thank you! Demo request submitted successfully!");
             } else {
        setMessage("❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server error. Please try again.");
    }
  }}
  className="mt-12 bg-white p-6 md:p-10 rounded-3xl shadow-xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      name="studentName"
      type="text"
      placeholder="Student Name"
      required
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <input
      name="parentName"
      type="text"
      placeholder="Parent Name"
      required
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <input
      name="grade"
      type="text"
      placeholder="Grade"
      required
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <input
      name="phone"
      type="tel"
      placeholder="Phone Number"
      required
      pattern="[0-9]{10}"
      maxLength={10}
      inputMode="numeric"
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <input
      name="email"
      type="email"
      placeholder="Email Address"
      required
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <select
      name="mode"
      required
      className="border p-4 rounded-xl text-black"
    >
      <option value="">Choose Mode</option>
      <option>Online</option>
      <option>Offline</option>
    </select>

    <select
      name="camp"
      required
      className="border p-4 rounded-xl md:col-span-2 text-black"
    >
      <option value="">Select Camp</option>
      <option>
        2-Day Workshop(special initiative)
      </option>

      <option>10-Day Coding Bootcamp</option>
      <option>21-Day Coding & AI Master Camp</option>
    </select>

    <input
      name="school"
      type="text"
      placeholder="School Name"
      className="border p-4 rounded-xl text-black placeholder:text-gray-500"
    />

    <textarea
      name="message"
      placeholder="Any specific interests or questions?"
      rows={4}
      className="border p-4 rounded-xl text-black placeholder:text-gray-500 md:col-span-2"
    />

  </div>

  <button
    type="submit"
    className="mt-8 w-full bg-[#4B2E83] text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
  >
    Book Free Demo
  </button>

  {message && (
    <div className="mt-6 bg-[#F7F3FF] border border-[#4B2E83] rounded-xl p-4">
      <p className="text-center text-black font-semibold text-lg">
        {message}
      </p>
    </div>
  )}
</form>
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

      <a href="#demo-form" className="hover:text-white text-gray-300">
        Book Demo
      </a>

      <a href="#enrollment-form" className="hover:text-white text-gray-300">
        Enroll
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