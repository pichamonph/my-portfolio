"use client";

import { useState, useEffect, useCallback } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
];

export default function SideNav() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ─── Scroll spy (includes contact section below divider) ─── */
  const handleScroll = useCallback(() => {
    const allSections = [...navItems.map((n) => n.id), "contact"];

    // If scrolled to bottom, activate "contact"
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      setActive("contact");
      return;
    }

    const offsets = allSections.map((id) => {
      const el = document.getElementById(id);
      return { id, top: el ? el.getBoundingClientRect().top : Infinity };
    });

    let current = "home";
    for (const { id, top } of offsets) {
      if (top <= 200) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ─── Smooth scroll ─── */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* ─── Mobile toggle button ─── */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed bottom-6 left-6 z-50 md:hidden w-11 h-11 rounded-full bg-white border border-[#E5EAF5] flex items-center justify-center text-[#1C315E]"
        style={{ boxShadow: "0 4px 16px rgba(28,49,94,0.12)" }}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* ─── Mobile overlay ─── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ─── Floating pill navigation ─── */}
      <nav
        className={`
          fixed z-40 flex flex-col items-center gap-1.5 p-1.5
          bg-white/90 backdrop-blur-md border border-[#E5EAF5] rounded-2xl
          transition-all duration-300 ease-out
          left-6 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2
          ${mobileOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100"
          }
        `}
        style={{ boxShadow: "0 8px 24px rgba(28,49,94,0.08)" }}
      >
        {navItems.map(({ id, label, icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              className={`
                relative w-10 h-10 rounded-[10px] flex items-center justify-center
                transition-all duration-200 ease-out group
                ${isActive
                  ? "bg-[#1C315E]/10 text-[#1C315E]"
                  : "text-[#94A3B8] hover:bg-[#1C315E]/5 hover:text-[#1C315E]/70"
                }
              `}
            >
              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.75 w-1 h-1 bg-[#1C315E] rounded-full" />
              )}

              {icon}

              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-lg bg-[#1C315E] text-white text-xs font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                {label}
              </span>
            </button>
          );
        })}

        {/* Contact — scrolls to contact section */}
        <button
          onClick={() => scrollTo("contact")}
          aria-label="Contact"
          className={`
            relative w-10 h-10 rounded-[10px] flex items-center justify-center
            transition-all duration-200 ease-out group
            ${active === "contact"
              ? "bg-[#1C315E]/10 text-[#1C315E]"
              : "text-[#94A3B8] hover:bg-[#1C315E]/5 hover:text-[#1C315E]/70"
            }
          `}
        >
          {active === "contact" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.75 w-1 h-1 bg-[#1C315E] rounded-full" />
          )}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-lg bg-[#1C315E] text-white text-xs font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
            Contact
          </span>
        </button>
      </nav>
    </>
  );
}
