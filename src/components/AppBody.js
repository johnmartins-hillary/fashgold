import React from 'react'
import Options from './Options'
import "../styles/AppBody.css"
import Slideshow from './Slideshow'
import pic1 from '../images/pic1.webp'
import axios from '../utils/axios.js'
import ProductContainer from './ProductContainer'

function Appbody() {

    const fetchData = async () => {
        try{
            const response = await axios.get('/photos');
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
        
    }

    return (
        <div className="appBody">
            <Options fetchData={fetchData}/>
            <Slideshow
            interval={3000}
            images={[
                pic1
            ]} />
            <ProductContainer/>
        </div>
    )
}

export default Appbody
