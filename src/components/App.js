// create your App component here
import React,{useEffect,useState} from "react";

function App(){
    const[image,setImage] = useState('')
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => setImage(data.image))
      }, []);

    return(
        <div>
        <p>Loading...</p>
        <image src={image} alt="A Random Dog"/>
        </div>
    )
}
export default App;