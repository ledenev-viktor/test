import "./additional-goods.css";
import { CatalogItem } from "../catalog-item";

export const AdditionalGoods: React.FC = () => {
  return (
    <div className="b-additional-goods">
        <div className="additional-goods__title">
            Additional goods
        </div>
        <div className="additional-goods__inner">
            <ul className="additional-goods__list">
                {/* <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem /> */}
            </ul>
        </div>
    </div>
  );
};
