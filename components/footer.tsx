'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'Text to Speech', href: '#' },
    { label: 'Voice Cloning', href: '#' },
    { label: 'AI Dubbing', href: '#' },
    { label: 'Conversational AI', href: '#' },
    { label: 'Sound Effects', href: '#' },
  ],
  developers: [
    { label: 'API Documentation', href: '#' },
    { label: 'SDKs', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="grid grid-cols-2 gap-8 border-b border-background/20 px-4 py-12 md:grid-cols-4 md:px-8 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-background">
              <span className="text-lg font-bold">XI</span>
            </div>
            <span className="font-bold tracking-widest">ELEVENLABS</span>
          </div>
          <p className="mb-6 max-w-xs font-sans text-sm text-background/60">
            The most realistic AI voice platform for text to speech, voice cloning, and conversational AI.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="transition-opacity hover:opacity-60"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-4 block text-xs tracking-widest text-background/60">PRODUCTS</span>
          <ul className="space-y-2">
            {footerLinks.products.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="mb-4 block text-xs tracking-widest text-background/60">DEVELOPERS</span>
          <ul className="space-y-2">
            {footerLinks.developers.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="mb-4 block text-xs tracking-widest text-background/60">COMPANY</span>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="mb-4 block text-xs tracking-widest text-background/60">LEGAL</span>
          <ul className="space-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm transition-opacity hover:opacity-60">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
        <span className="text-xs text-background/60">
          &copy; 2024 ELEVENLABS. ALL RIGHTS RESERVED.
        </span>
        <span className="text-xs text-background/60">
          BUILT WITH BRUTALIST DESIGN PRINCIPLES
        </span>
      </div>
    </footer>
  )
}
