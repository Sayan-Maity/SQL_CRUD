import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        cover: '',
        title: '',
        desc: ''
    })

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/books', book)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log("book => ", book)
    return (
        <div className='landing'>
            <Navbar />

            <h1>Admin Page</h1>
            <div className='add_book'>
                <input type="text" className='input' name="cover" onChange={handleChange} placeholder='give cover Image link' />
                <input type="text" className='input' name="title" onChange={handleChange} placeholder='Book Title' />
                <input type="text" className='input' name="desc" onChange={handleChange} placeholder='Book Description' />

                <button className='button' onClick={(e) => handleClick(e)}>Add Book</button>
            </div>

        </div>
    )
}

export default AdminPage
