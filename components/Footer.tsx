"use client"

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pb-4 sm:pb-6 text-center text-xs sm:text-sm px-4">
        <p>© {new Date().getFullYear()} Mohamed Hassani. All rights reserved.</p>
        </footer>
    );
}

export default Footer