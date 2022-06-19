import React from "react";
import './AboutMe.css'
import img from './IMG_9490.jpg';

function AboutMe() {
    return (
        <header className="aboutmewrapper">
            <div className="content">
                <h1 className="about-me">
                    About Me
                </h1>

                <div>
                    <img src={img} className="GeethaPicture" alt="Geetha img" height={300} width={300} />
                </div>
                <text className="text1">
                    Hi! My name is Geetha, and I'm a history lover! I love learning about anything
                    and everything history-related. I was first intrigued by history after watching the amazing
                    Italian movie "Life is Beautiful", which I highly recommend to any of you looking for movie 
                    suggestions. After watching the movie, I decided to dive into
                    documentaries and books on World War II. Soon after my initial fascination, I started learning 
                    about South Asian History, American History, and European History. 
                </text>
                <text className="text2">
                    Once I enrolled in college at the University of Illinois at Urbana-Champaign, I took
                    Afrikan American History and Scandanavian History classes. I am excited to take more
                    classes in the future, and I hope to bring you into my journey of discovering some interesting
                    historical events and facts, because I truly believe that history is a gift and a rarity 
                    as much of history has been lost. 
                </text>
                <text className="text3">
                    I am also a current Computer Science student, and I love to code, experiment with recipes,
                    travel, and read during my free time. 
                </text>
                <div className="contact-me">
                    <h2>Contact Me</h2>
                    <ul class="linkedIn">
                        <li><a target="_blank" href="https://www.linkedin.com/in/geetha-palchuri/" rel="http://www.linkedIn.com/">LinkedIn<i class="fa 
                        fa-linkedIn"></i></a></li>
                    </ul>
                    <ul class="instagram">
                        <li><a target="_blank" href="https://www.instagram.com/historicalremnants/" rel="http://www.instagram.com/">Instagram<i class="fa 
                        fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>

        </header>
    );
}
export default AboutMe