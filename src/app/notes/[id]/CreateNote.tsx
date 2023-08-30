'use client';

import {useState} from 'react';
import React from 'react';
import {useRouter} from 'next/navigation';

function CreateNote() {

    const router = useRouter();

    const newNote = {
        title: '',
        content:'',
    };

    const [note, setNote] = useState(newNote);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log(name, value)
        console.log(e.target)

        setNote((prevNote)=>{ return ({
            ...prevNote,
            [name]: value
        });
        })
    };

    const create = async()=>{
        await fetch('http://127.0.0.1:8090/api/collections/notes/records',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                ...note
            })
        }
        );

        setNote(newNote);
        router.refresh();


    };


    return (
        <form onSubmit={create} className='flex flex-col text-black bg-white' >
            <h3>
                Create a new Note
            </h3>
            <input
                type='text'
                placeholder='Title'
                name='title'
                className='m-2'
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Content'
                name='content'
                className='m-2'
                onChange={handleChange}
            />
            <button> Submit </button>

        </form>
    )
};

export default CreateNote