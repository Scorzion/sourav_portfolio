"use client";

import { FaPython, FaGit, FaGithub, FaDocker, FaAws, FaLinux, FaMicrosoft, FaNodeJs, FaDatabase, FaCloud} from 'react-icons/fa';

import { SiC, SiCplusplus, SiNumpy, SiPandas} from 'react-icons/si'


//about data
const about = {
    title: "About Me",
    description: "Hi, I am CSE student at IISER Bhopal'28. And, I am passionate about competitive programming (CP) and also have deep interest in Data Structures, Algorithms. I Want to make a career as a Quant Developer in Quant Trading Team.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sourav Sharma",
        },
        {
            fieldName: "Phone",
            fieldValue: "+91 95084 95778",
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ year",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "College Email",
            fieldValue: "Souravs24@iiserb.ac.in",
        },
        {
            fieldName: "Personal Email",
            fieldValue: "sourav05in@gmail.com",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Maithili, Sanskrit",
        },
    ],
};

//experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "I am gaining hands-on experience in quantitative development through Python, C++, with a focus on data structures, algorithms, and financial computing. Actively preparing for quant internships and quant developer roles",
    items: [
        {
            company: "GeoAi4Cities Lab",
            position: "ML Intern",
            duration: "Dec 2024 - Jan 2025",
            certificate: "https://drive.google.com/file/d/1GSQvENPd_XHuZxX43VBRXhrYWrIA1O2h/view",
        },
    ]
};

//education data
const education = {
    icon: "/assets/resume/cap.svg",
    title:  "My education",
    description: "I’m currently pursuing Engineering Sciences at IISER Bhopal, focusing on Computer Science. Passionate about competitive programming, quantitative finance, and tech leadership.",
    items: [
        {
            institution: "IISER Bhopal",
            degree: "B.Tech CSE",
            duration: "Aug 2024 - Jul 2028",
        },
        {
            institution: "Sunrise Dwarika Academy, Deoghar",
            degree: "12th CBSE (AISSCE)",
            subjects: ["PCM", "English", "Physical Education"],
            duration: "May 2021 - Apr 2023",
        },
        {
            institution: "St. Xavier's High School, Deoghar",
            degree: "10th CBSE (AISSE)",
            subjects: ["Mathematics", "Science", "Artificial Intelligence", "Social Studies", "Sanskrit", "English"],
            duration: "Apr 2009 - Apr 2021",
        },
    ],
};

// Courses taken
const course = {
    icon: "/assets/resume/cap.svg",
    title:  "My courses",
    description: "These are some of the courses, workshops & summer school which I have attended so far.",
    items: [
        {
            institution: "QFI",
            course: "Python Bootcamp for Quant Finance",
            duration: "Apr 2025 - Aug 2025",
            certificate: "https://drive.google.com/file/d/1yr41v7FA4E2kF1il9JmXKILmL7NWiAwQ/view?usp=drive_link",
        },
        // {
        //     institution: "UPenn",
        //     course: "Fundamentals of Quantitative Modeling",
        //     duration: "July 2025 - Aug 2025",
        //     certificate: "",
        // },
        // {
        //     institution: "UPenn",
        //     course: "Financial Markets",
        //     duration: "July 2025 - Aug 2025",
        //     certificate: "",
        // },
        // {
        //     institution: "Quantum Ring",
        //     course: "Quantum 101",
        //     duration: "Jun 2025 - Aug 2025",
        //     certificate: "",
        // },
        // {
        //     institution: "Krish Naik | Udemy",
        //     course: "Complete DS, ML, DL, NLP Bootcamp",
        //     duration: " July 2025 - Oct 2025",
        //     certificate: "",
        // },
        {
            institution: "TLE Eliminators",
            course: "Competitive Programming Level 2",
            duration: "Jun 2025 - Aug 2025",
            certificate: "",
        },
		{
            institution: "Akuna Capital University",
            course: "Options 101",
            duration: "May 2025 - June 2025",
            certificate: "",
        },
        {
            institution: "Abdul Bari | YT",
            course: "Algorithms",
            duration: "May 2025 - Jun 2025",
            certificate: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
        },
        {
            institution: "Vizuara.ai (YT)",
            course: "Introduction to Git & Github",
            duration: "May 2025 - Jun 2025",
            certificate: "https://www.youtube.com/playlist?list=PLPTV0NXA_ZSj6wNbdjyP96NZR7a9st0hn",
        },
        {
            institution: "Deeplearning.ai | Coursera",
            course: "AI for everyone",
            duration: "Feb 2025 - Mar 2025",
            certificate: "https://coursera.org/share/fa95b20e7663da0e556148e579fa7774",
        },
        {
            institution: "TLE Eliminators",
            course: "Competitive Programming Level 1",
            duration: "Jul 2024 - Oct 2024",
            certificate: "https://drive.google.com/file/d/1yOXCjmCktAASAidlPEjjbMctqekFDOXm/view?usp=sharing",
        },
        {
            institution: "Codio | Coursera",
            course: "Introduction to C++",
            duration: "Jun 2024 - Aug 2024",
            certificate: "https://www.coursera.org/account/accomplishments/records/OD00P04VP6A1",
        },
    ],
};

