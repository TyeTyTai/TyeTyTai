import React from "react";


function clickMe(){
  alert("You cannot convince me that God did not take his time on you Boo. Look at your glow!");
  
}

export default function App() {
  return (
    <div>
      <button onClick={clickMe}>
        Click Me For A Reading
      </button>
    </div>
    );
  }