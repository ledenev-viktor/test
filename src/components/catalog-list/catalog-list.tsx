import './catalog-list.css'
import { CatalogItem } from "../catalog-item";
import {Product} from "../../types/product";
type Props = {items: Product[]};

export const CatalogList: React.FC<Props> = ({items}) => (
  <ul className="b-catalog-list">
    {
      items.map(({id, name, image, price}) => (
        <CatalogItem key={id} name={name} image={image} price={price} />
      ))
    }
  </ul>
);
