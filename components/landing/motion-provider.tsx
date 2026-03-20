"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    /* --- Scroll progress bar --- */
    const progress = document.getElementById("progress");
    if (progress) {
      const onScroll = () => {
        const pct =
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100;
        progress.style.width = pct + "%";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  /* --- Magnetic buttons (desktop) --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isMobile) return;

    const magnetics = document.querySelectorAll(".magnetic");
    const handlers: Array<{
      el: Element;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    magnetics.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const leave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      };
      el.addEventListener("mousemove", move as EventListener);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move as EventListener);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  /* --- Hero animation --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.set(".hero__headline", { y: 30 });
    gsap.set(".hero__sub", { y: 20 });
    gsap.set(".hero__actions", { y: 20 });
    gsap.set(".dossier-mock", { y: 40, scale: 0.97 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(".hero__eyebrow", { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to(
        ".hero__headline",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .to(
        ".hero__sub",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .to(
        ".hero__actions",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .to(
        ".dossier-mock",
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  /* --- Scroll reveals --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    const triggers: ScrollTrigger[] = [];

    reveals.forEach((el, i) => {
      const anim = gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: el.closest(".problem-right, .modes, .workflows")
          ? (i % 3) * 0.1
          : 0,
      });
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  /* --- Stat counter --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const counters = document.querySelectorAll("[data-count]");
    const triggers: ScrollTrigger[] = [];

    counters.forEach((el) => {
      const target = parseInt(
        (el as HTMLElement).dataset.count || "0",
        10
      );
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to({ v: 0 }, {
            v: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = String(Math.round(this.targets()[0].v));
            },
          });
        },
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  /* --- Horizontal scroll (Why Now) --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const hTrack = document.getElementById("h-track");
    const hSection = document.querySelector(".horizontal");

    if (!hTrack || !hSection || window.innerWidth <= 640) return;

    const totalScroll = () => hTrack.scrollWidth - window.innerWidth + 40;

    const anim = gsap.to(hTrack, {
      x: () => -totalScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: hSection,
        pin: true,
        scrub: 0.8,
        end: () => "+=" + totalScroll(),
        invalidateOnRefresh: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
    };
  }, []);

  /* --- Trace timeline progress --- */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const traceProgress = document.getElementById("trace-progress");
    const traceSteps = gsap.utils.toArray<HTMLElement>(".trace__step");

    if (!traceProgress || !traceSteps.length) return;

    const traceContainer = document.querySelector(".trace");
    const triggers: ScrollTrigger[] = [];

    if (traceContainer) {
      const st = ScrollTrigger.create({
        trigger: traceContainer,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
        onUpdate: (self) => {
          traceProgress.style.setProperty(
            "--h",
            self.progress * 100 + "%"
          );
        },
      });
      triggers.push(st);
    }

    const style = document.createElement("style");
    style.textContent =
      ".trace__progress::after { height: var(--h, 0%) !important; }";
    document.head.appendChild(style);

    traceSteps.forEach((step) => {
      const st = ScrollTrigger.create({
        trigger: step,
        start: "top 70%",
        once: true,
        onEnter: () => step.classList.add("is-active"),
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      style.remove();
    };
  }, []);

  return <>{children}</>;
}
