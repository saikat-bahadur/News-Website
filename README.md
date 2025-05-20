# NexusNews

NexusNews is a modern, responsive news search application built with React and Vite. It allows users to fetch the latest news articles dynamically from the NewsAPI based on search queries or selected categories. Stay updated with news from around the world, tailored to your interests.

## Features

- Dynamic news fetching from NewsAPI based on user search input or category selection.
- Predefined news categories for quick access to popular topics.
- Responsive and clean user interface styled with TailwindCSS.
- Smooth animations powered by Framer Motion.
- Social media integration with icons for Facebook, Twitter, Instagram, and YouTube.
- Live date and time display in the navigation bar.
- Easy-to-use search functionality with instant results.

## Technologies Used

- React 19
- Vite
- TailwindCSS
- Framer Motion
- React Icons
- NewsAPI
- Express (Backend)
- Node.js (Backend)

## Installation

### Frontend

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the frontend directory and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```
5. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add your NewsAPI key and frontend URL:
   ```
   NEWS_API_KEY=your_api_key_here
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## Usage

- Use the search bar in the navigation to enter keywords and fetch related news articles.
- Click on any of the predefined categories below the navbar to quickly filter news by topic.
- Browse through the list of news articles displayed on the main page.
- Use the social media icons in the navbar and footer to connect with NexusNews on various platforms.
- The backend server acts as a proxy to fetch news data from NewsAPI and serves it to the frontend.

## Backend API

- `GET /api/news?q=keyword` - Fetches news articles related to the specified keyword. Defaults to "India" if no query is provided.
- `GET /` - Returns a simple status message indicating the backend server is running.

## Environment Variables

- Frontend:
  - `VITE_NEWS_API_KEY`: Your API key for accessing the NewsAPI service. You must obtain this key from [NewsAPI](https://newsapi.org/) and set it in your frontend `.env` file.
- Backend:
  - `NEWS_API_KEY`: Your API key for accessing the NewsAPI service. You must obtain this key from [NewsAPI](https://newsapi.org/) and set it in your backend `.env` file.
  - `FRONTEND_URL`: The URL of the frontend application allowed for CORS (default is `http://localhost:5173`).

## Folder Structure

```
News-app/
├── Backend/                # Backend Express server
│   ├── index.js            # Backend server entry point
│   ├── package.json        # Backend dependencies and scripts
│   └── .env                # Backend environment variables (not committed)
├── Frontend/               # Frontend React application
│   ├── public/             # Static assets
│   ├── src/                # React source code
│   ├── package.json        # Frontend dependencies and scripts
│   ├── vite.config.js      # Vite configuration
│   └── .env                # Frontend environment variables (not committed)
├── README.md               # Project documentation
```

## Screenshot

![NexusNews Screenshot](public/home.png)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements and new features.

## License

This project is licensed under the MIT License.
