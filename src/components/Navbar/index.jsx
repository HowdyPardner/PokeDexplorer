import React, { useState } from 'react';
import './index.css';

import pikachuImage from '../../assets/images/icons8-pokemon-sf-regular-96.png';
import pokeballImage from '../../assets/images/icons8-pokeball-ios-16-filled-96.png';
import pokeBagIcon from '../../assets/images/icons8-pokebag-glyph-neue-96.png';
import cameraIcon from '../../assets/images/icons8-camera-pokemon-glyph-neue-96.png';

const Navbar = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  return (
    <div>
      <h1>Navbar section</h1>
      <div >

        <nav id='navbar-container'>
          <ul id='navbar-ul'>

            <li>
              <a href='#' className={clickedImage === pikachuImage ? 'clicked' : ''} onClick={() => handleImageClick(pikachuImage)}>
                <div className="navbar-icon-container">
                  <img className='navbar-icon-img' src={pikachuImage} alt='Camera' />
                  <span className="navbar-text">Home</span>
                </div>
                {clickedImage === pikachuImage && <div className='clicked-underline'></div>}
              </a>
            </li>

            <li>
              <a href='#' className={clickedImage === cameraIcon ? 'clicked' : ''} onClick={() => handleImageClick(cameraIcon)}>
                <div className="navbar-icon-container">
                  <img className='navbar-icon-img' src={cameraIcon} alt='Camera' />
                  <span className="navbar-text">Photos</span>
                </div>
                {clickedImage === cameraIcon && <div className='clicked-underline'></div>}
              </a>
            </li>

            <li>
              <a href='#' className={clickedImage === pokeballImage ? 'clicked' : ''} onClick={() => handleImageClick(pokeballImage)}>
                <div className="navbar-icon-container">
                  <img className='navbar-icon-img' src={pokeballImage} alt='Camera' />
                  <span className="navbar-text">PokeDex</span>
                </div>
                {clickedImage === pokeballImage && <div className='clicked-underline'></div>}
              </a>
            </li>

            <li>
              <a href='#' className={clickedImage === pokeBagIcon ? 'clicked' : ''} onClick={() => handleImageClick(pokeBagIcon)}>
                <div className="navbar-icon-container">
                  <img className='navbar-icon-img' src={pokeBagIcon} alt='Camera' />
                  <span className="navbar-text">Shop</span>
                </div>
                {clickedImage === pokeBagIcon && <div className='clicked-underline'></div>}
              </a>
            </li>

          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
