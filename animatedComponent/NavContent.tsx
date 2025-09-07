"use client"
import { Links } from "@/constants"
import Link from "next/link"

const NavContent = () => {
  return (
    <nav className="container px-6 bg-black text-white flex justify-between items-center">
        <div className="logo font-nevanta-ExtraBold tracking-wider text-[1em] size-[4em] z-30 bg-white mix-blend-difference centerlized-items">
            <h1 className="text-black italic">MEDev</h1>
        </div>

        <ul className="flex items-center space-x-8 font-nevanta-Medium italic">
          {Links.map((link) => (
            <Link href={link.href} key={link.name}>
              <li  className="cursor-pointer" id={link.href} >{link.name}</li>
            </Link>
          ))}
        </ul>
    </nav>
  )
}

export default NavContent