import { useParams } from 'react-router-dom';
import './DetailsVip.scss'
import { ExsclusiveCars } from './../../Utils/ExsclusiveCars';
import {RiVipDiamondFill} from 'react-icons/ri'
import {FcVip} from 'react-icons/fc'
import {MdAddCircleOutline} from 'react-icons/md'

const DetailsVip = () =>{
    const {id} = useParams();
    const detailsOfVipCar = ExsclusiveCars.find(item => item.id === parseInt(id))


    return(
        <>      
            <div className="details_parent">
                <div className="details_img">
                   <img  src={detailsOfVipCar.url}  />
                </div>
                <h1>{detailsOfVipCar.title}</h1>
                <RiVipDiamondFill className="diamond" />
                <MdAddCircleOutline className="addIcon"/>
                <div className="details_content">
                    <hr />
                    <div className="price_row">
                        <p>Price <FcVip className="priceIcon"/></p>
                        <h2>{detailsOfVipCar.price}$</h2>
                    </div>
                    <div className="price_row">
                        <p>Year </p>
                        <h2>{detailsOfVipCar.year}</h2>
                    </div>
                </div>  
                
            </div>
            
        </>
    )
}

export default DetailsVip;