import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <div className="navbar">
    <img src="/profile-picture.png" alt="Profile Picture" className="profile-picture" />
    <h1>Zeni's Links</h1>
    <ThemeToggle />
    <style jsx>{`
      .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: inherit;
        margin-bottom: 2rem;
      }
      .profile-picture {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);

export default Navbar;