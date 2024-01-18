
import React,{useState} from "react";

function Textform(props) {
    const [text , setText] = useState("")
    

    const handleUpClick = ()=>{
        // console.log("Upper")
        const newText = text.toUpperCase()
        setText(newText)
        if(newText.length>0){
          props.showAlert("Converted to Uppercase","success")
          
        }

 
    }


    const handleLoClick = ()=>{
     const newText = text.toLowerCase()
     setText(newText)
     if(newText.length>0){
       props.showAlert("Converted to lowecase","success")

     }
    }

    const clearText = ()=>{

     const newText = text



      if(newText.length>0){
        props.showAlert("Clear The TextArea","info")
        
      }
      
        setText("");
    }
   
    const handleOnChange = (event)=>{
        // console.log("Change be")
        setText(event.target.value) 
        // console.log(text)
    }


    const handleCopy  = ()=>{
      let text1 = document.getElementById("myBox")
      // text1.select(); //  
      navigator.clipboard.writeText(text1)
          const newText = text

      if(newText.length>0){
        props.showAlert("Copied  The Text","success")
        
      }

   
    }


    const handleExtraSpace = ()=>{

    
      let newText  = text.split(/[ ]+/);
      // console.log(newText)
      setText(newText.join(" "))
      if(newText.join())
      props.showAlert("Remove Extra Spaces" ,"success")

    }
   
    return (
        <>
        <div className="container my-3" >
      <h1 style={{color:props.mode==="dark"?"red":"black", textAlign:"center", background:"yellow",paddingBottom:"2px",borderRadius:"20px"}} >{props.heading}</h1>

      <div className="mb-3 " style={{border:"2px solid #3d5a80"}}>
        {/* <label htmlFor="myBox" className="form-label">{props.text}</label> */}
        <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"white":"#022441",color:props.mode==="light"?"white":"black"}} />
      </div>

      <button  className="btn btn-primary mx-1 my-2" onClick={handleUpClick} > Convert To Uppercase</button>
      <button   className="btn btn-success mx-1 my-2" onClick={handleLoClick} > Convert To LowerCase</button>
      <button  className="btn btn-danger mx-1 my-2" onClick={clearText} >Clear Text</button>
      <button  className="btn btn-warning mx-1 my-2" onClick={handleCopy} > Copy </button>
      <button   className="btn btn-info mx-1 my-2" onClick={handleExtraSpace} > Remove Extra Spaces </button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}} >
        <h1 >Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } Words And {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter The Text To Preview"}</p>
    </div>
    </>
  );
}

export default Textform;
