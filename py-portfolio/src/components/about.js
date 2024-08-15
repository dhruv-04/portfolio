import React from "react";
import "./about.css";
import Background from "./background";

function About(){
    return (
        <div className="App">
            <div className="about">
                <h1>About Me</h1>
                <p style={{fontFamily:'sans-serif'}}>
                    I am a sophomore at Galgotias College of Engineering and Technology, Greater Noida, pursuing my B.Tech in Information Technology. 
                    I am a self taught programmer and have been coding for the past 2 years. I have a keen interest in C++ development and Cybersecurity.
                    I, have a good understanding of Data Structures and Algorithms and have been practicing competitive programming for the past 7 months.
                    I am a quick learner and have a good understanding of the concepts of Object Oriented Programming. I am also familiar with the basics of
                    java and python. I am a team player and have good communication skills.

                </p>
            </div>
            {/* <Background /> */}
        </div>
    );
}

export default About;