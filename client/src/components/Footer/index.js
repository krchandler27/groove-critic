import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4" style={{backgroundColor: "#6a6209"}}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <a
            className=""
            style={{fontSize:20, color:"#EFBC00", cursor: "pointer"}}
            onClick={() => navigate(-1)}
          >
            Previous Page
          </a>
        )}
        <h4 className='pt-5'>
          {' '}
          <span
            className="emoji"
            role="img"
            aria-label="music"
            aria-hidden="false"
          >
            🎵
          </span>{' '}
          Music Soothes the Savage Beast 👹.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
