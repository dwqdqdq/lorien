import React, { useContext } from 'react';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import ThemeContext from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`layout ${theme}`}>
      <ThemeToggle />
      <Navbar />
      {children}
      <SocialLinks />
      <footer>Made with ♡ by Zenith Stardragon</footer>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: ${theme === 'dark' ? '#121212' : '#ffffff'};
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }
        footer {
          font-size: 0.9rem;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;

