import React from "react";
import profilePic from"../../images/profile-pic.jpg";
import resume from"../../images/Eugene-Ogbeide-Resume.pdf";

export default function About() {
  return (
    
      <div className="col-8-md profilePic">
        <img
          className="profilePic"
          src={profilePic}
          alt="Profile"
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
     
      <h1>About Me</h1>
      <a href={resume} download>Download my resume</a>

      <p>
        Hello, I'm Eugene Ogbeide, a dedicated and experienced professional with
        a diverse skill set spanning across marketing, business development, and
        full-stack development. I launched my career at Newport Home Health
        Agency, where I started as an Office Manager in 2015. Through my
        proactive leadership and strategic vision, I grew in my role to become
        the Senior Director of Marketing in 2019. Over the course of my tenure,
        I was instrumental in expanding the patient base from 50 to 150 and
        solidifying Newport's position as the third largest home health agency
        in the Dallas/Fort Worth area. In 2020, I founded Elevated Marketing
        Solutions LLC. With my firm, I've been able to create impactful
        marketing strategies that further elevated Newport's standing in the
        home health industry. Currently, I'm broadening my technical skills with
        a full-stack development certification from the University of
        California, Berkeley, expected in June 2023. I'm eager to harness this
        knowledge to further optimize business operations and offer more
        innovative solutions to my clients. At heart, I'm a problem solver who's
        driven by the desire to grow businesses and make positive impacts. I'm
        excited to bring my blend of skills and experience to new challenges and
        opportunities. at.
      </p>
      </div>
  
  );
}
