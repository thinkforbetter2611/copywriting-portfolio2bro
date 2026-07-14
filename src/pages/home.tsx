import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import img4new from "@assets/image_1783060059698.png";
import img5new from "@assets/image_1783060212997.png";
import img7new from "@assets/p7_cropped.png";
import img8new from "@assets/p8_cropped.png";
import img11new from "@assets/p11_cropped.png";
import img12new from "@assets/p12_cropped.png";
import img13new from "@assets/image_1783061510394.png";
import img1new from "@assets/image_1783057639248.png";
import img1b from "@assets/image_1783057709287.png";
import img1c from "@assets/image_1783057768885.png";
import img2new from "@assets/image_1783059344855.png";
import img3new from "@assets/image_1783059837867.png";
import cloudImg from "@assets/whipped_cream_cloud_nobg.png";
import handsImg from "@assets/hands_bracelet_nobg.png";

// =============================================================================
// IMAGES — swap src values here to add your own photos
// Set to null to hide the image slot entirely
// =============================================================================
export const CHAPTER_IMAGES: Record<string, string | null> = {
  p1: img1new,
  p1b: img1b,
  p1c: img1c,
  p2: img2new,
  p3: img3new,
  p4: img4new,
  p5: img5new,
  p7: img7new,
  p8: img8new,
  p9: null,
  p10: null,
  p11: img11new,
  p12: img12new,
  p13: img13new,
};

// =============================================================================
// VIDEOS — Instagram reel embeds. Array of embed URLs per chapter.
// =============================================================================
export const CHAPTER_VIDEOS: Record<string, string[] | null> = {
  p9: ["https://www.instagram.com/reel/DNHurxupc9L/embed"],
  p10: [
    "https://www.instagram.com/reel/CxNfGAOpzfx/embed",
    "https://www.instagram.com/reel/DN5Z2bTj05Q/embed",
  ],
};

// =============================================================================
// PER-CHAPTER ACCENT — pulled from each campaign image's own palette so the
// type, dividers, and hover states echo the actual photograph beside them.
// =============================================================================
export const CHAPTER_ACCENTS: Record<string, string> = {
  p1: "#8B5FBF",
  p1b: "#8B5FBF",
  p1c: "#8B5FBF",
  p2: "#3E8FB0",
  p3: "#B0567A",
  p4: "#5C5FA6",
  p5: "#6B9E3F",
  p7: "#D9531E",
  p8: "#B8793D",
  p9: "#6B4226",
  p10: "#6B3D5C",
  p11: "#D19A3D",
  p12: "#D19A3D",
  p13: "#D19A3D",
};

// =============================================================================
// PORTFOLIO DATA
// =============================================================================
export const PORTFOLIO_DATA = {
  hero: {
    firstName: "Reuben",
    lastName: "George Varghese",
    roles: ["Copywriter", "Content Strategist", "Creative Thinker"],
    tagline: "Words that earn their place.",
  },
  interlude: "For one glorious moment, I became the Destroyer of Blank Pages. The Christopher Nolan of Rajouri Garden.",
  projects: [
    {
      id: "p1",
      number: "01",
      roman: "I",
      title: "April Fool's Day",
      client: "Drinks Brand",
      year: "2024",
      headline: "Willing to become a fool for this drink.",
      description: "April Fool's Day always makes brands louder. I wondered what would happen if we did the opposite. Instead of exaggerating the drink, we exaggerated the imagination."
    },
    {
      id: "p1b",
      number: "01",
      roman: "I",
      title: "April Fool's Day",
      client: "Drinks Brand",
      year: "2024",
      speaker: "Friend",
      headline: "Why?",
    },
    {
      id: "p1c",
      number: "01",
      roman: "I",
      title: "April Fool's Day",
      client: "Drinks Brand",
      year: "2024",
      speaker: "Me",
      headline: "Nevermind….",
    },
    {
      id: "p2",
      number: "02",
      roman: "II",
      title: "After Everyone's Gone",
      client: "Lifestyle Brand",
      year: "2024",
      headline: "Ahhh summertime let those glasses clink and let me drown in sunlight.",
      subline: "let me drown in sunlight.",
      description: "Summer campaigns usually shout — beaches, parties, people jumping into pools. My art director asked what summer looked like after everyone had gone home. That question became the campaign. I wanted to savour the quieter parts. Summer has been painted loud for too long."
    },
    {
      id: "p3",
      number: "03",
      roman: "III",
      title: "Every Brew",
      client: "Beverage Co.",
      year: "2023",
      headline: "Every brew is a friend like you.",
      description: "This campaign almost wrote itself, and that was the problem. Every headline somehow became this line. I spent days trying to write better before accepting that this was the line the campaign wanted."
    },
    {
      id: "p4",
      number: "04",
      roman: "IV",
      title: "The Pursuit",
      client: "Conceptual",
      year: "2023",
      headline: "Inspiration arrives in the strangest places.",
      description: "Mine came at the end of The Pursuit of Happyness, disguised as a knock-knock joke."
    },
    {
      id: "p5",
      number: "05",
      roman: "V",
      title: "Green Flag",
      client: "Social Media",
      year: "2024",
      headline: "A language people were already speaking.",
      description: "\"Green flag\" wasn't just internet slang anymore. It had become shorthand for something instantly understood. The post simply borrowed a language people were already speaking.",
      footnote: "enjoy the moment"
    },
    {
      id: "p8",
      number: "06",
      roman: "VI",
      title: "A Journey With Every Cup",
      client: "The Coffee Bean & Tea Leaf",
      year: "2024",
      headline: "Enjoy the view",
    },
    {
      id: "p9",
      number: "07",
      roman: "VII",
      title: "In Motion",
      client: "The Coffee Bean & Tea Leaf",
      year: "2025",
      headline: "Some stories move.",
      description: "Not every idea sits still on a page. This one needed sound, motion, and a few seconds of someone's attention — so it became a short film instead of a headline."
    },
    {
      id: "p10",
      number: "08",
      roman: "VIII",
      title: "Two Takes",
      client: "The Coffee Bean & Tea Leaf",
      year: "2024",
      headline: "One brand, two conversations.",
      description: "Two short films, two different moods, same voice underneath. Proof that a brand can say more than one thing and still sound like itself."
    },
    {
      id: "p11",
      number: "09",
      roman: "IX",
      title: "The Brew Journal",
      client: "The Coffee Bean & Tea Leaf",
      year: "2025",
      headline: "Speaking of Summer.",
      description: "Most of the writing was done. The rest was just me and the graph designer moving things around until the words stopped getting in the design's way."
    },
    {
      id: "p12",
      number: "10",
      roman: "X",
      title: "Tea Refuses to Rush",
      client: "The Coffee Bean & Tea Leaf",
      year: "2025",
      headline: "Tea refuses to rush.",
      description: "Have you seen the previous edition? You know that smooth, glossy paper? I was hoping for the same here. That blue sky would've absolutely popped."
    },
    {
      id: "p13",
      number: "11",
      roman: "XI",
      title: "Passion For Coffee & Tea",
      client: "The Coffee Bean & Tea Leaf",
      year: "2025",
      headline: "Since 1963.",
      description: "Writing for a brand with this much history means getting out of its way — letting decades of craft speak before a single clever line does."
    },
    {
      id: "p7",
      number: "12",
      roman: "XII",
      title: "Volume",
      client: "Brand Contribution",
      year: "2024",
      headline: "Minimal writing.\nMaximum tone.",
      description: "A small copywriting contribution for Volume. The challenge was keeping the writing minimal while staying true to the brand's tone."
    }
  ]
};

