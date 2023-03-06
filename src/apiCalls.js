
const fetchData = (url) => {
    return fetch(url)
     .then(response => response.json())
 };
 
 const fetchAll = (id) => {
    return Promise.all([
     fetchData(`http://localhost:3001/api/v1/customers/${id}`),
     fetchData("http://localhost:3001/api/v1/bookings"),
     fetchData("http://localhost:3001/api/v1/rooms"),
 ])
};

// const postData =  {
//     fetch('http://localhost:3001/api/v1/bookings', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "id": 78912 })
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))
// };

     export default fetchAll
 