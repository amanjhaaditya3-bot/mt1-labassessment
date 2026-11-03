import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Create HTTP Server
const server = http.createServer((req, res) => {

    // Route 1: Home / Welcome
    if (req.url === '/' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>Welcome to Library Management System</h1>
            <p>Manage your library books easily.</p>
        `);
    }

    // Route 2: Get all books
    else if (req.url === '/books' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(books));
    }

    // Route 3: About
    else if (req.url === '/about' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(`
            <h1>About Library Management</h1>
            <p>This application manages library book records using Node.js.</p>
        `);
    }

    // Route 4: Add Book
    else if (req.url === '/add-book' && req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {

            try {

                const newBook = JSON.parse(body);

                if (
                    newBook.id === undefined ||
                    !newBook.title ||
                    !newBook.author ||
                    newBook.price === undefined ||
                    !Number.isFinite(Number(newBook.price))
                ) {

                    res.writeHead(400, {
                        'Content-Type': 'application/json'
                    });

                    res.end(JSON.stringify({
                        message: "All valid book fields are required"
                    }));

                    return;
                }

                if (books.some(book => book.id === newBook.id)) {

                    res.writeHead(409, {
                        'Content-Type': 'application/json'
                    });

                    res.end(JSON.stringify({
                        message: "Book ID already exists"
                    }));

                    return;
                }

                books.push(newBook);

                res.writeHead(201, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    message: "Book added successfully",
                    book: newBook
                }));

            } catch (error) {

                res.writeHead(400, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify({
                    message: "Invalid JSON data"
                }));
            }
        });
    }

    // Route 5: Serve HTML using FS Module
    else if (req.url === '/home' && req.method === 'GET') {

        const filePath = path.join(__dirname, 'public', 'index.html');

        fs.readFile(filePath, 'utf8', (err, data) => {

            if (err) {

                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                res.end('Error reading HTML file');
            }

            else {

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                res.end(data);
            }
        });
    }

    // Invalid Routes
    else {

        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: "404 - Route Not Found"
        }));
    }

});

// Start server on port 3000
server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});