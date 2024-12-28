import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="text-center my-20">
      <h2 className="text-3xl font-medium">Nagamani Pasagadugula</h2>
      <p className="text-lg pt-5 mx-[10%]">
        I 'm a Software Engineer with overall 3+ years of experience in ReactJS,
        Javascript, HTML5, CSS3, and state management libraries like Redux.
        Familiar with Java, Object-Oriented Programming, DataStructures and
        Algorithms and SpringBoot framework.
      </p>
      <a
        href="mailto:ramanagamani1@gmail.com"
        className="inline-block py-5 text-lg text-sky-700"
      >
        Email: ramanagamani1@gmail.com
      </a>
      <div className="text-center">
        <div className="flex justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/nagamani-pasagadugula/"
          className="text-sky-700"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        </a>
        <a
          href="https://github.com/Ramanagamani1"
          className=""
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/16131A05G6"
          className="text-green-600"
        >
          <FontAwesomeIcon icon={faHackerrank} size="3x" />
        </a>
        <a
          href="https://x.com/RamaNagamani21"
          className="text-sky-700"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
