import React, {useState, useEffect} from 'react';

import '../styles/Slideshow.css';

export default function Slideshow({images=[], interval=3000}){
    const [Src, setSrc] = useState([]);
    const [previousSlideSrc, setPreviousSlideSrc] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideSrc, setNextSlideSrc] = useState({});
    const [currentSlideSrc, setCurrentSlideSrc] = useState({});

    useEffect(()=>{
        setSrc(images);
        setCurrentSlideSrc(images[currentSlide]);

        if(currentSlide>0){
            setPreviousSlideSrc(images[currentSlide-1]);
        }else{
            setPreviousSlideSrc(images[images.length-1]);
        }

        if(currentSlide === images.length-1){
            setNextSlideSrc(images[0]);
        }else{
            setNextSlideSrc(images[currentSlide+1]);
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(Src.length-1);
        }
    }

    function next(){
        if(currentSlide === Src.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <img src={previousSlideSrc} className="slide-thumbnail"/>
                </section>
                <section className="slide current-slide">
                    <img src={currentSlideSrc} className="slide-thumbnail"/>
                </section>
                <section className="slide next-slide">
                    <img src={nextSlideSrc} className="slide-thumbnail"/>
                </section>
            </div>

            <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    )
}