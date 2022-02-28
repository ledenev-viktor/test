import {useState} from 'react';
import "./counter-item.css";

export const CounterItem: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleItemAdd = () => {
        setCount(count + 1);
    }
    const handleItemRemove = () => {
        if(count === 0 ) {
            return;
        }
        setCount(count - 1);
    }
  return (
    <div className="b-counter-item">
      <button
        className="counter-item__btn counter-item__btn--minus"
        onClick={handleItemRemove}
      >
        -
      </button>
      <input value={count} className="counter-item__count-input" type="text" />
      <button
        className="counter-item__btn counter-item__btn--plus"
        onClick={handleItemAdd}
      >
        +
      </button>
    </div>
  );
};
