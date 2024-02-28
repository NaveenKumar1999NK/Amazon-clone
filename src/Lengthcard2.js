import React from 'react'

function Lengthcard2(props) {
  return (
    <div className=' box-5'>
         <h3>{props.headding}</h3>
         <div className='box-d'>
            <div className='kitche-img'>
                <img src={props.img1}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img2}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img3}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img4}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img5}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img6}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img7}></img>
            </div>
            <div className='kitche-img'>
                <img src={props.img8}></img>
            </div>
            
            
         </div>

    </div>
  )
}

export default Lengthcard2