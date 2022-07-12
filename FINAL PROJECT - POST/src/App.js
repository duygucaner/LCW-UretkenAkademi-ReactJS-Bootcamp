import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { auth, provider } from "./firebase-config";
import { signOut, signInWithPopup } from "firebase/auth";
import "./default.jpg";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
     signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
      alert("You have successfully logged out");
     });
  };

  const signInwithGoogle = () => {
   signInWithPopup(auth, provider).then((result) => {
     localStorage.setItem("isAuth", true);
     setIsAuth(true);
     alert("You have successfully logged in");
   });
   };

  return (
  <Router>
     <nav>
         <div className="userinfo">
               {!isAuth ? <button className="loginprofile" onClick={signInwithGoogle}><img className="userprofile" src={require('./default.jpg')} alt="Login"/></button>  :
               <>
               <img className="userprofiles" src={auth.currentUser.photoURL} alt="Delete Post"/>
               <h1 className="currentusernames">{auth.currentUser.displayName}</h1>
               </>
               }
         </div>
        <Link to="/">Home</Link>
        {!isAuth ?<Link to="/login"> Login</Link> : 
        <>
        <Link to="/createpost"> Create Post</Link>
        <button className="logoutbtn" onClick={signUserOut}> Log Out</button>
        </>       
        }

     </nav> 
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
  </Router>
  );
}

export default App;
