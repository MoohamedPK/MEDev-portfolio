"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const TextSplitAnimation = (target: string) => {

    const split = new SplitText(target, {type: "lines"});

    split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("line-wrapper");
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        line.classList.add("text-split-line");
    })

    return gsap.fromTo(split.lines, {
        yPercent: 130,
        x: -40
    }, {
        yPercent: 0,
        x:0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.08
    })
}

export default TextSplitAnimation