import {React,useState} from 'react';
// export default function NameApp() {
// const[name,setName]=useState("Brijesh");
// return 
//   (
//     <div>
//       <h1>{name}</h1>            
//     </div>
//   )
// }

// function NameApp()
// {
//     const[name,setName]=useState("Brijesh");
//     return (
//         <>
//          <h2>{name}</h2>
//         </>
//     )
// }
// export default NameApp;

// function NameApp()
// {
//     const[name,setName]=useState("Brijesh");
//     return (
//         <>
//          <h2>{name}</h2>
//         </>
//     )
// }
// export default NameApp;


const NameApp = () => {
   const[age,setAge]=useState("My age is 34 years");
    return (
    <div>
      <h3 align="center">{age}</h3>
      <h5 align="center"><button type='button' onClick={()=>{setAge("My age is 38 years")}}>Change age</button></h5>
     </div>     
  )
}
export default NameApp

    