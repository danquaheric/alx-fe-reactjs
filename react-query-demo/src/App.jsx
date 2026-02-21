import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;