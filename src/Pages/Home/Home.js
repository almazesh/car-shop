import './Home.scss'
import { Images } from './../../Utils/Images';
import { useState } from 'react';
import Btnslider from '../../Components/BtnSldier/Btnslider';
import Dots from '../../Components/DotsSlider/Dots';
import Exsclusive from './Exsclusive/Exsclusive';




const Home = () =>{
    const [sliderIndex , setSliderIndex] = useState(1)
    const nextSlide = () =>{
        if(sliderIndex !== Images.length){
            setSliderIndex(sliderIndex + 1)
        }else if(sliderIndex === Images.length){
            setSliderIndex(1)
        }
    }
    const prevSlide = () =>{
        if(sliderIndex === 1){
            setSliderIndex(Images.length)
        }else if(sliderIndex !== 1){
            setSliderIndex(sliderIndex - 1)
        }
    }
    const movePagination = (index) =>{
        setSliderIndex(index + 1)
    }
    return(
        <>          
            <div className="main">
                <div className="slider_parent">
                    {
                        Images.map((item , index) => (
                            <img src={item.url} key={item.id} alt="" className={sliderIndex === index + 1 ? 'slider_img active' : 'slider_img'}/>
                        ))
                    }
                    <Btnslider moveSlide={prevSlide} direct={'prev'}/>
                    <Btnslider moveSlide={nextSlide} direct={'next'} />
                </div>
            </div>      
            <div className="dotsParent">
                {
                    Array.from({length:Images.length}).map((item , index) =>(
                        <Dots index={index} key={index} sliderIndex={sliderIndex}  movePagination={movePagination}/>
                    ))
                }
            </div>
            <div className="exsclusive_parent">
                <Exsclusive />
            </div>
        </>
    )
}
export default Home;