import './Btnslider.scss'
import {BsArrowLeftShort ,BsArrowRightShort} from 'react-icons/bs'
const Btnslider = ({moveSlide , direct}) =>{
    return(
        <>
            <button onClick={moveSlide} className={direct === 'prev' ? 'btn_slider prev' : 'btn_slider next'}>
                {
                    direct === 'prev' ? (
                        <BsArrowLeftShort />
                    ) : <BsArrowRightShort />
                }
            </button>
        </>
    )
}

export default Btnslider;