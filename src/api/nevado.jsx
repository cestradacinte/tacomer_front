import { BASE_API } from "../utils/constants";

export const createNevado = async (nevadoData) => {
  try {
    const url = `${BASE_API}/api/nevado/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(nevadoData),
    };

    const response = await fetch(url, params);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};