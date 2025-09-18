"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Developer from "./Cards/developerInfo";

interface CardData {
  id: number;
  imageUrl: string;
  name: string;
  role: string;
  description: React.ReactNode;
}

const cards: CardData[] = [
  {
    id: 1,
    imageUrl: "/assets/profile/1.png",
    name: "Eric Phan",
    role: "Front-end Developer",
    description: <Developer />,
  },
  {
    id: 2,
    imageUrl: "/assets/profile/2.png",
    name: "Jane Doe",
    role: "UI/UX Designer",
    description: <p>Thiết kế sản phẩm đẹp, tối ưu trải nghiệm người dùng.</p>,
  },
  {
    id: 3,
    imageUrl: "/assets/profile/3.png",
    name: "John Smith",
    role: "Photographer",
    description: <p>Chụp ảnh chuyên nghiệp, lưu giữ khoảnh khắc.</p>,
  },
  {
    id: 4,
    imageUrl: "/assets/profile/4.png",
    name: "John Smith",
    role: "Video Editor",
    description: <p>Dựng video sáng tạo, truyền tải câu chuyện hấp dẫn.</p>,
  },
  {
    id: 5,
    imageUrl: "/assets/profile/4.png",
    name: "John Smith",
    role: "Media Planner",
    description: <p>Lập kế hoạch truyền thông tối ưu hiệu quả chiến dịch.</p>,
  },
];

export default function ImageSwiper() {
  const [cardOrder, setCardOrder] = useState(() => cards.map((_, i) => i));
  const cardStackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const [swiping, setSwiping] = useState(false);
  const [swipeData, setSwipeData] = useState({ x: 0, rotation: 0 });

  const activeCard = useMemo(() => cards[cardOrder[0]], [cardOrder]);

  const startSwipe = useCallback((x: number) => {
    setSwiping(true);
    setSwipeData({ x: 0, rotation: 0 });
    startXRef.current = x;
  }, []);

  const duringSwipe = useCallback(
    (x: number) => {
      if (!swiping) return;
      const rotation = Math.max(-15, Math.min(15, x / 20));
      setSwipeData({ x, rotation });
    },
    [swiping]
  );

  const endSwipe = useCallback(
    (x: number) => {
      if (!swiping) return;
      setSwiping(false);

      const threshold = 120;
      if (Math.abs(x) > threshold) {
        setCardOrder((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }
      setSwipeData({ x: 0, rotation: 0 });
    },
    [swiping]
  );

  const nextCard = useCallback(() => {
    setCardOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  const prevCard = useCallback(() => {
    setCardOrder((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  }, []);

  useEffect(() => {
    const getX = (e: TouchEvent | MouseEvent) =>
      "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

    const onStart = (e: TouchEvent | MouseEvent) => {
      if (!cardStackRef.current) return;
      if (
        e.target instanceof HTMLElement &&
        cardStackRef.current.contains(e.target)
      ) {
        startSwipe(getX(e));
      }
    };

    const onMove = (e: TouchEvent | MouseEvent) => {
      if (swiping) duringSwipe(getX(e) - startXRef.current);
    };

    const onEnd = (e: TouchEvent | MouseEvent) => {
      if (swiping) endSwipe(getX(e) - startXRef.current);
    };

    window.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousedown", onStart);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);

      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [swiping, startSwipe, duringSwipe, endSwipe]);

  return (
    <main className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center w-full h-screen text-white overflow-hidden p-4 gap-8 md:gap-6">
      <div className="flex items-center justify-center md:justify-end text-center md:text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs"
          >
            <h2 className="text-2xl font-bold">{activeCard.name}</h2>
            <p className="text-primary">{activeCard.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevCard}
          className="flex-shrink-0 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={cardStackRef}
          className="relative w-[85vw] md:w-800 max-w-lg aspect-[3/4] flex items-center justify-center flex-shrink-0"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCard.id}
              src={activeCard.imageUrl}
              alt={activeCard.name}
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                transform: `translateX(${swipeData.x}px) rotate(${swipeData.rotation}deg)`,
              }}
              draggable={false}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-pink-500/70 to-transparent blur-sm"></div>
        </div>

        <button
          onClick={nextCard}
          className="flex-shrink-0 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center justify-center md:justify-start mt-6 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs"
          >
            {activeCard.description}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
