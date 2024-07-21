import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import {easeInOut, motion} from "framer-motion"




function Summary() {
    return (
        <motion.div 
        initial={{ x: -100 }}
        animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}

          transition={{duration : 1, ease: easeInOut}}
        
        id="summary_div">

            <div id="summary_left_div">
                <h1 id="summary_h1_name" className='summary_left_div_items'>Abel Girma</h1>
                <h2 id="summary_h2_title" className='summary_left_div_items'>Full Stack MERN Developer</h2>
                <p id="summary_p_paragraph" className='summary_left_div_items'>
                Abel Girma is a self-taught MERN Stack developer with an MBA in SAP ERP Business Analytics. He discovered his passion for programming through conversations with computer science friends in college. Abel specializes in building full-stack MERN applications using both frontend and backend tools.
                </p>
            </div>
            <div id="summary_right_div">

            <div id="my_photo_div">
                <img id="my_photo" src="https://us.123rf.com/450wm/dragonimages/dragonimages2309/dragonimages230901187/212535413-portrait-of-serious-software-developer-working-on-laptop-in-dark-room-at-night.jpg" alt="" />
            </div>

            <div id="social_media_icons_div">
                <a className='a_tags_for_social_icons' href="https://www.linkedin.com/in/abel-618766300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOxPNOW3dQiOnRvM4KHa0pA%3D%3D"><FaLinkedin  className='socail_media_icons' /></a>
                <a className='a_tags_for_social_icons' href="https://github.com/Abel-Girma-tech?tab=repositories"><FaGithub  className='socail_media_icons'/></a>
                <a className='a_tags_for_social_icons' href="https://www.linkedin.com/in/abel-618766300?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOxPNOW3dQiOnRvM4KHa0pA%3D%3D"><FaSquareTwitter className='socail_media_icons' /></a> 
            </div>


            </div>
            
        </motion.div>
    )
}

export default Summary
