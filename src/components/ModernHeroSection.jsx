import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ModernHeroSection = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state
    setIsLoaded(true);

    // Create 3D canvas animation
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Animated 3D cake visualization
      let animationFrame;
      let rotation = 0;

      const draw3DCake = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Save context state
        ctx.save();

        // Move to center
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Apply rotation
        ctx.rotate(rotation);

        // Draw cake layers (3D effect)
        const layers = [
          { y: -60, width: 120, height: 20, color: "#8B4513" }, // Bottom layer
          { y: -40, width: 100, height: 20, color: "#D2691E" }, // Middle layer
          { y: -20, width: 80, height: 20, color: "#DEB887" }, // Top layer
        ];

        // Draw cake layers with 3D effect
        layers.forEach((layer, index) => {
          // Front face
          ctx.fillStyle = layer.color;
          ctx.fillRect(-layer.width / 2, layer.y, layer.width, layer.height);

          // Top face (3D effect)
          ctx.fillStyle =
            index === 0 ? "#A0522D" : index === 1 ? "#DEB887" : "#F5DEB3";
          ctx.beginPath();
          ctx.moveTo(-layer.width / 2, layer.y);
          ctx.lineTo(-layer.width / 2 + 10, layer.y - 10);
          ctx.lineTo(layer.width / 2 + 10, layer.y - 10);
          ctx.lineTo(layer.width / 2, layer.y);
          ctx.closePath();
          ctx.fill();
        });

        // Draw frosting on top
        ctx.fillStyle = "#FFC0CB";
        ctx.beginPath();
        ctx.ellipse(0, -30, 40, 15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw cherry on top
        ctx.fillStyle = "#DC143C";
        ctx.beginPath();
        ctx.arc(0, -35, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw decoration
        ctx.strokeStyle = "#FFD700";
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(0, 0, 70, 0, Math.PI * 2);
        ctx.stroke();

        // Restore context state
        ctx.restore();

        // Update rotation
        rotation += 0.005;

        animationFrame = requestAnimationFrame(draw3DCake);
      };

      draw3DCake();

      // Mouse interaction
      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Tilt effect would be handled here with 3D transforms
        ctx.save();
        ctx.transform(1 + x * 0.1, 0, 0, 1 + y * 0.1, 0, 0);
      };

      canvas.addEventListener("mousemove", handleMouseMove);

      return () => {
        cancelAnimationFrame(animationFrame);
        canvas.removeEventListener("mousemove", handleMouseMove);
      };
    }

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
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.2,
      },
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6",
      )
      // Animate buttons
      .fromTo(
        buttonsRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
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

    // ScrollTrigger for parallax effect
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Parallax text
        gsap.to(headlineRef.current, {
          y: progress * -100,
          ease: "none",
        });

        gsap.to(subtitleRef.current, {
          y: progress * -50,
          ease: "none",
        });

        // Scale down canvas on scroll
        gsap.to(canvasRef.current, {
          scale: 1 - progress * 0.3,
          rotation: progress * 10,
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  const handleOrderNow = () => {
    // Smooth scroll to products or order section
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleViewMenu = () => {
    // Navigate to products page
    window.location.href = "/products";
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 text-6xl opacity-20"
      >
        🧁
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 text-6xl opacity-20"
      >
        🥐
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent leading-[1.1] text-balance"
            >
              Artisan Baked
              <br className="hidden sm:block" />
              <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                Perfection
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed font-body"
            >
              Indulge in our handcrafted delights, where every bite tells a
              story of passion, tradition, and the finest ingredients baked with
              love.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start pt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleOrderNow}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-semibold text-lg lg:text-xl shadow-medium hover:shadow-strong transition-all duration-300 font-heading"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Order Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewMenu}
                className="group bg-white/80 backdrop-blur-sm text-text-primary border-2 border-primary/20 px-8 py-4 lg:px-10 lg:py-5 rounded-full font-semibold text-lg lg:text-xl transition-all duration-300 font-heading shadow-soft hover:shadow-medium"
              >
                <span className="flex items-center justify-center gap-2">
                  View Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 pt-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-amber-500">⭐</span>
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-500">❤️</span>
                <span>Handmade</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Canvas */}
          <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last mb-10 lg:mb-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md h-64 sm:h-96 lg:h-[500px]">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
              />

              {/* 3D Canvas */}
              <canvas
                ref={canvasRef}
                className="relative z-10 w-full h-full max-w-[400px] mx-auto"
              />

              {/* Decorative Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-gray-500 text-center"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
          <span className="text-sm mt-2 block">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;
