import React, { useEffect, useRef, useState } from 'react';

interface OutsideClickHandlerProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

function OutsideClickHandler({ onOutsideClick, children }: OutsideClickHandlerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isClickOutside, setIsClickOutside] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsClickOutside(true);
      if (onOutsideClick) {
        onOutsideClick();
      }
    } else {
      setIsClickOutside(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener to the document
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideClickHandler;
