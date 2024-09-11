import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline'; // You might need to install @heroicons/react for icons

const ShareModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleShare = (platform) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/sharer/sharer.php?u=YOUR_URL';
        break;
      case 'twitter':
        url = 'https://twitter.com/intent/tweet?url=YOUR_URL';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Share To</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-around items-center">
          <button onClick={() => handleShare('facebook')} className="p-2">
            <img src="../images/image.png" alt= "Facebook" className="h-8 w-8" />
          </button>
          <button onClick={() => handleShare('twitter')} className="p-2">
            <img src="../images/x.png" alt="Twitter" className="h-8 w-8" />
          </button>
          <button onClick={() => handleShare('instagram')} className="p-2">
            <img src="../images/instagram.png" alt="Instagram" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
