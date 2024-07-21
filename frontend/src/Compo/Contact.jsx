import React from 'react'

function Contact() {
    return (
        <div id="contact">
           <div id="contact_me_right">
            <h2>Contact me</h2>
            <p>Need to get in touch with me? Either fill out the form or call me directy using +1644-818-1780</p>
           </div>

           <div id="contact_me_left">
                  <h4>Fill out the form and submit</h4>  
                  <div className='each_input_div'><label className="each_input_label" htmlFor="">First name</label><input className="each_input_filed" type="text" /></div>   
                  <div className='each_input_div'><label className="each_input_label" htmlFor="">Last name</label><input className="each_input_filed" type="text" /></div>   
                  <div className='each_input_div'><label className="each_input_label" htmlFor="">Email</label><input className="each_input_filed" type="text" /></div>   
                  <div className='each_input_div'><label className="each_input_label" htmlFor="">Message</label><textarea className="comment_text_area" type="text" /></div>   
                <button id="form_submit_btn">Submit</button>
          </div>

        </div>
    )
}

export default Contact
