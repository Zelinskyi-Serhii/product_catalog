import {  useState } from 'react';
import './App.scss';
import { ModalAddProduct } from '../ModalAddProduct';
import { ProductList } from '../ProductList';
import { useAppSelector } from '../../redux/hooks';


export type SortByDirection = 'asc' | 'desc';
export enum SortByOptions {
  NAME = 'name',
  QUANTITY = 'quantity',
}

export const App = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [sortByOption, setSortByOption] = useState<SortByOptions>(SortByOptions.NAME);
  const [sortByDirection, setSortByDirection] = useState<SortByDirection>('asc')


  return (
    <div className="app">
      <div className="app_header">
        <button
          onClick={() => setIsOpenModalAdd(true)}
        >
          Add Product
        </button>

        <select
          className="app__sortBy"
          value={sortByOption}
          onChange={({target}) => setSortByOption(target.value as SortByOptions)}
        >
          <option value="name">Sort by name</option>
          <option value="quantity">Sort by quantity</option>
        </select>

        <button
          onClick={() => setSortByDirection((prev) => (
            prev === 'asc' ? 'desc' : 'asc'
          ))}
        >
          Reverse
        </button>
      </div>

      {isOpenModalAdd && (
        <ModalAddProduct setIsOpenModalAdd={setIsOpenModalAdd}/>
      )}
      
      <ProductList
        sortByOption={sortByOption}
        sortByDirection={sortByDirection}
      />
    </div>
  );
}
