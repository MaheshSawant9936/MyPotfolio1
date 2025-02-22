import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "React Developer",
              "Committed Open Source Contributor",
              "Effective Problem Solver",
              "Good Communication Skill"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type