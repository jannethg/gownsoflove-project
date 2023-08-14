const gownsList = [
  {
    id: 0,
    name: "Enchanted White Dress",
    rating: null,
    category: "Wedding Gown",
    color: "white",
    material: "lace"
  },
  {
    id: 1,
    name: "Lavender Haze",
    rating: null,
    category: "Ball Gown",
    color: "purple",
    material: "satin"
  },
  {
    id: 2,
    name: "Midnight Rain",
    rating: null,
    category: "Evening Gown",
    color: "black",
    material: "silk"
  },
  {
    id: 3,
    name: "Bejeweled",
    rating: null,
    category: "Prom Gown",
    color: "red",
    material: "velvet"
  },
  {
    id: 4,
    name: "Wildest Dreams",
    rating: null,
    category: "Wedding Gown",
    color: "white",
    material: "silk"
  },
  {
    id: 5,
    name: "Cruel Summer",
    rating: null,
    category: "Outdoor Gown",
    color: "yellow",
    material: "floral print"
  },
  {
    id: 6,
    name: "Bejeweled",
    rating: null,
    category: "Prom Gown",
    color: "red",
    material: "blue"
  },
]

function App() {
  return (
    <div>
     <h1>My Gowns of Love Project</h1>
     { gownsList.map ( gown => (
      <div>
      <h4>{gown.name}</h4>
      <p>{gown.color}</p>
      <p>{gown.category}</p>
      
      </div>
      ) ) }
    </div>
  );
}

export default App;
