import React from 'react';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://linkedin.com/in/myname/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin" />
    </a>
    <a href="https://github.com/myname/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github" />
    </a>
    <a href="https://twitter.com/myname/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter" />
    </a>
    <style jsx>{`
      .social-links {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
      }
      .social-links a {
        color: #ffffff;
        margin: 0 0.5rem;
        font-size: 1.5rem;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }
      .social-links a:hover {
        color: #aaa;
      }
    `}</style>
  </div>
);

export default SocialLinks;