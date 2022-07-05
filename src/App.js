
import './App.css';
import Logo from "../src/img/logo.jpeg"
import {useState,useEffect} from "react"
import HashLoader from "react-spinners/HashLoader";


function App() {
 
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="App">
      {
        loading?
        <HashLoader color={"C415AD"} loading={loading}  size={150} />
        :
        <div>
        <img  className='img' src={Logo} alt="" />
           <h1> MeaDev Channel</h1>
           <p>Take me out tonight,Because I want to see people And I want to see life,Driving in your car
  Oh, please don't drop me home
  Because it's not my home, it's their home
  And I'm welcome no more
  And if a double-decker bus
  Crashes into us
  To die by your side
  Is such a heavenly way to die
  And if a ten ton truck
  Kills the both of us
  To die by your side
  Well, the pleasure, the privilege is mine</p>
        </div>
        
      
      
      }
     
 
      
    </div>
  );
}

export default App;
