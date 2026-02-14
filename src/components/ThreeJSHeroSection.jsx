import React, { useRef, useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  Stage,
} from "@react-three/drei";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 3D Cake Component
function Cake3D(props) {
  const groupRef = useRef();

  // Load GLB model with error handling
  const { scene, error } = useGLTF("/models/cake.glb");

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous rotation
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  // If error loading GLB, show fallback
  if (error || !scene) {
    return (
      <group ref={groupRef} {...props}>
        {/* Fallback cake geometry */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.6, 2]} />
          <meshStandardMaterial color="#B86B3E" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.6, 1.8]} />
          <meshStandardMaterial color="#D8A47F" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.6, 0]} castShadow>
          <sphereGeometry args={[0.3, 16, 8]} />
          <meshStandardMaterial color="#E8A23A" roughness={0.2} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} castShadow receiveShadow />
    </group>
  );
}

// Loading Component
function Loader() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">🧁</span>
          </div>
        </div>
      </div>
    </Html>
  );
}

const ThreeJSHeroSection = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isThreeSupported, setIsThreeSupported] = useState(true);

  useEffect(() => {
    setIsLoaded(true);

    // Simple WebGL support check
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setIsThreeSupported(!!gl);
    } catch {
      setIsThreeSupported(false);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // GSAP Timeline for text animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    // Animate headline
    tl.fromTo(
      headlineRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      },
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5",
      )
      // Animate buttons
      .fromTo(
        buttonsRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
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

        gsap.to(headlineRef.current, {
          y: progress * -100,
          opacity: 1 - progress * 0.5,
          ease: "none",
        });

        gsap.to(subtitleRef.current, {
          y: progress * -60,
          opacity: 1 - progress * 0.8,
          ease: "none",
        });
      },
    });
  }, [isLoaded]);

  const handleOrderNow = () => {
    document.getElementById("contact")?.scrollIntoView({
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
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,162,58,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(184,107,62,0.06),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-medium border border-primary/30 hover:shadow-strong transition-shadow duration-300"
            >
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary font-body tracking-wide">
                Artisan Quality Since 2014
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-heading font-bold leading-[1.1] text-text-primary text-balance"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
                Artisan Baked
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-2 bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
                Perfection
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
            >
              Experience the pinnacle of artisanal baking, where every creation
              is a masterpiece crafted with passion and the finest ingredients.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrderNow}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg shadow-strong hover:shadow-[0_20px_40px_rgba(184,107,62,0.4)] transition-all duration-300 font-body"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Order Now
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewMenu}
                className="group bg-white hover:bg-gradient-to-r hover:from-surface hover:to-white text-text-primary border-2 border-border hover:border-primary px-10 py-4 rounded-full font-semibold text-lg shadow-medium hover:shadow-strong transition-all duration-300 font-body"
              >
                <span className="flex items-center justify-center gap-2.5">
                  View Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8"
            >
              <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-soft border border-secondary/30 text-sm font-medium text-text-secondary font-body">
                <span className="text-accent text-lg">⭐</span>
                <span className="font-semibold">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-soft border border-secondary/30 text-sm font-medium text-text-secondary font-body">
                <span className="text-success text-lg">✓</span>
                <span className="font-semibold">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-soft border border-secondary/30 text-sm font-medium text-text-secondary font-body">
                <span className="text-primary text-lg">❤️</span>
                <span className="font-semibold">Handmade</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Cake */}
          <div className="relative flex items-center justify-center order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg h-[250px] sm:h-[400px] lg:h-[600px]">
              {/* Subtle Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.15, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"
              />

              {/* Three.js Canvas */}
              {isThreeSupported ? (
                <div className="relative z-10 w-full h-full">
                  <Canvas
                    shadows
                    camera={{ position: [4, 0, 0], fov: 50 }}
                    className="bg-transparent"
                  >
                    <Suspense fallback={<Loader />}>
                      <Stage
                        environment="city"
                        intensity={0.6}
                        adjustCamera={1.2}
                      >
                        <Cake3D />
                      </Stage>
                      <OrbitControls
                        autoRotate
                        autoRotateSpeed={1.0}
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              ) : (
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-surface/50 backdrop-blur-sm rounded-2xl border border-border">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🎂</div>
                    <p className="text-text-secondary font-body">
                      Delicious cakes await you
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-text-muted cursor-pointer"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-xs font-medium uppercase tracking-wider font-body">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThreeJSHeroSection;

// Preload the GLB model
useGLTF.preload("/models/cake.glb");
