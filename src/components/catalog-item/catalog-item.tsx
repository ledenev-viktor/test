import { useState } from "react";
import './catalog-item.css';
import {CounterItem} from "../counter-item";
import {Btn} from "../btn";
import {Product} from "../../types/product";
type Props = Pick<Product, "name" | "image" | "price">

export const CatalogItem: React.FC<Props> = ({name, image: [firstImage, secondImage], price}) => {

  return (
    <li className="b-catalog-item">
      <a className="catalog-item__photo" href="#">
        <img className="catalog-item__img catalog-item__img--first" src={firstImage} alt="" />
        <img className="catalog-item__img catalog-item__img--second" src={secondImage} alt="" />
      </a>
      <div className="catalog-list__title">{name}</div>
      <div className="catalog-list__price">{price} $</div>
      <CounterItem />
      <Btn />
    </li>
  );
};
