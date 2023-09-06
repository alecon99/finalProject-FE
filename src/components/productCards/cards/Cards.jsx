import React, { useContext, useEffect } from 'react'
import { ProductsProvider } from '../../../context/ProductsContext'
import SingleCard from '../singleCard/SingleCard'

import '../cards/Cards.css'

/* reactBootstrap */
import { Col, Container, Row } from 'react-bootstrap'

const Cards = () => {

    const { products, isLoading, getProducts } = useContext(ProductsProvider)

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <Container>
        <h1 id='cards_title' className='text-center my-4'>Our products</h1>
        <Row>
            {products && products.map((product)=>{
                return(
                    <Col  key={product._id} xs={12} sm={6} md={4} lg={3}>
                        <SingleCard
                            productProps={product}
                        />
                    </Col>
                )
            })}
        </Row>
    </Container>
  )
}

export default Cards