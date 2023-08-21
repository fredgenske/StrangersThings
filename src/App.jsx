import { Routes, Route, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import Messages from "./components/Messaging/Messages";
import Posts from "./components/Posts";
import Sidebar from "./components/Access/Sidebar";
import UserPosts from "./components/UserPosts/UserPosts";
import MakePost from "./components/Posts/MakePost";
import Login from "./components/Login";

function App() {
  const sidebarPathnames = ["/", "/messages", "/userposts"]
  const [query, setQuery] = useState("")
  const location=useLocation()
  const [token, setToken]=useState('');

  useEffect(()=>{
    let savedToken=localStorage.getItem("token")
    savedToken? setToken(savedToken): null
    if (savedToken){
      setToken(savedToken)
    }

  },[])

  return (
    <>
      <Header />
      <div id="content">
        {sidebarPathnames.includes(location.pathname)?<Sidebar query={query} setQuery={setQuery}/>:null}
        <Routes>
          <Route path="" element={<Posts query={query}/>} />
          <Route path="newuser" element={<NewUser/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="messages" element={<Messages query={query}/>} />
          <Route path="userposts" element={<UserPosts query={query}/>} />
          <Route path="*" element={<h2>Route not found</h2>} />
          <Route path="makeposts" element={<MakePost token={token} query={query}/>}/>
          {/* <Route path="posts" element={<Posts />} /> */}
        </Routes>
        <Login setToken={setToken}/>
      </div>
    </>
  );
}

export default App;