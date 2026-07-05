import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !formData.title || !formData.description) return;
        const newNote = {id : Date.now(), ...formData};
        setNotes([...notes, newNote]);
        setFormData({title: '', priority: 'Medium', category: 'Work', description: ''});

    }

    return (
    <>
    <button className="w-full bg-gray-100 border border-gray-300 text-purple-600 px-4 py-2 
        rounded-lg cursor-pointer w-full hover:bg-purple-200 hover : border-purple-300 
        transition mb-4" 
        onClick={()=> setIsFormVisible(!isFormVisible)}>           
        {isFormVisible ? 'Hide Form' : 'Create New Note '}
    </button>

    {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
        <TextInput label="Title" name="title" value={formData.title} onChange={handleChange} required/>
        <SelectInput label="Priority" name="priority" value={formData.priority} onChange={handleChange} 
            options={
                [{value: "Low", label: "Low"}, 
                {value: "Medium", label: "Medium"}, 
                {value: "High", label: "High"}
                ]} />
        <SelectInput label="Category" name="category" value={formData.category} onChange={handleChange} 
            options={
                [{value: "Work", label: "Work"}, 
                {value: "Personal", label: "Personal"}, 
                {value: "Other", label: "Other"}
                ]} />
        <TextAreaInput label="Description" name="description" value={formData.description} onChange={handleChange} required/>
        
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer w-full hover:bg-purple-700"> Add note</button>

    </form>
    )}
    
    </>
    )
}

export default NoteForm;