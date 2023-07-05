import { Product } from '../../redux/features/products';
import { FC } from 'react';
import './ProductItem.scss';

interface Props {
  product: Product,
  setRemoveProductId: (id: string) => void;
  setProductFullInfo: (product: Product) => void;
}

export const ProductItem: FC<Props> = ({
  product,
  setRemoveProductId,
  setProductFullInfo
}) => {
  const { id, name, imageUrl, count } = product;

  return (
    <div className="productItem">
      <div 
        onClick={() => setProductFullInfo(product)}
        className="productItem__info"
      >
        <div className="productItem__name">{`Name: ${name}`}</div>
        <div className="productItem__count">{`Total products: ${count}`}</div>
        <img src={imageUrl} alt="productImage" className="productItem__image"/>
      </div>

      <button
        className="productItem__remove"
        onClick={() => setRemoveProductId(id)}
      >
        Delete
      </button>
    </div>
  );
};
