'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#products', label: 'PRODUCTS' },
  { href: '#research', label: 'RESEARCH' },
  { href: '#safety', label: 'SAFETY' },
  { href: '#pricing', label: 'PRICING' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground">
            <span className="text-lg font-bold">XI</span>
          </div>
          <span className="hidden font-bold tracking-widest sm:block">ELEVENLABS</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-xs tracking-widest transition-opacity hover:opacity-60"
          >
            LOGIN
          </Link>
          <Link
            href="#"
            className="border-2 border-foreground bg-foreground px-4 py-2 text-xs tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            GET STARTED
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t-2 border-foreground bg-background md:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-foreground/20 py-3 text-xs tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link href="#" className="py-2 text-xs tracking-widest">
                LOGIN
              </Link>
              <Link
                href="#"
                className="border-2 border-foreground bg-foreground px-4 py-2 text-center text-xs tracking-widest text-background"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
