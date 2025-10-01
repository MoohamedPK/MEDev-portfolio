"use client"; 
import { ProjectsData } from "@/constants";

//GSAP 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import generateSlug from "@/lib";

gsap.registerPlugin(ScrollTrigger, SplitText)

const ProjectsContent = () => {

    const projectsContainerRef = useRef<HTMLElement>(null)
    
    useGSAP(() => {

        const ctx = gsap.context(() => {
            
            gsap.utils.toArray<HTMLElement>("section").forEach((section) => {

                const title = section.querySelector(".project-title")
                const splitTitle = new SplitText(title, {type: "words, chars"})
                const overview = section.querySelector(".overview");
                const overviewSplit = new SplitText(overview, {type: "lines, words"})
                const featureList = section.querySelectorAll(".feature-list");
                const sectionTitleSplit = new SplitText(".section-title", {type: "words, chars"});
                const projectImg = section.querySelector(".project-image");

                gsap.fromTo(sectionTitleSplit.chars, {
                    yPercent: 130,
                }, {
                    yPercent: 0,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: projectsContainerRef.current,
                        start:"top 80%",
                    }
                })

                // section scale animation 
                //  gsap.set(projectsContainerRef.current, { perspective: 1000 }); // set perspective on parent
                const mm = gsap.matchMedia();
                mm.add("(min-width: 768px)", () => {
                gsap.set(projectsContainerRef.current, { perspective: 1000 });
                gsap.to(section, {
            z: -200,
            scale: 0.6,
            transformOrigin: "center top",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
            });
        });

        mm.add("(max-width: 767px)", () => {
            // Simpler, no perspective
            gsap.to(section, {
            scale: 0.9,
            opacity: 0.9,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
            });
        });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                }); 

                tl.fromTo(projectImg, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
                }, {
                    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                    duration: 0.9,
                    ease: "power3.inOut",

                })

                tl.fromTo([splitTitle.words, overviewSplit.lines, featureList], {
                    yPercent: 130,
                    opacity: 0,
                }, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.06,
                }, "<=0.3")
            })
            
        }, projectsContainerRef)

        return () => {
            ctx.clear();
        }
    }, [])

    return (
        <main ref={projectsContainerRef} className="grid justify-center items-center bg-background" style={{ height: `${ProjectsData.length * 90}vh` }}>

            <div className="text-center text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2em] overflow-hidden text-text italic font-nevanta-Medium py-[1.5rem] sm:py-[2rem]">
                <h1 className="section-title m-0 leading-6 sm:leading-7 md:leading-8">
                    Work Showcase
                </h1>
            </div>

                {ProjectsData.map((project, i) => (
                <section key={i} style={{ top: `calc(10% + ${i * 60}px)`}} className="min-h-[80dvh] w-[95dvw] sm:w-[92dvw] md:w-[90dvw] sticky flex justify-center items-center rounded-[20px] sm:rounded-[20px] text-zinc-300 bg-black/97 backdrop-blur-[5px] inset-shadow-sm inset-shadow-gray-400/60">
                    
                    <div className="contentContainer size-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 lg:gap-y-0 lg:gap-x-12 px-4 sm:px-5 py-8 lg:py-0">

                        <div className="right size-full order-1 lg:order-1">
                            <Image src={project.image} alt="project image" className="project-image size-full object-cover rounded-lg" width={800} height={800}/>
                        </div>

                        <div className="content space-y-4 sm:space-y-5 order-2 lg:order-2">    
                            <div className="contentHead space-y-4 sm:space-y-6 md:space-y-8">
                                <div className="leading-6 sm:leading-8 md:leading-10 overflow-hidden">
                                    <h1 className="project-title font-nevanta-bold text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem]">{project.title}</h1>
                                </div>
                                <div className="">
                                    <p className="overview w-full sm:w-4/5 md:w-3/4 font-nevanta-Light text-sm sm:text-base md:text-lg ">{project.overview}</p>
                                </div>
                            </div>

                            {/* Mobile-only top-right icon buttons */}
                            <div className=" absolute top-6 right-8 md:top-15 lg:right-5 lg:top-5 md:right-20 flex items-center gap-2 z-10">
                                <Link target="_blank" href={project.link} aria-label="Open live demo" className="size-12 md:size-13 rounded-full bg-zinc-300 text-black flex items-center justify-center btn-hover">
                                    <ArrowUpRight size={24}/>
                                </Link>
                                <Link target="_blank" href={project.github} aria-label="Open GitHub repository" className="size-12 md:size-13  rounded-full text-black bg-zinc-300 flex items-center justify-center btn-hover">
                                    <Github size={24}/>
                                </Link>
                            </div>

                            <Link href={`/projects/${generateSlug(project.title)}`}>
                                <button className="details-link font-nevanta-Medium underline cursor-pointer">More Details</button>
                            </Link>
                        </div>

                    </div>

                </section>
            ))}
        </main>
    )
}

export default ProjectsContent