import './Product.scss'
import ProductNav from './ProductNav/ProductNav';
import { Cars } from './../../Utils/Cars';
import Card from './../../Components/Card/Card';


const Product = () =>{
    return(
        <>
            <div className="product_parent">
                <ProductNav />
                <div className="card_inline">
                    {
                        Cars.map(item => (
                            <Card key={item.id} title={item.title} url={item.url} keys={item.id}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Product;