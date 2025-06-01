import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaTelegram, FaReddit} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: "https://github.com/scorzion"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sourav-sharma-5318182b8/"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/@SouravSharma_2k5"},
    {icon: <FaInstagram />, path: "https://instagram.com/scor.zion/"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return( <Link key={index} href={item.path} className={iconStyles}>{item.icon}
            </Link>
            );
        })}
    </div>
    );
};

export default Social;