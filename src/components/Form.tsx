import AddCircleIcon from '@mui/icons-material/AddCircle';


const Form = () => {
  return (
    <form className="flex justify-between bg-gray-400 p-4 rounded-lg items-center">
        <input className="w-full text-xl rounded-lg p-2"/>
        <button className="ml-2 rounded-lg text-gray-800">
            <AddCircleIcon/>
        </button>
    </form>
  )
}

export default Form
