import React, { useEffect, useState } from "react";
import { getAllVansService } from "../services/vans";
import VanComponent from "../components/VanComponent";

const Vans = () => {
  const [allVans, setAllVans] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getVans = async () => {
    debugger;
    try {
      await getAllVansService()
        .then((data) => {
          setIsloading(false);
          if (data.vans) setAllVans(data.vans);
          console.log(allVans);
        })
        .catch((error) => {
          setAllVans([]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVans();
  }, []);

  if (isLoading) {
    return <h2>loading ...</h2>;
  }
  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
          {allVans.map((van) => {
            return <VanComponent van={van} key={van.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Vans;
