import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Based_class from './based_class.jsx'
import Greet from './file1.jsx'
import Welcome from './file2.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx' 
import Events from './events.jsx'
import Parameter from './parameter.jsx'
import Conditional from './conditional.jsx'
import Colorbuttons from './color_buttons.jsx'
function App() {

  return (
    <>
      <div>
        {/* <Welcome name="Nishana" age="30"/> */}
        {/* <Welcome name="aaaaa"/> */}
        

         <Greet/>
        {/* < Based_class/>  */}
        <Events/>
        <Parameter/>
        <Conditional/>
        <Colorbuttons/>
       </div>
    </>
  )
}

export default App



