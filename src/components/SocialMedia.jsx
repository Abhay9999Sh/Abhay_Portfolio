import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="mailto:abhay987123sh@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/abhay-sharma-151912286/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Abhay9999Sh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
