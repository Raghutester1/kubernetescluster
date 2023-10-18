import { useEffect, useState } from 'react'
import './App.css';
// import axios from 'axios'

// function App() {
//   const [reviews, setReviews] = useState([])
//   useEffect(() => {
//     // fetch('http://20.72.187.59:80/')
//     //   .then(res => console.log('ressss', res))
//     axios.get('http://20.72.187.59:80/').then(res => console.log('ragu', res.data))
//   }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>AKS deployment for ReactJS</h1> 
//         {reviews}
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://40.78.45.249:80/')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>AKS deployment for ReactJS</h1>
        {reviews && reviews.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
// need to have a look of json format in server.js in node application for FE