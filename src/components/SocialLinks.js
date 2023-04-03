// components/SocialLinks.js
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const SocialLinks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="social-links">
      <a
        href="https://discordapp.com/users/230346419893043201/"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${theme}`}
      >
        <i className="fab fa-discord"></i>
      </a>
      <a
        href="https://github.com/zenith-stardragon"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${theme}`}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://t.me/zenithstardragon"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${theme}`}
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        href="https://steamcommunity.com/id/zenithstarborn"
        target="_blank"
        rel="noopener noreferrer"
        className={`icon ${theme}`}
      >
        <i className="fab fa-steam"></i>
      </a>
      <style jsx>{`
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        .icon {
          color: inherit;
          text-decoration: none;
          font-size: 1.5rem;
          transition: color 0.3s;
        }
        .icon.dark:hover,
        .icon.light:hover {
          color: inherit;
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;
