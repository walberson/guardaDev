import "./App.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function buscaDados() {
      const { data } = await axios.get("http://localhost:3000/items");
      setData(data);
    }
    buscaDados();
  }, []);

  return (
    <div className="space">
      <h1>Loja FuturoDev</h1>
      <div className="items">
        {data.map((item) => (
          <Card
            label={item.item}
            image_url={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
