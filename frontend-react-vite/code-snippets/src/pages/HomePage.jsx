import { Link } from 'react-router-dom';
import codesnippetsFavicon from '../assets/favicon/code-snippets-favicon-color.png'

function HomePage() {
  return (
    <div>
      <div className='row'>
        <h1>
          Code Snippets 
        </h1>
        <img 
          src={codesnippetsFavicon}
          alt="Code Snippets Favicon" 
        />
      </div>
      <h2>The best way to share code snippets</h2>
      <nav>
        <ul>
          <li><Link to="/form">Upload Code Snippets</Link></li>
          <li>
            <Link to="/display">View Code Snippets</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
