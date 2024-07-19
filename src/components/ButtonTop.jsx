import React, { useState, useEffect } from 'react';

export default function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 240) {
      setIsVisible(true);

    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='bg-indigo-950  px-2 py-2   rounded-full stoneShadow shadow-lg
            hover:bg-slate-700 transition duration-300' >
          ↑ 
        </button>
      )}
    </div>
  );
}
