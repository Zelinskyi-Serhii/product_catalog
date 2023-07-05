import { FC, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ModalAddProduct.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/features/products';

interface Props {
  setIsOpenModalAdd: (state: boolean) => void,
}

export const ModalAddProduct: FC<Props> = ({ setIsOpenModalAdd }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [productCount, setProductCount] = useState(1);
  const [imageUrl, setImageUrl] = useState('');
  const [comment, setComment] = useState('');

  const handleAddNewProduct = useCallback(() => {
    if (!name.trim().length
      || productCount < 1
      || !imageUrl.trim().length
      || !comment.trim().length)
    {
      return;
    }

    const newProduct = {
      id: uuidv4(),
      name,
      count: productCount,
      imageUrl,
      comment,
    }

    dispatch(actions.add(newProduct));
    setIsOpenModalAdd(false);
  }, [name, productCount, imageUrl, comment, dispatch, setIsOpenModalAdd]);

  return (
    <div className="addProduct">
      <div className="addProduct__values">
        <h2 className="addProduct__title">Add Product</h2>

        <label className="addProduct__label">
          Name
          <input
            type="text"
            maxLength={25}
            className="addProduct__input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label className="addProduct__label">
          Total products
          <input
            type="number"
            min={1}
            className="addProduct__input"
            value={productCount}
            onChange={({ target }) => setProductCount(Number(target.value))}
          />
        </label>

        <label className="addProduct__label">
          Image Url
          <input
            type="text"
            className="addProduct__input"
            value={imageUrl}
            onChange={({ target }) => setImageUrl(target.value)}
          />
        </label>

        <label className="addProduct__label">
          Comments
          <input
            max={100}
            type="text"
            className="addProduct__input"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </label>

        <div className="addProduct__buttons">
          <button
            className="addProduct__button"
            onClick={handleAddNewProduct}
          >
            Add
          </button>

          <button
            onClick={() => setIsOpenModalAdd(false)}
            className="addProduct__button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
};
