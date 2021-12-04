
import './Details.scss'
import { useParams } from 'react-router-dom';
const Details = () =>{

    const {params} = useParams()

    console.log(params)
    return(
        <>

        </>
    )
}

export default Details;