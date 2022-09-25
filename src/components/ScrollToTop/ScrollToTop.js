import React , { useState , useEffect } from 'react';
import './ScrollToTop.css';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible , setVisible ] = useState(false);

    useEffect(() => {
        if(pageYOffset > 200){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[pageYOffset])

    if(!visible){
        return false;
    }

    const scrollToTop = () => window.scrollTo({ top:0 , behavior:'smooth'});

  return (
    <div className='scroll-top-button' onClick={scrollToTop}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scroll-to-top-icon bi bi-chevron-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
    </div>
  )
}

export default ScrollToTop