//skills data
const skills = {
    title: "My skills",
    description: " ",
    skillList: [
        {
            icon: <SiC />,
            name: "C",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaGit />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <SiNumpy />,
            name: "NumPy",
        },
        {
            icon: <SiPandas/>,
            name: "Pandas",
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <FaLinux />,
            name: "Linux",
        },
        {
            icon: <FaMicrosoft />,
            name: "Microsoft",
        },
    ],
};

//Volunteering /POR
const volunteering = {
    icon: "/assets/resume/cap.svg",
    title:  "Volunteering / PORs",
    description: "I am passionate about community building and I actively volunteer and take up PORs and campus ambassador roles to lead with purpose and learn through collaborations.",
    items: [
        {
            institution: "Google Developer Group IISERB",
            role: "AI & ML Tech Lead",
            duration: "Oct 2024 - Present",
            certificate: "",
        },
        {
            institution: "Codefest'25 | IICPC",
            role: "Campus Ambassador",
            duration: "Jan 2025 - Apr 2025",
            certificate: "",
        },
        {
            institution: "Techniche | IIT Guwahati",
            role: "Campus Ambassador",
            duration: "May 2025 - Present",
            certificate: "",
        },
        {
            institution: "Perplexity.ai",
            role: "Campus Volunteer",
            duration: "Feb 2025 - Apr 2025",
            certificate: "",
        },
        {
            institution: "Tatva | IIT Bombay",
            role: "Campus Ambassador",
            duration: "Feb 2025 - Mar 2025",
            certificate: "",
        },
        {
            institution: "Happy People AI",
            role: "Campus Ambassador",
            duration: "Feb 2025 - Apr 2025",
            certificate: "https://www.linkedin.com/posts/happy-people-ai_riseon-campusambassadors-careertech-activity-7296081498049261568-Yswc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExLqfUB1NrCSJZr1uNm_yvSlxEQBzQuvEY",
        },
        
    ],
};

