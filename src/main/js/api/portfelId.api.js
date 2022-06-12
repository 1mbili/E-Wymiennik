import "regenerator-runtime/runtime";


async function getRatesById(idWaluty) {
    const url = "http://localhost:7070/api/admin/rates/" + idWaluty; 
  
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
  export default getRatesById;