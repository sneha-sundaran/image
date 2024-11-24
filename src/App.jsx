
import { useState } from 'react'
import './App.css'
import axios from 'axios'

import { TextField } from '@mui/material';
function App() {

  const[inputValue,setInputValue]=useState(0)
  const [images,setImages]=useState([])
  console.log(images);
  

 const fetchData=async()=>{

try {


  const response= await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue}&client_id=qYWq9uJA_CPTAE29dbc1U8kUmTDzYOvorhV5pDUqv3g`) 
console.log(response);

const {results}=response.data
console.log(results);
setImages(results)


 

}catch(err){
  console.log(err);
  
}



 }
  return (
    <>
      
   
     
    <div className='content'> 

      <h1 className='main-head'>Image Gallery</h1>
         <div className='search-bar'> 
      <TextField id="inputfeild" variant="outlined"  onChange={(e)=>setInputValue(e.target.value)}placeholder='Search...' sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'purple', // Outline color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple', // Outline color on focus
            },
          },
        }} />
      
        <button className='search-btn' onClick={fetchData}> Find<i className="fa-solid fa-magnifying-glass" style={{paddingLeft:'5px'}}></i></button>
      </div>
      
      <div className='contentshow' style={{border:images.length>0? '2px solid purple':'none'}}>
        {



          images &&
          (
            images.map(item=>(


             <img className='images' key={item.id} src={item.urls.small} alt=""  style={{height:'250px',width:'250px',paddingLeft: '30px',paddingTop: '30px'}}/>
            ))
          )
  
         
          
        }
      </div>
      
      </div>
    
    
     </>
  )
}

export default App
