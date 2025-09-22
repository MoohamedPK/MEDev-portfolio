//     "use client"

// import Image from "next/image"

// import gsap from "gsap";
// import { useRef, useState } from "react";
// import { aboutMe } from "@/constants";
// import Image from "next/image";
// import { SplitText, ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(SplitText, ScrollTrigger)

//     const AboutContent = () => {

//         const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
//         const answerRef = useRef(null);
//         const answerImgRef = useRef(null);
//         const aboutContainerRef = useRef(null)
        
//         useGSAP(() => {
            
//             const ctx = gsap.context(() => {

//                 const split = SplitText.create(answerRef.current, {type: "words, lines"})
                
//                 const tl = gsap.timeline()
    
//                 if (selectedQuestion !== null) {
                    
//                     tl.fromTo(answerImgRef.current, {
//                         clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
//                         scale: 0.5
                        
//                     }, {
//                         clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
//                         duration: 0.9,
//                         scale: 1,
//                         ease: "power3.inOut"
//                     })
    
//                     .fromTo(split.lines, {
//                         opacity: 0, 
//                         yPercent: 130,
//                         scale: 0.9,
//                     }, {
//                         opacity: 1,
//                         yPercent: 1,
//                         scale: 1,
//                         stagger: 0.08,
//                         duration: 0.8,
//                         ease: "power1.inOut"
//                     }, "-=0.5")
//                 }

//                 return () => {
//                     ctx.revert()
//                 }

//             }, aboutContainerRef)

//         }, [selectedQuestion])


//         useGSAP(() => {

//             const titleSplit = SplitText.create(".title-text", {type: "words, letters"})

//             const ctx = gsap.context(() => {
//                 const secondTl = gsap.timeline({
//                     defaults: {
//                         duration: 0.9,
//                         ease: "power3.inOut",
//                         stagger:0.05 ,

//                     },

//                     scrollTrigger: {
//                             trigger: aboutContainerRef.current,
//                             start: "top 80%",
//                             end: "bottom bottom"
//                         }
//                 });

//                 secondTl.fromTo(titleSplit.words, {
//                         yPercent: 130
//                     }, {
//                         yPercent: 0,
//                     })

//                     .fromTo(".btn-container", {
//                         yPercent: 90,
//                         opacity: 0,
//                     }, {
//                         opacity: 1,
//                         yPercent: 0,
                        
//                     }, "<")

//                     .fromTo(".my-btn", {
//                         opacity: 0,
//                         xPercent: -20
//                     }, {
//                         opacity: 1,
//                         xPercent: 0,
//                     }, "<0.5")
//             })

//             return () => {
//                 ctx.revert()
//             }
//         }, [])

//     return (
//         <section ref={aboutContainerRef} className="h-[100dvh] md:h-[120dvh] bg-text text-background font-nevanta-Medium italic">
//             <div className="text-container text-center text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2em] overflow-hidden pt-[8dvh] sm:pt-[10dvh]">
//                 <h1 className="title-text leading-6 sm:leading-7 md:leading-8">
//                     Discover More About Me!
//                 </h1>
//             </div>

//             <div className="flex mt-8 sm:mt-12 md:mt-16 lg:mt-18 justify-center px-4">
//                 <div className="btn-container flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-background w-fit px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 rounded-full">
//                     {aboutMe.map((q, i) => (
//                         <div key={i} className="">
//                             <button onClick={() => setSelectedQuestion(i)} className="my-btn bg-background text-text p-1.5 sm:p-2 rounded-full cursor-pointer btn-hover text-xs sm:text-sm md:text-base">{q.button}</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="answer flex justify-center items-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4">
//                 {selectedQuestion === null ? (
//                     <div className="font-nevanta-Light text-sm sm:text-base md:text-lg lg:text-xl text-center">What Do You Want To Know About Me? 😶‍🌫️</div>
//                 ) : (
//                     <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-5 md:gap-y-0">

//                         <div className="">
//                             <Image ref={answerImgRef} className="w-full h-[300px] rounded-[30px] object-cover" width={220} height={220} src={aboutMe[selectedQuestion].img ?? ""} alt="about picture"/>
//                         </div>

//                         <div className="">
//                             <p ref={answerRef} className="text-3xl leading-11">
//                                 {aboutMe[selectedQuestion].answer}
//                             </p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
//     }

//     export default AboutContent

"use client";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

const AboutContent = () => {

  const aboutSectionRef = useRef(null);

  useGSAP(() => {
    
    const ctx = gsap.context(() => {

      const textSplit = new SplitText(".about-text", {type: "lines"});
      const headingSplit = new SplitText(".section-title", {type: "words"});
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top center",
        }
      });
  
      tl.fromTo(headingSplit.words, {
        yPercent: 100,
      }, {
        yPercent: 0,
        duration: 0.9,
        // stagger: 0.08,
        ease: "power3.inOut",
      })
  
      tl.fromTo(".about-img", {
        clipPath: "polygon(0 0, 0 0, 0 30%, 0% 100%)"
      }, {
        clipPath: " polygon(3% 4%, 93% 6%, 100% 100%, 4% 94%)",
        duration: 2,
        ease: "power3.inOut"
      })
  
      tl.fromTo(textSplit.lines, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        yPercent: 130,
      }, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        yPercent: 0,
        stagger: 0.05,
        duration: 0.9,
        ease: "power3.inOut"}, "<0.8")

    }, aboutSectionRef)

    return () => {
      ctx.revert();
    }

  })

  return (
    <div className="h-screen" ref={aboutSectionRef}>

      <div className="text-center text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2em] overflow-hidden text-background italic font-nevanta-Medium py-[1.5rem] sm:py-[2rem]">
        <h1 className="section-title m-0 leading-0">
            Discover More About Me
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 size-full items-center gap-y-12 md:gap-y-0 px-15 text-background font-nevanta-Light text-xl md:text-2xl lg:text-3xl">
        <div >
          <Image src={'/media/aboutImgs/portfolio-img.png'} alt="about image" width={450} height={450} className="about-img"/>
        </div>

        <div>
          <p className="leading-8 md:leading-11 about-text">I’m a creative frontend developer who loves building websites that don’t just look good — they move, interact, and tell a story.

            My focus is blending clean code with bold design to craft unique digital experiences. From smooth animations to scalable full-stack solutions, I enjoy turning ideas into projects that feel alive.

            Outside of coding, I draw inspiration from design, photography, and everyday moments — because I believe the best websites should feel as personal as they are functional.</p>
        </div>
      </div>

    </div>
  )
}

export default AboutContent







