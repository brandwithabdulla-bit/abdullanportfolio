"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

interface Skill {
  title: string
  description: string
  number: string
  image: string
}

const skills: Skill[] = [
  {
    title: "Performance Marketing",
    description: "Scaling ads, analyzing metrics, and driving ROI.",
    number: "01",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "SEO Optimization",
    description: "Dominating search rankings and driving organic traffic.",
    number: "02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate deeply.",
    number: "03",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Content & Social",
    description: "Engaging storytelling and creative video production.",
    number: "04",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Web Development",
    description: "Building fast, optimized websites for conversions.",
    number: "05",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  },
]

export function SkillShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
      
      {/* Premium Hero-Style Headline */}
      <div className="fade-in-up" style={{ marginBottom: "80px" }}>
          
          <div className="about-premium-label" style={{ display: "flex", justifyContent: "flex-start", marginBottom: "32px" }}>
              <span className="label-line"></span> <span className="mx-3" style={{ letterSpacing: "2px", fontSize: "14px", fontWeight: "600" }}>MY SKILLS</span> <span className="label-line"></span>
          </div>
          
          <div style={{ width: "100%" }}>
              <h2 className="about-premium-headline" style={{ color: "#111", textAlign: "left" }}>
                  Delivering <span className="inline-icon-wrapper bg-purple-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></span> high-impact marketing and robust <span className="inline-icon-wrapper bg-green-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span> digital experiences.
              </h2>
          </div>
      </div>

      {/* Main Skills Interactive Column */}
      <section ref={containerRef} onMouseMove={handleMouseMove} style={{ width: "100%", position: "relative" }}>
        
        <div
          className="pointer-events-none absolute z-50 overflow-hidden rounded-xl shadow-2xl hidden md:block"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform, opacity, scale",
          }}
        >
          <div className="relative w-[300px] h-[200px] bg-white rounded-xl overflow-hidden shadow-xl" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
            {skills.map((skill, index) => (
              <img
                key={skill.title}
                src={skill.image || "/placeholder.svg"}
                alt={skill.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1,
                  filter: hoveredIndex === index ? "none" : "blur(10px)",
                }}
              />
            ))}
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)" }} />
          </div>
        </div>

        <div className="space-y-0 text-left">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group block cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative transition-all duration-300 ease-out" style={{ padding: "24px 0", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
                
                {/* Background highlight on hover */}
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-300 ease-out"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    margin: "0 -16px",
                    padding: "0 16px",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(0.95)"
                  }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0" style={{ paddingRight: "16px" }}>
                    
                    {/* Title with inline styles to override Tailwind caching issues */}
                    <div className="inline-flex items-center gap-2">
                      <h3 className="font-medium text-xl md:text-2xl tracking-tight" style={{ color: "#111111", margin: "0" }}>
                        <span className="relative">
                          {skill.title}
                          {/* Animated underline */}
                          <span
                            className="absolute left-0 h-px transition-all duration-300 ease-out"
                            style={{
                              bottom: "-2px",
                              background: "#111111",
                              width: hoveredIndex === index ? "100%" : "0"
                            }}
                          />
                        </span>
                      </h3>

                      {/* Permanently visible arrow symbol matching home page pills */}
                      <span 
                        className="transition-all duration-300 ease-out"
                        style={{ 
                          color: hoveredIndex === index ? "#111" : "rgba(0,0,0,0.3)",
                          transform: hoveredIndex === index ? "translate(0, 0)" : "translate(-4px, 4px)",
                          display: "inline-flex",
                          alignItems: "center",
                          marginLeft: "6px"
                        }}>
                        <ArrowUpRight strokeWidth={2.5} style={{ width: "18px", height: "18px" }} />
                      </span>
                    </div>

                    {/* Description with inline styling for bold visibility */}
                    <p
                      className="text-sm md:text-base mt-2 leading-relaxed font-light transition-all duration-300 ease-out"
                      style={{ color: "#444444", marginBottom: "0" }}
                    >
                      {skill.description}
                    </p>
                  </div>

                  {/* Number badge */}
                  <span
                    className="font-mono tabular-nums transition-all duration-300 ease-out mt-1 text-sm md:text-base"
                    style={{ color: "rgba(0,0,0,0.5)" }}
                  >
                    {skill.number}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom border for last item */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
        </div>
      </section>
    </div>
  )
}
