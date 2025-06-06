import React from 'react'
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='bg-[#000000] w-full min-h-[10vh] py-4'>
      <div className="socials w-full h-full flex flex-row gap-12 justify-center items-center">
        <a href='https://www.codechef.com/users/imdevesh07' target="_blank" className='text-[#D8B08C] text-4xl hover:scale-110 duration-300'><SiCodechef /></a>
        <a href='https://codeforces.com/profile/imdj01' target="_blank" className='text-[#77DDBB] text-4xl hover:scale-110 duration-300'><SiCodeforces /></a>
        <a href='https://www.linkedin.com/in/deveshjangir/' target="_blank" className='text-[#0077B5] hover:scale-110 duration-300 text-4xl'><FaLinkedin /></a>
        <a href='mailto:connect.to.devesh@gmail.com' target="_blank" className='text-[#D14836] hover:scale-110 duration-300 text-4xl'><BiLogoGmail /></a>
      </div>
    </div>
  )
}

export default Footer   