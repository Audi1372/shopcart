
import './style.css'
import { Container, Row } from "react-bootstrap";

// import { useState } from "react";
import Card from './Card';

function CardInfo({ cardItems, addCart, removeCart,cartCount }) {
 

  return (
    
      <section className='py-5'>
    <Container className="px-4 px-lg-5 mt-5">
      <Row className="audi gx-4 gx-lg-5  row-cols-xl-4 row-cols-md-3 justify-content-center">
        {cardItems.map((ele, i) => (
          <Card ele={ele}
            index={i}
            addCart={addCart}
            removeCart={removeCart}
            cartCount={cartCount}
          />

        ))}
      </Row>
    </Container>
</section>
  );
}

export default CardInfo;