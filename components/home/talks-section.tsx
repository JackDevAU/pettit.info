import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const TALKS = [
  {
    title: "Modern Websites - Why Everyone is Choosing Next.js & the Best Headless UI Library",
    event: "SSW User Group",
    date: "19 Jun 2024",
    link: "https://www.youtube.com/watch?v=U8LyScigrcA"
  },
  {
    title: "Getting started with .NET MAUI with Jack Pettit | .NET MAUI Hack day",
    event: "SSW Hack Day",
    date: "05 Nov 2022",
    link: "https://www.youtube.com/watch?v=JiEQffv8HvQ"
  }
];

export default function TalksSection() {
  return (
    <section className="py-24 border-t-2 border-black/5" id="talks">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.8]">
          PAST<br />TALKS
        </h2>
      </div>

      <div className="space-y-4">
        {TALKS.map((talk, index) => (
          <div 
            key={index}
            className="group relative block"
          >
            {talk.link ? (
              <Link 
                href={talk.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t-2 border-black/10 py-8 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all duration-300 group-hover:bg-black group-hover:text-white"
              >
                <TalkContent talk={talk} index={index} />
              </Link>
            ) : (
              <div className="border-t-2 border-black/10 py-8 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                 <TalkContent talk={talk} index={index} />
              </div>
            )}
          </div>
        ))}
        <div className="border-t-2 border-black/10" />
      </div>
    </section>
  );
}

// Explicitly typing as any to avoid implicit any errors with complex generated types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TalkContent({ talk, index }: { talk: any, index: number }) {
  return (
    <>
      <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-12 z-10 max-w-4xl">
        <span className="text-sm font-bold opacity-50">0{index + 1}</span>
        <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">{talk.title}</h3>
            {/* <p className="text-sm font-bold opacity-70">{talk.event}</p> */}
        </div>
      </div>

      <div className="mt-4 sm:mt-0 flex items-center gap-8 z-10 shrink-0">
        <span className="text-sm font-bold opacity-50 whitespace-nowrap">{talk.date}</span>
        {talk.link && (
            <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest bg-red-600 text-white px-2 py-1 rounded">
                    Watch
                </span>
                <FaYoutube className="w-6 h-6 group-hover:text-red-500 transition-colors" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
            </div>
        )}
      </div>
    </>
  );
}
