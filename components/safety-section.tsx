'use client'

import { AudioOverview } from './audio-overview'
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

const safetyFeatures = [
  {
    icon: Shield,
    title: 'AI DETECTION',
    description: 'All generated audio includes invisible watermarks for detection and verification.',
  },
  {
    icon: Lock,
    title: 'VOICE CONSENT',
    description: 'Voice cloning requires explicit consent verification to prevent misuse.',
  },
  {
    icon: Eye,
    title: 'CONTENT MODERATION',
    description: 'Automated systems prevent generation of harmful or illegal content.',
  },
  {
    icon: FileCheck,
    title: 'COMPLIANCE',
    description: 'SOC 2 Type II certified with GDPR and CCPA compliance.',
  },
]

const safetyText = `Safety is foundational to everything we build. We implement AI detection watermarks, voice consent verification, content moderation, and comply with international data protection standards.`

export function SafetySection() {
  return (
    <section id="safety" className="border-b-2 border-foreground">
      <div className="border-b-2 border-foreground px-4 py-8 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-muted-foreground">[03]</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">SAFETY</h2>
          </div>
          <AudioOverview text={safetyText} label="OVERVIEW" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b-2 border-foreground p-6 md:border-b-0 md:border-r-2 md:p-8">
          <span className="mb-6 block text-xs tracking-widest text-muted-foreground">
            OUR COMMITMENT
          </span>
          <h3 className="mb-6 text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            RESPONSIBLE AI DEVELOPMENT
          </h3>
          <p className="mb-8 max-w-md font-sans leading-relaxed text-muted-foreground">
            We believe powerful AI requires powerful safeguards. Our safety measures are 
            built into every layer of our technology, from model training to deployment.
          </p>
          <div className="border-2 border-foreground p-4">
            <code className="text-xs">
              <span className="text-muted-foreground">// AI-GENERATED AUDIO WATERMARK</span><br />
              <span className="text-muted-foreground">// EMBEDDED IN ALL OUTPUT</span><br />
              WATERMARK_VERSION: 2.0<br />
              DETECTION_RATE: 99.9%<br />
              FALSE_POSITIVE: &lt;0.01%
            </code>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {safetyFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 transition-colors hover:bg-foreground hover:text-background md:p-8 ${
                index < 2 ? 'border-b-2 border-foreground' : ''
              } ${index % 2 === 0 ? 'border-r-2 border-foreground sm:border-r-2' : 'sm:border-r-0'}`}
            >
              <feature.icon className="mb-4 h-6 w-6" strokeWidth={1.5} />
              <h4 className="mb-2 font-bold tracking-tight">{feature.title}</h4>
              <p className="font-sans text-sm text-muted-foreground group-hover:text-background/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
