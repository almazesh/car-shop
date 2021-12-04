import './Exsclusive.scss'
import Card from '../../../Components/Card/Card';
import {FcVip} from 'react-icons/fc'
import { connect } from 'react-redux';
import { getItems , addToCart , bannerClose} from './../../../redux/actions/carActions';

const Exsclusive = (props) =>{
    console.log(props)
    const AddToCart = (id) =>{
        props.addToCart(id)
        setTimeout(() => {
            props.bannerClose()
        }, 2000);
    } 
    return(
        <>
            <div className="exsclusive">
                 <h1>Exsclusive <FcVip />  cars</h1>
            </div>
            <div className="center_card">
                <div className="inline_card">
                    {
                        props.item.items.map(item => (
                            <Card addToCart={() => AddToCart(item.id)} key={item.id} title={item.title} url={item.url} id={item.id} vip={item.vip} isInCart={item.isInCart}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    item:state.car
})
export default connect(mapStateToProps , {
    getItems  , addToCart , bannerClose
})(Exsclusive);