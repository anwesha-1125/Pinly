📌 Pinly

Pinly is a Pinterest-inspired media search application built with React and Redux Toolkit. It allows users to search and explore Photos, Videos, and GIFs from multiple APIs through a clean, modern interface. Users can also save their favorite media into personal collections using centralized Redux state management.

🚀 Features


🔍 Search media instantly

🖼️ Browse high-quality Photos

🎥 Search Videos

🎭 Explore GIFs

❤️ Save favorite media to Collections

⚡ Fast state management using Redux Toolkit

📱 Responsive UI

🎨 Modern Pinterest-inspired design

🔄 API integration from multiple providers


🛠️ Tech Stack


React.js

Redux Toolkit

React Router

Axios

Tailwind CSS

JavaScript (ES6+)

Vite


🌐 APIs Used


Unsplash API – Photo Search

Pexels API – Video Search

Giphy API – GIF Search

📂 Project Structure


src/


│── api/

│── components/

│── pages/

│── redux/

│   ├── features/

│   └── store.js

│── App.jsx

│── main.jsx


✨ Screens


Home

Search Results

Collections

Responsive Layout



⚙️ Installation


Clone the repository

git clone https://github.com/your-username/pinly.git

Navigate into the project

cd pindly

Install dependencies

npm install

Create a .env file


VITE_UNSPLASH_API_KEY=YOUR_KEY
VITE_PEXELS_KEY=YOUR_KEY
VITE_GIPHY_KEY=YOUR_KEY

Run locally

npm run dev

💡 What I Learned


API Integration from multiple providers

Managing complex state with Redux Toolkit

Handling asynchronous API requests

Responsive UI development

Component-based architecture

Environment variables and deployment with Netlify


🚀 Future Improvements


Infinite scrolling

Masonry/Pinterest grid layout

User authentication

Download media

Dark/Light mode

Share collections

Advanced search filters
