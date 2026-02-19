import Image from "next/image";
import ProjectsSection from "./components/ProjectsSection";
import ScrollReveal from "./components/ScrollReveal";
import ScrollDownIndicator from "./components/ScrollDownIndicator";

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

const skills = {
  "Frontend Development": {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Native", "TypeScript", "Expo"],
  },
  "Backend & Server": {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: ["Node.js", "Express.js", "Spring Boot"],
  },
  "Database & ORM": {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    items: ["MySQL", "Prisma ORM", "MongoDB", "Firebase"],
  },
  "Tools & Collaboration": {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a2.25 2.25 0 01-.83-3.07l2.93-5.08a2.25 2.25 0 013.07-.83l5.1 3.06m-7.17 9a2.25 2.25 0 002.25 2.25h.008a2.25 2.25 0 002.25-2.25m-4.508 0a2.25 2.25 0 01-2.25-2.25v-.008a2.25 2.25 0 012.25-2.25m4.508 4.508a2.25 2.25 0 012.25-2.25h.008a2.25 2.25 0 012.25 2.25v.008a2.25 2.25 0 01-2.25 2.25h-.008a2.25 2.25 0 01-2.25-2.25v-.008z" />
      </svg>
    ),
    items: ["GitHub", "Figma", "VS Code", "Postman"],
  },
};

const focusItems = [
  "Learning backend",
  "Frontend development",
  "Looking for internship and co-op opportunity",
];

const languages = [
  { name: "Thai", level: "Native" },
  {
    name: "English",
    level: "Intermediate",
    detail: "Able to communicate in basic conversations and read technical documentation",
  },
  {
    name: "Chinese",
    level: "Basic",
    detail: "Familiar with basic vocabulary",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      {/* Hero + 3 columns — all visible on first viewport */}
      <section id="home" className="relative flex flex-col px-4 sm:px-6 py-16 md:h-screen md:py-6">
        <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {/* Card background — overflow-hidden only for bg shape */}
            <div className="bg-[#1C315E] rounded-3xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-end">
                {/* Mobile image — top of card */}
                <div className="flex md:hidden justify-center pt-6">
                  <Image
                    src="/images/indy.png"
                    alt="Pichamon Phongsethasant"
                    width={400}
                    height={400}
                    className="w-[180px] h-[180px] object-cover object-top rounded-2xl"
                    priority
                  />
                </div>

                {/* Text content */}
                <div className="flex-1 text-center md:text-left p-6 md:p-10 pb-6 md:max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-tight mb-4">
                    Pichamon
                    <br />
                    Phongsethasant
                  </h1>

                  <div className="w-20 h-1 bg-[#FFFFFF]/40 rounded-full mb-6 mx-auto md:mx-0" />

                  <p className="text-sm md:text-lg text-[#FFFFFF]/70 leading-relaxed mb-8 max-w-lg">
                    Computer Science student with experience in frontend
                    development and growing in full-stack development
                  </p>

                  <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                    <a
                      href="https://github.com/pichamonph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] text-[#1C315E] rounded-xl font-medium hover:bg-[#E6EAF2] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                    <a
                      href="/Pichamon_Phongsethasant_Resume.pdf"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#FFFFFF] rounded-xl font-medium border-2 border-[#FFFFFF]/30 hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <DownloadIcon />
                      Resume
                    </a>
                    <a
                      href="/transcript.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#FFFFFF] rounded-xl font-medium border-2 border-[#FFFFFF]/30 hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <DownloadIcon />
                      Transcript
                    </a>
                  </div>
                </div>

                {/* Spacer to reserve space for the absolute image on desktop */}
                <div className="hidden md:block w-[440px] h-[300px] shrink-0" />
              </div>
            </div>

            {/* Profile photo — outside overflow-hidden, desktop only */}
            <div className="absolute bottom-0 right-6 hidden md:block pointer-events-none">
              <Image
                src="/images/indy.png"
                alt="Pichamon Phongsethasant"
                width={680}
                height={820}
                className="w-[440px] h-auto object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Second Row — Education | Languages | Current Focus */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Education */}
          <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-[#E6EAF2] hover:border-[#1C315E]/20 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1C315E] rounded-lg flex items-center justify-center text-[#FFFFFF]">
                <GraduationIcon />
              </div>
              <h2 className="text-lg font-bold text-[#1C315E]">Education</h2>
            </div>

            <h3 className="text-sm font-semibold text-[#1C315E] mb-0.5">
              B.Sc. Computer Science
            </h3>
            <p className="text-xs text-[#1C315E]/50 mb-3">
              College of Computing, Khon Kaen University
            </p>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-2.5 py-0.5 bg-[#1C315E]/10 text-[#1C315E] rounded-full text-xs font-medium">
                2023 – Present
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#1C315E]/40">GPA</span>
                <span className="text-base font-bold text-[#1C315E]">3.64</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-[#E6EAF2] hover:border-[#1C315E]/20 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: "0.85s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1C315E] rounded-lg flex items-center justify-center text-[#FFFFFF]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-[#1C315E]">Languages</h2>
            </div>

            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-[#1C315E]">{lang.name}</span>
                    {lang.detail && (
                      <p className="text-xs text-[#1C315E]/40 mt-0.5 leading-tight">{lang.detail}</p>
                    )}
                  </div>
                  <span className="flex-shrink-0 px-2 py-0.5 bg-[#1C315E]/10 text-[#1C315E] rounded text-xs font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-[#E6EAF2] hover:border-[#1C315E]/20 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: "0.95s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1C315E] rounded-lg flex items-center justify-center text-[#FFFFFF]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-[#1C315E]">Current Focus</h2>
            </div>

            <div className="space-y-2.5">
              {focusItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 group"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[#1C315E] rounded-md flex items-center justify-center text-[#FFFFFF] text-xs font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <p className="text-sm text-[#1C315E] leading-snug pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className="hidden md:flex justify-center mt-4">
          <ScrollDownIndicator />
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="px-4 sm:px-6 py-10 md:py-14 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal className="w-full">
          <div className="bg-[#1C315E] rounded-3xl shadow-lg p-8 md:p-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
            <p className="mt-2 text-white/50 text-base">Technologies I use to build modern web and mobile applications</p>
            <div className="mt-4 w-14 h-0.75 bg-white/30 rounded-full" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {Object.entries(skills).map(([category, data]) => (
              <div
                key={category}
                className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center text-white">
                    {data.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/10 text-white/80 rounded-lg text-sm font-medium border border-white/10 hover:bg-white hover:text-[#1C315E] hover:border-white transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 py-10 md:py-14 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal className="w-full">
        <div className="bg-[#1C315E] rounded-3xl shadow-lg py-14 md:py-16 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)", animation: "pulse 2s infinite" }} />
              <span className="text-xs text-white/70 font-medium tracking-wide">Open to internship & co-op opportunities</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Let&apos;s get in touch</h2>
            <div className="w-10 h-0.5 bg-white/20 rounded-full mx-auto mb-5" />
            <p className="text-sm text-white/55 leading-relaxed mb-10 max-w-md mx-auto">
              If you&apos;re interested in my work, have a question, or would like to discuss an opportunity, feel free to reach out.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <a
                href="mailto:pichamonph.work@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 font-medium mb-0.5">Email</p>
                  <p className="text-sm text-white font-medium truncate">pichamonph.work@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:0963786984"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium mb-0.5">Phone</p>
                  <p className="text-sm text-white font-medium">096-378-6984</p>
                </div>
              </a>
            </div>

          </div>
        </div>
        </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
