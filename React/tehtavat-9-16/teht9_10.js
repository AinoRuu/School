import { useState } from "react"

const Cars = () => {
    const [car, setCar] = useState(""); 
    const [carList, setCarList] = useState([]); 
    const [count, setCount] = useState(0);
  
    const handleInputChange = (event) => {
      setCar(event.target.value); 
    };
  
    const handleSave = () => {
      if (car.trim()) {
        setCarList([...carList, car]);
        setCar(""); 
        setCount(count + 1);
      }

    };
  
    return (
      <div>
        <input
          type="text"
          value={car}
          onChange={handleInputChange}
          placeholder="Automerkin syöttö"
        />
        <button onClick={handleSave}>Save</button>
  
        <Info count = {count}></Info>
        <ul>
          {carList.map((car, index) => (
            <li key={index}>{car}</li>
          ))}
        </ul>
      </div>
    );
  };
  

const Info = ({count}) => {
    
    return (
        <div>
            {count >= 5 && <h2>Ainakin 5 nimeä on jo syötetty</h2>}
        </div>
    )

}

  export {Cars, Info};
  