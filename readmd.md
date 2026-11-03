# Library Book Management Web Application

A Full Stack Development Lab Assessment project demonstrating Node.js HTTP routing, FS Module file handling, and Express.js REST APIs for managing library books.

## Project Overview

This project consists of two independent server applications:

1. **Node.js HTTP Server:** Uses the built-in HTTP module and FS module to handle requests and serve HTML pages.
2. **Express.js Server:** Implements RESTful APIs to perform CRUD operations on library books.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- HTTP Module
- FS Module
- Express.js
- EchoAPI / Postman

## Project Structure

```text
mt1-labassessment/
│
├── httpServer.js
├── expressApp.js
├── package.json
├── package-lock.json
│
├── public/
│   └── index.html
│
├── screenshots/
│   ├── http-fs-home-page.png
│   ├── http-root-response.png
│   ├── http-server-terminal.png
│   ├── express-server-terminal.png
│   ├── get-books.png
│   ├── get-book-by-id.png
│   ├── post-book.png
│   ├── put-book.png
│   └── delete-book.png
│
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Directory

```bash
cd mt1-labassessment
```

### 3. Initialize Node.js Project

```bash
npm init -y
```

### 4. Install Express.js

```bash
npm install express
```

## Running the Applications

The project contains two independent servers.

### Part A: Node.js HTTP Server

Run:

```bash
node httpServer.js
```

Server runs at:

```text
http://localhost:3000
```

### Part B: Express.js Server

Open another terminal and run:

```bash
node expressApp.js
```

Server runs at:

```text
http://localhost:4000
```

Both servers can run simultaneously using different ports.

---

# PART A - Node.js HTTP Module

**Base URL:** `http://localhost:3000`

The HTTP server uses Node.js built-in HTTP and FS modules.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome page |
| GET | `/books` | Retrieve all books |
| GET | `/about` | Library information |
| POST | `/add-book` | Add a new book |
| GET | `/home` | Serve HTML page using FS Module |

### 1. Welcome Route

```http
GET http://localhost:3000/
```

Displays the welcome message.

### 2. Get All Books

```http
GET http://localhost:3000/books
```

Returns all available books in JSON format.

### 3. About Route

```http
GET http://localhost:3000/about
```

Displays information about the library.

### 4. Add New Book

```http
POST http://localhost:3000/add-book
```

Request Body:

```json
{
    "id": 4,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "price": 550
}
```

### 5. Serve HTML Using FS Module

```http
GET http://localhost:3000/home
```

The server reads `public/index.html` using `fs.readFile()` and serves it as an HTML response.

---

# PART B - Express.js REST API

**Base URL:** `http://localhost:4000`

The Express application provides CRUD functionality for managing library books.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a specific book |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update an existing book |
| DELETE | `/books/:id` | Delete a book |

### 1. Get All Books

```http
GET http://localhost:4000/books
```

Returns the complete list of books.

### 2. Get Book By ID

```http
GET http://localhost:4000/books/1
```

Returns the book matching the specified ID.

### 3. Add New Book

```http
POST http://localhost:4000/books
```

Request Body:

```json
{
    "id": 4,
    "title": "Deep Work",
    "author": "Cal Newport",
    "price": 500
}
```

### 4. Update Existing Book

```http
PUT http://localhost:4000/books/1
```

Request Body:

```json
{
    "title": "The Alchemist Updated",
    "author": "Paulo Coelho",
    "price": 450
}
```

### 5. Delete Book

```http
DELETE http://localhost:4000/books/1
```

Deletes the book with the specified ID.

## Error Handling

The application handles different error conditions.

| Status Code | Description |
|---|---|
| 200 | Request successful |
| 201 | Book created successfully |
| 400 | Invalid request data |
| 404 | Book or route not found |
| 409 | Duplicate book ID |

---

# Screenshots

## 1. Library Home Page

The HTML page is served using the Node.js FS Module.

![Library Home Page](screenshots/http-fs-home-page.png)

## 2. HTTP Server Welcome Route

![HTTP Welcome Route](screenshots/http-root-response.png)

## 3. HTTP Server Terminal

![HTTP Server Terminal](screenshots/http-server-terminal.png)

## 4. Express Server Terminal

![Express Server Terminal](screenshots/express-server-terminal.png)

## 5. EchoAPI Testing

### GET All Books

![GET All Books](screenshots/get-books.png)

### GET Book By ID

![GET Book By ID](screenshots/get-book-by-id.png)

### POST - Add Book

![POST Book](screenshots/post-book.png)

### PUT - Update Book

![PUT Book](screenshots/put-book.png)

### DELETE - Delete Book

![DELETE Book](screenshots/delete-book.png)

---

# Important Notes

- Book records are stored in JavaScript arrays.
- No external database is used.
- Data is stored temporarily in memory.
- Restarting the server resets the book records to their initial values.
- HTTP and Express servers run independently.
- The HTML frontend is served through the FS Module.
- Express.js handles the REST API operations.

# Assessment Checklist

- [ ] Node.js HTTP Server implemented.
- [ ] Express.js Server implemented.
- [ ] FS Module used to serve HTML.
- [ ] GET requests implemented.
- [ ] POST request implemented.
- [ ] PUT request implemented.
- [ ] DELETE request implemented.
- [ ] Error handling implemented.
- [ ] EchoAPI testing completed.
- [ ] Screenshots added.
- [ ] GitHub repository updated.

---

**Project:** Library Book Management Web Application  
**Subject:** Full Stack Development Lab Assessment  
**Academic Year:** 2026-2027