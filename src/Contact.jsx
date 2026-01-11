import {useState} from "react";
import "./App.css"

const Contact=()=>{
    const [result,setResult]=useState("");
    const onSubmit=async(event)=>{
        event.preventDefault();
        setResult("Sending.....");
    
    const formData =new FormData(event.target);

    formData.append("access_key","c5863641-4887-4168-b275-0aa7e04e76ae")

    const response= await fetch("https://api.web3forms.com/submit",{
        method:"POST",
        body:formData
    });
    const data =await response.json();

    if(data.success){
        setResult(<>
      <strong>Message Sent!</strong> I will reply soon.
      <br />
      <span className="tiny-text">To send another, just fill the form again.</span>
    </>);
        event.target.reset();
    } else {
        console.log('Error',data);
        setResult(data.message);
    }
};
    return(
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-desc">
                I will be helping you in making your Frontend Idea into a Reality.
                So If You Have Anything In Your Mind ? Let's make it happen.
            </p>
            <div className="contact-container">
                <form onSubmit = {onSubmit}className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name " required/>
                    </div>

                    <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                       <label htmlFor="message">Message</label>
                       <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                    <div className="result-message">{result}</div>
                </form>

            </div>

        </section>
    );
};

export default Contact;