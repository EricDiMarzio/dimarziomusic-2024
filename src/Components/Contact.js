import user from '../Images/icons/user.png';
import mail from '../Images/icons/mail.png';
import chat from '../Images/icons/chat.png';
import plane from '../Images/icons/send-gold.png';



function Contact(){




// old form action https://formsubmit.co/3e37eaf9463e4a061c3f5359f62549c5

//Current one is using formspark.io

    return (
        <div className="section contact" id="contact">
            <h2>Contact</h2>
            <p>Eric is now accepting commissions for choral or worship pieces. He is also available for choral clinician or worship leader services in the Houston area.</p>
            <form action="https://submit-form.com/lqUTxi7VK">
                <div className="input-group">
                {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"> */}
                
                    <input type="text" id="name" name="Name" required />
                    <label for="name"><img className="form-icons" src={user} alt="user icon" />Full Name</label>
                </div>
                <div className="input-group">

                    <input type="text" id="email" name="Email" required />
                    <label for="email"><img className="form-icons" src={mail} alt="mail icon" />Email</label>
                </div>
                <div className="input-group">

                    <textarea id="message" name="Message" rows="10" required></textarea>
                    <label for="message"><img className="form-icons" src={chat} alt="bubbles icon" />Message</label>
                </div>
                <input type="hidden" name="_autoresponse" value="Thank you for contacting us on DiMarzioMusic.com. Your message has been received. You'll be hearing back from someone within 24 hour." />

                <button type="submit">SUBMIT<img className="form-icons" src={plane} alt="plane icon" /></button>
            </form>
            
        </div>
    )
}

export default Contact
