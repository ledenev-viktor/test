import "./catalog.css";
import { CatalogHead } from "../catalog-head";
import { CatalogList } from "../catalog-list";
import { Pagination } from "../pagination";
import { productsSelector } from "../../selectors/products";
import { useSelector } from "react-redux";

export const Catalog: React.FC = () => {
  const products = useSelector(productsSelector);
  return (
    <div className="b-catalog">
      <CatalogHead />
      <CatalogList items={products} />
      <Pagination />
    </div>
  );
};
