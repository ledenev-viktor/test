import './pagination.css';

export const Pagination: React.FC = () => {
    return (
        <nav className="b-pagination">
                <button>{'<'}</button>
            <ul>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
            </ul>
                <button>{'>'}</button>
        </nav>
    )
}