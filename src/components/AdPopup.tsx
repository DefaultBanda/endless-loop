import { useState, useEffect, useRef } from "react";
import { X, Bell } from "lucide-react";

import adk from "@/assets/ADK.png";
import dan from "@/assets/Dan.png";
import aya from "@/assets/Aya.png";

const AD_MESSAGES = [
  "🔥 Hot singles in your area! CALGARY",
  "⚡ Daniel wants to hang out!",
  "💰 Claim your boyfriend NOW!",
  "🎉 You've been selected for the bangbus!",
  "🚀 Free Viagra!",
];

const NOTIFICATION_MESSAGES = [
  "Dan just uploaded a new video 🎬",
  "Ayan is live right now! 🔴",
  "Thorin commented on your post 💬",
  "New ThorinStar trending: Dan 📈",
  "Ayan liked your comment ❤️",
  "Dan started following you 👀",
  "Thorin uploaded: 'Oakenshield Unboxing' 🪓",
  "Ayan posted in Community 💬",
];

const AD_IMAGES = [
  { src: adk, label: "ADK" },
  { src: dan, label: "Dan" },
  { src: aya, label: "Aya" },
];

const getRandomItem = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const getRandomPosition = () => ({
  top: Math.random() * 50 + 10,
  left: Math.random() * 40 + 10,
});

const AdPopup = () => {
  const [popups, setPopups] = useState<
    { id: number; message: string; top: number; left: number; imageSrc: string; imageLabel: string }[]
  >([]);
  const [notifications, setNotifications] = useState<
    { id: number; message: string }[]
  >([]);

  const timeoutRef = useRef<number | null>(null);
  const lastImageLabelRef = useRef<string | null>(null);
  const isNotificationTurn = useRef(false);

  useEffect(() => {
    const spawn = () => {
      if (isNotificationTurn.current) {
        // Spawn a notification toast (top-right)
        const msg = getRandomItem(NOTIFICATION_MESSAGES);
        setNotifications((prev) => [
          ...prev.slice(-2),
          { id: Date.now(), message: msg },
        ]);

        // Auto-dismiss after 4s
        const id = Date.now();
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 4000);
      } else {
        // Spawn a popup ad
        const pos = getRandomPosition();
        const msg = getRandomItem(AD_MESSAGES);

        let picked = getRandomItem(AD_IMAGES);
        if (AD_IMAGES.length > 1) {
          while (picked.label === lastImageLabelRef.current) {
            picked = getRandomItem(AD_IMAGES);
          }
        }
        lastImageLabelRef.current = picked.label;

        setPopups((prev) => [
          ...prev.slice(-1), // max 2 popups at once
          {
            id: Date.now(),
            message: msg,
            imageSrc: picked.src,
            imageLabel: picked.label,
            ...pos,
          },
        ]);
      }

      isNotificationTurn.current = !isNotificationTurn.current;
      // Slower: 4-8 seconds between spawns
      timeoutRef.current = window.setTimeout(spawn, 4000 + Math.random() * 4000);
    };

    timeoutRef.current = window.setTimeout(spawn, 3000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const closePopup = (id: number) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  const closeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* Popup ads */}
      {popups.map((popup) => (
        <div
          key={popup.id}
          className="fixed z-[100] bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          style={{
            top: `${popup.top}%`,
            left: `${popup.left}%`,
            maxWidth: 300,
            minWidth: 240,
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
            <p className="text-sm font-medium text-foreground">{popup.message}</p>
            <button className="mt-2 w-full py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity">
              Click Here!
            </button>
          </div>
        </div>
      ))}

      {/* Notification toasts — top right */}
      <div className="fixed top-16 right-4 z-[101] flex flex-col gap-2 w-72">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="bg-card border border-border rounded-lg shadow-lg p-3 flex items-start gap-3 animate-in slide-in-from-right duration-300"
          >
            <Bell className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground flex-1">{notif.message}</p>
            <button
              onClick={() => closeNotification(notif.id)}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdPopup;
