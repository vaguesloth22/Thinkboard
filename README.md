# ThinkBoard 📝

A modern, full-stack note-taking application built with the MERN stack. Create, read, update, and delete your thoughts seamlessly with a beautiful, responsive interface.

![ThinkBoard](https://img.shields.io/badge/ThinkBoard-Notes%20App-00FF9D?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## ✨ Features

- **📝 Create & Edit Notes**: Write and update your thoughts with title and content
- **🗑️ Delete Notes**: Remove notes with confirmation prompts
- **📱 Responsive Design**: Works perfectly on all devices
- **🎨 Modern UI**: Built with Tailwind CSS and DaisyUI components
- **⚡ Rate Limiting**: Prevents API abuse with Upstash Redis

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS components
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js & Express.js** - Server and API
- **MongoDB & Mongoose** - Database and ODM
- **Upstash Redis** - Rate limiting
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB Atlas account**
- **Upstash Redis account**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/thinkboard.git
cd thinkboard
```

2. **Setup Backend**
```bash
cd backend
npm install
```

3. **Setup Frontend**
```bash
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/thinkboard?retryWrites=true&w=majority

# Server
PORT=5001
NODE_ENV=development

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=your_upstash_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

### Running the Application

1. **Start the Backend Server**
```bash
cd backend
npm run dev
```
The server will start on `http://localhost:5001`

2. **Start the Frontend Development Server**
```bash
cd frontend
npm run dev
```
The app will open at `http://localhost:5173`

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## 🎯 Available Scripts

### Backend
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend
```bash
npm run dev    # Start Vite development server
npm run build  # Build for production
npm run preview # Preview production build
```

## 🔮 Upcoming Features

- [ ] **Search & Filter** - Find notes quickly
- [ ] **Categories/Tags** - Organize notes better
- [ ] **Rich Text Editor** - Markdown support
- [ ] **User Authentication** - Personal note spaces

## 📝 License

This project is licensed under the **MIT License**.

---

<div align="center">

**Built with ❤️ using the MERN Stack**

[⭐ Star this repo](https://github.com/yourusername/thinkboard) | [🐛 Report Bug](https://github.com/yourusername/thinkboard/issues)

</div>
