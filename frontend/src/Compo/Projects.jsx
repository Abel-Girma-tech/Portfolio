import React from 'react'
import { GrView } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import {motion} from "framer-motion"


function Projects() {
    return (
        <motion.div 
        initial={{ x: 100 }}
        animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}

          transition={{duration : 1, ease: "easeInOut"}}
        
        
        id="projects_div">
            <h2 id="projects_hone">Explore some of my Projects</h2>
           <div id="each_project_container_div">
                <div className='each_project_div'>
                    <h3 className='projects_name'>Library System</h3>
                    <img className="project_image" src="https://cdn.dribbble.com/userupload/6432195/file/original-bc5ed9b1fbcec1bf17aec68ff6dce721.jpg?resize=400x300&vertical=center" alt="" />
                    <div className='check_code_orwebsite_btn_div'>
                    <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories"><FaCode className='code_web_check_icons'/></a>
                    <a className="check_code_or_see_web" href="https://library-mern-iby7.vercel.app/"><GrView className='code_web_check_icons'/></a>
                    </div>
                </div>
                <div className='each_project_div'>
                    <h3 className='projects_name'>Library System MERN-App</h3>
                    <img className="project_image" src={`${process.env.PUBLIC_URL}/bookstore.jpg`} alt="" />
                    <div className='check_code_orwebsite_btn_div'>
                    <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories"><FaCode className='code_web_check_icons'/></a>
                    <a className="check_code_or_see_web" href="https://library-mern-iby7.vercel.app/"><GrView className='code_web_check_icons'/></a>
                    </div>
                </div>
                <div className='each_project_div'>
                    <h3 className='projects_name'>Library System</h3>
                    <img className="project_image" src="https://s3-media0.fl.yelpcdn.com/bphoto/_k8vY20BBDELbccJBVw8OA/258s.jpg" alt="" />
                    <div className='check_code_orwebsite_btn_div'>
                    <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories"><FaCode className='code_web_check_icons'/></a>
                    <a className="check_code_or_see_web" href="https://ethio-res-md.netlify.app/menu"><GrView className='code_web_check_icons'/></a>
                    </div>
                </div>
           </div>
        </motion.div>
    )
}

export default Projects
