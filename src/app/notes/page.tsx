import Note from '@/app/components /Note';



async function getNotes(){

    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records',
    {cache: 'no-store'});
    const data = await res.json();
    return data?.items as any[];
}




export default async function NotesPage(){

    const notes = await getNotes();

    return (
        <div>
            <h1>notes</h1>
            {notes?.map((note,i)=>{
                return <Note
                key = {note.id}
                note = {note}
                />
            })}
        </div>
    )
}