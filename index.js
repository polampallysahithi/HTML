import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
// import Task_18th from './task_18.js';
// import './task_18.css';


// import Task from './task.js';
import Incre from './inc_dec_task.js';
// import Doubt from './Doubt.js';

import Navbar from './navbar_task.js';
import Works from './works.js';
import Works_part2 from './works_part2.js';
import Premium from './premium.js';
import HappyStories from './happystories.js';
import Contact from './contact.js';
const root = ReactDOM.createRoot(document.getElementById('sahithi'));

root.render(
  <React.StrictMode>

{/* <Doubt /> */}
{/*<Task_18th /> */}


 {/* <Incre /> */}
 {/* <Laps />
<Calculator />   */}

    
  <Navbar />
  <Works />
  <Works_part2 />
  <Premium />
  <HappyStories />
  <Contact /> 



  {/* <Task /> */}
  </React.StrictMode>
);


reportWebVitals();
