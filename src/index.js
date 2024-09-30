import React from 'react';
import {createRoot} from 'react-dom/client';

import './style.css';

// ----------------------------------------------------------------------

// old version

// import React from 'react';
// import ReactDom from 'react-dom/client';

// ReactDom.render(<h1>hi</h1>, document.getElementById('root'));



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

// --------------------------------------------------------------------------

// Component

class Timer extends React.Component {
  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleTimeString()
    }
  }

  render(){
    setInterval(()=>{
      this.setState({
        time : new Date().toLocaleTimeString()
      })
    },1000)

    return(
      <h2 className="timer">
        Its {this.state.time}
      </h2>
    )
  }
}

class Hello extends React.Component {
  render(){
    return(
      <h1>
        Hello my friend's :)
      </h1>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div className="main">
        <Hello/>
        <Timer/>
      </div>
    )
  }
}

// const tick = () => {
  createRoot(document.getElementById('root')).render(<App/>);
// }








