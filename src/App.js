import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import Itemless from "./components/Itemless";
import axios from "axios";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setloading] = useState(true);
  document.body.classList.add("bg-slate-200");

  const refresh = () => {
    fetchTours();
  };

  const filtered = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    setloading(true);
    axios.get(url).then((res) => setTours(res.data));
    setloading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0 && !loading) {
    return (
      <div>
        <Itemless refresh={refresh} />
      </div>
    );
  }
  return (
    <div className="  mb-0 flex justify-center items-start">
      <Tours tours={tours} filtered={filtered} />
    </div>
  );
}

export default App;
