import { FC, useEffect, useState } from 'react';
import classNames from 'classnames'
import './SuccessfulMessage.scss';

interface Props {
  message: string;
  onDismiss: () => void;
}

export const SuccessfulMessage: FC<Props> = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className={classNames('successMessage', {'successMessage-visible': visible})}>
      <div className="successMessage__message">{message}</div>
    </div>
  );
};
