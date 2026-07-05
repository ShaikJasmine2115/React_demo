import { useState } from "react";

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('Work');
    const [description, setDescription] = useState('');

    return <form className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
                Title
            </label>
            <input type="text" className="w-full p-2 border rounded-sm" 
            value ={title} onChange={(e)=> setTitle(e.target.value)}>
            </input>
        </div>
        <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
                Priority
            </label>
            <select className="w-full p-2 border rounded-sm" 
            value ={priority} onChange={(e)=> setPriority(e.target.value)}>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
                Category
            </label>
            <select className="w-full p-2 border rounded-sm" 
            value ={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value={"Work"}>Work</option>
                <option value={"Personal"}>Personal</option>
                <option value={"Other"}>Other</option> 
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
                Description
            </label>
            <textarea className="w-full p-2 border rounded-sm" 
            value ={description} onChange={(e)=> setDescription(e.target.value)}>
            </textarea>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer w-full hover:bg-purple-700"> Add note</button>

    </form>
}

export default NoteForm_sample;