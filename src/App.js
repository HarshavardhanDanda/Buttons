import HomePage from "./components/pages/HomePage/HomePage";
import { Calculator } from "./components/pages/Calculator/Calculator";
import { Weather } from "./components/pages/Weather/Weather";
import { Tasks } from "./components/pages/TaskManager/Tasks";
import { EditTaskForm } from "./components/pages/TaskManager/TaskEditForm";
import { CreateTaskForm } from "./components/pages/TaskManager/TaskCreateForm";
import { TaskHistory } from "./components/pages/TaskManager/TaskHistory";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/calculator" element={<Calculator/>} />
          <Route exact path="/weather" element={<Weather/>} />
          <Route exact path="/tasks" element={<Tasks/>} />
          <Route exact path="/tasks/edit/:id" element={<EditTaskForm />} />
          <Route exact path="/tasks/create" element={<CreateTaskForm />} />
          <Route exact path="/tasks/history" element={<TaskHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
