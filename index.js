// Add your code here

 function SubmitData(Name,Email){
    const Data ={
        name: Name,
        email: Email,
    }
    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify(Data)
    })
    .then((res)=>res.json())
    .then((data)=>data)
    .catch((error)=>alert(`${error.message}`))

 }