import './App.css';
import './components/mainContent.css';
import MainContent from './components/MainContent';
import RightTags from './components/Tags';

function App() {
  return (
    <div className="app">
      <header className="headerContainer">
        <div className="heading">
          <span>
            TechVault
          </span>
        </div>
        <div className="headerLinks">
          <a href="#">Contact Us</a>
          <a href="#"> Log In/Register</a>
        </div>
      </header>
      <nav>
        <div className="navLinks">
          <a href="#">Latest</a>
          <a href="#">Top Liked</a>
          <a href="#">Top Viewed</a>
          <select name="All Types" id="allTypes">
            <option value="alltypes">All Types</option>
          </select>
        </div>
        <div className="navSearch">
          <input type="text" name="search" id="search" placeholder="Search..." />
        </div>
      </nav>
      <main>
        <div className="left-container">
          <div className="mainContent left-tab">
            <MainContent />
           </div> 
          <div className="left-tab"></div>
          <div className="left-tab"></div>
        </div>
        <div className="right-container">
          <RightTags />
        </div>
      </main>
    </div>
  );
}

export default App;
