import { Link } from 'react-router-dom'


export function Upload() {
    return (
        <>
            <h1> Upload your Video</h1>
            <textarea />
            <input type="file"/>
            <div>
                <Link to="/encrypt">NEXT</Link>
            </div>
        </>
    )
}