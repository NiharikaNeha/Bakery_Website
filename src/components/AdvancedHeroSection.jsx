import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 2D Canvas Component
function FallbackCanvas({ canvasRef }) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationFrame;
    let rotation = 0;

    const draw3DCake = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);

      // Draw animated cake with 3D effect
      const gradient = ctx.createLinearGradient(-60, -60, 60, 60);
      gradient.addColorStop(0, "#8B4513");
      gradient.addColorStop(0.5, "#D2691E");
      gradient.addColorStop(1, "#DEB887");

      // Cake layers
      ctx.fillStyle = gradient;
      ctx.fillRect(-60, -40, 120, 80);

      // Frosting
      ctx.fillStyle = "#FFC0CB";
      ctx.beginPath();
      ctx.ellipse(0, -60, 50, 20, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cherry
      ctx.fillStyle = "#DC143C";
      ctx.beginPath();
      ctx.arc(0, -70, 10, 0, Math.PI * 2);
      ctx.fill();

      // Sparkles
      ctx.strokeStyle = "#FFD700";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      rotation += 0.01;
      animationFrame = requestAnimationFrame(draw3DCake);
    };

    draw3DCake();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

const AdvancedHeroSection = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // GSAP Timeline for text animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    // Animate headline
    tl.fromTo(
      headlineRef.current,
      {
        y: 100,
        opacity: 0,
        skewY: 5,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        scale: 1,
        duration: 1.2,
      },
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
        },
        "-=0.6",
      )
      // Animate buttons
      .fromTo(
        buttonsRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4",
      );

    // ScrollTrigger for parallax
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Parallax text
        gsap.to(headlineRef.current, {
          y: progress * -150,
          scale: 1 - progress * 0.2,
          ease: "none",
        });

        gsap.to(subtitleRef.current, {
          y: progress * -75,
          opacity: 1 - progress * 0.5,
          ease: "none",
        });
      },
    });
  }, [isLoaded]);

  const handleOrderNow = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleViewMenu = () => {
    window.location.href = "/products";
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-secondary/20"
    >
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50 50-22.386 50-50zm0 10c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 text-4xl opacity-20"
      >
        🧁
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute top-20 right-20 text-5xl opacity-20"
      >
        🥐
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 text-3xl opacity-20"
      >
        🥖
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-surface px-4 py-2 rounded-full border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary-dark">
                Artisan Quality
              </span>
            </motion.div>

            {/* Enhanced Headline */}
            <h1
              ref={headlineRef}
              className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance"
            >
              <span className="block bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
                Artisan Baked
              </span>
              <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
                Perfection
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed font-body"
            >
              Experience the art of premium baking, where every creation is
              crafted with passion, precision, and the finest ingredients
              sourced from around the world.
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start pt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(251, 146, 60, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderNow}
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary-dark text-white px-10 py-5 rounded-full font-bold text-xl shadow-strong transition-all duration-300 font-heading"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Order Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewMenu}
                className="group bg-white/90 backdrop-blur-md text-text-primary border-2 border-primary/20 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 font-heading shadow-medium hover:shadow-strong"
              >
                <span className="flex items-center justify-center gap-3">
                  View Menu
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-medium text-gray-600 pt-10"
            >
              <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                <span className="text-amber-500">⭐</span>
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                <span className="text-green-500">✓</span>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                <span className="text-pink-500">❤️</span>
                <span>Handmade</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D/2D Canvas */}
          <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last mb-10 lg:mb-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md h-64 sm:h-96 lg:h-[600px]">
              {/* Enhanced Glow Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.1, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 rounded-full blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full blur-2xl opacity-30"
              />

              {/* 2D Canvas - Enhanced Animation */}
              <div className="relative z-10 w-full h-full">
                <FallbackCanvas canvasRef={canvasRef} />
              </div>

              {/* Enhanced Decorative Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? "bg-[#F59E0B]" : "bg-[#EC4899]"}`}
                  style={{
                    top: `${10 + i * 12}%`,
                    left: `${5 + i * 12}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-gray-500 text-center"
        >
          <div className="w-7 h-12 border-2 border-gray-300 rounded-full flex justify-center mb-2">
            <motion.div
              className="w-1 h-4 bg-gradient-to-b from-amber-500 to-pink-500 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-sm font-medium">Explore our delights</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AdvancedHeroSection;
