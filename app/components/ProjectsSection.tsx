"use client";

import { useState, useCallback, useEffect, useRef } from "react";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}
import Image from "next/image";

type Project = {
  id: string;
  name: string;
  tagline: string;
  cover?: string;
  coverLogo?: boolean;
  images: string[];
  role: string;
  overview: string[];
  tech: string[];
  features: string[];
  github?: string;
  isMobile?: boolean;
};

const featuredProjects: Project[] = [
  {
    id: "project-1",
    name: "Pawmise",
    tagline: "A cat-matching mobile application that helps cat owners find compatible breeding partners for their cats. Built with React Native (Expo) on the frontend and Express.js with MongoDB on the backend, Pawmise features Tinder-style swiping, location-based matching, real-time chat via Socket.IO, and a daily interest system — all wrapped in a soft pink UI designed for cat lovers.",
    cover: "/images/projects/pawmise/logo.png",
    coverLogo: true,
    images: [
      "/images/projects/pawmise/pawmise-1.png",
      "/images/projects/pawmise/pawmise-2.png",
      "/images/projects/pawmise/pawmise-3.png",
      "/images/projects/pawmise/pawmise-4.png",
      "/images/projects/pawmise/pawmise-5.png",
      "/images/projects/pawmise/pawmise-6.png",
      "/images/projects/pawmise/pawmise-7.png",
      "/images/projects/pawmise/pawmise-8.png",
      "/images/projects/pawmise/pawmise-9.png",
      "/images/projects/pawmise/pawmise-10.png",
      "/images/projects/pawmise/pawmise-11.png",
      "/images/projects/pawmise/pawmise-12.png",
      "/images/projects/pawmise/pawmise-13.png",
      "/images/projects/pawmise/pawmise-14.png",
      "/images/projects/pawmise/pawmise-15.png",
    ],
    role: "Full-stack Developer",
    overview: [
      "A cat-matching mobile application that helps cat owners find compatible breeding partners for their cats. Built with React Native (Expo) on the frontend and Express.js with MongoDB on the backend, Pawmise features Tinder-style swiping, location-based matching, real-time chat via Socket.IO, and a daily interest system — all wrapped in a soft pink UI designed for cat lovers.",
    ],
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Tinder-style swiping through cats of the opposite gender; swipe right to like, up to show special interest, left to pass.",
      "Four matching modes (strict GPS, flexible, province-based, unlimited) automatically chosen based on available location data.",
      "Daily-limited interested action (1 per cat per day) for more thoughtful connections.",
      "Socket.IO-powered messaging with typing indicators, read receipts, and unread badges.",
    ],
    github: "https://github.com/pichamonph/pawmise-cat-matching-app",
    isMobile: true,
  },
  {
    id: "project-2",
    name: "Hana Shabu & Grilled",
    tagline: "A full-stack restaurant management platform built for real-world business operations.",
    images: [
      "/images/projects/hanashabu/main-menu-front.jpg",
      "/images/projects/hanashabu/Login-frontend.jpg",
      "/images/projects/hanashabu/history-reserve-user.jpg",
      "/images/projects/hanashabu/QRCode-order.jpg",
      "/images/projects/hanashabu/order-inQrcode.jpg",
      "/images/projects/hanashabu/order-history.jpg",
      "/images/projects/hanashabu/Today-Reservations.jpg",
      "/images/projects/hanashabu/stock-ingredian.jpg",
      "/images/projects/hanashabu/reserve-list-backend.jpg",
      "/images/projects/hanashabu/reserve-detail-wait.jpg",
      "/images/projects/hanashabu/Main-menu-manage-table.jpg",
      "/images/projects/hanashabu/reserve-chair.jpg",
      "/images/projects/hanashabu/Product-Withdrawal-History.jpg",
      "/images/projects/hanashabu/Payment.png",
      "/images/projects/hanashabu/new-ingredian.jpg",
      "/images/projects/hanashabu/list-order-in-kitchen.jpg",
      "/images/projects/hanashabu/import-ingredian.jpg",
      "/images/projects/hanashabu/import-history.jpg",
    ],
    role: "Frontend Developer",
    overview: [
      "A full-stack Point of Sale (POS) and restaurant management system built for Hana Shabu & Grilled, a Thai hotpot and grilled buffet restaurant. The system covers everything from customer reservations and table management to food ordering, inventory control, billing, and business analytics.",
    ],
    tech: ["Next.js", "Tailwind CSS", "MySQL"],
    features: [
      "End-to-End Restaurant Operations – From online reservations and QR ordering to billing and business analytics",
      "Real-Time Table & Order Management – Track table status and order lifecycle across restaurant zones",
      "Inventory & Stock Control – Monitor ingredient levels with low-stock alerts and purchasing logs",
      "Billing & Payment System – Automated VAT calculation, discounts, and payment method tracking",
      "Management Dashboard & Analytics – Sales reports, profit tracking, customer insights, and staff performance monitoring",
    ],
    github: "https://github.com/pichamonph/HanaShabu-POS",
  },
  {
    id: "project-3",
    name: "E-Commerce Platform",
    tagline: "A full-stack multi-vendor marketplace with real-time chat and integrated payments., orders, and analytics",
    images: [
      "/images/projects/ecommerce/landing.png",
      "/images/projects/ecommerce/buyer-home.png",
      "/images/projects/ecommerce/buyer-apply-seller.png",
      "/images/projects/ecommerce/buyer-cart.png",
      "/images/projects/ecommerce/buyer-chat.png",
      "/images/projects/ecommerce/buyer-fav.png",
      "/images/projects/ecommerce/buyer-history.png",
      "/images/projects/ecommerce/buyer-payment-complete.png",
      "/images/projects/ecommerce/buyer-payment-part-1.png",
      "/images/projects/ecommerce/buyer-payment-part-2.png",
      "/images/projects/ecommerce/buyer-payment-part-3.png",
      "/images/projects/ecommerce/buyer-product-detail.png",
      "/images/projects/ecommerce/seller-chat.png",
      "/images/projects/ecommerce/seller-dashboard.png",
      "/images/projects/ecommerce/seller-order-detail.png",
      "/images/projects/ecommerce/seller-order.png",
      "/images/projects/ecommerce/seller-product.png",
      "/images/projects/ecommerce/seller-review.png",
      "/images/projects/ecommerce/admin-dashboard.png",
      "/images/projects/ecommerce/admin-setting.png",
      "/images/projects/ecommerce/admin-shop-management-request.png",
      "/images/projects/ecommerce/admin-shop-management-shop.png",
      "/images/projects/ecommerce/admin-user-management.png",
      
    ],
    role: "Frontend Developer",
    overview: [
      "A comprehensive admin dashboard for small e-commerce businesses to manage their daily operations from a single interface.",
      "The dashboard provides real-time analytics on sales, inventory levels, and customer activity. Admins can manage products, process orders, and generate reports.",
      "Built with Spring Boot on the backend and React on the frontend, the application demonstrates full-stack development capabilities with a focus on data visualization.",
    ],
    tech: ["Next.js", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    features: [
      "Real-time sales and revenue analytics",
      "Product and inventory management",
      "Order processing and tracking",
      "Customer management and reporting",
    ],
    github: "https://github.com/pichamonph/ecommerce-web-platform",
  },
];

