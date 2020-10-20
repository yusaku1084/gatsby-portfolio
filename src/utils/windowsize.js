import { useState, useEffect } from 'react';
import { window } from 'ssr-window';
 
export const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return {
      width
    };
  }
 
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    var currntWidth = window.innerWidth;
    const onResize = () => {
      if (currntWidth === window.innerWidth){
        return;
      }
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
}




