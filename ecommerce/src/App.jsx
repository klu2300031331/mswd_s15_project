// // App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import Login from './components/Login';
// // Import other components...

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/login" element={<Login />} />
//         {/* Add more routes here */}
//       </Routes>
//     </div>
//   );
// }

// export default App;








// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Layout from "./components/Layout";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import FunState from "./components/FunState";
// import DataRestApi from "./components/DataRestApi";
// import Logout from "./components/Logout";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token); // Convert to boolean
//   }, []);

//   return (
//     <Router>
//       <Layout />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Routes (Rendered only if authenticated) */}
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/counter" element={<FunState />} />
//             <Route path="/datafetch" element={<DataRestApi />} />
//             <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
//           </>
//         ) : (
//           // Redirect to login if not authenticated
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import FunState from './components/FunState'
// // import { About } from './components/About'
// // import Home from './components/Home'
// // import Layout from './components/Layout'
// // import { Registration } from './components/Registration'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //     {/* <FunState></FunState>
// //     <About></About> */}
// //     {/* <Home></Home> */}
// //     <Layout></Layout>
// //     </>
// //   )
// // }

// // export default App




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    
      <Routes>
        {/* Default to Login page */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes - Shown only after login */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    
  );
}

export default App;