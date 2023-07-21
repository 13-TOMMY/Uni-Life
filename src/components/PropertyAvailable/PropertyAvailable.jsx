import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from "react-icons/md";
import { BsCurrencyPound } from "react-icons/bs";
import './PropertyAvailable.css'

function PropertyAvailable({data}) {
  return (
   <Link className="property-container" to={`/homedetails/${data._id}`}>
   <img src={data.images[0]} className="property-img" />
   <div className="info-bar">
       <div className="info-bar-left">  
           <h3><span><BsCurrencyPound /></span>{data?.rent}</h3>
           <p>pppw including bills</p>
       </div>
       <div className="info-bar-right">
           
           <p><span>< MdOutlineBed/></span>{data?.bedroom_count}</p>
           
           <p><span>< MdOutlineBathtub/></span>{data?.bathroom_count}</p>
       </div>
   </div>
   <div className="prop-info">
       <div className="type-bar">
           <p>{data?.property_type}</p> 
           <p>{data?.furnished}</p> 
       </div>
       <p><span>< MdOutlineLocationOn/></span>{data?.address.street} {data?.address.city} {data?.address.postcode}</p>
   </div>
   <div className="view-bar">
       {/* <img src={house}/> */}
       
       <p><span>< MdOutlineHome/></span>View Home</p>
   </div>
</Link>

  )
}

export default PropertyAvailable