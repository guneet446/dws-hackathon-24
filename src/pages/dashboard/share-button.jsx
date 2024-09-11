import React, { useState } from 'react';
import ShareModal from './share-modal';

const ShareButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={handleOpenModal} 
        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 20h9a2 2 0 002-2v-9a2 2 0 00-2-2h-9a2 2 0 00-2 2v9a2 2 0 002 2zm-1 0V5m0 15L5 9m6-4l7 7"
          />
        </svg>
        <span>Share</span>
      </button>
      <ShareModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ShareButton;
