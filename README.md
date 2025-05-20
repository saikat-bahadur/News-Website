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

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd News-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Use the search bar in the navigation to enter keywords and fetch related news articles.
- Click on any of the predefined categories below the navbar to quickly filter news by topic.
- Browse through the list of news articles displayed on the main page.
- Use the social media icons in the navbar and footer to connect with NexusNews on various platforms.

## Environment Variables

- `VITE_NEWS_API_KEY`: Your API key for accessing the NewsAPI service. You must obtain this key from [NewsAPI](https://newsapi.org/) and set it in your `.env` file.

## Folder Structure

```
News-app/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and icons
│   ├── components/         # React components (Navbar, Footer, NewsList, NewsCard)
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React DOM rendering entry point
│   └── index.css           # Global styles
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Screenshot

![NexusNews Screenshot](public/home.png)


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements and new features.

## License

This project is licensed under the MIT License. 
