import Heading from './components/Heading';
import Posts from './components/Posts';
import PostState from './contexts/PostState';
function App() {
  return (
    <PostState>
      <div className='App'>
        <Heading />
        <Posts />
      </div>
    </PostState>
  );
}

export default App;
