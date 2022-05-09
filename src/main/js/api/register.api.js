import 'regenerator-runtime/runtime'

async function sendSignUp(credentials) {
    console.log("dzialam")
    const response = await fetch("http://localhost:7070/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

export default sendSignUp;