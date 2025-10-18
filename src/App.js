import React,{useState} from "react";
import axios from "axios";

function App() {

  const [data,setData]=useState(null);
  const [book,setBook] = useState({
    id:0,
    name:'',
    qty:0
  });
  const [msg,setMsg] = useState(null);

  const handleGet = async()=>{
    try{
      console.log("tapped");
      const resp = await axios.get("https://bms-be-mf8b.onrender.com/books");
      console.log(resp.data);
      setData(resp.data);
      setMsg(resp.data.msg);

    }catch(e){
      console.log(e);
    }
  };
  
  const handlePost = async()=>{
    try{
      const resp = await axios.post("https://bms-be-mf8b.onrender.com/books",book);
      setMsg(resp.data.msg);
    }catch(e){
      console.log(e);
    }
  };
  
  const handleDelete = async()=>{
    try{
      const resp = await axios.delete(`https://bms-be-mf8b.onrender.com/books/${book.id}`);
      setMsg(resp.data.msg);
    }catch(e){
      console.log(e);
    }
  };

 const handlePut = async()=>{
    try{

      const resp = await axios.put(`https://bms-be-mf8b.onrender.com/books/${book.id}`,{name:book.name});
      setMsg(resp.data.msg);
    }catch(e){
      console.log(e);
    }
  };
  return (
    <>
    <h1>Book management</h1>

    <input type="text" value={book.id} onChange = {(e)=>setBook({...book,id:e.target.value})} />
    <input type="text" value={book.name} onChange = {(e)=>setBook({...book,name:e.target.value})} />
    <input type="text" value={book.qty} onChange = {(e)=>setBook({...book,qty:e.target.value})} />
    <button onClick={handleGet}>Load</button>
    <button onClick={handlePost}>Add</button>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handlePut}>Put</button>
    {
      data ? data.map((d)=><h1>Book ID :{d.id} {d.name} with {d.qty} quantity</h1>) : <h1>No data loaded</h1>
    }
    {msg && <p>{msg}</p>}
    </>
  );
}

export default App;