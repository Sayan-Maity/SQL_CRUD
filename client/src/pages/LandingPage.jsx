import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [updatedBook, setUpdatedBook] = useState({
        cover: "",
        title: "",
        desc: "",
    });

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchAllBooks();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/books/` + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const handleEditClick = (id, book) => {
        navigate("/update", { state: { id, book } });
    };

    return (
        <div className="landing">
            <Navbar />
            <h1>Books</h1>

            <div className="card_section">
                {books.map((book) => (
                    <div className="card" key={book.id}>
                        <img src={book.cover} alt={book.title} height={150} width={150} />
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <div className="button_grp">
                            <button className="button" onClick={() => handleEditClick(book.id, book)}>Edit</button>
                            <button className="button" onClick={() => handleDelete(book.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingPage
