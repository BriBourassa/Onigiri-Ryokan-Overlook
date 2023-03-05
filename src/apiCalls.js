
const fetchData = (url) => {
    return fetch(url)
     .then(response => response.json())
 }
 
 const fetchAll = (id) => {
    return Promise.all([
     fetchData(`http://localhost:3001/api/v1/customers/${id}`),
     fetchData("http://localhost:3001/api/v1/bookings"),
     fetchData("http://localhost:3001/api/v1/rooms"),

 ])
 }
     export default fetchAll
 