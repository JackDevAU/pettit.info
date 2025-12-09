import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[80vh] pt-8 lg:pt-16">
      {/* Left Column */}
      <div className="flex flex-col justify-between h-full space-y-12 lg:space-y-0">
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter">
            JACK
            <br />
            PETTIT
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-800 uppercase">
            Fullstack Software Engineer
          </h2>
        </div>

        {/* Vertical Navigation */}
        <div className="hidden lg:flex flex-col gap-2">
          {[
            { label: "ABOUT ME", href: "/about" },
            { label: "SKILLS", href: "/skills" },
            { label: "PORTFOLIO", href: "/projects" },
            { label: "BLOG", href: "/blog" },
            { label: "CONTACT", href: "/contact" }
          ].map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="text-4xl font-black text-neutral-300 hover:text-black hover:pl-4 transition-all duration-300 uppercase tracking-tighter"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="relative h-full min-h-[600px] lg:min-h-auto bg-neutral-100 rounded-3xl overflow-hidden mt-8 lg:mt-0">
        <Image
          src="/JackP.jpg"
          alt="Professional Portrait"
          fill
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          priority
        />

        {/* Floating Button */}
        <div className="absolute bottom-12 left-8 sm:left-12 z-20 animate-float">
          <Link
            href="https://www.ssw.com.au/people/jack-pettit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 bg-black text-white rounded-full text-center p-4 hover:scale-110 transition-transform duration-300 shadow-2xl"
          >
            <span className="font-black text-sm sm:text-base leading-tight">SCHEDULE<br />CALL</span>
          </Link>

          {/* Decorative Arrow */}
          <div className="absolute -top-12 -right-12 text-black animate-pulse hidden sm:block">
            <ArrowDownRight className="w-16 h-16 rotate-180" />
          </div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
