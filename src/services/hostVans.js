// Get All Vans Service
const getHostVansService = async () => {
  try {
    const hostVans = await fetch("/api/host/vans", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return hostVans;
  } catch (error) {
    return error;
  }
};

//Get Van Details
const getHostVanDetailsService = async (id) => {
  try {
    const hostVanDetails = await fetch(`/api/host/vans/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return hostVanDetails;
  } catch (error) {
    return error;
  }
};

export { getHostVansService, getHostVanDetailsService };
