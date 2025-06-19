# BlogAPI

A RESTful API for managing blog posts built with Node.js, Express, and MongoDB. This API provides full CRUD operations for blog posts with features like filtering, tagging, and publication status management.

## 🚀 Features

- **Create** new blog posts
- **Read** all posts or filter by tags/publication status
- **Update** existing posts
- **Delete** posts
- **Filtering** by tags and publication status
- **MongoDB** integration with Mongoose ODM
- **Validation** and error handling
- **RESTful** API design

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Nodemon** - Development tool for auto-restarting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or MongoDB Atlas)
- [pnpm](https://pnpm.io/) package manager

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd BlogAPI
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your local machine at `mongodb://localhost:27017/postsdb`

4. **Run the development server**
   ```bash
   pnpm run dev
   ```

The server will start on `http://localhost:3000`

## 🗂️ Project Structure

```
BlogAPI/
├── models/
│   └── post.js          # Post model schema
├── routes/
│   └── routes.js        # API routes
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 📊 Data Model

### Post Schema

```javascript
{
  title: String (required),
  content: String (required),
  author: String (required),
  tags: [String],
  publishedAt: Date (default: current date),
  isPublished: Boolean (default: false)
}
```

## 🔗 API Endpoints

### Base URL: `http://localhost:3000/api/posts`

| Method | Endpoint | Description     | Query Parameters                    |
| ------ | -------- | --------------- | ----------------------------------- |
| GET    | `/`      | Get all posts   | `?tag=<tag>&published=<true/false>` |
| GET    | `/:id`   | Get post by ID  | -                                   |
| POST   | `/`      | Create new post | -                                   |
| PUT    | `/:id`   | Update post     | -                                   |
| DELETE | `/:id`   | Delete post     | -                                   |

### API Examples

#### Create a new post

```bash
POST /api/posts
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": "John Doe",
  "tags": ["nodejs", "api", "mongodb"],
  "isPublished": true
}
```

#### Get all posts

```bash
GET /api/posts
```

#### Get posts by tag

```bash
GET /api/posts?tag=nodejs
```

#### Get only published posts

```bash
GET /api/posts?published=true
```

#### Get a specific post

```bash
GET /api/posts/<post-id>
```

#### Update a post

```bash
PUT /api/posts/<post-id>
Content-Type: application/json

{
  "title": "Updated Blog Post Title",
  "content": "Updated content here..."
}
```

#### Delete a post

```bash
DELETE /api/posts/<post-id>
```

## 🔄 Response Format

### Success Response

```json
{
  "_id": "60f7b1b3b3f3b3f3b3f3b3f3",
  "title": "My Blog Post",
  "content": "Post content here...",
  "author": "John Doe",
  "tags": ["nodejs", "api"],
  "publishedAt": "2023-06-19T10:30:00.000Z",
  "isPublished": true,
  "__v": 0
}
```

### Error Response

```json
{
  "error": "Error message description"
}
```

## 🚧 Development

### Available Scripts

- `pnpm run dev` - Start development server with nodemon
- `pnpm start` - Start production server

### Environment Variables

Create a `.env` file in the root directory to configure:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/postsdb
```

## 🧪 Testing

You can test the API using tools like:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- cURL commands

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

For questions or support, please contact [your-email@example.com]

---

**Happy Coding! 🎉**
