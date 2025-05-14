# Newsroom 24/7

A modern React-based news web application that delivers the latest headlines across various categories using the NewsAPI, with infinite scrolling and a custom backend proxy for secure API access.

---

## Features

- 📰 **Latest News**: Browse top headlines from multiple categories (business, entertainment, health, science, sports, technology, and more).
- 🔄 **Infinite Scroll**: Seamlessly load more articles as you scroll.
- 🚀 **Fast & Responsive**: Built with React and Tailwind CSS for a smooth user experience.
- 🔒 **Secure API Access**: Uses a Node.js/Express backend proxy to keep your NewsAPI key safe and bypass CORS restrictions.
- 🌐 **Deployed & Ready**: Easily deployable frontend and backend.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)
- [NewsAPI Key](https://newsapi.org/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Newsroom-24_7.git
cd Newsroom-24_7
```

---

### 2. Setup the Backend Proxy

1. Go to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and add your NewsAPI key:
    ```
    NEWS_API_KEY=your_newsapi_key_here
    ```
4. Start the backend server:
    ```bash
    npm start
    ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

---

### 3. Setup the Frontend

1. Go to the frontend directory (if separated) or root:
    ```bash
    cd ../
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm start
    ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Backend

- Deploy the backend to [Render](https://render.com/), [Heroku](https://heroku.com/), [Railway](https://railway.app/), or any Node.js hosting.
- Set the `NEWS_API_KEY` environment variable in your hosting dashboard.
- Use the deployed backend URL in your frontend API calls.

### Frontend

- Deploy the frontend to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting.
- Make sure the API URLs in your React app point to your deployed backend.

---

## API Usage

The backend exposes a `/news` endpoint:

```
GET /news?country=us&category=general&page=1&pageSize=9
```

Example fetch in React:
```js
fetch('https://your-backend-url/news?country=us&category=general&page=1&pageSize=9')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, react-infinite-scroll-component
- **Backend:** Node.js, Express, node-fetch, cors
- **API:** [NewsAPI](https://newsapi.org/)

---

## License

This project is licensed under the ISC License.

---

## Acknowledgements

- [NewsAPI](https://newsapi.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Render](https://render.com/)