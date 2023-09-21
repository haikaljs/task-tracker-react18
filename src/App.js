import { useState } from "react";

import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn PHP", day: "Feb 5th at 2:30pm", reminder: true },
    { id: 2, text: "Learn Laravel", day: "Feb 6th at 3:30pm", reminder: true },
    {
      id: 3,
      text: "Learn Javascript",
      day: "Feb 7th at 4:30pm",
      reminder: false,
    },
    { id: 4, text: "Learn Reactjs", day: "Feb 8th at 5:30pm", reminder: false },
    { id: 5, text: "Learn Vuejs", day: "Feb 9th at 6:30pm", reminder: false },
  ]);
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
};

// Example of class base components
// class App extends React.Component {
//   render() {
//     return <h1>Class base components</h1>;
//   }
// }

export default App;
