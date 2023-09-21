import React from "react";
import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks />
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
