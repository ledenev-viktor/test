import './aside.css';
export const Aside: React.FC = () => {
    return (
        <aside className="b-aside">
            <div className="aside__inner">
                <div className="b-filter">
                    <div className="filter__head">
                        <div className="filter__title">
                            Filter By
                        </div>
                        <button className="filter__clear">
                            Clear All
                        </button>
                    </div>
                    <ul className="b-filter-list">
                        <li className="filter-list__lvl-1">
                            <span className="filter-list__head">Gender</span>
                            <ul className="filter-list__lvl-2">
                                <li>
                                    <input type="checkbox" />
                                    <span>Women</span>
                                    <span>(1404)</span>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <span>Men</span>
                                    <span>(1809)</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}