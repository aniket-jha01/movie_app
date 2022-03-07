import "./watchin.scss"
import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const Watchin=()=> {
    const location=useLocation();
    
    const movie=location.movie;
    return (
        <div className="watchin">
            <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
            <video className="video" autoPlay progress controls src={movie.video} alt="" />
        </div>
    )
}
export default Watchin
