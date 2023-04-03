import React from 'react';

const LinkBlock = ({ title, url }) => (
  <a href={url} className="link-block" target="_blank" rel="noopener noreferrer">
    <div>{title}</div>
    <style jsx>{`
      .link-block {
        display: block;
        width: 100%;
        max-width: 300px;
        padding: 1rem 1.5rem;
        margin-bottom: 1rem;
        background-color: #1f1f1f;
        color: #ffffff;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.2s ease-in-out;
      }
      .link-block:hover {
        background-color: #303030;
      }
    `}</style>
  </a>
);

export default LinkBlock;