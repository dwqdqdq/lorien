// components/LinkBlock.js
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const LinkBlock = ({ title, description, url }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="link-block">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className={`block link-button ${theme}`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </button>
      </a>
      <style jsx>{`
        .link-block {
          margin-bottom: 1rem;
          width: 100%;
          max-width: 300px;
        }
        .link-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: 2px solid currentColor;
          padding: 1rem 2rem;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          color: #000000;
          font-size: 1rem;
          font-weight: bold;
          transition: background-color 0.3s, color 0.3s;
          width: 100%;
        }
        .link-button:hover {
          background-color: currentColor;
        }
        .link-button.dark:hover h3,
        .link-button.dark:hover p,
        .link-button.light:hover h3,
        .link-button.light:hover p {
          color: #000000;
        }
        .link-button h3 {
          margin: 0;
          margin-bottom: 0.5rem;
        }
        .link-button p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default LinkBlock;
