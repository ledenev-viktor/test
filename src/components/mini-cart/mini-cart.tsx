import './mini-cart.css';

export const MiniCart: React.FC = () => {
  return (
    <a href="#" className="b-minicart">
      <img src="./img/minicart.svg" alt="minicart" />
      <span className="minicart__count">20</span>
    </a>
  );
};
