import { useState } from "react";
import '../styles/CodeSubmissionForm.css'

function CodeSubmissionForm () {
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');
  const [sourceCode,setSourceCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {username,language,input,sourceCode});
  }
  return (
   <div className="form-container">
    <h2>Code Submission Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username: </label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="language">Preferred Coding Language: </label>
        <select 
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        >
          <option value="">Select Language</option>
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>

      <div className="form-group">
          <label htmlFor="input">Standard Input:</label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="source-code">Source Code:</label>
          <textarea
            id="source-code"
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>      
    </form>
   </div> 
  );
}

export default CodeSubmissionForm;