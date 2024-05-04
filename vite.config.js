import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'



export default {
  define: {
    'process.env.REACT_APP_NEWS_URL': JSON.stringify('https://newsapi.org/v2/top-headlines'),
    'process.env.REACT_APP_NEWS_API_KEY': JSON.stringify('')
  }
}