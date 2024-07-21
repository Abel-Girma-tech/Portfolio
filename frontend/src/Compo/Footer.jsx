import React from 'react';
import { FaLink } from "react-icons/fa6";

function Footer() {
    return (
        <div id="footer">
            <div id='footer_address'>
                <p>Address: 7910 Foote Ln, Springfield, VA 22151</p>
                <p>Phone: 1(641)-819-8270</p>
                <p>Email: <a className="footer_a_tags" href="mailto:abel091881@gmail.com">abel091881@gmail.com</a></p>
            </div>
            <div id='links_to_pages'>
                <p className='footer_a_tags'>Quick Links <FaLink/> : </p>
                <a className="footer_a_tags" href="#summary_div">Summary</a>
                <a className="footer_a_tags" href="#projects_div">Projects</a>
                <a className="footer_a_tags" href="#skills_main_div">Skills</a>
                <a className="footer_a_tags" href="#contact">Contact</a>
            </div>
            <div id="copy_right_section" className='each_div'>
                <p id="copy_right_p_tag">&copy; 2024 ABEL</p>
            </div>
        </div>
    );
}

export default Footer;
