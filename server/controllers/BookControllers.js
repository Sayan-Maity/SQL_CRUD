import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Horny6740Badass",
  database: "sql_crud",
});

// Get all books
export const getBooks = (req, res) => {
  const sql_query = "SELECT * FROM books";
  db.query(sql_query, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(data);
  });
};

// Add a new book
export const addBook = (req, res) => {
  const book = req.body;
  const sql_query = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [book.title, book.desc, book.cover];
  db.query(sql_query, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json("Book has been added successfully!");
  });
};

// Update a book
export const updateBook = (req, res) => {
  const id = req.params.id;
  const book = req.body;
  const sql_query = "UPDATE books SET ? WHERE id = ?";
  db.query(sql_query, [book, id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json("Book has been updated successfully!");
  });
};

// Delete a book
export const deleteBook = (req, res) => {
  const id = req.params.id;
  const sql_query = "DELETE FROM books WHERE id = ?";
  db.query(sql_query, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json("Book has been deleted successfully!");
  });
};