// =============================================================================
// IMAGE SLOT COMPONENT
// =============================================================================
function ChapterImage({ id, alt }: { id: string; alt: string }) {
  const src = CHAPTER_IMAGES[id];
  const videos = CHAPTER_VIDEOS[id];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => el.classList.add("img-revealed");

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const isOnScreen = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    if (isOnScreen()) {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    );
    obs.observe(el);

    const img = el.querySelector("img");
    const onLoad = () => {
      if (isOnScreen()) {
        reveal();
        obs.disconnect();
      }
    };
    img?.addEventListener("load", onLoad);

    return () => {
      obs.disconnect();
      img?.removeEventListener("load", onLoad);
    };
  }, []);

  if (videos && videos.length > 0) {
    return (
      <div
        ref={ref}
        className={`grid gap-4 w-full ${videos.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-md mx-auto"}`}
      >
        {videos.map((url, i) => (
          <div
            key={url}
            className="chapter-img-slot img-revealed"
            style={{ aspectRatio: "9 / 16" }}
          >
            <iframe
              src={url}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              title={`${alt} video ${i + 1}`}
            />
          </div>
        ))}
      </div>
    );
  }

  if (!src) {
    return (
      <div
        ref={ref}
        className="chapter-img-slot img-placeholder"
        title={`Add image: set CHAPTER_IMAGES.${id} = "/your-image.jpg"`}
      >
        <span className="text-label text-[var(--text-muted)] opacity-40">
          + image
        </span>
      </div>
    );
  }

  const isPortraitStory = id === "p1" || id === "p1b" || id === "p1c";
  const showFullImage = id === "p3" || id === "p4" || id === "p5" || id === "p7" || id === "p8" || id === "p11" || id === "p12" || id === "p13";

  return (
    <div
      ref={ref}
      className="chapter-img-slot"
      style={
        isPortraitStory
          ? { aspectRatio: "4 / 5" }
          : showFullImage
          ? { aspectRatio: "auto", background: "var(--warm-white)" }
          : undefined
      }
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${isPortraitStory || showFullImage ? "object-contain" : "object-cover"}`}
        loading="lazy"
      />
    </div>
  );
}

// =============================================================================
// HOOKS
// =============================================================================
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Apply staggered transition delays to children
    const items = el.querySelectorAll('.reveal-item');
    items.forEach((item, i) => {
      (item as HTMLElement).style.transitionDelay = `${i * 80}ms`;
    });

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// =============================================================================
// COMPONENTS
// =============================================================================
function TypewriterText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, 35);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={{ duration: done ? 0.8 : 0, delay: done ? 0.5 : 0 }}
        className="inline-block ml-[1px] font-mono"
      >|</motion.span>
    </span>
  );
}

function StaggeredWords({ text, className }: { text?: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = (text ?? '').split(' ');
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function LoadingCurtain() {
  const [gone, setGone] = useState(false);

  if (gone) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
      onAnimationComplete={() => setGone(true)}
      className="fixed inset-0 z-[100] bg-[var(--charcoal)] flex items-center justify-center pointer-events-none"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, times: [0, 0.25, 0.7, 1] }}
        className="text-[var(--warm-white)] text-3xl font-serif italic tracking-wide"
      >
        {PORTFOLIO_DATA.hero.firstName} {PORTFOLIO_DATA.hero.lastName}
      </motion.p>
    </motion.div>
  );
}

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top  = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top  = `${ry}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}

