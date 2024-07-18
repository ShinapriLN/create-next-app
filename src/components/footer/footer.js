import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css';

export default function Footer(){
    return(
        <div className="h-[200px] w-full bg-gradient-to-b from-neutral-950 to-blue-800 pl-[50px] pr-[50px] pb-[20px] pt-[20px] flex">
            <div className="h-full w-full text-center content-center font-bold text-[50px]">
                
            </div>
            <div className="h-full w-full text-left text-[20px] text-slate-200 flex justify-center">
                <div className="h-full w-fit">
                    <div>
                        <p>Contact</p>
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> X-Twitter
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-brands fa-youtube" /> Youtube
                    </div>
                </div>
                
            </div>
            <div className="h-full w-full text-left text-[20px] text-slate-200 flex justify-center">
                <div className="h-full w-fit">
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" /> test@host.com
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" /> fine-me@subject.co.th
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-solid fa-phone" /> +66-3679-7979
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-solid fa-house" /> My Home 221b Baker st.
                    </div>
                    <div className="contact-link">
                        <FontAwesomeIcon icon="fa-solid fa-building" /> Work at somewhere
                    </div>
                </div>
            </div>
            <div className="h-full w-full text-center content-center font-bold text-[50px]">
                
            </div>
        </div>
    );
}