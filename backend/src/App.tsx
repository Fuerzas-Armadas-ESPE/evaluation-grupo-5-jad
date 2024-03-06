import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="h-screen bg-white-900 text-black flex justify-center items-center">
      <div className="bg-black-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Gestion de Docentes</h1>
        <TaskProvider>
          <TaskForm taskToEdit={undefined} />
          <TasksList />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
