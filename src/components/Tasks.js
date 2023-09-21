import { useState } from "react";


const Tasks = () => {
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
]
)
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;