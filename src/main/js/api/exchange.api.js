import "regenerator-runtime/runtime";

async function sendChange(credentials, id) {
    const url = "http://localhost:7070/api/portfele/" + id; 
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(credentials),
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

export default sendChange;
