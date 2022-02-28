import "./main.css";
import { Aside } from "../aside";
import { Catalog } from "../catalog";
import { Cart } from "../cart";

export const Main: React.FC = () => {
  return (
    <main className="l-layout">
      <div className="layout__inner">
        {/* <Aside /> */}
        {/* <Catalog /> */}
        <Cart />
      </div>
    </main>
  );
};
