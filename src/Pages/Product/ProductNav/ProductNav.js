import { NavLink } from 'react-router-dom';
import './ProductNav.scss'


const Mark = [
    {
        id:1,
        img:'',
        title:"BMW"
    },
    {
        id:2,
        img:'',
        title:'Subaru'
    },
    {
        id:3,
        img:'',
        title:'Mersedes'
    }
]

const ProductNav = () =>{

    return(
        <>
            <div className="inline_productNav">
                <div>
                    <ul className="mark_block"> 
                        {
                            Mark.map(item =>(
                                <li key={item.id} >
                                    <NavLink to="/product" activeClassName="">
                                        <img src={item.img} alt=""/>
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductNav;