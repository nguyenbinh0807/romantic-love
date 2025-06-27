"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

// Định nghĩa kiểu dữ liệu cho loveQuotes
interface LoveQuote {
  type: "romantic" | "apology" | "promise";
  message: string;
}

const loveQuotes: LoveQuote[] = [
	// Lãng mạn
	{ type: "romantic", message: "Tình yêu là khi em mỉm cười và thế giới như ngừng quay." },
	{ type: "romantic", message: "Dù đi đến tận cùng thế giới, trái tim anh vẫn hướng về em." },
	{ type: "romantic", message: "Có em bên đời, mọi khoảnh khắc đều trở nên lãng mạn." },
	{ type: "romantic", message: "Anh không hứa đi cùng em suốt đời, nhưng anh hứa sẽ yêu em trọn kiếp." },
	// { type: "romantic", message: "Tình yêu không cần hoàn hảo, chỉ cần chân thật." },
	// { type: "romantic", message: "Chỉ cần em ở bên, mọi khó khăn đều trở nên nhẹ nhàng." },
	// { type: "romantic", message: "Em là điều tuyệt vời nhất mà cuộc đời đã ban tặng cho anh." },
	// { type: "romantic", message: "Mỗi ngày bên em là một ngày hạnh phúc." },
	// { type: "romantic", message: "Anh yêu em không phải vì em là ai, mà vì anh là ai khi ở bên em." },
	// { type: "romantic", message: "Dù thế giới có đổi thay, tình cảm anh dành cho em vẫn mãi vẹn nguyên." },
	// Xin lỗi
	{ type: "apology", message: "Anh xin lỗi vì đã làm em buồn, anh sẽ cố gắng để không lặp lại điều đó." },
	// { type: "apology", message: "Anh biết mình đã sai, mong em tha thứ cho sự vô tâm của anh." },
	{ type: "apology", message: "Xin lỗi vì những lúc anh chưa đủ quan tâm, anh sẽ bù đắp cho em thật nhiều." },
	// { type: "apology", message: "Anh hối hận vì đã làm tổn thương em, cho anh một cơ hội để sửa sai nhé." },
	{ type: "apology", message: "Anh xin lỗi vì những lời nói khiến em đau lòng, anh sẽ học cách yêu thương em nhiều hơn." },
	// Lời hứa
	{ type: "promise", message: "Anh hứa sẽ luôn lắng nghe và thấu hiểu em." },
	// { type: "promise", message: "Anh hứa dù có chuyện gì xảy ra, anh cũng sẽ nắm tay em không buông." },
	{ type: "promise", message: "Anh hứa sẽ luôn là bờ vai vững chắc cho em tựa vào." },
	// { type: "promise", message: "Anh hứa sẽ cùng em vượt qua mọi khó khăn trong cuộc sống." },
	{ type: "promise", message: "Anh hứa sẽ yêu em bằng cả trái tim, hôm nay và mãi mãi." },
];

const memoryImages: string[] = [
	"/memories/binhba/main_binhba.jpg",
	// Add more memory image paths here
];

// Định nghĩa kiểu dữ liệu cho message
interface Message {
  message: string;
  date: string;
}

