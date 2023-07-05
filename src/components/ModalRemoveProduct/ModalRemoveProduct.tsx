import { FC } from 'react';
import './ModalRemoveProduct.scss';

interface Props {
  onRemove: () => void;
  onCancel: (id: null) => void;
}

export const ModalRemoveProduct: FC<Props> = ({ onRemove, onCancel }) => {
  return (
    <div className="removeProduct">
      <div className="removeProduct__modal">

      <p className="removeProduct__message">
        Do you really want to delete this product?
      </p>

      <button
        className="removeProduct__button"
        onClick={onRemove}
      >
        Yes
      </button>
      <button
        className="removeProduct__button"
        onClick={() => onCancel(null)}
      >
        No
      </button>
      </div>
    </div>
  )
}