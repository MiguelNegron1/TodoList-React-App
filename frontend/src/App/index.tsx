import {AppUI} from "./AppUI";
import { TodoProvider } from '../Components/TodoContext';


function App() {
    return(
      <>
      <div>Hellow Wworld</div>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
      </>

  )
}
export default App;

