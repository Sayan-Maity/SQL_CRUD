import axios from "axios";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateBook = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id, book } = location?.state ?? { id: null, book: null };
    console.log("Here is the book id => ", id);

    const [books, setBooks] = useState({
        cover: book?.cover || '',
        title: book?.title || '',
        desc: book?.desc || ''
    });

    const handleChange = (e) => {
        setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${id}`, books);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='landing'>
            <Navbar />

            <div className='add_book'>
                <input type="text" className='input' name="cover" value={books.cover} onChange={handleChange} placeholder='give cover Image link' />
                <input type="text" className='input' name="title" value={books.title} onChange={handleChange} placeholder='Book Title' />
                <input type="text" className='input' name="desc" value={books.desc} onChange={handleChange} placeholder='Book Description' />
                <button className='button' onClick={(e) => handleUpdate(e)}> Update Book </button>
            </div>

        </div>
    );
};

export default UpdateBook;
