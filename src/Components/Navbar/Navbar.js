import { Link } from "react-router-dom";
import {  MdAddShoppingCart } from 'react-icons/md'
import './Navbar.scss'

const Navbar = () =>{
    window.addEventListener('scroll' , () =>{
        document.querySelector('.nav').classList.toggle('activeNav' , window.scrollY > 100)
    })
    return(
        <>
            <div className="nav">
                <div className="nav_inline">
                    <Link to="/">
                        <h2>LOGO</h2>
                    </Link>
                    <ul className="List">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/product">
                                Garage
                            </Link>
                        </li>
                    </ul>
                    <ul className="busket">
                        <li>
                            <Link to="/cart">
                                <MdAddShoppingCart />
                                <span>0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;