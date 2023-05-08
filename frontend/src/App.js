import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Phone Book App</h1>
        </div>
      </header>
      <section className="add-section">
        <div className="wrapper">
          <p>Contacts</p>
          <button>+ Add Contact</button>
        </div>
      </section>

      <div className="contacts wrapper">
        <input type="text" placeholder="Search for contact by last name..." />
        <div className="contact-list">
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
          <div className="list">
            <div className="number">
              <p>Kingsharp nkansah</p>
              <span>0559336468</span>
            </div>
            <p>Delect</p>
          </div>
        </div>
      </div>
      <section>

      </section>
    </div>
  );
}

export default App;
