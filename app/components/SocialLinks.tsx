"use client"
import React from "react";
// import Button from "./Button";

// import yourData from "../../data/portfolio.json";

const Socials = () => {
    const socials = [
         {
            
            "title": "Github",
            "link": "https://github.com/patrickcorcoran10"
        },
        {
            
            "title": "LinkedIn",
            "link": "https://www.linkedin.com/in/patrick-corcoran-software/"
        },
        {
            
            "title": "BlueSky",
            "link": "https://bsky.app/profile/patrickcorcoran.bsky.social"
        },
        {
            
            "title": "Email",
            "link": "mailto:patrickcorcoran10@gmail.com"
        }
    ]

    
  return (
    <div className={`flex flex-wrap mob:flex-nowrap link`}>
      {socials.map((social, index) => (
        // <Button key={index} onClick={() => window.open(social.link)}>
          <a key={index} href={social.link} target="_blank">{social.title}</a>
        // </Button>
      ))}
    </div>
  );
};

export default Socials;