//competitions
const competitions = {
    icon: "/assets/resume/cap.svg",
    title:  "Competitions & Hackathons",
    description: "I am enthusiastic about competitive problem-solving and actively participate in quant trading challenges and software development hackathons to sharpen my skills, build innovative solutions, and learn from real-world scenarios.",
    items: [
        {
            institution: "Madhavacompetition.in",
            name: "Madhava Mathematics Competition",
            duration: "2025",
            certificate: "",
        },
        {
            institution: "Simonmarais.org",
            name: "Mathematics Competition (SMMC)",
            duration: "2024",
            certificate: "",
        },
        {
            institution: "Govt. of India",
            name: "Smart India Hackathon",
            duration: "2024",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Astronomy Olympiad (NSEA)",
            duration: "2022",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Chemistry Olympiad (NSEC)",
            duration: "2022",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Physics Olympiad (NSEP)",
            duration: "2022",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Astronomy Olympiad (IOQA)",
            duration: "2021",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Chemistry Olympiad (IOQC)",
            duration: "2021",
            certificate: "",
        },
        {
            institution: "IAPT",
            name: "Physics Olympiad (IOQP)",
            duration: "2021",
            certificate: "",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="courses">Courses</TabsTrigger>
                        <TabsTrigger value="competitions">Competitions</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full"> 
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index) => (
                                    <li 
                                    key={index} 
                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                                    >
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        <p className="text-white/60">{item.company}</p>
                                    </div>

                                    {/* Certificate link - same styling as courses section */}
                                    {item.certificate && item.certificate.trim() !== "" && (
                                        <a
                                        href={item.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-1 rounded-md bg-white/5 hover:bg-accent/90 text-white/80 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-y-0 translate-y-1"
                                        >
                                        View Credential
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="14" 
                                            height="14" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        </a>
                                    )}
                                    </li>
                                ))}
                                </ul>
                            </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                    >
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                        <div className="flex items-center gap-3">
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        <p className="text-white/60">{item.institution}</p>
                                        </div>
                                        {/* Subjects / Relevant Coursework */}
                                        {item.subjects && item.subjects.length > 0 && (
                                        <div className="mt-2 text-sm text-white/50">
                                            <span className="font-semibold text-white/70">Subjects:</span>
                                            <ul className="list-disc list-inside ml-2">
                                            {item.subjects.map((subject, subIndex) => (
                                                <li key={subIndex}>{subject}</li>
                                            ))}
                                            </ul>
                                        </div>
                                        )}
                                    </li>
                                    ))}
                                </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* courses */}
                        <TabsContent value="courses" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{course.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{course.description}</p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {course.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                                >
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3>
                                    <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                    </div>
                                    
                                    {/* Improved Certificate Link */}
                                    {item.certificate && item.certificate.trim() !== "" && (
                                    <a
                                        href={item.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-1 rounded-md bg-white/5 hover:bg-accent/90 text-white/80 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-y-0 translate-y-1"
                                    >
                                        View Credential
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="14" 
                                        height="14" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                        >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                    )}
                                </li>
                                ))}
                            </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full"> 
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black border border-gray-200 shadow-lg">
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* volunteering */}
                        <TabsContent value="volunteering" className="w-full"> 
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{volunteering.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{volunteering.description}</p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {volunteering.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                                >
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.role}</h3>
                                    <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                    </div>
                                    
                                    {/* Enhanced Credential Link */}
                                    {item.certificate && item.certificate.trim() !== "" && (
                                    <a
                                        href={item.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-1 rounded-md bg-white/5 hover:bg-accent/90 text-white/80 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-y-0 translate-y-1"
                                    >
                                        View Credential
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="14" 
                                        height="14" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                        >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                    )}
                                </li>
                                ))}
                            </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>

                        {/* competitions */}
                        <TabsContent value="competitions" className="w-full"> 
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{competitions.title}</h3>
                            <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{competitions.description}</p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {competitions.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                                >
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.name}</h3>
                                    <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                    </div>
                                    
                                    {/* Enhanced Credential Link */}
                                    {item.certificate && item.certificate.trim() !== "" && (
                                    <a
                                        href={item.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm px-3 py-1 rounded-md bg-white/5 hover:bg-accent/90 text-white/80 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-y-0 translate-y-1"
                                    >
                                        View Credential
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="14" 
                                        height="14" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                        >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                    )}
                                </li>
                                ))}
                            </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-8 xl:gap-10">
                                {/* Header Section */}
                                <div className="text-center xl:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">{about.title}</h3>
                                <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
                                    {about.description}
                                </p>
                                </div>

                                {/* Information Grid */}
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                                {about.info.map((item, index) => (
                                    <li 
                                    key={index} 
                                    className="bg-[#232329] p-4 md:p-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                                    >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs md:text-sm font-medium text-accent uppercase tracking-wider">
                                        {item.fieldName}
                                        </span>
                                        <span className="text-base md:text-lg font-medium">
                                        {item.fieldValue}
                                        </span>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;