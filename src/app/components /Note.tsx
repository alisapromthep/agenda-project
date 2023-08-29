import React from 'react';
import Link from 'next/link';



const Note = ({note}: any) => {
    const {id, title, content, created} = note || {};


    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}

export default Note;