import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";
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
    <>
      <section>
        <Link
          //  to="/host/vans"
          to=".."
          relative="path"
          className="back-button"
        >
          <span>&larr; </span> <span>Back to all vans</span>
        </Link>
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
          <nav className="host-van-detail-nav">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="pricing"
            >
              Price
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HostVanDetails;
