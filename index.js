// const formData = {
//     dogName: 'Byron',
//     dogBreed: 'Poodle',
// };

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json',
//         'Accept': 'application/json'
//     }, 
//     body: JSON.stringify(formData),
// };
// fetch('http://localhost:3000/dogs',configurationObject)
// .then(response => response.json())
// .then(object => console.log(object))
// .catch(function (error) {
//     alert("Did bad ting mans!");
//     console.log(error.message)
// })
///////////////////////////////////////////
const data = {
    name:'Steve' ,
    email: 'steve@steve.com' ,
};
const configurationData = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    body: JSON.stringify(data)
}
let message = 'Unauthorized Access'
function submitData (userName, userEmail){
    fetch('http://localhost:3000/users', configurationData)
    .then(response => response.json())
    .then(obj => document.body.innerHTML = obj['id'])
    .catch((error) => document.body.innerHTML = error.message)
}
submitData();