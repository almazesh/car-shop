import { Route, Switch } from "react-router";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Product from './Product/Product';
import DetailsVip from './DetailsVip/DetailsVip';
import Cart from "./Cart/Cart";

const Routes = () =>{
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/product" component={Product}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/detailsVip/:id" component={DetailsVip}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </>
    )
}

export default Routes;