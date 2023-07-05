import { useCallback, useState, FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ModalRemoveProduct } from '../ModalRemoveProduct';
import { ProductItem } from '../ProductItem';
import './ProductList.scss';
import { useDispatch } from 'react-redux';
import { Product, actions } from '../../redux/features/products';
import { SuccessfulMessage } from '../SuccessfulMessage';
import { ModalFullInfoProduct } from '../ModalFullInfoProduct';
import { SortByDirection, SortByOptions } from '../App';

interface Props {
  sortByOption: SortByOptions,
  sortByDirection: SortByDirection,
}

export const ProductList: FC<Props> = ({ sortByOption, sortByDirection }) => {
  const dispatch = useDispatch();
  const products = useAppSelector(state => state.products);
  const [removeProductId, setRemoveProductId] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [productFullInfo, setProductFullInfo] = useState<Product | null>(null);

  const sortProducts = useCallback(() => {
    const sortedProducts = [...products].sort((prev: Product, curr: Product) => {
      if (sortByOption === 'name') {
        return prev.name.localeCompare(curr.name);
      } else {
        return prev.count - curr.count;
      }
    });

      return sortByDirection === 'asc' 
      ? sortedProducts
      : sortedProducts.reverse();
  }, [products, sortByDirection, sortByOption]);

  const sortedProducts = sortProducts();
  const message = 'Product deleted successful';

  const handleRemoveProduct = useCallback(() => {
    if (removeProductId) {
      dispatch(actions.remove(removeProductId));
      setRemoveProductId(null);
      setShowSuccess(true);
    }
  }, [dispatch, removeProductId]);

  const handleDismiss = useCallback(() => {
    setShowSuccess(false);
  }, []);

  return (
    <div className="productList">
      <h2 className="productList__title">Product List</h2>

      <div className="productList__items">
        {sortedProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            setRemoveProductId={setRemoveProductId}
            setProductFullInfo={setProductFullInfo}
          />
        ))}
      </div>
      {removeProductId && (
        <ModalRemoveProduct 
          onRemove={handleRemoveProduct}
          onCancel={setRemoveProductId}
        />
      )}

      {showSuccess && (
        <SuccessfulMessage 
          message={message}
          onDismiss={handleDismiss}
        />
      )}

      {productFullInfo && (
        <ModalFullInfoProduct
          product={productFullInfo}
          setProductFullInfo={setProductFullInfo}
        />
      )}
    </div>
  )
}