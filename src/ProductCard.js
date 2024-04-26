import React from 'react';
import styled from 'styled-components';
 
const Card = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
 
const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;
 
const Name = styled.h3`
  margin-top: 10px;
`;
 
const Price = styled.p`
  font-weight: bold;
`;
 
const Availability = styled.p`
  color: ${props => (props.available ? 'green' : 'red')};
`;
 
const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>Price: ${product.price}</Price>
      <Availability available={product.available}>
        {product.available ? 'Available' : 'Out of Stock'}
      </Availability>
    </Card>
  );
};
 
export default ProductCard;