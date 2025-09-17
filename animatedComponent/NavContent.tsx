"use client"
import { Links } from "@/constants"
import Link from "next/link"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { useRef} from "react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

const NavContent = () => {

  const navRef = useRef<HTMLElement>(null);
  const liRefs = useRef<(HTMLElement | null)[]>([]);
  
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "top+=200",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(navRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        margin: "8px",
        borderRadius: "8px",
        color: "#FFFFFF",
        position: "sticky",
        top: "10px",
        zIndex: 30,
        duration: 0.4,
        ease: "power3.inOut",
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <nav
      ref={navRef}
      className="py-3 sm:py-2 px-4 sm:px-5 md:px-6 text-text bg-background flex justify-between items-center mix-blend-difference"
    >
      {/* Logo */}
      <div className="logo ">
        <Image src={"/media/my-logo-2.svg"} alt="logo" width={0} height={0} className="size-[3rem] md:size-[4.5rem]"/>
      </div>

      {/* Navigation Links - Always visible */}
      <ul className="flex items-center space-x-4 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 font-nevanta-Medium italic text-xs sm:text-sm md:text-base">
        {Links.map((link, index) => (
          <Link href={link.href} key={link.name}>
            <li
              ref={(el) => { liRefs.current[index] = el }}
              className="cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap flex items-center gap-x-2"
              id={link.href}
            >
              
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavContent
