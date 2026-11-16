"use client";
import { useEffect, useRef } from "react";
import { officeHtml } from "./content";
import "./office.css";

export default function OurOfficeDesignPage() {
  const root = useRef(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = [...el.querySelectorAll("#odGallery .od-gitem")];
    const lb = el.querySelector("#odLb");
    const main = el.querySelector("#odMain");
    const bg = el.querySelector("#odBg");
    const lbImg = el.querySelector("#odLbImg");
    const stage = el.querySelector("#odStage");
    if (!items.length || !lb || !main || !stage) return;
    let cur = 0;
    let touchX = null;
    const cleanups = [];
    const on = (target, event, fn, opts) => {
      if (!target) return;
      target.addEventListener(event, fn, opts);
      cleanups.push(() => target.removeEventListener(event, fn, opts));
    };
    function show(index) {
      cur = (index + items.length) % items.length;
      const thumb = items[cur].querySelector("img");
      if (!thumb) return;
      const caption = items[cur].getAttribute("data-cap") || thumb.alt || "";
      main.src = thumb.src;
      main.alt = caption;
      bg.src = thumb.src;
      lbImg.src = thumb.src;
      lbImg.alt = caption;
      el.querySelector("#odVcap").textContent = caption;
      el.querySelector("#odVcount").textContent = `${cur + 1} / ${items.length}`;
      el.querySelector("#odCap").textContent = caption;
      el.querySelector("#odCount").textContent = `${cur + 1} / ${items.length}`;
    }
    function open() { lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    on(stage, "click", open);
    on(el.querySelector(".vprev"), "click", () => show(cur - 1));
    on(el.querySelector(".vnext"), "click", () => show(cur + 1));
    on(lb.querySelector(".x"), "click", close);
    on(lb.querySelector(".pv"), "click", () => show(cur - 1));
    on(lb.querySelector(".nx"), "click", () => show(cur + 1));
    on(lb, "click", e => { if (e.target === lb) close(); });
    on(document, "keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    for (const target of [lb, stage]) {
      on(target, "touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
      on(target, "touchend", e => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) { show(cur + (dx < 0 ? 1 : -1)); e.preventDefault(); }
        touchX = null;
      });
    }
    show(0);
    return () => { cleanups.forEach(fn => fn()); document.body.style.overflow = ""; };
  }, []);
  return <div ref={root} className="officePage" dangerouslySetInnerHTML={{ __html: officeHtml }} />;
}
