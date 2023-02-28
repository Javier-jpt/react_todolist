import { useState } from "react"

const Todoinput = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleAddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
                type="text" 
                className="focus:shadow-lg font-inter focus:shadow-green-400 pl-12 w-full py-4 bg-gray-300 rounded-xl outline-none transition-all duration-300 ease-in-out"
                placeholder="What's next..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => handleAddTodo(e)}
            />
        </div>
    )
}

export { Todoinput }