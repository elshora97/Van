import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVanDetailsService } from "../services/vans";

const VanDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [vanDetails, setVanDetails] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const getDetails = async (id) => {
    debugger;
    try {
      await getVanDetailsService(id)
        .then((data) => {
          setIsloading(false);
          if (data.vans) setVanDetails(data.vans);
          console.log(vanDetails);
        })
        .catch((error) => {
          setVanDetails({});
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails(id);
  }, []);

  if (isLoading) {
    return <h2>loading ...</h2>;
  }
  return (
    <div className="van-detail-container">
      <Link
        //  to="/host/vans"
        to={`..?${location.state?.search}`}
        relative="path"
        className="back-button"
      >
        <span>&larr; </span>
        <span>{`Back to ${location.state?.type || "all"} vans`}</span>
      </Link>
      <div className="van-detail">
        <img src={vanDetails.imageUrl} />
        <i className={`van-type ${vanDetails.type} selected`}>
          {vanDetails.type}
        </i>
        <h2>{vanDetails.name}</h2>
        <p className="van-price">
          <span>${vanDetails.price}</span>/day
        </p>
        <p>{vanDetails.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetails;
