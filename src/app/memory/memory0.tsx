import Image from "next/image";
import { useRef, useState } from "react";

// Tự động tạo mảng ảnh từ binhba1.jpg đến binhba6.jpg
const images = Array.from({ length: 6 }, (_, i) => `/memories/binhba/binhba${i + 1}.jpg`);
const romanticQuotes = [
  "Ba ngày trên đảo Bình Ba là những khoảnh khắc tuyệt vời nhất bên em.",
  "Nắm tay em đi dạo trên bãi biển, anh chỉ ước thời gian ngừng trôi.",
  "Mỗi ánh hoàng hôn trên đảo đều đẹp hơn khi có em bên cạnh.",
  "Cảm ơn em đã cùng anh tạo nên những kỷ niệm không thể nào quên.",
];

export default function Memory0() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse event handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    document.body.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
  };
  const onMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Snap to nearest image on scroll
  const onScroll = () => {
    if (!scrollRef.current) return;
    const scroll = scrollRef.current.scrollLeft;
    const width = 320 + 16; // image width + gap
    const idx = Math.round(scroll / width);
    setCurrent(idx);
  };

  return (
    <div className="text-center px-2">
      <h2 className="text-2xl font-bold mb-2 text-pink-600">Kỷ Niệm Du lịch Đầu Tiên</h2>
      <div className="mb-4 text-rose-700">
        {romanticQuotes.map((q, i) => (
          <p key={i} className="italic mb-1">{q}</p>
        ))}
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 mb-2 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent select-none"
        style={{ scrollSnapType: 'x mandatory', cursor: 'grab', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={onScroll}
        // Ẩn thanh scroll ngang
        tabIndex={0}
      >
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0" style={{ width: 320, scrollSnapAlign: 'center' }}>
            <Image
              src={img}
              alt={`Bình Ba ${i + 1}`}
              width={320}
              height={220}
              className="rounded-2xl object-cover mx-auto"
            />
          </div>
        ))}
      </div>
      <style>{`
        [tabindex="0"]::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full ${i === current ? "bg-pink-500" : "bg-pink-200"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
