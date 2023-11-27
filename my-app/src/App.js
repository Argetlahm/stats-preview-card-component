import './App.css';

function App() {
  return (
    <div className="App sgs-flex">
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
      <div className='component sgs-flex'>
        <div className="image-container">
          <ImageComponent class="sgs-fit-container-width header-image" src="images/image-header-mobile.jpg" altName="header-image" />
          <div className="overlay"></div>
        </div>
        <div className="info-container">
          <h1 className="main-title">Get <span className="title-highlight">insights</span> that help your business grow.</h1>
          <Paragraph class="main-desc" content="Discover the benefits of data analytics and make better decisions regarding revenue, customer 
          experience, and overall efficiency." />
          
          <div className="stats sgs-flex">
            <div className="stats-item">
              <div className="number">10k+</div>COMPANIES
            </div>
            <div className="stats-item">
              <div className="number">314</div>TEMPLATES
            </div>
            <div className="stats-item">
              <div className="number">12M+</div>QUERIES
            </div>
          </div>
        </div>
        
        
        
        
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Argetlahm" rel="noreferrer" target="_blank">Stephen</a>
        </div>
    </div>
  );
}

function MainTitle (props) {
  return <h1>{props.title}</h1>
}

function Paragraph (props) {
  return <p className={props.class}>{props.content}</p>
}

function ImageComponent (props) {
  return <img className={props.class} src={props.src} alt={props.altName} />
}

const obj = document.getElementsByClassName("header-image")
window.addEventListener("resize", detectWindowSize)

function detectWindowSize() {
  if (window.innerWidth > 1000) {
    obj[0].setAttribute("src", "images/image-header-desktop.jpg")
  }
}

export default App;
