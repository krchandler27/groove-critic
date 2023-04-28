import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div class="footer bg-primary">
      <footer >
        <div class=" text-center" >
          <div class="col">

            <p>Contributors</p>

          </div>
          <div class="row">
          <div class="col-sm-6 col-md-2 item">
              <ul>
                <ul><a href="https://github.com/krchandler27" target='_blank'>Katie Speakman</a></ul>
              </ul>
            </div>

            <div class="col-sm-6 col-md-2 item">
              <ul>
                <ul><a href="https://github.com/elawilliam" target='_blank'>Ela William</a></ul>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2 item">
              <ul>
                <ul><a href="https://github.com/Chiweenie6" target='_blank'>Kevin Breedlove</a></ul>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2 item">
              <ul>
                <ul><a href="https://github.com/NewCoderStudent39" target='_blank'>Isaac McDaniel</a></ul>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2 item">
              <ul>
                <ul><a href="https://github.com/kthlnt" target='_blank'>Katherine Lantto</a></ul>
              </ul>
            </div>
          </div>
          <p class="text-center">Groove Critic © 2023</p>
        </div>
      </footer>
    </div>
    // <footer className="w-100 mt-auto bg-secondary p-4" style={{backgroundColor: "#6a6209"}}>
    //   <div className="container text-center mb-5">
    //     {location.pathname !== '/' && (
    //       <a
    //         className=""
    //         style={{fontSize:20, color:"#EFBC00", cursor: "pointer"}}
    //         onClick={() => navigate(-1)}
    //       >
    //         Previous Page
    //       </a>
    //     )}
    //     <h4 className='pt-5'>
    //       {' '}
    //       <span
    //         className="emoji"
    //         role="img"
    //         aria-label="music"
    //         aria-hidden="false"
    //       >
    //         🎵
    //       </span>{' '}
    //       Music Soothes the Savage Beast 👹.
    //     </h4>
    //     <a href="#" className=''>Scroll Up</a>
    //   </div>
    // </footer>
  );
};

export default Footer;
