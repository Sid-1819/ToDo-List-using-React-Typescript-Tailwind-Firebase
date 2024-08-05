import Form from "./components/Form";
import Todo from "./components/Todo";
import { collection, query, onSnapshot ,doc,deleteDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import {db} from "./components/firebase";

const App = () => {



const [todo, setTodo] = useState(["Code", "Code More"]);

//read

//create
useEffect(() => {
  const q = query(collection(db, "todos"));
 const unsub = onSnapshot(q, (QuerySnapshot) => {

  const todosArr = [];
  QuerySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id});
  });

  setTodo(todosArr);
    

 })
 return () => unsub;
},[])

//update


//delete
const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, "todos", id));
}


  return (
    <div className="h-screen w-screen bg-gray-900 p-4">
      <div className=" bg-amber-50 w-full h-500px max-w-[500px] rounded-md shadow m-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-600 p-2">A DEV's TODO LIST</h1>
        
        <Form></Form>
        <ul>
          {todo.map((todos, index) => (
          <Todo key={index} todos={todos}
          deleteTodo={deleteTodo}
          />
          ))}
        </ul>
        <p>You have 2 things to complete</p>
        </div>
    </div>
  )
}

export default App;
