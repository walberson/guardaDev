import axios from "axios";
export function Card({ label, image_url, price, id }) {
  async function deletaDados(id) {
    axios.delete(`shttp://localhost:3000/items/${id}`);
  }

  return (
    <div className="card">
      <img src={image_url} alt="plantinha" />
      <h2>{label}</h2>
      <h3>{price}</h3>
      <button onClick={() => deletaDados(id)}>Deletar</button>
    </div>
  );
}
