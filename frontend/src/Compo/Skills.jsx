import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const styles = {
    html: {
        color: "#E34F26",
        backgroundColor: "white"
    },
    javascript: {
        color: "#F7DF1E",
        backgroundColor: "black"
    },
    react: {
        color: "#61DAFB",
        backgroundColor: "black"
    },
    css: {
        color: "#1572B6",
        backgroundColor: "white"
    },
    tailwindcss: {
        color: "#38B2AC",
        backgroundColor: "white"
    },
    express: {
        color: "white",
        backgroundColor: "#000000"
    },
    node: {
        color: "#339933",
        backgroundColor: "white"
    },
    mongodb: {
        color: "#47A248",
        backgroundColor: "white"
    },
    postgresql: {
        color: "#336791",
        backgroundColor: "white"
    },
    mysql: {
        color: "#4479A1",
        backgroundColor: "white"
    },
    github: {
        color: "white",
        backgroundColor: "#181717"
    },
    gitlab: {
        color: "#FCA121",
        backgroundColor: "white"
    },
    postman: {
        color: "#FF6C37",
        backgroundColor: "white"
    },
    docker: {
        color: "#2496ED",
        backgroundColor: "white"
    }
};

function Skills() {
    return (
        <div id="skills_main_div">
            <h1 id="skill_title_H_one">Skills and Technologies I will bring</h1>
            <div id="stack_main_div">
                <div className='each_stack_div'>
                    <h2 className='each_techn_H_One'>Fronend</h2>
                    <div className='each_stack_inner_div'>
                        <TiHtml5 style={styles.html} className="all_technolgies_icons" />
                        <FaReact style={styles.react} className="all_technolgies_icons" />
                        <IoLogoJavascript style={styles.javascript} className="all_technolgies_icons" />
                        <FaCss3Alt style={styles.css} className="all_technolgies_icons" />
                        <SiTailwindcss style={styles.tailwindcss} className="all_technolgies_icons" />
                    </div>
                </div>
                <div className='each_stack_div'>
                    <h2 className='each_techn_H_One'>Backend</h2>
                    <div className='each_stack_inner_div'>
                        <SiExpress style={styles.express} className="all_technolgies_icons" />
                        <FaNode style={styles.node} className="all_technolgies_icons" />
                        <DiMongodb style={styles.mongodb} className="all_technolgies_icons" />
                        <SiPostgresql style={styles.postgresql} className="all_technolgies_icons" />
                        <SiMysql style={styles.mysql} className="all_technolgies_icons" />
                    </div>
                </div>
                <div className='each_stack_div'>
                    <h2 className='each_techn_H_One'>Other Tools</h2>
                    <div className='each_stack_inner_div'>
                        <FaGithub style={styles.github} className="all_technolgies_icons" />
                        <FaSquareGitlab style={styles.gitlab} className="all_technolgies_icons" />
                        <SiPostman style={styles.postman} className="all_technolgies_icons" />
                        <FaDocker style={styles.docker} className="all_technolgies_icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
