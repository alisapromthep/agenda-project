import React from 'react';
import Note from '@/app/components /Note';
async function getNote(noteId: string){
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: {revalidate: 10},
        }
    )
    const data = await res.json();
    return data;
}

export default async function NotePage({params}:any) {

    const note = await getNote(params.id);

    return (
        <div>
            <Note note={note}/>
        </div>
    )
};

