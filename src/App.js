import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {

  const [expression,setExpression] = useState("");
  const [result,setResult] = useState();
 
  const fetchresults=async ()=>{
    console.log(expression);
    const results = await fetch(`http://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`)
                    .catch((err)=>{
                       console.log(err);
                       setResult("undefined");
                    })
    const response = await results.json();
    console.log(typeof(response));
    setResult(response);
  }

  const handleExpression=(e)=>{
     setExpression(e.target.value);
     console.log(expression);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    fetchresults()
   console.log("Lelo");
  }


const output=()=>{
  if(result==="" && expression===""){
     return <>"Please Enter a mathematical expression"</>;
  }
  if(expression!=="" && result===""){
    return <>"Enter a valid Mathematical expression"</>;
  }
  if(typeof(result)===typeof(2)){
    return <>{result}</>
  }
  return <></>
} 
  return (
    <div className="container App">

      <h1>Mathematical expression evaluator</h1>
      <form onSubmit={handleSubmit}>   
          <div className="input-group Expression">
            <input 
                  type="search" 
                  className="form-control rounded" 
                  placeholder="Enter Mathematical expression"
                  value={expression}
                  onChange={handleExpression}/>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </div>
      </form> 
      <div className='Output'>
         <h1>{output()}</h1>
      </div>    
    </div>
  );
}

export default App;
