import React from 'react'

function SingleCard(props) {
  return (
    <div className='box-3'>
        <h3>{props.headding}</h3>
        <div className='box-b'>
            <img src={props.img1}></img>
        </div>
        <div className='shopnow'>
        <a href='#'>Shop Now</a>
    </div>
</div>
  )
}

export default SingleCard