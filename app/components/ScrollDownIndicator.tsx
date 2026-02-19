"use client";

export default function ScrollDownIndicator() {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToSkills}
      aria-label="Scroll to skills"
      className="flex flex-col items-center gap-1.5 text-[#1C315E]/30 hover:text-[#1C315E]/60 transition-colors duration-300"
    >
      <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }} className="font-medium uppercase">Scroll</span>
      <svg
        className="w-5 h-5 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
}