export default function RomanticLoveWebsite() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);
	const [loveMessage, setLoveMessage] = useState<string>("");
	const [loveMessages, setLoveMessages] = useState<Message[]>([]);

	useEffect(() => {
		// Hiệu ứng trái tim rơi
		const fallingInterval = setInterval(() => {
			const heart = document.createElement("div");
			const fallingHearts = ["💗", "❤️", "💕"];
			heart.innerText =
				fallingHearts[Math.floor(Math.random() * fallingHearts.length)];
			heart.className =
				"heart fixed text-2xl pointer-events-none select-none z-10";
			heart.style.left = Math.random() * 100 + "vw";
			heart.style.animationDuration = 4 + Math.random() * 3 + "s";
			heart.style.color = `hsl(${320 + Math.random() * 40}, 70%, ${
				60 + Math.random() * 20
			}%)`;

			document.body.appendChild(heart);

			setTimeout(() => {
				heart.remove();
			}, 7000);
		}, 600);

		// Hiệu ứng trái tim ẩn hiện ngẫu nhiên (nhẹ nhàng)
		const floatingInterval = setInterval(() => {
			const heart = document.createElement("div");
			const heartEmojis = ["💕", "💖", "💗", "💝", "🌸", "✨"];
			heart.innerText =
				heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
			heart.className = "floating-heart fixed pointer-events-none select-none z-10";

			// Vị trí ngẫu nhiên
			heart.style.left = Math.random() * 80 + 10 + "vw";
			heart.style.top = Math.random() * 70 + 15 + "vh";
			heart.style.fontSize = 1.2 + Math.random() * 0.8 + "rem";
			heart.style.animationDuration = 5 + Math.random() * 3 + "s";
			heart.style.filter = `hue-rotate(${Math.random() * 60}deg)`;

			document.body.appendChild(heart);

			setTimeout(() => {
				heart.remove();
			}, 8000);
		}, 2500);

		// Hiệu ứng trái tim nhấp nháy ở góc (giảm tần suất)
		const blinkingInterval = setInterval(() => {
			const heart = document.createElement("div");
			const cornerHearts = ["💖", "💘", "💓"];
			heart.innerText =
				cornerHearts[Math.floor(Math.random() * cornerHearts.length)];
			heart.className = "blinking-heart fixed pointer-events-none select-none z-10";

			// Vị trí ở các góc màn hình
			const positions = [
				{ left: "5%", top: "15%" },
				{ right: "5%", top: "15%" },
				{ left: "5%", bottom: "25%" },
				{ right: "5%", bottom: "25%" },
			];
			const pos = positions[Math.floor(Math.random() * positions.length)];

			Object.assign(heart.style, pos);
			heart.style.fontSize = "1.8rem";

			document.body.appendChild(heart);

			setTimeout(() => {
				heart.remove();
			}, 4000);
		}, 3000);

		// Hiệu ứng tia sáng lãng mạn
		const sparkleInterval = setInterval(() => {
			const sparkle = document.createElement("div");
			sparkle.innerText = "✨";
			sparkle.className = "sparkle fixed pointer-events-none select-none z-10";

			sparkle.style.left = Math.random() * 100 + "vw";
			sparkle.style.top = Math.random() * 100 + "vh";
			sparkle.style.fontSize = 0.8 + Math.random() * 0.6 + "rem";

			document.body.appendChild(sparkle);

			setTimeout(() => {
				sparkle.remove();
			}, 3000);
		}, 1500);

		return () => {
			clearInterval(fallingInterval);
			clearInterval(floatingInterval);
			clearInterval(blinkingInterval);
			clearInterval(sparkleInterval);
		};
	}, []);

	useEffect(() => {
		fetch("/api/love-messages")
			.then(res => res.json())
			.then((data: Message[]) => {
				if (Array.isArray(data)) setLoveMessages(data);
			});
	}, []);

	const handleMemoryClick = async (id: string) => {
		try {
			const imported = await import(`@/app/memory/${id}`);
			const MemoryComponent = imported.default;
			if (MemoryComponent) {
				setModalContent(<MemoryComponent />);
				setShowModal(true);
			} else {
				setModalContent(<div>Không tìm thấy kỷ niệm này.</div>);
				setShowModal(true);
			}
		} catch (error) {
			setModalContent(<div>Lỗi khi tải kỷ niệm: {String(error)}</div>);
			setShowModal(true);
		}
	};

	return (
		<div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-red-100 text-red-800 p-4">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
				<div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-25 animate-bounce"></div>
				<div className="absolute bottom-20 left-1/4 w-20 h-20 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
				<div className="absolute bottom-32 right-1/3 w-28 h-28 bg-pink-300 rounded-full opacity-15 animate-bounce"></div>
			</div>

			<header className="text-center py-12 relative z-20">
				<h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent animate-pulse">
					Ký Ức Tình Yêu ❤️
				</h1>
				<p className="text-2xl italic text-red-700 max-w-2xl mx-auto leading-relaxed">
					&ldquo;Tình yêu là hành trình mà mỗi khoảnh khắc đều là một kỷ niệm
					vô giá&rdquo;
				</p>
				<div className="mt-6 flex justify-center space-x-4">
					<span className="text-3xl animate-bounce">💕</span>
					<span className="text-3xl animate-pulse">💖</span>
					<span
						className="text-3xl animate-bounce"
						style={{ animationDelay: "0.5s" }}
					>
						💗
					</span>
				</div>
			</header>

			<section className="max-w-4xl mx-auto relative z-20">
				<h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
					Những câu nói ngọt ngào 💝
				</h2>
				<div className="grid gap-6">
					{loveQuotes.map((quote, index) => (
						<Card
							key={index}
							className="bg-white/70 backdrop-blur-sm shadow-2xl rounded-3xl border border-pink-200 hover:shadow-pink-200/50 hover:scale-105 transition-all duration-500 hover:bg-white/80"
						>
							<CardContent className="p-8 flex items-center gap-6">
								<div className="text-red-500 animate-pulse">
									<Heart className="w-8 h-8" />
								</div>
								<p className="text-xl text-red-800 font-medium leading-relaxed">
									{quote.message}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto mt-16 relative z-20">
				<h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
					Hành trình yêu thương của chúng ta 💑
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{memoryImages.map((src, index) => (
						<div
							key={index}
							className="group relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-3 hover:shadow-pink-300/50"
						>
							<div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent z-10 pointer-events-none"></div>
							<div className="group relative">
								<Image
									src={src}
									alt={`Memory ${index + 1}`}
									width={500}
									height={400}
									className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<button
									className="cursor-pointer absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all z-20"
									onClick={(e) => {
										e.stopPropagation();
										console.log("Detail button clicked for memory:", `memory${index}`);
										handleMemoryClick(`memory${index}`);
									}}
									style={{ pointerEvents: 'auto' }}
								>
									Xem chi tiết
								</button>
							</div>
						</div>
					))}

					{/* Placeholder cards cho tương lai */}
					{[...Array(5)].map((_, index) => (
						<div
							key={`placeholder-${index}`}
							className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-red-100 h-72 flex items-center justify-center transform transition-all duration-700 hover:scale-105 hover:shadow-pink-300/50"
						>
							<div className="text-center text-red-400">
								<div className="text-4xl mb-2">📸</div>
								<p className="text-sm font-medium">Kỷ niệm tương lai</p>
								<p className="text-xs opacity-70">Đang chờ được tạo...</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-4xl mx-auto mt-16 relative z-20">
				<h2 className="text-3xl font-bold mb-10 text-center text-red-600">
					Gửi lời yêu thương 💌
				</h2>
				<div className="text-center flex flex-col items-center">
					<textarea
						className="w-full max-w-lg p-4 rounded-lg border border-pink-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
						rows={4}
						placeholder="Nhập lời yêu thương của bạn..."
						value={loveMessage}
						onChange={(e) => setLoveMessage(e.target.value)}
					></textarea>
					<div className="w-full flex justify-center mt-4">
						<button
							className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
							style={{ minWidth: 120 }}
							onClick={async () => {
								// Gửi lời yêu thương lên server (API route)
								await fetch("/api/love-messages", {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: loveMessage, date: new Date().toISOString() })
								});
								setLoveMessages(prev => [...prev, { message: loveMessage, date: new Date().toISOString() }]);
							}}
						>
							Gửi
						</button>
					</div>
				</div>
				{loveMessages.length > 0 && (
					<div className="mt-8">
						<h3 className="text-xl font-semibold mb-2 text-pink-700">Những lời yêu thương đã gửi</h3>
						<ul className="space-y-2">
							{loveMessages.map((msg, idx) => (
								<li key={idx} className="bg-pink-50 rounded-lg px-4 py-2 text-left shadow flex items-center justify-between">
									<div>
										<span className="block text-red-700 font-medium">{msg.message}</span>
										<span className="block text-xs text-gray-400">{new Date(msg.date).toLocaleString()}</span>
									</div>
									<button
										className="ml-4 px-2 py-1 text-xs bg-red-200 hover:bg-red-400 text-red-700 rounded transition-all"
										onClick={async () => {
											await fetch(`/api/love-messages?date=${encodeURIComponent(msg.date)}`, { method: "DELETE" });
											setLoveMessages(loveMessages.filter((m, i) => i !== idx));
										}}
									>
										Xóa
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</section>

			<footer className="text-center py-12 mt-24 text-red-600 relative z-20">
				<div className="max-w-md mx-auto">
					<div className="flex justify-center space-x-2 mb-4">
						<span className="text-2xl animate-pulse">💕</span>
						<span className="text-2xl animate-bounce">❤️</span>
						<span
							className="text-2xl animate-pulse"
							style={{ animationDelay: "0.5s" }}
						>
							💖
						</span>
						<span
							className="text-2xl animate-bounce"
							style={{ animationDelay: "1s" }}
						>
							💗
						</span>
						<span
							className="text-2xl animate-pulse"
							style={{ animationDelay: "1.5s" }}
						>
							💝
						</span>
					</div>
					<p className="text-lg font-medium mb-2">© 2025 Ký Ức Tình Yêu</p>
					<p className="text-sm opacity-80">
						Được tạo bằng cả trái tim và tình yêu vô tận ❤️✨
					</p>
				</div>
			</footer>

			{showModal && (
				<div
					className="fixed inset-0 bg-white/60 flex items-center justify-center z-50 backdrop-blur-sm"
					onClick={() => setShowModal(false)}
				>
					<div
						className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-xl relative"
						onClick={e => e.stopPropagation()}
					>
						{modalContent}
					</div>
				</div>
			)}

			{/* CSS cho hiệu ứng trái tim */}
			<style jsx>{`
				.heart {
					top: -40px;
					animation: fallFade var(--duration, 6s) linear forwards;
					opacity: 0;
					z-index: 5;
				}

				.floating-heart {
					animation: floatAndFade var(--duration, 6s) ease-in-out forwards;
					opacity: 0;
					z-index: 5;
				}

				.blinking-heart {
					animation: blinkAndFade 4s ease-in-out forwards;
					opacity: 0;
					z-index: 5;
				}

				.sparkle {
					animation: sparkleEffect 3s ease-in-out forwards;
					opacity: 0;
					z-index: 5;
				}

				@keyframes fallFade {
					0% {
						transform: translateY(0) rotate(0deg);
						opacity: 0;
					}
					10% {
						opacity: 0.8;
					}
					50% {
						opacity: 1;
					}
					90% {
						opacity: 0.8;
					}
					100% {
						transform: translateY(100vh) rotate(360deg);
						opacity: 0;
					}
				}

				@keyframes floatAndFade {
					0% {
						transform: scale(0) rotate(0deg);
						opacity: 0;
					}
					15% {
						transform: scale(0.8) rotate(5deg);
						opacity: 0.6;
					}
					40% {
						transform: scale(1.1) rotate(-3deg);
						opacity: 1;
					}
					70% {
						transform: scale(1) rotate(2deg);
						opacity: 0.8;
					}
					100% {
						transform: scale(0) rotate(8deg);
						opacity: 0;
					}
				}

				@keyframes blinkAndFade {
					0% {
						opacity: 0;
						transform: scale(0) rotate(0deg);
					}
					20% {
						opacity: 0.7;
						transform: scale(1.2) rotate(5deg);
					}
					40% {
						opacity: 0.4;
						transform: scale(0.9) rotate(-3deg);
					}
					60% {
						opacity: 1;
						transform: scale(1.1) rotate(2deg);
					}
					80% {
						opacity: 0.6;
						transform: scale(1) rotate(-1deg);
					}
					100% {
						opacity: 0;
						transform: scale(0) rotate(0deg);
					}
				}

				@keyframes sparkleEffect {
					0% {
						opacity: 0;
						transform: scale(0) rotate(0deg);
					}
					20% {
						opacity: 1;
						transform: scale(1.5) rotate(90deg);
					}
					50% {
						opacity: 0.8;
						transform: scale(1) rotate(180deg);
					}
					80% {
						opacity: 0.6;
						transform: scale(1.2) rotate(270deg);
					}
					100% {
						opacity: 0;
						transform: scale(0) rotate(360deg);
					}
				}

				/* Hiệu ứng gradient cho background */
				@keyframes gradientShift {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			`}</style>
		</div>
	);
}
