"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const hobbies = [
  {
    num: '01',
    title: "Squash",
    description: "I play squash every evening and currently I am using HEAD Spector 2.0 racquet. And, It is my way of reliving academic stress and squash is a fast-paced game that matches with how I like to think.",
    href: " ",
    imageUrl: "/assets/work/squash.jpg", 
  },
  {
    num: '02',
    title: "SpeedCubing",
    description: "I started speedcubing back in school, when I was in class 8. Currently my 3x3 main is MoYu Weilong GTS V2 M and RS3M Maglev, PB is around 18.62sec. I soon plan to participate in some real speedcubing contest...",
    href: " ",
    imageUrl: "/assets/work/cubing.jpg", 
  },
  {
    num: '03',
    title: "MK Keyboard",
    description: "I am big fan of mechanical keyboards. I currently own K556 Pro TKL with Linear Red-switches (not fan of blue-switches) and really like thock sound it makes and my avg. typing speed is around 95+ WPM.",
    href: " ",
    imageUrl: "/assets/work/keyboard.png",  
  },
  {
    num: '04',
    title: "DCS & Squad",
    description: "I play DCS (Digital Combat Simulator) and it's the closest I can get to being a fighter pilot. Currently pulling 9Gs on my Su-30 Flanker-H. HOTAS in given picture is not mine.",
    href: " ",
    imageUrl: "/assets/work/dcs.jpg", 
  },
  {
    num: '05',
    title: "Competitive Programming",
    description: "I really like problem-solving and I try to give contest on Codeforces and other sites regularly. And, nothing beats thet feeling when you see green ACCEPTED sign after countless of wrong submissions.",
    href: " ",
    imageUrl: "/assets/work/coding.jpg", 
  },
  {
    num: '06',
    title: "Flute",
    description: "I have recently picked up playing flute, I have C-scale and G-scale bamboo flutes and I'm practicing to be good at it. As it sometimes really helps to calm the mind. Kind of passive-meditation, if i can call it.",
    href: " ",
    imageUrl: "/assets/work/flute.jpg", 
  },
];

const Hobbies = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[50px]"
        >
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full group"
            >
              <div>
                <div className="relative w-full h-72 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={hobby.imageUrl}
                    alt={hobby.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-all duration-500"
                    priority={index === 0}
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">{hobby.num}</div>
                  <Link href={hobby.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mb-2">{hobby.title}</h2>
                <p className="text-white/60 text-base">{hobby.description}</p>
              </div>
              <div className="border-b border-white/20 w-full mt-6"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;