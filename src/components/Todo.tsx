import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todotype } from '../types';

interface todoProps {
  todos: Todotype;
  deleteTodo: (id: string) => void;
}


const todo = ({todos, deleteTodo}: todoProps) => {
  return (
    <li className="p-2 bg-neutral-500 my-2 rounded-md uppercase shadow-sm">
      <div className="flex items-center justify-between">
        <p>
{todos.text}
        </p>
        <div className="flex gap-4">
          <button>
            <CheckIcon/>

          </button>
          <button onClick={() => deleteTodo(todos.id)}>
            <DeleteIcon/> 
          </button>
        </div>
      </div>

    </li>
  )
}

export default todo
