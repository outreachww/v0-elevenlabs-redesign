'use client'

import { AudioOverview } from './audio-overview'
import { Mic, Bot, Globe, Code, Headphones, Wand2 } from 'lucide-react'

const products = [
  {
    id: 'tts',
    icon: Mic,
    title: 'TEXT TO SPEECH',
    description: 'Convert text into lifelike speech with the most advanced AI voice generator. Perfect for content creators, audiobook publishers, and accessibility solutions.',
    audioText: 'Text to Speech. Convert any text into natural sounding speech with over 100 voices in 32 languages. Our AI understands context, emotion, and pacing.',
    features: ['100+ VOICES', '32 LANGUAGES', 'REAL-TIME STREAMING'],
  },
  {
    id: 'clone',
    icon: Wand2,
    title: 'VOICE CLONING',
    description: 'Clone any voice with just minutes of audio. Create custom voices for your brand, characters, or personal use with industry-leading accuracy.',
    audioText: 'Voice Cloning. Create a perfect digital replica of any voice with just a few minutes of audio. Use it for personalized content, brand voices, or preserving memories.',
    features: ['INSTANT CLONING', 'PROFESSIONAL QUALITY', 'SECURE & PRIVATE'],
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'CONVERSATIONAL AI',
    description: 'Build AI agents that can hold natural conversations. Perfect for customer service, virtual assistants, and interactive experiences.',
    audioText: 'Conversational AI Agents. Build voice-powered AI that can have natural, flowing conversations. Deploy to customer service, sales, or any voice interface.',
    features: ['SUB-300MS LATENCY', 'NATURAL TURN-TAKING', 'CUSTOM PERSONAS'],
  },
  {
    id: 'dubbing',
    icon: Globe,
    title: 'AI DUBBING',
    description: 'Automatically dub video content into any language while preserving the original speaker voice and emotion.',
    audioText: 'AI Dubbing. Translate and dub your video content into any language automatically. Our AI preserves the original voice characteristics and lip-syncs perfectly.',
    features: ['29 LANGUAGES', 'VOICE PRESERVATION', 'AUTOMATIC LIP-SYNC'],
  },
  {
    id: 'soundfx',
    icon: Headphones,
    title: 'SOUND EFFECTS',
    description: 'Generate custom sound effects and audio from text descriptions. Create unique soundscapes for games, films, and media.',
    audioText: 'Sound Effects Generation. Describe any sound and our AI will create it. From ambient noise to specific effects, generate exactly what you need.',
    features: ['TEXT TO SFX', 'UNLIMITED VARIETY', 'HIGH QUALITY AUDIO'],
  },
  {
    id: 'api',
    icon: Code,
    title: 'DEVELOPER API',
    description: 'Integrate our voice AI into your applications with our comprehensive API. Full documentation, SDKs, and enterprise support.',
    audioText: 'Developer API. Access all of ElevenLabs capabilities through our REST API. Build voice-powered applications with comprehensive SDKs and documentation.',
    features: ['REST API', 'WEBSOCKET STREAMING', 'ENTERPRISE SLA'],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="border-b-2 border-foreground">
      <div className="border-b-2 border-foreground px-4 py-8 md:px-8">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-widest text-muted-foreground">[01]</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">PRODUCTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group border-b-2 border-foreground p-6 transition-colors hover:bg-foreground hover:text-background md:border-r-2 md:p-8 ${
              index % 3 === 2 ? 'md:border-r-0 lg:border-r-2' : ''
            } ${index % 2 === 1 ? 'md:border-r-0 lg:border-r-2' : ''} ${
              index >= 4 ? 'lg:border-b-0' : ''
            } ${index >= 4 ? 'md:border-b-0' : ''}`}
          >
            <div className="mb-6 flex items-start justify-between">
              <product.icon className="h-8 w-8" strokeWidth={1.5} />
              <span className="text-xs tracking-widest text-muted-foreground group-hover:text-background/60">
                0{index + 1}
              </span>
            </div>

            <h3 className="mb-4 text-xl font-bold tracking-tight">{product.title}</h3>
            
            <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground group-hover:text-background/80">
              {product.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="border border-foreground px-2 py-1 text-[10px] tracking-widest group-hover:border-background"
                >
                  {feature}
                </span>
              ))}
            </div>

            <AudioOverview text={product.audioText} label="OVERVIEW" />
          </div>
        ))}
      </div>
    </section>
  )
}
