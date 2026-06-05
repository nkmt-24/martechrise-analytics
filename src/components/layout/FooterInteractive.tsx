'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
)

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
)

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
)

const socials = [Linkedin, Instagram, Facebook, Twitter, Youtube]

export function FooterNewsletter() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative flex items-center max-w-md rounded-full bg-background/10 border border-background/20 backdrop-blur-sm pl-6 pr-1.5 py-1.5"
    >
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="bg-transparent flex-1 py-2 text-sm placeholder:text-background/50 text-background outline-none min-w-0"
      />
      <motion.button
        whileHover={{ scale: 1.08, rotate: 45 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 shrink-0 rounded-full bg-background text-foreground flex items-center justify-center"
        aria-label="Subscribe"
      >
        <ArrowUpRight className="w-4 h-4" />
      </motion.button>
    </form>
  )
}

export function FooterSocials() {
  return (
    <div className="mt-6 flex gap-2">
      {socials.map((Icon, i) => (
        <motion.a
          key={i}
          href="#"
          aria-label={`Follow us on Social Media`}
          whileHover={{ y: -3, scale: 1.05 }}
          className="w-10 h-10 rounded-full bg-background/10 border border-background/15 flex items-center justify-center text-background/80 hover:text-background hover:bg-background/20 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  )
}
