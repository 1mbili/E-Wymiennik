import "regenerator-runtime/runtime";

async function getWallet(idKlienta) {
  const url = "http://localhost:7070/api/portfele/" + idKlienta; 
  try {


    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.ok);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}


export default getWallet;
