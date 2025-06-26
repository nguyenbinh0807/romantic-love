import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

const loveQuotes = [
  "Tình yêu là khi em mỉm cười và thế giới như ngừng quay.",
  "Dù đi đến tận cùng thế giới, trái tim anh vẫn hướng về em.",
  "Có em bên đời, mọi khoảnh khắc đều trở nên lãng mạn.",
  "Anh không hứa đi cùng em suốt đời, nhưng anh hứa sẽ yêu em trọn kiếp.",
  "Tình yêu không cần hoàn hảo, chỉ cần chân thật.",
];

const memoryImages = [
  "/memories/vo.jpg",
  // "/memories/beach_trip.jpg",
  // "/memories/sunset_kiss.jpg",
  // "/memories/love_lock.jpg",
  // "/memories/anniversary.jpg"
];

export default function RomanticLoveWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 text-red-800 p-4">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold mb-4">Ký Ức Tình Yêu ❤️</h1>
        <p className="text-xl italic">
          &ldquo;Tình yêu là hành trình mà mỗi khoảnh khắc đều là một kỷ niệm vô giá&rdquo;
        </p>
      </header>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Những câu nói ngọt ngào</h2>
        <div className="grid gap-4">
          {loveQuotes.map((quote, index) => (
            <Card key={index} className="bg-white bg-opacity-60 shadow-lg rounded-2xl">
              <CardContent className="p-6 flex items-center gap-4">
                <Heart className="text-red-500" />
                <p className="text-lg">{quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Hành trình yêu thương của chúng ta 💑</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memoryImages.map((src, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={src}
                alt={`Memory ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 mt-20 text-sm text-red-600">
        © 2025 Ký Ức Tình Yêu. Được tạo bằng cả trái tim ❤️
      </footer>
    </div>
  );
}
