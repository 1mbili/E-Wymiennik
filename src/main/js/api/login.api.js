import 'regenerator-runtime/runtime'

async function sendSignIn(credentials) {
    let error = ""
    console.log("dzialam")
    try{
        const response = await fetch("http://localhost:7070/api/auth/signin", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        if (!response.ok){
            console.log(response);
            throw new Error(response.status);
        }

        const data = await response.json();
        return data;
    } catch(error) {
        return error.message;
    }

}

export default sendSignIn;