// old version

// import React from 'react';
// import ReactDom from 'react-dom/client';

// ReactDom.render(<h1>hi</h1>, document.getElementById('root'));



// import React from 'react';
// import {createRoot} from 'react-dom/client';


//   const tick = () => {
//     const element = (
//       <div>
//         <h1>
//           Hello my firends
//         </h1>
  
//         <h2>
//           It is {new Date().toLocaleTimeString()}
//         </h2>
//       </div>
//     )
//     createRoot(document.getElementById('root')).render(element);
//   }

//   setInterval(() => {
//     tick();
//   }, 1000)

import React from "react";
import { createRoot } from "react-dom/client";


// const exersice = <h1>hello</h1>
const tick = () => {
  const Element = (
    <div>
      <h1>
        Hi :)
      </h1>
      <h2>
        Time is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  createRoot(document.getElementById('root')).render(Element);
}

setInterval(() => {
  tick()
},1000)







