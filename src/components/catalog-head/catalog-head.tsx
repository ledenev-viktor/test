import './catalog-head.css';

export const CatalogHead: React.FC = () => {
    return(
        <div className="b-catalog-head">
            <h1 className="catalog-head__title">
                Prescription Glasses 
            </h1>
                <span className="catalog-head__results">(1,800 Results)</span>
            <div className="catalog-head__tags">
                <span>Women</span>
                <span>Men</span>
            </div>
        </div>
    );
}