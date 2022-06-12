import "regenerator-runtime/runtime";
import axios from "axios";

async function sendSignUp(credentials) {
  const headers = { "Content-Type": "application/json" };
  axios
    .post("http://localhost:7070/api/auth/signup", credentials, { headers })
    .then((response) => console.log(response.data.id))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      console.error(`Error: ${error.response.data.message}`);
      alert(error.response.data.message);
    });
}

export default sendSignUp;
