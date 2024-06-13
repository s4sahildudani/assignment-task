import React, { useState } from 'react';
import './Products.css';
import lightImage from '../../images/image_placeholder.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Products() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabs = [
    'Centralized Control & Monitoring System',
    'NEMA-Mounted VOLC 1160',
    'Retrofit Street Light Controller VOLC 2160',
    'Retrofit Street Light Controller VOLC 2180',
    'Retrofit Street Light Controller VOLC 4180',
  ];

  const handlePrevious = () => {
    setSelectedTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1));
  };

  const handleNext = () => {
    setSelectedTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='productsContainer'>
      <div className='gradientBox'>
        <h4 className='productsText'>Products</h4>
      </div>
      <p className='productsContent'>
        Cutting-edge hardware, offerings helping cities optimize resources and achieve smart development goals
      </p>
      <div className='tabsContainer'>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index ? 'selected' : ''}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className='mainGrid'>
        <div className='imageSide'>
          <img src={lightImage} alt='Product Image' />
          <FaArrowRight className='arrowIcon right' onClick={handleNext} />
        </div>
        <div className='textSide'>
          <h4 className='textTitle'>{tabs[selectedTab]}</h4>
          <p className='textContent'>
            Yeh ek product ka description hoga jo details aur features ko explain karega. Aap yaha pe apne products ke related information ko likh sakte hain.
          </p>
          <FaArrowLeft className='arrowIcon left' onClick={handlePrevious} />
        </div>
      </div>
    </div>
  );
}

export default Products;
