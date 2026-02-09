import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

import adk from "@/assets/ADK.png";
import dan from "@/assets/Dan.png";
import aya from "@/assets/Aya.png";

const AD_MESSAGES = [
  "🔥 Hot singles in your area!",
  "⚡ Daniel Wants to fckkk!",
  "💰 Claim your boyfriend NOW!",
  "🎉 Congratulations! You've been selected to be on the bangbus!",
  "🚀 Free Viagra!",
];

const AD_IMAGES = [
  { src: adk, label: "ADK" },
  { src: dan, label: "Dan" },
  { src: aya, label: "Aya" },
];

const getRandomPosition = () => ({
  top: Math.random() * 50 + 10,
  left: Math.random() * 40 + 10,
});

const getRandomItem = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const AdPopup = () => {
  const [popups, setPopups] = useState<
    { id: number; message: string; top: number; left: number; imageSrc: string; imageLabel: string }[]
  >([]);

  const timeoutRef = useRef<number | null>(null);
  const lastImageLabelRef = useRef<string | null>(null);

  useEffect(() => {
    // DEBUG: if these 3 URLs print the same (or 2 match), your imports are not distinct
    console.log("Image URLs:", { adk, dan, aya });

    const spawnPopup = () => {
      const pos = getRandomPosition();
      const msg = getRandomItem(AD_MESSAGES);

      // pick an image, but avoid repeating the same label back-to-back
      let picked = getRandomItem(AD_IMAGES);
      if (AD_IMAGES.length > 1) {
        while (picked.label === lastImageLabelRef.current) {
          picked = getRandomItem(AD_IMAGES);
        }
      }
      lastImageLabelRef.current = picked.label;

      setPopups((prev) => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          message: msg,
          imageSrc: picked.src,
          imageLabel: picked.label,
          ...pos,
        },
      ]);

      // 2–5 seconds (adjust if you want even faster)
      timeoutRef.current = window.setTimeout(spawnPopup, 900 + Math.random() * 700);
    };

    timeoutRef.current = window.setTimeout(spawnPopup, 1000);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const closePopup = (id: number) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {popups.map((popup) => (
        <div
          key={popup.id}
          className="fixed z-[100] bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          style={{
            top: `${popup.top}%`,
            left: `${popup.left}%`,
            maxWidth: 320,
            minWidth: 260,
          }}
        >
          <div className="flex items-center justify-between bg-primary px-3 py-1.5">
            <span className="text-xs font-semibold text-primary-foreground">Sponsored</span>
            <button
              onClick={() => closePopup(popup.id)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3">
            <img src={popup.imageSrc} alt="Ad" className="w-full rounded-lg mb-2" />
            <p className="text-[10px] opacity-70 mb-1">Image: {popup.imageLabel}</p>
            <p className="text-sm font-medium text-foreground">{popup.message}</p>

            <button className="mt-2 w-full py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity">
              Click Here!
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdPopup;
