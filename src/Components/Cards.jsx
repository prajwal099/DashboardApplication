import React from 'react'
const Cards = ({...props}) => {
  return (
    
    <div className="dash-card">
<div className="box">
<div className="icon">
<img width="50" height="50" src={props.icon}/>
</div>
<div className='cardName'>{props.name}</div>
<div className="bot d-flex justify-content-between align-items-center">
    <h2>{props.qty}</h2>
    <span style={{"color":"green"}}>{props.data} &#8607;</span>
</div>
</div>
    </div>
  )
}

export default Cards