const smallProjects: Project[] = [
  {
    id: "small-1",
    name: "Honglearn",
    tagline: "An online learning platform connecting students and teachers with course management, promotions, and financial tracking.",
    cover: "/images/projects/honglearn/landing.png",
    images: [
      "/images/projects/honglearn/landing.png",
      "/images/projects/honglearn/landing-more.png",
      "/images/projects/honglearn/course.png",
      "/images/projects/honglearn/login.png",
      "/images/projects/honglearn/register-1.png",
      "/images/projects/honglearn/register-2.png",
      "/images/projects/honglearn/register-3.png",
      "/images/projects/honglearn/promotion.png",
      "/images/projects/honglearn/partner.png",
      "/images/projects/honglearn/partner-more.png",
      "/images/projects/honglearn/contact.png",
      "/images/projects/honglearn/faq.png",
      "/images/projects/honglearn/teacher-dashboard.png",
      "/images/projects/honglearn/teacher-course-management.png",
      "/images/projects/honglearn/teacher-student-management.png",
      "/images/projects/honglearn/teacher-financial.png",
      "/images/projects/honglearn/teacher-promotion-management.png",
    ],
    role: "Frontend Developer",
    overview: [
      "An online learning platform that connects students with teachers. Students can browse and enroll in courses, while teachers manage their course content, track student progress, handle promotions, and monitor their earnings — all from a unified dashboard.",
    ],
    tech: ["React", "API", "CSS"],
    features: [
      "Course browsing and enrollment for students",
      "Teacher dashboard with course and student management",
      "Promotion and partner management",
      "Financial tracking for teacher earnings",
    ],
  },
  {
    id: "small-2",
    name: "KKU Emergency",
    tagline: "A dual Android application system for emergency incident reporting and management at Khon Kaen University (KKU). The platform connects students, staff, and the general public with emergency responders through real-time incident reporting, live chat communication, and a coordinated dispatch workflow — all backed by Firebase services for authentication, real-time database, and push notifications.",
    cover: "/images/projects/kkuemergency/logo.png",
    coverLogo: true,
    images: [
      "/images/projects/kkuemergency/login.png",
      "/images/projects/kkuemergency/signin-1.png",
      "/images/projects/kkuemergency/signin-2.png",
      "/images/projects/kkuemergency/signin-2.png",
      "/images/projects/kkuemergency/Home.png",
      "/images/projects/kkuemergency/Report an incident.png",
      "/images/projects/kkuemergency/Report an incident-1.png",
      "/images/projects/kkuemergency/Report an incident-2.png",
      "/images/projects/kkuemergency/Report an incident-3.png",
      "/images/projects/kkuemergency/Chat.png",
      "/images/projects/kkuemergency/Advice.png",
      "/images/projects/kkuemergency/Advice-in.png",
      "/images/projects/kkuemergency/doing.png",
      "/images/projects/kkuemergency/setting.png",
    ],
    role: "Full-stack Developer",
    overview: [
      "A dual Android application system for emergency incident reporting and management at Khon Kaen University (KKU). The platform connects students, staff, and the general public with emergency responders through real-time incident reporting, live chat communication, and a coordinated dispatch workflow — all backed by Firebase services for authentication, real-time database, and push notifications.",
    ],
    tech: ["Kotlin", "Firebase", "Android Studio"],
    features: [
      "Submit incident reports with detailed information and monitor live status updates from dispatch to completion.",
      "Staff can self-assign incidents and update status across the full workflow (Pending → Accepted → In Progress → Completed).",
      "In-app categorized survival guides with images and instructions to assist users before help arrives.",
    ],
    github: "https://github.com/pichamonph/kku-emergency-app",
    isMobile: true,
  },
  {
    id: "small-3",
    name: "Savvy",
    tagline: "A financial management web application for tracking budgets, bills, and expenses with an intuitive dashboard.",
    cover: "/images/projects/savvy/landing.png",
    images: [
      "/images/projects/savvy/landing.png",
      "/images/projects/savvy/login.png",
      "/images/projects/savvy/register.png",
      "/images/projects/savvy/dashboard.png",
      "/images/projects/savvy/billandreceipt.png",
      "/images/projects/savvy/budgetmanagement.png",
      "/images/projects/savvy/mailmanagement.png",
      "/images/projects/savvy/email-setting.png",
      "/images/projects/savvy/high-setting.png",
      "/images/projects/savvy/faq.png",
      "/images/projects/savvy/doc.png",
    ],
    role: "Full-stack Developer",
    overview: [
      "A financial management web application for tracking budgets, bills, and expenses with an intuitive dashboard.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB"],
    features: [
      "Budget management and expense tracking",
      "Bill and receipt management",
      "Mail and notification settings",
      "Interactive dashboard with financial overview",
    ],
    github: "https://github.com/pichamonph/savvy-imap-receipts",
  },
];

