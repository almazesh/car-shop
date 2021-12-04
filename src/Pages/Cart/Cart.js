import { useEffect } from 'react';
import { connect } from 'react-redux';
import './Cart.scss'
import Card from './../../Components/Card/Card';


const Cart = (props) =>{
    const cart = props.item.cart;

    console.log(props)

    // useEffect(() =>{
    //     props.getTotals()
    // } , [])

    return(
        <>
            <div className="container">
                <div className="row">
                    {
                        cart?.length === 0 ? (
                            <p>Cart is currently empty</p>
                        ) : cart ? (
                            <>
                                <h3>Cart Garage</h3>
                                {
                                    cart.map(item => {
                                        <Card />
                                    })
                                }
                            </>
                        ) : <p>Loading...</p>
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>({
    item:state.car

})

export default connect(mapStateToProps)(Cart);