function FixedElements({ activeChapter }: { activeChapter: string }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 w-[2px] bg-[var(--off-white)] z-40 hidden md:block">
        <motion.div
          className="w-full bg-[var(--accent)] origin-top"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />
        <motion.div
          className="progress-dot absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent-bright)]"
          style={{ top: scrollYProgress }}
        />
      </div>
      <div className="fixed bottom-6 right-6 z-40 text-label text-[var(--accent-bright)] hidden md:block mix-blend-difference font-semibold">
        <motion.span 
          key={activeChapter}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {activeChapter} / 12
        </motion.span>
      </div>
    </>
  );
}

function MarqueeBand() {
  const text = "COPYWRITER · CONTENT STRATEGY · CREATIVE DIRECTION · CAMPAIGN COPY · BRAND VOICE · ";
  return (
    <div className="overflow-hidden py-4 border-y-2 border-[var(--charcoal)] bg-[var(--charcoal)] text-[var(--warm-white)]">
      <div className="marquee-track">
        {Array(6).fill(text).map((item, i) => (
          <span key={i} className="mx-4 text-label text-[11px] font-semibold tracking-[0.3em]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print fixed top-6 right-6 z-50 font-mono text-[9px] tracking-[0.2em] uppercase border-2 border-[var(--accent)] px-4 py-2.5 text-[var(--accent)] bg-[var(--warm-white)] hover:bg-[var(--accent)] hover:text-[var(--warm-white)] hover:shadow-[0_0_20px_rgba(184,50,44,0.4)] transition-all duration-300 cursor-none"
    >
      ↓ Download PDF
    </button>
  );
}

// =============================================================================
// CHAPTER LAYOUTS
// =============================================================================

function ChapterLine({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[52vh] py-16 px-6 md:px-24 flex flex-col items-center justify-center text-center chapter-section chapter-lavender relative overflow-hidden">
      <ChapterFog />
      {project.id === "p1b" ? (
        <CloudGroup
          style={{ top: "-8%", left: "-7%", width: "30%" }}
          drift="slow"
          opacity={0.3}
          flip
          straws={[{ left: "48%", top: "-12%", height: 90, rotate: 12 }]}
        />
      ) : (
        <CloudGroup
          style={{ bottom: "-10%", right: "-8%", width: "34%" }}
          drift="slow"
          opacity={0.28}
          straws={[{ left: "38%", top: "-10%", height: 100, rotate: -14 }]}
        />
      )}
      <div ref={ref} className="reveal-wrapper flex flex-col items-center relative z-10 max-w-2xl">
        {project.speaker && (
          <span className="text-label text-[var(--text-muted)] mb-8 reveal-item tracking-[0.3em]">
            {project.speaker}
          </span>
        )}
        <h2 className="text-display font-type italic text-5xl md:text-7xl headline-hover reveal-item mb-10">
          <TypewriterText text={project.headline} />
        </h2>
        <div className="w-full max-w-sm reveal-item">
          <ChapterImage id={project.id} alt={project.title} />
        </div>
      </div>
    </section>
  );
}

function CloudGroup({ className, style, straws, drift = "fast", opacity = 0.9, flip = false }: {
  className?: string;
  style?: React.CSSProperties;
  straws?: { left: string; top: string; height: number; rotate: number }[];
  drift?: "fast" | "slow";
  opacity?: number;
  flip?: boolean;
}) {
  return (
    <div className={`absolute pointer-events-none select-none ${className ?? ""}`} style={style} aria-hidden>
      <div className={drift === "fast" ? "cloud-float relative" : "cloud-float-slow relative"}>
        {straws?.map((s, i) => (
          <div
            key={i}
            className="cloud-straw"
            style={{ left: s.left, top: s.top, height: s.height, transform: `rotate(${s.rotate}deg)` }}
          />
        ))}
        <img
          src={cloudImg}
          alt=""
          className="w-full relative"
          style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }}
        />
      </div>
    </div>
  );
}

function styledCopy(
  text: string,
  rules: { phrase: string; render: (s: string, key: number) => React.ReactNode }[],
): React.ReactNode[] {
  let parts: React.ReactNode[] = [text];
  rules.forEach((rule, r) => {
    const next: React.ReactNode[] = [];
    parts.forEach((part) => {
      if (typeof part !== "string") {
        next.push(part);
        return;
      }
      const i = part.indexOf(rule.phrase);
      if (i === -1) {
        next.push(part);
        return;
      }
      if (i > 0) next.push(part.slice(0, i));
      next.push(rule.render(rule.phrase, r));
      const rest = part.slice(i + rule.phrase.length);
      if (rest) next.push(rest);
    });
    parts = next;
  });
  return parts;
}

function GreenFlagSVG({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="64" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 44V4M4 4C14 -1.33333 26 9.33333 36 4V24C26 29.3333 14 18.6667 4 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RedFlagSVG({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="64" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 44V4M4 4C14 -1.33333 26 9.33333 36 4V24C26 29.3333 14 18.6667 4 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="0" y1="0" x2="40" y2="48" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function ChapterFog() {
  return (
    <>
      <div aria-hidden className="fog-layer fog-1" />
      <div aria-hidden className="fog-layer fog-2" />
      <div aria-hidden className="fog-layer fog-3" />
      <div aria-hidden className="fog-layer fog-4" />
    </>
  );
}

function ChapterI({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  const hasCloudDecor = project.id === "p1";
  const hasGraphDecor = project.id === "p8";
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[64vh] py-20 px-6 md:px-24 flex flex-col justify-center chapter-section chapter-lavender relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      {hasCloudDecor && (
        <>
          <ChapterFog />
          <CloudGroup
            style={{ top: "-6%", right: "-8%", width: "44%" }}
            drift="slow"
            opacity={0.35}
            straws={[
              { left: "30%", top: "-8%", height: 90, rotate: -16 },
              { left: "58%", top: "-12%", height: 110, rotate: 8 },
            ]}
          />
          <CloudGroup
            style={{ bottom: "-4%", left: "-6%", width: "26%" }}
            drift="slow"
            opacity={0.18}
            flip
          />
        </>
      )}
      {hasGraphDecor && (
        <div aria-hidden className="absolute top-[20%] left-[5%] w-[80%] h-[60%] pointer-events-none z-0 opacity-50">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="none">
            <line x1="100" y1="50" x2="750" y2="50" className="p6g-grid-line" strokeWidth="1" />
            <line x1="100" y1="150" x2="750" y2="150" className="p6g-grid-line" strokeWidth="1" />
            <line x1="100" y1="250" x2="750" y2="250" className="p6g-grid-line" strokeWidth="1" />
            <line x1="100" y1="350" x2="750" y2="350" className="p6g-grid-line" strokeWidth="1" />
            <line x1="250" y1="50" x2="250" y2="350" className="p6g-grid-line" strokeWidth="1" />
            <line x1="400" y1="50" x2="400" y2="350" className="p6g-grid-line" strokeWidth="1" />
            <line x1="550" y1="50" x2="550" y2="350" className="p6g-grid-line" strokeWidth="1" />
            <line x1="700" y1="50" x2="700" y2="350" className="p6g-grid-line" strokeWidth="1" />
            <line x1="100" y1="50" x2="100" y2="350" stroke="var(--charcoal)" strokeWidth="1" opacity="0.3" />
            <line x1="100" y1="350" x2="750" y2="350" stroke="var(--charcoal)" strokeWidth="1" opacity="0.3" />
            <path
              d="M 100 350 L 250 280 L 400 300 L 550 150 L 700 80"
              fill="none"
              stroke="var(--accent-current)"
              strokeWidth="2"
              className="p6g-graph-line"
            />
            <circle cx="100" cy="350" r="4" fill="var(--accent-current)" className="p6g-graph-point" />
            <circle cx="250" cy="280" r="4" fill="var(--accent-current)" className="p6g-graph-point" />
            <circle cx="400" cy="300" r="4" fill="var(--accent-current)" className="p6g-graph-point" />
            <circle cx="550" cy="150" r="4" fill="var(--accent-current)" className="p6g-graph-point" />
            <circle cx="700" cy="80" r="4" fill="var(--accent-current)" className="p6g-graph-point" />
          </svg>
        </div>
      )}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      <div className="text-label text-[var(--text-muted)] mb-10 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-6 flex flex-col items-start justify-start pt-2 relative">
          {hasCloudDecor && (
            <CloudGroup
              style={{ top: "-90px", left: "38%", width: "420px", maxWidth: "70%", zIndex: 0 }}
              drift="fast"
              opacity={0.9}
              straws={[
                { left: "24%", top: "-10%", height: 100, rotate: -18 },
                { left: "52%", top: "-16%", height: 120, rotate: 10 },
                { left: "72%", top: "-6%", height: 80, rotate: 24 },
              ]}
            />
          )}
          {hasGraphDecor ? (
            <h2 className="font-type italic text-6xl md:text-8xl headline-hover reveal-item mb-12 relative z-[1] tracking-tight text-[var(--charcoal)]">
              {styledCopy(project.headline, [
                { phrase: "view", render: (s, k) => <span key={k} className="text-[var(--accent-current)]">{s}</span> },
              ])}
            </h2>
          ) : (
            <h2 className="text-display font-type text-5xl md:text-7xl italic headline-hover reveal-item mb-12 relative z-[1]">
              <TypewriterText text={project.headline} />
            </h2>
          )}
          {hasCloudDecor && (
            <div className="h-[1px] w-16 mb-8 bg-[var(--accent-current)] opacity-50 reveal-item" />
          )}
        </div>
        <div className="md:col-span-6 flex flex-col gap-6 items-start">
          <ChapterImage id={project.id} alt={project.title} />
          {project.description && (
            <div className="notebook-box reveal-item w-full">
              <p className="text-body text-sm text-[var(--text-dark)]"><StaggeredWords text={project.description} /></p>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="h-[2px] bg-[var(--accent-current)] w-1/4 mt-32 relative z-10 opacity-60"
      />
    </section>
  );
}

function ChapterII({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const chapterRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: chapterRef, offset: ['start end', 'end start'] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const accent = CHAPTER_ACCENTS[project.id];

  return (
    <section ref={chapterRef} id={project.number} style={{ ["--accent-current" as string]: accent }} className="min-h-[72vh] py-20 px-6 md:px-24 relative overflow-hidden chapter-section chapter-dustblue">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none z-0"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      {/* Sun & grass decor */}
      <div aria-hidden className="absolute pointer-events-none select-none" style={{ top: "-10%", right: "-10%", width: 600, height: 600, zIndex: 0 }}>
        <div className="p2s-sun" />
      </div>
      <div aria-hidden className="p2s-sun-wash" />
      <div aria-hidden className="absolute bottom-0 left-10 right-10 h-24 pointer-events-none z-0 flex items-end justify-between px-10 opacity-50">
        <div className="w-[3px] h-16 bg-[var(--accent-current)] rounded-full p2s-grass-1 ml-10 mix-blend-multiply" />
        <div className="w-[2px] h-20 bg-[var(--accent-current)] rounded-full p2s-grass-2 mb-4 mix-blend-multiply" />
        <div className="w-[3px] h-14 bg-[var(--accent-current)] rounded-full p2s-grass-3 mr-20 mix-blend-multiply" />
        <div className="w-[2px] h-24 bg-[var(--accent-current)] rounded-full p2s-grass-1 mb-2 mix-blend-multiply" />
      </div>
      <div className="text-label text-[var(--text-muted)] mb-10 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper relative z-10">
        <h2 className="text-display italic text-6xl md:text-[7rem] headline-hover reveal-item max-w-5xl leading-[0.9] font-light tracking-wide">
          {styledCopy(project.headline, [
            {
              phrase: "drown in sunlight.",
              render: (s, k) => (
                <span key={k} className="block mt-4 tracking-widest text-[var(--accent-current)]" style={{ fontWeight: 400 }}>
                  {s}
                </span>
              ),
            },
          ])}
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 reveal-item">
            <ChapterImage id={project.id} alt={project.title} />
          </div>
          <div className="md:col-start-9 md:col-span-4 reveal-item">
            <div className="w-8 h-[2px] bg-[var(--accent-current)] mb-6" />
            <p className="text-body text-sm text-[var(--text-dark)] leading-relaxed">
              <StaggeredWords text={project.description} />
            </p>
          </div>
        </div>
      </div>
      {/* Watermark subline */}
      <motion.div style={{ y: watermarkY }} className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-display text-[12vw] italic opacity-[0.12] whitespace-nowrap" style={{ color: "var(--accent-current)" }}>
          {project.subline}
        </span>
      </motion.div>
    </section>
  );
}

function ChapterIII({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  const isFriendship = project.id === "p3";
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[58vh] py-20 px-6 md:px-24 flex flex-col items-center justify-center chapter-section chapter-cream relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      {isFriendship && (
        <img
          src={handsImg}
          alt=""
          aria-hidden
          className="absolute pointer-events-none select-none p3f-bracelet-anim"
          style={{ bottom: "-5%", right: "-10%", width: "40%", opacity: 0.85, zIndex: 0 }}
        />
      )}
      <div className="text-label text-[var(--text-muted)] mb-12 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper text-center max-w-3xl flex flex-col items-center relative z-10">
        {isFriendship ? (
          <>
            <div className="flex w-full mb-10 opacity-70 reveal-item" aria-hidden>
              <div className="h-[2px] w-full p3f-thread-anim" style={{ background: "linear-gradient(to right, #B0567A, #E8A598, transparent)" }} />
              <div className="h-[2px] w-full p3f-thread-anim" style={{ background: "linear-gradient(to right, transparent, #D48C70, #B0567A)", animationDelay: "1s", marginTop: "4px", marginLeft: "-50%" }} />
            </div>
            <h2 className="text-display text-5xl md:text-6xl headline-hover reveal-item mb-10">
              {styledCopy(project.headline, [
                { phrase: "Every brew", render: (s, k) => <span key={k} className="italic">{s}</span> },
                { phrase: "friend", render: (s, k) => <span key={k} className="p3f-handwritten text-[var(--accent-current)] font-medium">{s}</span> },
              ])}
            </h2>
          </>
        ) : (
          <h2 className="text-display font-type text-5xl md:text-6xl headline-hover reveal-item mb-10">
            <TypewriterText text={project.headline} />
          </h2>
        )}
        <div className="w-full max-w-xl mb-10 reveal-item">
          <ChapterImage id={project.id} alt={project.title} />
        </div>
        <div className="w-8 h-[2px] bg-[var(--accent-current)] mb-6 reveal-item" />
        <p className="text-body text-sm text-[var(--text-dark)] max-w-sm reveal-item">
          <StaggeredWords text={project.description} />
        </p>
      </div>
    </section>
  );
}

function ChapterIV({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[72vh] py-20 px-6 md:px-24 flex flex-col justify-between chapter-section chapter-offwhite relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      <div className="p4k-door-edge" aria-hidden />
      <div aria-hidden className="absolute top-[24%] left-[4%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-40">
        <div className="p4k-ripple" />
        <div className="p4k-ripple" style={{ animationDelay: "0.4s" }} />
      </div>
      <div aria-hidden className="p4k-ripple-container top-[55%] right-[8%] opacity-30">
        <div className="p4k-ripple" />
        <div className="p4k-ripple" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="text-label text-[var(--text-muted)] relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper flex flex-col flex-1 mt-14 relative z-10">
        <h2 className="font-type text-5xl md:text-7xl headline-hover reveal-item max-w-3xl leading-[1.1]">
          {styledCopy(project.headline, [
            { phrase: "Inspiration", render: (s, k) => <span key={k} className="block">{s}</span> },
            { phrase: "arrives", render: (s, k) => <span key={k} className="block ml-12 text-[var(--accent-current)] italic">{s}</span> },
            { phrase: "in the", render: (s, k) => <span key={k} className="block mt-4">{s}</span> },
            { phrase: "strangest", render: (s, k) => <span key={k} className="block ml-6 mt-4 font-bold tracking-widest text-[0.8em] uppercase opacity-80">{s}</span> },
            { phrase: "places.", render: (s, k) => <span key={k} className="block mt-4">{s}</span> },
          ])}
        </h2>
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="w-full max-w-lg reveal-item">
            <ChapterImage id={project.id} alt={project.title} />
          </div>
        </div>
        <div className="self-end max-w-sm reveal-item">
          <p className="text-body text-sm text-[var(--text-dark)] text-right">
            {styledCopy(project.description ?? "", [
              { phrase: "The Pursuit of Happyness", render: (s, k) => <i key={k} className="font-serif text-[1.15em] opacity-80">{s}</i> },
              { phrase: "knock-knock", render: (s, k) => <span key={k} className="font-mono tracking-widest text-[var(--accent-current)] font-medium">{s}</span> },
            ])}
          </p>
        </div>
      </div>
    </section>
  );
}


function InterludeContinued() {
  return (
    <section className="min-h-[30vh] flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="text-label text-[var(--text-muted)] text-center tracking-[0.4em]"
      >
        — continued —
      </motion.p>
    </section>
  );
}

function InterludeEnter() {
  return (
    <section className="min-h-[20vh] flex items-center justify-center bg-[var(--charcoal)]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-label text-[var(--off-white)] tracking-[0.4em]"
      >
        — enter —
      </motion.p>
    </section>
  );
}


function ChapterV({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[58vh] py-20 px-6 md:px-24 flex flex-col justify-center chapter-section chapter-sage relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div className="p5f-float-container absolute top-[15%] right-[10%] opacity-30 text-[var(--accent-current)]">
          <GreenFlagSVG className="p5f-flag-wave w-24 h-auto" />
        </div>
        <div className="p5f-float-container-slow absolute bottom-[20%] left-[8%] opacity-40 text-[var(--accent-current)]">
          <GreenFlagSVG className="p5f-flag-wave-slow w-32 h-auto" />
        </div>
        <div className="p5f-float-container absolute top-[40%] left-[45%] opacity-[0.10] text-[#B8322C]">
          <RedFlagSVG className="p5f-flag-wave-fast w-16 h-auto" />
        </div>
        <div className="p5f-float-container-slow absolute bottom-[10%] right-[30%] opacity-[0.07] text-[#B8322C]">
          <RedFlagSVG className="p5f-flag-wave w-20 h-auto" />
        </div>
      </div>
      <div className="text-label text-[var(--text-muted)] mb-10 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative z-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-display text-5xl md:text-6xl headline-hover reveal-item leading-[0.88]">
            {styledCopy(project.headline, [
              { phrase: "already", render: (s, k) => <span key={k} className="italic">{s}</span> },
              { phrase: "speaking.", render: (s, k) => <span key={k} className="text-[var(--accent-current)] font-semibold">{s}</span> },
            ])}
          </h2>
          <div className="reveal-item">
            <ChapterImage id={project.id} alt={project.title} />
          </div>
        </div>
        <div className="flex flex-col justify-center reveal-item">
          <p className="text-body text-sm text-[var(--text-dark)] mb-12 max-w-md">
            {styledCopy(project.description ?? "", [
              { phrase: "Green flag", render: (s, k) => <strong key={k} className="font-semibold tracking-wide text-[var(--accent-current)]">{s}</strong> },
            ])}
          </p>
          {project.footnote && (
            <p className="font-serif italic text-sm text-[var(--text-muted)] self-start border-b border-[var(--text-muted)] pb-1">
              * {project.footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ChapterFilmDuo({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  const videos = CHAPTER_VIDEOS[project.id] ?? [];
  const captions = [
    "The inspiration.",
    "The final result.",
  ];
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[72vh] py-20 px-6 md:px-24 flex flex-col items-center justify-center text-center chapter-section chapter-cream relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      {/* Supernova decor */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center" aria-hidden>
        <div className="p8s-orbit-wrapper-1">
          <div className="p8s-orbit-circle" />
          <div className="p8s-orbit-anim-1">
            <div className="p8s-bean-container">
              <div className="p8s-bean" />
            </div>
          </div>
        </div>
        <div className="p8s-orbit-wrapper-2">
          <div className="p8s-orbit-circle" />
          <div className="p8s-orbit-anim-2">
            <div className="p8s-bean-container">
              <div className="p8s-bean" />
            </div>
          </div>
        </div>
        <div className="p8s-supernova-glow absolute rounded-full mix-blend-multiply" />
        <div className="absolute w-[600px] h-[600px]">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 mix-blend-multiply">
            {Array.from({ length: 48 }).map((_, i) => (
              <line
                key={i}
                x1="50" y1="50" x2="50" y2="0"
                stroke="var(--accent-current)"
                strokeWidth="0.15"
                transform={`rotate(${i * 7.5} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="text-label text-[var(--text-muted)] mb-12 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper flex flex-col items-center relative z-10 w-full max-w-3xl">
        <h2 className="text-5xl md:text-7xl headline-hover reveal-item mb-12">
          {styledCopy(project.headline, [
            { phrase: "One brand,", render: (s, k) => <span key={k} className="font-sans font-light tracking-tight block mb-3 text-[var(--charcoal)]">{s}</span> },
            { phrase: "two conversations.", render: (s, k) => <span key={k} className="font-type font-bold tracking-tight text-[var(--accent-current)] block text-[0.85em]">{s}</span> },
          ])}
        </h2>
        {videos.map((url, i) => (
          <div key={url} className="flex flex-col items-center w-full reveal-item">
            <p className="font-serif italic text-xl md:text-2xl text-[var(--text-dark)] mb-3">
              {captions[i]}
            </p>
            <div className="w-8 h-[2px] bg-[var(--accent-current)] mb-8" />
            <div className="chapter-img-slot img-revealed w-full max-w-md mb-12" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                src={url}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                title={`${project.title} video ${i + 1}`}
              />
            </div>
          </div>
        ))}
        <p className="text-display text-2xl md:text-4xl italic reveal-item leading-[1.3] text-[var(--charcoal)] max-w-2xl">
          "{PORTFOLIO_DATA.interlude}"
        </p>
      </div>
    </section>
  );
}

function ChapterJournalPage({ project, page, total }: { project: typeof PORTFOLIO_DATA.projects[0]; page: number; total: number }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  const isFirst = page === 1;
  const isLast = page === total;
  return (
    <section
      id={project.number}
      data-roman={project.roman}
      style={{ ["--accent-current" as string]: accent }}
      className={`px-6 md:px-24 flex flex-col items-center justify-center text-center chapter-section chapter-cream relative overflow-hidden ${isFirst ? "min-h-[70vh] pt-20 pb-8" : "pt-8 pb-8"} ${isLast ? "pb-32" : ""}`}
    >
      {!isFirst && (
        <div className="w-[2px] h-16 mb-10 relative z-10" style={{ background: `repeating-linear-gradient(to bottom, ${accent} 0px, ${accent} 4px, transparent 4px, transparent 10px)` }} aria-hidden />
      )}
      {isFirst && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 0.04, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
          aria-hidden
        >
          {project.roman}
        </motion.div>
      )}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      <div className="text-label text-[var(--text-muted)] mb-10 relative z-10">
        <span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}
        <span className="mx-3 opacity-40">·</span>
        The Brew Journal — Page {page} of {total}
      </div>
      <div ref={ref} className="reveal-wrapper flex flex-col items-center relative z-10 w-full max-w-3xl">
        <h2 className="text-display font-type text-4xl md:text-5xl headline-hover reveal-item mb-12">
          <TypewriterText text={project.headline} />
        </h2>
        <div className="w-full reveal-item mb-12">
          <ChapterImage id={project.id} alt={project.title} />
        </div>
        {project.description && (
          <p className="text-body text-sm text-[var(--text-dark)] max-w-md reveal-item">
            <StaggeredWords text={project.description} />
          </p>
        )}
      </div>
      {!isLast && (
        <div className="flex flex-col items-center mt-12 relative z-10" aria-hidden>
          <div className="w-[2px] h-16" style={{ background: `repeating-linear-gradient(to bottom, ${accent} 0px, ${accent} 4px, transparent 4px, transparent 10px)` }} />
          <div className="text-label text-[var(--text-muted)] mt-4 text-xs tracking-widest">continued</div>
        </div>
      )}
    </section>
  );
}

function ChapterClosing({ project }: { project: typeof PORTFOLIO_DATA.projects[0] }) {
  const ref = useScrollReveal();
  const accent = CHAPTER_ACCENTS[project.id];
  return (
    <section id={project.number} data-roman={project.roman} style={{ ["--accent-current" as string]: accent }} className="min-h-[64vh] py-20 px-6 md:px-24 flex flex-col items-center justify-center text-center chapter-section chapter-parchment relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-4 font-serif text-[18vw] text-[var(--charcoal)] pointer-events-none select-none leading-none"
        aria-hidden
      >
        {project.roman}
      </motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--accent-current)] z-10"
      />
      <div className="text-label text-[var(--text-muted)] mb-12 relative z-10"><span className="text-[var(--accent-current)] font-semibold">{project.roman}</span> / {project.client} / {project.year}</div>
      <div ref={ref} className="reveal-wrapper flex flex-col items-center relative z-10 w-full">
        <h2 className="text-display font-type text-5xl md:text-[6rem] headline-hover reveal-item whitespace-pre-line mb-10">
          <TypewriterText text={project.headline} />
        </h2>
        <p className="text-body text-sm text-[var(--text-dark)] max-w-md reveal-item mb-12">
          <StaggeredWords text={project.description} />
        </p>
        <div className="w-full max-w-lg mb-10 reveal-item">
          <ChapterImage id={project.id} alt={project.title} />
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="h-[2px] bg-[var(--accent-current)] w-full max-w-[100px] mx-auto relative z-10"
        />
      </div>
    </section>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================
export default function Home() {
  const [activeChapter, setActiveChapter] = useState("00");

  useEffect(() => {
    const sections = document.querySelectorAll('.chapter-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <DownloadButton />
      <LoadingCurtain />
      <Cursor />
      <FixedElements activeChapter={activeChapter} />
      
      <main className="w-full">
        {/* HERO */}
        <section id="00" className="relative min-h-[100dvh] flex flex-col px-6 md:px-12 py-8 chapter-section">
          {/* Top labels */}
          <div className="flex justify-between w-full max-w-[60%]">
            <span className="text-label text-[var(--text-muted)]">Portfolio — 2026</span>
            <span className="text-label text-[var(--text-muted)]">London · New Delhi</span>
          </div>

          {/* Center Name */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col items-start -mt-20">
              <h1
                className="text-display font-semibold tracking-tight text-[var(--charcoal)]"
                style={{ fontSize: `clamp(3rem, ${Math.min(20, 90 / PORTFOLIO_DATA.hero.firstName.length)}vw, 20rem)` }}
              >
                {PORTFOLIO_DATA.hero.firstName.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.05 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <h1
                className="text-display font-semibold tracking-tight text-[var(--charcoal)] ml-[1ch] -mt-[0.1em]"
                style={{ fontSize: `clamp(2rem, ${Math.min(20, 90 / PORTFOLIO_DATA.hero.lastName.length)}vw, 20rem)` }}
              >
                {PORTFOLIO_DATA.hero.lastName.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 + i * 0.05 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-12 w-full max-w-[60%]"
            >
              <div className="h-[2px] bg-[var(--accent)] w-full mb-6" />
              <p className="text-label text-[var(--text-muted)]">
                <span className="accent-tick" />
                {PORTFOLIO_DATA.hero.roles.join(" · ")}
              </p>
            </motion.div>
          </div>

          {/* Tagline right vertical */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden md:block"
          >
            <p className="font-serif italic text-lg text-[var(--accent)] whitespace-nowrap">
              {PORTFOLIO_DATA.hero.tagline}
            </p>
          </motion.div>
        </section>

        <MarqueeBand />

        <div className="chapters-container">
          <ChapterI project={PORTFOLIO_DATA.projects[0]} />
          <ChapterLine project={PORTFOLIO_DATA.projects[1]} />
          <ChapterLine project={PORTFOLIO_DATA.projects[2]} />
          <ChapterII project={PORTFOLIO_DATA.projects[3]} />
          <ChapterIII project={PORTFOLIO_DATA.projects[4]} />
          
          <InterludeContinued />
          
          <ChapterIV project={PORTFOLIO_DATA.projects[5]} />
          
          <InterludeContinued />
          
          <ChapterV project={PORTFOLIO_DATA.projects[6]} />

          <ChapterI project={PORTFOLIO_DATA.projects[7]} />

          <ChapterIII project={PORTFOLIO_DATA.projects[8]} />

          <ChapterFilmDuo project={PORTFOLIO_DATA.projects[9]} />

          <InterludeContinued />

          <ChapterJournalPage project={PORTFOLIO_DATA.projects[10]} page={1} total={3} />
          <ChapterJournalPage project={PORTFOLIO_DATA.projects[11]} page={2} total={3} />
          <ChapterJournalPage project={PORTFOLIO_DATA.projects[12]} page={3} total={3} />

          <InterludeEnter />

          <ChapterClosing project={PORTFOLIO_DATA.projects[13]} />
        </div>

        {/* FOOTER */}
        <footer className="border-t border-[var(--charcoal)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-[var(--charcoal)] flex flex-col justify-between min-h-[30vh]">
              <span className="text-label text-[var(--text-muted)]">Index</span>
              <p className="text-display text-3xl italic">
                {PORTFOLIO_DATA.hero.firstName} {PORTFOLIO_DATA.hero.lastName} <br/>
                <span className="text-lg not-italic text-[var(--text-muted)]">2026</span>
              </p>
            </div>
            
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-[var(--charcoal)] flex flex-col justify-between min-h-[30vh]">
              <span className="text-label text-[var(--text-muted)]">Contact</span>
              <div className="space-y-4">
                <p className="text-body text-sm mb-6">Available for work.</p>
                <div className="flex flex-col items-start gap-2">
                  <a href="#" className="text-display text-xl link-underline pb-1">Email</a>
                  <a href="#" className="text-display text-xl link-underline pb-1">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 flex flex-col justify-between min-h-[30vh]">
              <span className="text-label text-[var(--text-muted)]">Colophon</span>
              <p className="text-body text-xs text-[var(--text-muted)]">
                Designed & built as a creative notebook. <br/>
                Typeset in Cormorant Garamond, Inter, DM Mono, and Special Elite. <br/>
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
