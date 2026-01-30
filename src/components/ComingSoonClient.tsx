"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ComingSoonClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-4 text-center">
      {/* Leaves */}
      <CornerLeaf
        position="top-0 left-0"
        style={{ transform: "scaleY(-1)" }}
        delay={0}
      />
      <CornerLeaf
        position="top-0 right-0"
        style={{ transform: "scale(-1,-1)" }}
        delay={0.8}
      />
      <CornerLeaf position="bottom-0 left-0" delay={0.4} />
      <CornerLeaf
        position="bottom-0 right-0"
        style={{ transform: "scaleX(-1)" }}
        delay={1.2}
      />

      <div className="z-10 w-full max-w-2xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-28 w-72 md:h-40 md:w-96">
            <Image
              src="/LeafandRootsLogo.png"
              alt="Leaf & Root Logo"
              fill
              priority
              sizes="(max-width: 768px) 280px, 384px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-800">
            COMING SOON
          </span>

          <h1 className="mb-4 text-4xl font-bold md:text-6xl text-neutral-800">
            Nourishing Your <span className="text-green-700">World</span>
          </h1>

          <p className="mb-10 text-lg font-light text-neutral-600 md:text-xl">
            Freshness is on its way. Premium organic living, rooted in quality.
          </p>
        </motion.div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative mx-auto max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full rounded-full border-2 text-black px-6 pr-14 shadow-xl placeholder:text-black focus:border-green-500 focus:ring-4 focus:ring-green-100"
            />
            <button
              type="submit"
              disabled={!email}
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white hover:bg-green-800 disabled:opacity-50"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          <div className="mx-auto max-w-md rounded-full border border-green-100 bg-green-50 p-4 text-green-800 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            You're on the list 🌱
          </div>
        )}

        <p className="mt-4 text-xs text-neutral-400">
          No spam. Only fresh updates.
        </p>
      </div>
    </main>
  );
}

function CornerLeaf({
  position,
  style,
  delay,
}: {
  position: string;
  style?: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} pointer-events-none`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="relative h-64 w-64 md:h-96 md:w-96"
      >
        <Image
          src="/leafImage.png"
          alt=""
          fill
          sizes="(max-width: 768px) 256px, 384px"
          loading="lazy"
          className="object-contain mix-blend-multiply opacity-90"
        />
      </motion.div>
    </motion.div>
  );
}
