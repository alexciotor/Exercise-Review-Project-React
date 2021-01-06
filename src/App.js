import {useState} from 'react'
import data from './data'

 console.log(data);

function App() {
const [value, setValue] = useState(0)
 const {id,name,age,image,position,reviews}= data[value]
 console.log(id);
 const change=(num)=>{
   if(num>data.length-1){
     num = 0
   }
   if(num<0){
     num = data.length-1
   }
   return num

 }

 const lfet = ()=>{
   setValue(value =>{
     let newValue = value - 1
  return change(newValue)
   })
   
 }
 const right=()=>{
   setValue(value =>{
     let newValue = value + 1
  return change(newValue)
   })
   
 }

 const surprise =()=>{
   let random = Math.floor(Math.random()* data.length)
 if(random==value){
   random=value+1
 }
 setValue(change(random))

 }

 
  return (
    <div className="App">
<div className="main-container">
<div className="title"><h1>our reviews</h1><div className="underline"></div></div>
</div>
{}
<article className="article">
<div className="image">
<img className='img' src={image} alt=""/>
</div>
<div className="content">
<h4>{name}</h4>
<h3>{position}</h3>
<p>{reviews}</p>
</div>
<div className="buttons">
<button onClick={()=>{
  lfet()
}} className="btn">left</button>
<button onClick={()=>{
  right()
}} className="btn">right</button> <br/>
<button onClick={()=>{
  surprise()
}} className="btn">surprise</button>
</div>
</article>
    </div>
  );
}

export default App;
