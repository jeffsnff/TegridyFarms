import React from 'react'
import { Link}  from 'react-router-dom'


function Button(props){
       const {name, destination, text } = props
    return(
        <Link 
            className={name}
            to={destination}

        >
          {text}  
        </Link>
    )
}

export default Button