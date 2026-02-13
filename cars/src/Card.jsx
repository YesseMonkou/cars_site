import { useState } from "react";

function Card({ cars_list }){
    const [search, setSearch] = useState("");
    const [type, typeSearch] = useState("merk");

    const handleClick = (name) => window.alert(`Je hebt op de ${name} gedrukt`);
    
    let filteredCars;
    if (type === "merk") {
        filteredCars = cars_list.filter(car => car.merk.toLowerCase().includes(search.toLowerCase()));
    } else if (type === "voertuigsoort") {
        filteredCars = cars_list.filter(car => car.voertuigsoort.toLowerCase().includes(search.toLowerCase()));
    } else {
        filteredCars = cars_list.filter(car => car.kenteken.toLowerCase().includes(search.toLowerCase()));
    }

    
    return (
        <>
            <input
            type="radio"
            value="merk"
            name="search_choice"
            checked={type === "merk"} 
            onChange={(e) => typeSearch(e.target.value)}
            />
            <label>Merk</label>
            <input
            type="radio"
            value="voertuigsoort"
            name="search_choice"
            checked={type === "voertuigsoort"} 
            onChange={(e) => typeSearch(e.target.value)}
            />
            <label>Voertuigsoort</label>
            <input
            type="radio"
            value="kenteken"
            name="search_choice"
            checked={type === "kenteken"} 
            onChange={(e) => typeSearch(e.target.value)}
            />
            <label>Kenteken</label>

            <input
            type="text"
            placeholder="Zoek"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            {filteredCars.length === 0 && (
                <p className="text-red-500">Geen auto's gevonden</p>
            )}

            {filteredCars.map((car) => (
                <div key={car.kenteken} onClick={() => handleClick(car.merk)} 
                     className="bg-cyan-800 text-white px-4 py-6 rounded-xl hover:bg-cyan-950 transition-all duration-300 cursor-pointer">
                    <p className="">{car.merk}</p>
                    <p className="">voertuigsoort: {car.voertuigsoort}</p>
                    <p className="">Kenteken: {car.kenteken}</p>
                </div>
          ))}
        </>
    );
}

export default Card