'use client'

import { useState, useRef, useCallback } from 'react'
import { Volume2, Square, Loader2 } from 'lucide-react'

interface AudioOverviewProps {
  text: string
  label?: string
}

export function AudioOverview({ text, label = 'LISTEN' }: AudioOverviewProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioUrlRef = useRef<string | null>(null)

  const handlePlay = useCallback(async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      return
    }

    if (audioUrlRef.current) {
      audioRef.current = new Audio(audioUrlRef.current)
      audioRef.current.onended = () => setIsPlaying(false)
      audioRef.current.play()
      setIsPlaying(true)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to generate audio')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      audioUrlRef.current = url

      audioRef.current = new Audio(url)
      audioRef.current.onended = () => setIsPlaying(false)
      audioRef.current.play()
      setIsPlaying(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error generating audio')
    } finally {
      setIsLoading(false)
    }
  }, [text, isPlaying])

  return (
    <button
      onClick={handlePlay}
      disabled={isLoading}
      className="group flex items-center gap-3 border-2 border-foreground bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isPlaying ? (
        <>
          <Square className="h-4 w-4 fill-current" />
          <span>STOP</span>
          <div className="flex items-center gap-0.5">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="waveform-bar h-3 w-0.5 bg-current"
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span>{label}</span>
        </>
      )}
      {error && (
        <span className="ml-2 text-destructive">{error}</span>
      )}
    </button>
  )
}
