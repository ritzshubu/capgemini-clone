"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import ClientStoriesSlider from "./clientStories";

export default function Hero() {
  return (
    <>
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="top-0 left-0 w-full min-h-[60vh] h-[80vh] sm:h-[90vh] lg:h-screen bg-white flex items-center justify-center relative">
        <img
          src="/assets/DigitalBanner.webp"
          alt="bg"
          className="absolute inset-0 w-full h-2/3 lg:h-full object-cover"
        />
        {/* Overlay Content Card */}
        <div
          className="
    absolute
    bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-16
    left-1/2 md:left-[30px]
    -translate-x-1/2 md:translate-x-0
    w-[95%] sm:w-4/5 md:w-2/3 lg:w-1/2
    max-w-xl
    h-auto min-h-[180px] sm:min-h-[220px] md:min-h-[260px]
    bg-gradient-to-br from-[#007bbdE6] to-[#003f61E6]
    rounded-md shadow-2xs
    p-4 sm:p-8 md:p-10
    z-10
    flex flex-col justify-center gap-4
  "
        >
          <h1
            className="
    text-2xl sm:text-3xl md:text-4xl
    text-white
    text-[clamp(1.5rem,4vw,3rem)]
    font-bold mb-2 sm:mb-4
    transition-all duration-300
    group relative inline-block
  "
            style={{ fontFamily: "Ubuntu" }}
          >
            <span
              className="
      relative z-10
      group-hover:text-black
      transition-all duration-300
    "
              style={{
                background:
                  "linear-gradient(to right, #00E6E3 0%, #00E6E3 100%) no-repeat 0px 100% / 0px 100%",
                transition:
                  "background-size 0.4s ease-in-out, color 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundSize = "100% 100%";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundSize = "0px 100%";
              }}
            >
              The strategic edge
            </span>
          </h1>

          <p
            className="text-sm sm:text-md md:text-lg font-medium text-white text-[clamp(1rem,2.5vw,1.5rem)] mb-4 sm:mb-6"
            style={{ fontFamily: "Ubuntu" }}
          >
            How digital continuity drives business outcomes in aerospace and defense
          </p>
        </div>
      </section>

      {/* Technology Convergence */}
      <section className="w-full bg-white font-Ubuntu">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-4 sm:p-6 md:p-10 gap-6 sm:gap-8 md:gap-16 relative group">
          {/* Image Block (Right Side) */}
          <div
            className="
        relative
        w-[300px] h-[300px] md:w-[528px] md:h-[380px]
        overflow-hidden group
        order-1 md:order-2
        border-2 border-black
        hover:border-none
        sm:border-none
      "
          >
            <Image
              src="/assets/TechConv.webp"
              alt="Technology Convergence"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ position: "absolute" }}
              priority
            />
          </div>

          {/* Text Block */}
          <div
            className="
          order-2 md:order-1 relative w-full h-auto z-10
          "
          >
            <div
              className="
            bg-white shadow-xl p-6 sm:p-8 md:p-10
            w-[90%] lg:w-[140%]
            h-auto md:h-[300px]
            relative
            bottom-[-70px] md:bottom-auto
            left-1/2
            -translate-x-1/2 md:translate-x-0
            md:absolute md:-left-0 md:top-1/2 md:-translate-y-1/2
            transition-all duration-300
            sm:aspect-square sm:flex sm:flex-col
          "
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-6"
                style={{ fontFamily: "Ubuntu" }}
              >
                Technology convergence
              </h2>
              <p
                className="text-gray-600 mb-4 sm:mb-6"
                style={{ fontFamily: "Ubuntu" }}
              >
                Exploring the converging nature of today's tech explosion
              </p>

              <div className="mt-auto pt-20 flex justify-end">
                <Link
                  href="#"
                  className="
              group relative inline-flex items-center
              px-4 sm:px-6 py-2
              rounded-full border border-gray-900
              text-gray-900 font-medium
              overflow-hidden transition-all duration-300 ease-in-out
              transform group-hover:scale-105
              group-hover:border-blue-200
              "
                >
                  <span className="absolute inset-0 w-0 group-hover:w-full bg-teal-300 rounded-none sm:rounded-full transition-all duration-500 ease-out z-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    <span className="hidden sm:inline">Read more</span>{" "}
                    <span className="ml-2">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section
        className="w-full px-4 py-8 sm:py-12 bg-white"
        style={{ fontFamily: "Ubuntu" }}
      >
        <h1
          className="text-2xl sm:text-3xl lg:text-[32px] text-gray-900 mb-6 sm:mb-8"
          style={{
            fontFamily: "Ubuntu",
            fontSize: "24px",
            marginLeft: "5.5rem",
          }}
        >
          Latest insights
        </h1>

        <div className="max-w-screen-xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] items-center gap-6 md:gap-0">
          {/* Image Block */}
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden group order-2 md:order-1">
            <Image
              src="/assets/insight1.webp"
              alt="Sailing Wealth"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              priority
            />

            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4 sm:p-5 z-20 md:hidden shadow-2xl"
              style={{ bottom: "-2.5rem" }}
            >
              <p
                className="text-xs font-extralight mb-2 sm:mb-3"
                style={{ fontFamily: "Ubuntu" }}
              >
                - Capgemini Research Institute
              </p>
              <h3
                className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3 highlight-hover"
                style={{
                  fontFamily: "Ubuntu",
                  background:
                    "linear-gradient(to right, #00E6E3 0%, #00E6E3 100%) no-repeat 0px 100% / 0px 100%",
                  transition: "background-size 0.3s ease-in-out",
                  backgroundSize: "0% 100%",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundSize = "100% 100%";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundSize = "0% 100%";
                }}
              >
                Global youth and sustainability
              </h3>
              <Link href="#" className="text-[#0070ad] text-xs sm:text-sm">
                CAPGEMINI RESEARCH INSTITUTE
              </Link>
            </div>
          </div>

          {/* Text Block on Desktop: Shifts left and overlays */}
          <div className="relative z-10 order-1 md:order-2 hidden md:block">
            <div className="bg-white shadow-xl p-4 sm:p-5 w-full md:w-[110%] lg:w-[90%] -mt-6 sm:-mt-8 md:-mt-0 md:-ml-10 lg:-ml-20 xl:-ml-32">
              <p className="text-xs font-extralight mb-2 sm:mb-3 px-3 sm:px-5">
                - Capgemini Research Institute
              </p>
              <h3 className="md:text-xl lg:text-2xl  text-gray-900 mb-2 sm:mb-3 px-3 sm:px-5 highlight-hover">
                Global youth and sustainability
              </h3>
              <Link
                href="#"
                className="text-blue-600 px-3 sm:px-5 text-xs sm:text-sm"
              >
                CAPGEMINI RESEARCH INSTITUTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8 sm:py-12 bg-white font-poppins mb-3">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-18 items-start relative p-4 sm:p-4 md:p-12">
          {/* Left - Blue Card */}
          <div className="bg-[#0071b9] text-white w-full sm:max-w-[400px] p-6 md:p-10 h-full flex flex-col justify-between min-h-[250px] mx-auto sm:ml-0 md:ml-10 lg:ml-20 relative z-10 order-2 md:order-1">
            <p className="text-sm mb-4">— Capgemini Research Institute</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl  leading-snug mb-4 highlight-hover">
              Driving business value with AI agents: A conversation with Dr
              Walter Sun
            </h2>
            <Link href="#" className="text-sm mt-auto ">
              CAPGEMINI RESEARCH INSTITUTE
            </Link>
          </div>

          {/* Right - Image Card */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[440px] overflow-hidden group flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/assets/insight2.webp"
                alt="Insight visual"
                fill
                className="object-cover hover:scale-120 transition-transform duration-500"
                style={{ objectPosition: "center" }}
                priority
              />
            </div>
            {/* Overlay Text Box (Responsive) */}
            <div
              className="absolute z-30 bg-white p-6 sm:p-8 shadow-2xl flex flex-col max-w-[95%] w-[95%] left-1/2 translate-x-[-50%] md:translate-x-0 md:left-[23%] md:top-1/2 md:translate-y-[-50%]"
              style={{
                bottom: "-18%",
              }}
            >
              <p className="text-xs sm:text-sm text-black mb-2">— Report</p>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black highlight-hover">
                TechnoVision 2025
              </h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-left max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 mt-6 sm:mt-8">
          <button
            className="
        group relative inline-flex items-center 
        px-4 sm:px-6 py-2 sm:py-3 
        border border-black rounded-full 
        text-sm font-medium text-black
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        transform group-hover:scale-105 
        group-hover:border-blue-200
      "
          >
            {/* Animated background layer */}
            <span
              className="
          absolute inset-0 
          w-0 group-hover:w-full 
          bg-teal-300   
          rounded-full 
          transition-all duration-500 ease-out 
          z-0
        "
            />
            {/* Button text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              More insights →
            </span>
          </button>
        </div>
      </section>

      <section className="w-full py-8 sm:py-12 bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900 text-center mb-6 sm:mb-8 px-4 max-w-screen-xl mx-auto">
          Recent Client Stories
        </h1>
        {/* Calling Client Stories Slider */}
        <ClientStoriesSlider />
      </section>

      {/* Latest news */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 bg-white">
        <div className="max-w-screen-xl mx-auto md:px-18 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  text-gray-900 mb-6 sm:mb-8">
            Latest news
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-[30%_60%] sm:gap-8 md:gap-10"
            style={{ columnGap: "2.5cm" }}
          >
            {/* Left Featured News */}
            <div className="border-b border-[#0d414793] md:border-none md:col-span-1 pb-6 md:pb-0 ">
              <p className="text-sm text-black mb-2">— Sponsorship news</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 highlight-hover">
                Capgemini becomes an Official Partner of the Tour de France and
                Tour de France Femmes avec Zwift until 2029 to power cycling
                through tech and innovation
              </h2>
              <p className="text-sm text-black">Jun 5, 2025</p>
            </div>

            {/* Right News List */}
            <div className="space-y-4 sm:space-y-6 border-b border-[#0d414793] md:border-none pb-6 md:pb-0 mt-6 md:mt-0">
              {/* Item 1 */}
              <div className="border-b pb-4">
                <p className="text-sm text-black mb-1">— Reports</p>
                <h4 className="text-2xl sm:text-md text-black font-medium mb-10 highlight-hover">
                  North America high-net-worth individual population surges,
                  while Europe and Middle East shrink
                </h4>
                <p className="text-sm text-black">Jun 4, 2025</p>
              </div>

              {/* Item 2 */}
              <div className="border-b pb-4">
                <p className="text-sm text-black mb-1">— Partners</p>
                <h4 className="text-2xl sm:text-md text-black font-medium mb-10 highlight-hover">
                  Capgemini, Mistral AI and SAP combine forces to offer secure,
                  scalable gen AI-powered solutions for regulated industries
                </h4>
                <p className="text-sm text-black">May 26, 2025</p>
              </div>

              {/* Item 3 */}
              <div className="border-b pb-4">
                <p className="text-sm text-black mb-1">— Reports</p>
                <h4 className="text-2xl sm:text-md text-black font-medium mb-10 highlight-hover">
                  Nine in ten public sector organizations to focus on agentic AI
                  in the next 2-3 years, but data readiness is still a challenge
                </h4>
                <p className="text-sm text-black">May 20, 2025</p>
              </div>
            </div>
          </div>

          {/* See All News Button */}
          <div className="mt-6 sm:mt-8 md:mt-10 ">
            <button
              className="
                group relative inline-flex items-center 
                px-4 sm:px-6 py-2 
                rounded-full border border-black 
                text-black text-sm font-medium 
                overflow-hidden transition-all duration-300 hover:border-blue-400
              "
            >
              <span
                className="
                  absolute inset-0 
                  bg-teal-300 
                  w-0 group-hover:w-full 
                  transition-all duration-500 ease-out 
                  rounded-full 
                  z-0
                "
              />

              {/* Button content above animation */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                See all news <span className="ml-2 sm:ml-3">→</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Inside Stories Section */}
      <section className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-white ">
        <div className="max-w-screen-xl mx-auto md:px-15 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-6 sm:mb-8">
            Inside stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Main Story */}
            <div className="md:col-span-2">
              <div className="w-full h-48 sm:h-64 md:h-[360px] overflow-hidden mb-4 group">
                <img
                  src="/assets/1.webp"
                  alt="Tech lessons"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-120"
                />
              </div>
              <p className="text-sm text-black mb-1">
                — Future-shaping projects
              </p>
              <h3 className="text-2xl sm:text-xl md:text-2xl font-medium text-black mb-3 highlight-hover ">
                Tech lessons for positive futures
              </h3>
              <p className="text-mdtext-gray-600">
                The lasting value of a team tech challenge
              </p>
            </div>

            {/* Right Side Stories */}
            <div className="flex flex-col gap-6">
              {/* Story 1 */}
              <div>
                <div className="w-full h-[120px] sm:h-[160px] overflow-hidden mb-3 group">
                  <img
                    src="/assets/2.webp"
                    alt="New career"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-120"
                  />
                </div>
                <p className="text-sm text-black mb-1">— Life at Capgemini</p>
                <h4 className="text-sm sm:text-md md:text-2xl font-medium text-black mb-1 highlight-hover">
                  New career, new you
                </h4>
                <p className="text-md text-gray-600">
                  Changing careers to change your life
                </p>
              </div>

              {/* Story 2 */}
              <div>
                <div className="w-full h-[120px] sm:h-[160px] overflow-hidden mb-3 group">
                  <img
                    src="/assets/3.webp"
                    alt="Sustainability"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-120"
                  />
                </div>
                <p className="text-sm text-black mb-1">— Environment</p>
                <h4 className="text-sm sm:text-md md:text-xl font-medium text-black mb-1 highlight-hover">
                  A forum for sustainability
                </h4>
                <p className="text-md text-gray-600 font-light">
                  Getting the sustainability message heard by world leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="relative w-full min-h-[400px] flex flex-col-reverse md:flex-row">
        {/* Left: Text Block */}
        <div className="relative z-10 w-full md:w-1/2 bg-[#0066A1] text-white px-6 sm:px-10 md:px-16 pt-10 pb-16 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  leading-snug">
              Discover our 2024 Integrated Annual Report
            </h2>
            <p className="text-base sm:text-lg font-light">
              Partner for a digital and sustainable world
            </p>
          </div>

          {/* Discover Button */}
          <button
            className="
        mt-6 group relative inline-flex items-center gap-2 max-w-[12rem]
        border border-white rounded-full text-white 
        text-sm transition-all duration-300 ease-in-out 
        overflow-hidden transform group-hover:scale-105 
        group-hover:border-white
      "
          >
            <span
              className="
          absolute inset-0 
          w-0 group-hover:w-full 
          bg-teal-300 
          rounded-full 
          transition-all duration-500 ease-out 
          z-0
        "
            />
            <div className="px-4 py-1 flex items-center relative z-10 transition-colors duration-300 group-hover:text-[#0066A1] text-xs">
              Discover more <span className="text-sm ml-1">→</span>
            </div>
          </button>
        </div>

        {/* Right: Image + Slider Container */}
        <div className="relative w-full md:w-1/2 h-60 sm:h-72 md:h-auto">
          {/* Image */}
          <img
            src="/assets/sailor.webp"
            alt="Annual Report Visual"
            className="w-full h-full object-cover"
          />

          {/* Slider - visible only on mobile, bottom of image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg z-20 md:hidden">
            <button className="text-gray-400 hover:text-black transition text-2xl">
              &lt;
            </button>
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  idx === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></span>
            ))}
            <button className="text-gray-400 hover:text-black transition text-2xl">
              &gt;
            </button>
          </div>
        </div>

        {/* Slider for md+ (normal position) */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg z-10">
          <button className="text-gray-400 hover:text-black transition text-2xl">
            &lt;
          </button>
          {[0, 1, 2, 3, 4].map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition ${
                idx === 0 ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
          <button className="text-gray-400 hover:text-black transition text-2xl">
            &gt;
          </button>
        </div>
      </section>
    </>
  );
}