/* ─── Image Carousel ─── */
function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-48 md:h-72 bg-[#F8F9FC] rounded-t-2xl overflow-hidden group/carousel">
      {/* Current image */}
      <Image
        src={images[current]}
        alt={`${name} - ${current + 1}`}
        width={1400}
        height={800}
        quality={90}
        className="w-full h-full object-contain transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          {/* Prev / Next buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF]/80 text-[#1C315E] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-[#FFFFFF] transition-all shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF]/80 text-[#1C315E] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-[#FFFFFF] transition-all shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#FFFFFF] w-5" : "bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]/80"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1C315E]/60 text-[#FFFFFF] text-xs font-medium">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

/* ─── Phone Carousel (for mobile app projects) ─── */
function PhoneCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col items-center py-6">
      {/* Soft navy background shape behind the phone */}
      <div className="relative">
        <div
          className="absolute inset-0 -inset-x-8 -inset-y-6 rounded-[40px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(28,49,94,0.06) 0%, rgba(28,49,94,0.02) 60%, transparent 80%)" }}
        />

        {/* Subtle glow */}
        <div
          className="absolute -inset-4 rounded-[44px] blur-xl opacity-40"
          style={{ background: "radial-gradient(ellipse at center, rgba(28,49,94,0.12) 0%, transparent 70%)" }}
        />

        {/* Phone frame — thin, elegant */}
        <div
          className="relative w-[200px] h-[420px] rounded-[32px] border-[3px] border-[#2a2a2e] bg-[#1a1a1e] overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(28,49,94,0.25), 0 8px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.05)" }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-[18px] bg-[#000000] rounded-full z-10" />

          {/* Screen */}
          <div className="w-full h-full overflow-hidden bg-[#000000] relative group/phone rounded-[29px]">
            <Image
              src={images[current]}
              alt={`${name} - ${current + 1}`}
              width={800}
              height={1680}
              quality={90}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FFFFFF]/70 text-[#1C315E] flex items-center justify-center opacity-0 group-hover/phone:opacity-100 hover:bg-[#FFFFFF] transition-all backdrop-blur-sm"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FFFFFF]/70 text-[#1C315E] flex items-center justify-center opacity-0 group-hover/phone:opacity-100 hover:bg-[#FFFFFF] transition-all backdrop-blur-sm"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#FFFFFF]/30 rounded-full z-10" />
        </div>
      </div>

      {/* Dots + counter below phone */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 mt-5">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#1C315E] w-4" : "bg-[#1C315E]/20 w-1.5 hover:bg-[#1C315E]/40"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-[#1C315E]/40 font-medium">
            {current + 1}/{images.length}
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Project Info (shared between layouts) ─── */
function ProjectInfo({ project, showHeader = true }: { project: Project; showHeader?: boolean }) {
  return (
    <>
      {showHeader && (
        <>
          <h3 className="text-xl font-bold text-[#1C315E] mb-1">{project.name}</h3>
          <p className="text-sm text-[#1C315E]/50 mb-5">{project.role}</p>
        </>
      )}

      <div className="space-y-3 mb-6">
        {project.overview.map((para, i) => (
          <p key={i} className="text-sm text-[#1C315E]/70 leading-relaxed">{para}</p>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-semibold text-[#1C315E]/40 uppercase tracking-wider mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium text-[#1C315E]" style={{ background: "rgba(28,49,94,0.08)" }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-semibold text-[#1C315E]/40 uppercase tracking-wider mb-2">Key Features</h4>
        <ul className="space-y-1.5">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#1C315E]/70">
              <span className="w-1.5 h-1.5 bg-[#1C315E] rounded-full mt-1.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C315E] text-[#FFFFFF] rounded-lg text-sm font-medium hover:bg-[#1C315E]/85 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}
    </>
  );
}

/* ─── Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isMobile = project.isMobile;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#1C315E]/40 backdrop-blur-sm" />

      <div
        className={`relative bg-[#FFFFFF] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto ${
          isMobile ? "max-w-4xl w-full" : "max-w-2xl w-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F9FC] text-[#1C315E]/60 hover:bg-[#E6EAF2] hover:text-[#1C315E] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isMobile ? (
          /* ─── Mobile App Layout: phone left, info right ─── */
          <div className="flex flex-col md:flex-row">
            {/* Left — phone showcase */}
            <div className="flex-shrink-0 flex items-center justify-center px-8 md:px-10 bg-gradient-to-b from-[#F8F9FC] to-[#FFFFFF] md:bg-gradient-to-r md:rounded-l-2xl">
              <PhoneCarousel images={project.images} name={project.name} />
            </div>

            {/* Right — content */}
            <div className="flex-1 min-w-0 p-6 md:p-8 md:pl-6 md:overflow-y-auto md:max-h-[80vh]">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1C315E]">{project.name}</h3>
                <p className="text-sm text-[#1C315E]/50">{project.role}</p>
              </div>
              <ProjectInfo project={project} showHeader={false} />
            </div>
          </div>
        ) : (
          /* ─── Default Layout: image on top, info below ─── */
          <>
            {project.images.length > 0 ? (
              <ImageCarousel images={project.images} name={project.name} />
            ) : (
              /* Banner header when no images */
              <div
                className="relative w-full h-36 rounded-t-2xl overflow-hidden flex items-end px-8 pb-5"
                style={{ background: "linear-gradient(135deg, #1C315E 0%, #2a4a8a 50%, #1C315E 100%)" }}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 right-8 w-24 h-24 rounded-full border border-white/10" />
                <div className="absolute -top-6 right-20 w-32 h-32 rounded-full border border-white/5" />
                <div className="absolute bottom-2 left-6 w-16 h-16 rounded-full border border-white/5" />
                <div>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="text-sm text-white/60">{project.role}</p>
                </div>
              </div>
            )}
            <div className="p-6 md:p-8">
              <ProjectInfo project={project} showHeader={project.images.length > 0} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Placeholder icon ─── */
function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center text-[#1C315E]/20">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [sectionRef, inView] = useInView(0.05);

  const revealStyle = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <>
      <section ref={sectionRef as React.RefObject<HTMLElement>} id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 min-h-screen">
        <div>
          <div className="mb-12 text-right" style={revealStyle(0)}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C315E]">Projects</h2>
            <p className="mt-2 text-gray-500 text-base">Selected systems built for real-world use cases</p>
            <div className="mt-4 ml-auto w-14 h-0.75 bg-[#1C315E] rounded-full" />
          </div>

          {/* Featured Projects — 3 cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="w-full text-left bg-[#F8F9FC] rounded-[20px] border border-[#E6EAF2] hover:border-[#1C315E]/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col"
                style={revealStyle(0.1 + index * 0.1)}
              >
                {/* Screenshot */}
                <div className={`w-full h-44 overflow-hidden relative ${project.coverLogo ? "bg-[#FFFFFF]" : "bg-[#E6EAF2]"}`}>
                  {project.images.length > 0 ? (
                    <>
                      <Image
                        src={project.cover ?? project.images[0]}
                        alt={project.name}
                        width={1200}
                        height={600}
                        quality={90}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${project.coverLogo ? "object-contain p-6" : "object-cover"}`}
                      />
                      {project.images.length > 1 && (
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-[#1C315E]/60 text-[#FFFFFF] text-[10px] font-medium backdrop-blur-sm">
                          +{project.images.length - 1} photos
                        </span>
                      )}
                    </>
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-[#1C315E] mb-1 group-hover:text-[#1C315E]/80 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#1C315E]/50 mb-3 line-clamp-2">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[#FFFFFF] text-[#1C315E] rounded-md text-[10px] font-medium border border-[#E6EAF2]">{t}</span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#1C315E]/60 group-hover:text-[#1C315E] transition-colors">
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Small Projects — 4 cards in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {smallProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="text-left bg-[#F8F9FC] rounded-2xl border border-[#E6EAF2] hover:border-[#1C315E]/20 transition-all duration-300 group flex flex-col overflow-hidden"
                style={revealStyle(0.35 + index * 0.08)}
              >
                {/* Image */}
                <div className={`w-full h-28 overflow-hidden relative ${project.coverLogo ? "bg-[#FFFFFF]" : "bg-[#E6EAF2]"}`}>
                  {project.images.length > 0 ? (
                    <Image
                      src={project.cover ?? project.images[0]}
                      alt={project.name}
                      width={800}
                      height={400}
                      quality={90}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${project.coverLogo ? "object-contain p-4" : "object-cover"}`}
                    />
                  ) : (
                    <ImagePlaceholder />
                  )}
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-[#1C315E] mb-1 group-hover:text-[#1C315E]/80 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#1C315E]/50 mb-3 line-clamp-2">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-[#FFFFFF] text-[#1C315E] rounded text-[10px] font-medium border border-[#E6EAF2]">{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
