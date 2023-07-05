import { FC } from 'react';
import './ModalFullInfoProduct.scss';
import { Product } from '../../redux/features/products';

interface Props {
  product: Product,
  setProductFullInfo: (product: null) => void;
}

export const ModalFullInfoProduct: FC<Props> = ({ product, setProductFullInfo }) => {
  const { id, name, comment, count, imageUrl } = product;

  return (
  <div className="productDetails-container">
    <div className="productDetailsModal">
      <h2 className="productDetailsModal__title">Product Details</h2>
      <div className="productDetailsModal__id">{`Product ID: ${id}`}</div>
      <div className="productDetailsModal__name">{`Name: ${name}`}</div>
      <div className="productDetailsModal__count">{`Total products: ${count}`}</div>
      <div className="productDetailsModal__comment">{`Comment: ${comment}`}</div>
      <div className="productDetailsModal__imageUrl">{`ImageUrl: ${imageUrl}`}</div>
      <button 
        onClick={() => setProductFullInfo(null)}
       className="productDetailsModal__closeButton"
      >
        Close
      </button>
    </div>
  </div>
  )
};
