'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AudioOverview } from './audio-overview'
import { ArrowRight } from 'lucide-react'

const heroText = `Welcome to ElevenLabs. We build the most realistic AI voices in the world. Our technology powers text to speech, voice cloning, and conversational AI agents for creators, developers, and enterprises worldwide.`

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'THE FUTURE OF VOICE AI'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen border-b-2 border-foreground pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,currentColor_49%,currentColor_51%,transparent_51%,transparent_100%)] bg-[length:80px_100%] opacity-[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_49%,currentColor_49%,currentColor_51%,transparent_51%,transparent_100%)] bg-[length:100%_80px] opacity-[0.03]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] flex-col justify-center px-4 py-20 md:px-8">
        <div className="mb-8 font-mono text-xs tracking-widest text-muted-foreground">
          [ELEVENLABS // 2024]
        </div>

        <h1 className="mb-8 max-w-5xl text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl lg:text-8xl">
          {displayText}
          <span className="animate-blink">_</span>
        </h1>

        <p className="mb-12 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
          The most realistic AI voice platform. Generate speech in any voice, any language, 
          any emotion. Build conversational AI agents that sound human.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <Link
            href="#"
            className="group flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 text-xs uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            START CREATING
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#"
            className="border-2 border-foreground px-6 py-3 text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            VIEW API DOCS
          </Link>
          <AudioOverview text={heroText} label="HEAR THIS" />
        </div>

        <div className="flex flex-wrap gap-8 border-t-2 border-foreground pt-8">
          <div>
            <div className="text-3xl font-bold md:text-4xl">1M+</div>
            <div className="text-xs tracking-widest text-muted-foreground">USERS</div>
          </div>
          <div>
            <div className="text-3xl font-bold md:text-4xl">32</div>
            <div className="text-xs tracking-widest text-muted-foreground">LANGUAGES</div>
          </div>
          <div>
            <div className="text-3xl font-bold md:text-4xl">99.9%</div>
            <div className="text-xs tracking-widest text-muted-foreground">UPTIME</div>
          </div>
          <div>
            <div className="text-3xl font-bold md:text-4xl">&lt;300ms</div>
            <div className="text-xs tracking-widest text-muted-foreground">LATENCY</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="h-8 w-px bg-foreground" />
        </div>
      </div>
    </section>
  )
}
