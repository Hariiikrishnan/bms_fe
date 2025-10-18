
import React from "react";
import {Routes,Route,Link,useParams} from "react-router-dom";

function Home(){
  return <><h1>Home</h1></>
}
function About(){
  return <><h1>About</h1></>
}
function Courses(){
  return <><h1>Courses</h1></>
}
function Path1(){
  return <><h1>Path 1</h1>
    <li><Link to="/path1/path2">Path 2</Link></li></>
}
function Path2(){

  return <>
  <h1>Path 2</h1>
  <h2>Dynamic Routing</h2>
  <li><Link to="/path1/path2/1">Comp 1</Link></li>
  <li><Link to="/path1/path2/2">Comp 2</Link></li>
  <li><Link to="/path1/path2/3">Comp 3</Link></li>
  </>
}
function DynamicComp(){
  const {id} = useParams();

  return <>
  <h1>Component with id :{id}</h1>
 
  </>
}

function RouterComp() {

 
  return (
    <>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/path1">Path 1</Link></li>
        </nav>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/path1" element={<Path1 />} />
          <Route path="/path1/path2" element={<Path2 />} />
          <Route path="/path1/path2/:id" element={<DynamicComp />} />
        </Routes>
    </>
  );
}

export default RouterComp;