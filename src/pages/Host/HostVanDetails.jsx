import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHostVanDetailsService } from "../../services/hostVans";

const HostVanDetails = () => {
  const { id } = useParams();

  const [vanDetails, setVanDetails] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const getDetails = async (id) => {
    debugger;
    try {
      await getHostVanDetailsService(id)
        .then((data) => {
          setIsloading(false);
          if (data.vans) setVanDetails(data.vans[0]);
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
    <section>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={vanDetails.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanDetails.type}`}>
              {vanDetails.type}
            </i>
            <h3>{vanDetails.name}</h3>
            <h4>${vanDetails.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostVanDetails;
