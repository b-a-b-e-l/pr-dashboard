// import axios from "axios";

const apiEndpoint = "https://api.github.com/";
// const user = "b-a-b-e-l"

// export const getUser = () =>
//   axios.get(`${apiEndpoint}/user`, {
//      });


// //     headers: { "app-id": "611a380f6e75df584081c2ec" },

async function getUser() {
    const response = await fetch(`${apiEndpoint}/users/b-a-b-e-l`)
    const data = await response.json()
    console.log(data)
    
}
