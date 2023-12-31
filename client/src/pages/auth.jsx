// import React, { useState } from 'react';
// import  axios  from "axios";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {



  // return (
  //   <div className='auth'>
  //     <Login /> 
  //     <Register />
  //    </div>
  // );


  // const Login = () => {



//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate();

//   const handleSubmit = async(event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post("http://localhost:5173/auth/login", {
//         username,
//         password,
//       });

//       return (
//         <div className="auth-container">
//           <form onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(event) => setUsername(event.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       );
//     }catch{
//       pass 
//     }

//   }

//  const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         await axios.post("http://localhost:5173/auth/register", {
//           username,
//           password,
//         });
//         alert("Registration Completed! Now login.");
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     return (
//       <div className="auth-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Register</h2>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   };
// }


// export default Auth
















import React, { useState } from 'react';

 const Auth = () => {
  return (
    <div className='auth'>
      <Login /> 
      <Register />
     </div>
  );
};

const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

return (
  <Form
  username={username}
  setUsername={setUsername}
  password={password}
  setPassword={setPassword}
  label="Login"
  />
);
};

 const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     return (
      <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      />
    );
 }; 

  const Form = ({ username, setUsername, password, setPassword, label }) => {
      return (
      <div className='auth-container'>
        <form>
          <h2> {label} </h2>
          <div className='form-group'>
            <label htmlFor='username'> Username: </label>
            <input 
              type='text'  
              id='username'
              value={username} 
              onChange={(event) => setUsername(event.target.value)} 
              />
          </div>
          <div className='form-group'>
                <label htmlFor='password'> Password: </label>
                   <input 
                    type='password' 
                    id='password'
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
              />
          </div>
    
        <button type="submit">{label}</button>
    
        </form>
      </div>
      );
      };


export default Auth

