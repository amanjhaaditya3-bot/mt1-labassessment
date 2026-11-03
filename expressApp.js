
import express from 'express';

const app = express();
const PORT = 4000;

// Middleware to read JSON data
app.use(express.json());

// Array of books
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 350
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 400
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        price: 450
    }
];

// Route 1: Welcome Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Library Management System</h1>');
});

// Route 2: Get All Books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// Route 3: Get Book By ID
app.get('/books/:id', (req, res) => {

    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});

// Route 4: Add New Book
app.post('/books', (req, res) => {

    const { id, title, author, price } = req.body;

    if (
        id === undefined ||
        !title ||
        !author ||
        price === undefined ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: "All valid book fields are required"
        });
    }

    if (books.some(b => b.id === Number(id))) {
        return res.status(409).json({
            message: "Book ID already exists"
        });
    }

    const newBook = {
        id: Number(id),
        title,
        author,
        price: Number(price)
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

// Route 5: Update Book
app.put('/books/:id', (req, res) => {

    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, price } = req.body;

    if (
        !title ||
        !author ||
        price === undefined ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: "Valid title, author and price are required"
        });
    }

    book.title = title;
    book.author = author;
    book.price = Number(price);

    res.status(200).json({
        message: "Book updated successfully",
        book: book
    });
});

// Route 6: Delete Book
app.delete('/books/:id', (req, res) => {

    const id = Number(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1);

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook[0]
    });
});

// Invalid Routes
app.use((req, res) => {
    res.status(404).json({
        message: "404 - Route Not Found"
    });
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`Express Server running at http://localhost:${PORT}`);
});
