```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
      {/* Nested routes would work correctly here */}
    </div>
  );
}
export default App;
```