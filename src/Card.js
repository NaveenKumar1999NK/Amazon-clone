import React from 'react'

const Card = (props) => {
  return (
    <div className='box-2'>
        <h3>{props.headding}</h3>
        <div className='box-a'>
            <div>
                <img src={props.img1}></img>
                <span>{props.span1}</span>
            </div>
            <div>
                <img src={props.img2}></img>
                <span>{props.span2}</span>
            </div>
            <div>
                <img src={props.img3}></img>
                <span>{props.span3}</span>
            </div>
            <div>
                <img src={props.img4}></img>
                <span>{props.span4}</span>
            </div>
        </div>
        <div className='seemore'>
            <a href='#'>see more</a>
        </div>
    </div>
  )
}

export default Card