import React , {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion"


export default function Navbar() {

    const [showOrHideNav , setShowHide] = useState(false);

    function toggleNav(){

        setShowHide(!showOrHideNav)
    }
    return (
        <motion.div  initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration : 3, 
          ease: "easeInOut"
        }}

        id="nav_div_container">
            <div id="left_nav_div">
                <h1 id="h1_as_logo">Abel</h1>
            </div>
            <div id="right_nav_div">
                <div id="hamburger_icon" onClick={toggleNav}>
                    <GiHamburgerMenu />
                </div>
                <div className={showOrHideNav ? "showNav" : "hidenav"}>
                    <a className="nav_a_tags" href="#summary_div">Summary</a>
                    <a className="nav_a_tags" href="#projects_div">projects</a>
                    <a className="nav_a_tags" href="#skills_main_div">Skills</a>
                    <a className="nav_a_tags" href="#contact">Contact</a>
                </div>
                
            </div>
        </motion.div>
    )
}
