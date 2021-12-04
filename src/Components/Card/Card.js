import './Card.scss'
import {RiVipDiamondFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const Card = ({id , title , url, vip , keys , AddToCart , isInCart}) =>{
    return(
        <>  
            {
                vip ? (
                    <Link className="cardLink" to={`/detailsVip/${id}`}>
                        <div className="card" key={id} onClick={AddToCart}>
                            <img alt="" src={url}/>
                            <p>{title}</p>
                            <RiVipDiamondFill className="vipIcon"/>
                            <h4 className={isInCart ? 'inCart active' : 'inCart'}>Already in the basket</h4>
                        </div>
                    </Link>
                ) : (
                    <Link  className="cardLink" to={`/details/${keys}`}>
                        <div className="card" key={keys}>
                            <img alt="" src={url}/>
                            <p>{title}</p>
                            <h4 className={isInCart ? 'inCart active' : 'inCart'}>Already in the basket</h4>
                        </div>
                    </Link>
                )
            }
        </>
    )
}


export default Card;