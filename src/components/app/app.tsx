import "./app.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";

export const App: React.FC = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);
