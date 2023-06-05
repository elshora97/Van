// Get All Vans Service
const getAllVansService = async () => {
  try {
    const vans = await fetch("/api/vans", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return vans;
  } catch (error) {
    return error;
  }
};

export { getAllVansService };
