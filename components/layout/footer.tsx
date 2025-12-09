import { Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer className="mt-auto py-12 border-t-2 border-black/5 bg-neutral-50/50">
      {/* Brand Marquee - Updated with provided logos */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-12 px-8 mb-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="relative h-12 w-32">
           <Image src="/ssw-logo.png" alt="SSW" fill className="object-contain" />
        </div>
        <div className="relative h-12 w-32">
           <Image src="/Westpac_logo.svg.png" alt="Westpac" fill className="object-contain" />
        </div>
        <div className="relative h-12 w-32">
           <Image src="/IPWEA_national_cmyk_Australasia.png" alt="IPWEA" fill className="object-contain" />
        </div>
        <div className="relative h-12 w-32">
           <Image src="/Rapiscan_logo_545x194.png" alt="Rapiscan" fill className="object-contain" />
        </div>
        {/* Increased size for Hitachi logo */}
        <div className="relative h-20 w-44">
           <Image src="/hitachi.svg" alt="Hitachi" fill className="object-contain" />
        </div>
      </div>

			<div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-8">
        <p className="font-bold text-sm tracking-widest uppercase">© {new Date().getFullYear()} JACK PETTIT. ALL RIGHTS RESERVED.</p>
        
				<div className="flex gap-4">
					<a
						href={"https://github.com/jackdevau"}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-black text-white p-3 rounded-full hover:bg-neutral-800 transition-all hover:scale-110"
					>
						<FaGithub className="w-5 h-5" />
					</a>
					<a
						href={"https://www.linkedin.com/in/jackdevau/"}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-black text-white p-3 rounded-full hover:bg-neutral-800 transition-all hover:scale-110"
					>
						<Linkedin className="w-5 h-5" />
					</a>
					<a
						href={"https://twitter.com/SSWJackPettit"}
						className="bg-black text-white p-3 rounded-full hover:bg-neutral-800 transition-all hover:scale-110"
					>
						<FaXTwitter className="w-5 h-5" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
