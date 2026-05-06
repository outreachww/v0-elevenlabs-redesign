'use client'

import { AudioOverview } from './audio-overview'

const timeline = [
  {
    year: '2022',
    title: 'FOUNDED',
    description: 'ElevenLabs founded with a mission to make content universally accessible through AI voice technology.',
  },
  {
    year: '2023',
    title: 'MULTILINGUAL V1',
    description: 'Launched multilingual voice synthesis supporting 29 languages with natural accent handling.',
  },
  {
    year: '2023',
    title: 'VOICE CLONING',
    description: 'Released professional voice cloning requiring only minutes of audio for high-fidelity reproduction.',
  },
  {
    year: '2024',
    title: 'CONVERSATIONAL AI',
    description: 'Introduced sub-300ms latency conversational agents for real-time voice interactions.',
  },
  {
    year: '2024',
    title: 'TURBO V2.5',
    description: 'Released fastest-ever model with 50% latency reduction while maintaining quality.',
  },
]

const researchText = `Our research pushes the boundaries of voice AI. From neural speech synthesis to real-time conversation systems, we're building technology that makes voice AI indistinguishable from human speech.`

export function ResearchSection() {
  return (
    <section id="research" className="border-b-2 border-foreground">
      <div className="border-b-2 border-foreground px-4 py-8 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-muted-foreground">[02]</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">RESEARCH</h2>
          </div>
          <AudioOverview text={researchText} label="OVERVIEW" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="border-b-2 border-foreground p-6 md:p-8 lg:border-b-0 lg:border-r-2">
          <div className="mb-8">
            <span className="mb-4 block text-xs tracking-widest text-muted-foreground">
              TIMELINE
            </span>
            <p className="max-w-md font-sans text-muted-foreground">
              A brief history of our breakthroughs in voice AI technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-3 top-0 w-px bg-foreground/20" />
            
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-8 pl-10 last:mb-0">
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center border-2 border-foreground bg-background">
                  <div className="h-2 w-2 bg-foreground" />
                </div>
                <div className="mb-1 flex items-center gap-4">
                  <span className="text-xs tracking-widest text-muted-foreground">
                    {item.year}
                  </span>
                  <span className="font-bold tracking-tight">{item.title}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-1 flex-col justify-center border-b-2 border-foreground p-6 md:p-8">
            <span className="mb-4 text-xs tracking-widest text-muted-foreground">
              CORE TECHNOLOGY
            </span>
            <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-5xl">
              NEURAL SPEECH SYNTHESIS
            </h3>
            <p className="max-w-md font-sans text-muted-foreground">
              Our proprietary models understand context, emotion, and natural speech patterns 
              to generate audio that&apos;s indistinguishable from human voice.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r-2 border-foreground p-6 md:p-8">
              <div className="mb-2 text-4xl font-bold md:text-5xl">50%</div>
              <span className="text-xs tracking-widest text-muted-foreground">
                LATENCY REDUCTION<br />IN TURBO V2.5
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-2 text-4xl font-bold md:text-5xl">10B+</div>
              <span className="text-xs tracking-widest text-muted-foreground">
                CHARACTERS<br />GENERATED MONTHLY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
