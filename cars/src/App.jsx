import Header from "./Header.jsx"
import Card from "./Card.jsx"

import { useState, useEffect } from "react";

function App() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Laden...</p>;
    console.log(cars)

  return(
    <>
      <Header/>
      <section className="flex flex-col gap-2">
        <Card cars_list={cars} />
      </section>
    </>
  );
}

export default App
