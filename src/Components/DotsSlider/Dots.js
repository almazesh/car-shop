import './Dots.scss'


const Dots = ({index , sliderIndex , movePagination}) =>{
    return(
        <>
            <div className={sliderIndex === index + 1 ? 'dots active' : 'dots'}>

            </div>
        </>
    )
}

export default Dots;