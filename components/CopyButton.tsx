"use client";

import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

const CopyButton = () => {

    const [copied, setCopied] = useState<boolean>(false);
    const email = "mohamedhassani123456@gmail.com"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email); // copy the email
            setCopied(true);

            setTimeout(() => setCopied(false) ,1000)
        } catch (error) {
            console.error("Failed to copy!", error);
        }
    }

    return (
        <button
        onClick={handleCopy}
        className="transition-all duration-300 cursor-pointer"
        >
        {copied ? <CheckCheck size={20}/> : <Copy size={20}/>}
        </button>
    )
}

export default CopyButton