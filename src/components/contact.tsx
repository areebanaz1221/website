"use client";

import React from "react";
import { motion } from "framer-motion"; 
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";

import { Fade } from "react-awesome-reveal";


export default function Contact() {
    const { ref } = useSectionInView("#contact");
    return (
        <motion.section
        id="contact"
        ref={ref}
        >
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
            <SectionHeading>
                {"Contact Me"}
            </SectionHeading>
            </Fade>
            
            <Fade direction="up" delay={600} cascade damping={1e-1}>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                {"Feel free to contact me directly through this form"}
            </p>
            </Fade>


            <Fade direction="up" delay={800} cascade damping={1e-1}>
            <form className="mt-10 flex flex-col dark:text-black">
                <input className="h-14 px-4 rounded-lg borderBlack dark:bg-gray-700"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder={"Your email"}
                />
                <textarea
                className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-gray-700"
                name="message"
                placeholder={
                    "Your address"
                }
                required
                maxLength={5000}
                />
                <SubmitBtn text={"Submit"} />
            </form>
            </Fade>

        </motion.section>
    )
}