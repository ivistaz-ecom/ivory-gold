"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 relative overflow-hidden">
            {/* 404 Number */}
            <div className="relative mb-6">
                <div
                    className={`text-9xl md:text-[12rem] font-bold text-[#D4AF37] transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                    style={{
                        textShadow: "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.4), 0 0 90px rgba(212, 175, 55, 0.2)",
                        animation: mounted ? "glow 2s ease-in-out infinite" : "none",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    404
                </div>
                {/* Gold Shine Overlay */}
                <div
                    className={`absolute inset-0 text-9xl md:text-[12rem] font-bold transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.8) 45%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 215, 0, 0.8) 55%, transparent 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: mounted ? "shine 3s linear infinite" : "none",
                        zIndex: 2,
                    }}
                >
                    404
                </div>
            </div>

            {/* Page Not Found Text */}
            <h2
                className={`text-2xl md:text-3xl font-light mb-8 text-gray-300 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
            >
                Page Not Found
            </h2>

            {/* Button */}
            <Link
                href="/"
                className={`bg-[#D4AF37] hover:bg-white hover:text-black text-black font-medium px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                style={{
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
                }}
            >
                Return to Home
            </Link>

            {/* Subtle Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37] rounded-full opacity-10 blur-3xl"
                    style={{
                        animation: "pulse 4s ease-in-out infinite",
                    }}
                />
            </div>

            <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 30px rgba(212, 175, 55, 0.6),
              0 0 60px rgba(212, 175, 55, 0.4),
              0 0 90px rgba(212, 175, 55, 0.2);
          }
          50% {
            text-shadow: 0 0 50px rgba(212, 175, 55, 0.9),
              0 0 100px rgba(212, 175, 55, 0.7),
              0 0 150px rgba(212, 175, 55, 0.4);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.15;
          }
        }
      `}</style>
        </div>
    );
}
