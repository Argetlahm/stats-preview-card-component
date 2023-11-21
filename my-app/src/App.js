import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="main-title">Get <span className="title-highlight">insights</span> that help your business grow.</h1>
      <Paragraph content="Discover the benefits of data analytics and make better decisions regarding revenue, customer 
      experience, and overall efficiency." />
      
      <div className="stats">
        10k+ companies
        314 templates
        12m+ queries
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Argetlahm" target="_blank">Stephen</a>.
      </div>
    </div>
  );
}

function MainTitle (props) {
  return <h1>{props.title}</h1>
}

function Paragraph (props) {
  return <p>{props.content}</p>
}

export default App;
