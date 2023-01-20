import { TaskList } from "./components/TaskList";
import { FormTask } from "./components/FormTask";

function App() {
  return (
    <div className="bg-zinc-700 h-screen">
      <div className="container mx-auto">
        <FormTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
