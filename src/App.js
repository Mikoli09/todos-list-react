import Form from "./Form";
import Tasks from "./Tasks";
import ListHeader from "./ListHeader";
import Section from "./Section";
import MainHeader from "./MainHeader";
import Container from "./Container";
//import tasksTable from "./data/exampleTasks";
import { useState } from "react";


function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasksTable, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", status: "toDo" },
    { id: 2, content: "zjeść obiad", status: "done" },
    { id: 3, content: "zrobić kolacje", status: "done" },
  ]);


  const setAllDone = () => {
    setTasks(tasksTable =>
      tasksTable.map((tableElement) => ({
      ...tableElement,
        status: "done"
    })));
};

const toggleHideDone = () => {
  setHideDone(hideDone => !hideDone);
};

const removeTasks = (id) => {
  setTasks((tasksTable) => tasksTable.filter((elementOfTable) => elementOfTable.id !== id));
};

const toggleTaskDone = (id) => {
  setTasks((tasksTable) => tasksTable.map((task) => {
    if (task.id === id) {
      return { ...task, status: task.status === "toDo" ? "done" : "toDo" }
    }
    return task;
  }))
};


return (
  <Container>
    <MainHeader
      title={"Lista zadań"}
    />
    <Section
      headerContent={"Dodaj nowe zadanie"}
      sectionContent={<Form />}
    />
    <Section
      headerContent={<ListHeader tasksTable={tasksTable} toggleHideDone={toggleHideDone} hideDone={hideDone} setAllDone={setAllDone} />}
      sectionContent={<Tasks tasksTable={tasksTable} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
    />
  </Container>
);
}

export default App;
