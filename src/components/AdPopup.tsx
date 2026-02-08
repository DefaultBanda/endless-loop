import { useState, useEffect } from "react";
import { X } from "lucide-react";

import adImage from "@/assets/ADK.png";
import danImage from "@/assets/Dan.png";
import ayaImage from "@/assets/Aya.png";

const AD_MESSAGES = [
  "🔥 Hot singles in your area!",
  "⚡ Daniel Wants to fckkk!",
  "💰 Claim your boyfriend NOW!",
  "🎉 Congratulations! You've been selected to be on the bangbus!",
  "🚀 Free Viagra!",
];

const AD_IMAGES = [adImage, danImage, ayaImage];

const getRandomPosition = () => ({
  top: Math.random() * 50 + 10,
  left: Math.random() * 40 + 10,
});

const getRandomItem = <T,>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const AdPopup = () => {
  const [popups, setPopups] = useState<
    {
      id: number;
      message: string;
      image: string;
      top: number;
      left: number;
    }[]
  >([]);

  useEffect(() => {
    const spawnPopup = () => {
      const pos = getRandomPosition();

      setPopups((prev) => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          message: getRandomItem(AD_MESSAGES),
          image: getRandomItem(AD_IMAGES),
          ...pos,
        },
      ]);
    };

    const initialTimeout = setTimeout(spawnPopup, 3000);
    const interval = setInterval(
      spawnPopup,
      8000 + Math.random() * 7000
    );

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
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
            <span className="text-xs font-semibold text-primary-foreground">
              Sponsored
            </span>
            <button
              onClick={() => closePopup(popup.id)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3">
            <img
              src={popup.image}
              alt="Ad"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-sm font-medium text-foreground">
              {popup.message}
            </p>
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
