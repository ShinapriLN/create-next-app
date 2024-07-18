import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './aboutme.css';

export default function Page() {
    return (
        <div className="w-full h-fit bg-neutral-950">
            {/* image and contact */}
            <div className="w-full h-fit">
                <div className="w-full flex justify-center">
                    <div className="w-[200px] h-[200px] mb-4">
                        <Image
                            src='/slideimg/img3.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="flex gap-x-4 justify-center mb-4">
                    <div className="w-[50px] h-[50px]">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" className="contact-icon" />
                    </div>
                    <div className="w-[50px] h-[50px]">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" className="contact-icon" />
                    </div>
                    <div className="w-[50px] h-[50px]">
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" className="contact-icon" />
                    </div>
                    <div className="w-[50px] h-[50px]">
                        <FontAwesomeIcon icon="fa-brands fa-youtube" className="contact-icon" />
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex justify-center">
                <div className="w-[60%] h-fit flex text-white gap-12">
                    {/* Information */}
                    <div className="w-[50%] h-full text-right">
                        <h1>Profile</h1>
                        <p>Name : CHCHCHCHCHHC LKDKKWDDDDDD</p>
                        <p>Birth : 45/4/22  Age : 9999</p>
                        <p>Status : HSKSKSKKS(Student)</p>
                        <p>Education : HSKSKSKKS(Student)</p>
                        <p>Achievements : HSKSKSKKS(Student)</p>
                        <h1>Skills</h1>
                        <p>umm still thinking...</p>
                    </div>

                    {/* Interestings */}
                    <div className="w-[50%] h-fit">
                        <h1>Interests</h1>
                        <p>Science</p>
                        <p>Mathematics</p>
                        <h1>Professional experience</h1>
                        <p>None</p>
                        <h1>Hobbies</h1>
                        <p>None</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex justify-center">
                <div className="w-[40%] h-[400px] m-5">
                    <Image
                        src='/slideimg/img4.jpg'
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover rounded-md flex"
                    />
                </div>
            </div>

        </div>
    )
}