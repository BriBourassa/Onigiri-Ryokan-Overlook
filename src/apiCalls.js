const fetchData = (url) => {
    return fetch(url)
    .then(response => {
      if(!response.ok) {
     throw new Error("Status Code:", response.status);
 } else {
     return response.json()
 }
})
    .catch(error =>  alert(`FATAL ERROR!!! ${error}`))
 };
     
 const fetchAll = (id) => {
    return Promise.all([
     fetchData(`http://localhost:3001/api/v1/customers/${id}`),
     fetchData("http://localhost:3001/api/v1/bookings"),
     fetchData("http://localhost:3001/api/v1/rooms"),
 ])
};

     export default fetchAll
 