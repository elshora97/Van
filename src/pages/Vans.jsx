import React, { useEffect, useState } from "react";
import { getAllVansService } from "../services/vans";
import VanComponent from "../components/Vans/VanComponent";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [allVans, setAllVans] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  console.log(typeFilter);
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

  const displayedVans = typeFilter
    ? allVans.filter((van) => van.type.toLowerCase() === typeFilter)
    : allVans;

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
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            rugged
          </button>
          {typeFilter && (
            <button
              className="van-type clear-filters"
              onClick={() => setSearchParams({})}
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="van-list">
          {displayedVans.map((van) => {
            return <VanComponent van={van} key={van.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Vans;
