// import logo from './logo.svg';

import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <div className="container">
      <Header />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
