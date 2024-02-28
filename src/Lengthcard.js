import React from 'react'

function Lengthcard(props) {
  return (
        <div className='box-4'>
            <h3>{props.headding}</h3>
            <div className='box-c'>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img1}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span1}</span>
                        <p>{props.p1}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h1}</h5>
                        <span>{props.span2}</span>
                        <h6>{props.h2}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p2}</p>
                    </div>
                </div>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img2}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span3}</span>
                        <p>{props.p3}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h3}</h5>
                        <span>{props.span4}</span>
                        <h6>{props.h4}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p4}</p>
                    </div>
                </div>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img3}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span5}</span>
                        <p>{props.p5}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h5}</h5>
                        <span>{props.span6}</span>
                        <h6>{props.h6}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p6}</p>
                    </div>
                </div>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img4}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span7}</span>
                        <p>{props.p7}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h7}</h5>
                        <span>{props.span8}</span>
                        <h6>{props.h8}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p8}</p>
                    </div>
                </div>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img5}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span9}</span>
                        <p>{props.p9}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h9}</h5>
                        <span>{props.span10}</span>
                        <h6>{props.h10}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p10}</p>
                    </div>
                </div>
                <div className='gadget'>
                    <div className='merge'>
                        <img src={props.img6}></img>
                    </div>
                    <div className='price'>
                        <span>{props.span11}</span>
                        <p>{props.p11}</p>
                    </div>
                    <div className='discount-price'>
                        <h5>{props.h11}</h5>
                        <span>{props.span12}</span>
                        <h6>{props.h12}</h6>
                    </div>
                    <div className='para-1'>
                        <p>{props.p12}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    
  )
}

export default Lengthcard