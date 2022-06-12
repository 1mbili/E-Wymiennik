import "regenerator-runtime/runtime";

async function getRates() {
  try {
    const response = await fetch("http://localhost:7070/api/admin/rates", {
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


export default getRates;
