import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetailsPhoto = () => {
  const { vanDetails } = useOutletContext();

  return <img src={vanDetails.imageUrl} className="host-van-detail-image" />;
};

export default HostVanDetailsPhoto;
