"use client"
import { Links } from "@/constants"
import Link from "next/link"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

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
      })

      tl.to(navRef.current, {
        backgroundColor: "#fff", // semi-transparent
        border: "1px solid black",
        color: "#000000",
        position: "sticky",
        top: "10px",
        zIndex: 30,
        duration: 0.9,
        ease: "power3.inOut",
      })


      return () => {
        ctx.revert();
      }
    }, )

  }, [])

  return (
    <nav ref={navRef} className="m-3 py-3 px-6 rounded-lg bg-black text-white flex justify-between items-center">
        <div className="logo font-nevanta-ExtraBold tracking-wider text-[1em] size-[4em] z-30 bg-white mix-blend-difference centerlized-items">
            <h1 className="text-black italic">MEDev</h1>
        </div>

        <ul className="flex items-center space-x-8 font-nevanta-Medium italic">
          {Links.map((link, index) => (
            <Link href={link.href} key={link.name}>
              <li ref={(el) => { liRefs.current[index] = el }}  className="cursor-pointer" id={link.href} >{link.name}</li>
            </Link>
          ))}
        </ul>
    </nav>
  )
}

export default NavContent