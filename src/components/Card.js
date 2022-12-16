import React from 'react'
import { Button, Card,Col } from 'react-bootstrap';
import RatingComponent from './rating';
import Sale from './sale'
import './style.css'

export default function Cardshow({ele={},index,addCart,removeCart,cartCount=[]}) {
    
   const isExist=cartCount.includes(ele.id)

  return (
    <div>
         <Col className="mb-5" key={index}>
              <Card className='headcard' style={{ width:'16rem',height:'22rem'}}>
                {ele.sale ===true? <Sale/>:""}
                <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <Card.Body className='cardbody'>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>
                    {ele.stars === true ? <RatingComponent /> : ""}
                    {ele.sale === true ? (<span className="text-muted text-decoration-line-through my-1">
                        {ele.beforeDiscountPrice}
                      </span>
                    ) : (
                      <span></span>
                    )}

                    {ele.price}
                  </Card.Text>
                      <Button className="bot" variant="outline-dark" onClick={(!ele.check) ? () => { } : isExist ? () => removeCart(ele.id) :  () => addCart(ele.id)}>{ 
                      !ele.check?"View option":isExist?"RemoveCart":"Add To Cart"    
                      }</Button> 
                 
    
                </Card.Body>
              </Card>
            </Col>
        </div>
  )
}
