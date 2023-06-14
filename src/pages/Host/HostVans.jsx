import React, { useEffect, useState } from "react";
import { getHostVansService } from "../../services/hostVans";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getVans = async () => {
    debugger;
    try {
      await getHostVansService()
        .then((data) => {
          setIsloading(false);
          if (data.vans) setVans(data.vans);
          console.log(data);
        })
        .catch((error) => {
          setVans([]);
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
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list"></div>
      {vans.map((van) => {
        return (
          <Link to={van.id} key={van.id} className="host-van-link-wrapper">
            <div className="host-van-single" key={van.id}>
              <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
              <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default HostVans;
