import React from 'react';
import './App.css';
function App(){
  return(
    <div>
      <nav className="navbar">
        <h2>LearnHub</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#course">Course</a>
          <a href="#contact">Contact</a>gi
        </div>
      </nav>

      <section className="hero"   id="home">
        <h1> welcome to LearnHub</h1>
        <p>Learn new  skills and build your future.</p>
        <img src="/learning.png" alt='online learning' className="hero-img"/>
        <div>
        <a className="btn" href="#courses">
          Explore courses
        </a>
        </div>
      </section>
      
      <section className="content"   id="about">
        <h1>about us</h1>
        <p>We help students Learn const  skills online</p>
      </section>

      <section className="content"   id="course">
        <h1>Our courses</h1>
        <div className='course-container'>
          <div className='course-card'>
          <h3> Web Development</h3>
            <p>Learn HTML, CSS and Javascript.</p>
            </div>
          <div className='course-card'>
            <h3>Python</h3>
            <p>Learn Python programmming basic</p>
            </div>
          <div className='course-card'>
            <h3> React.js</h3>
            <p>Learn React and build websites </p>
            </div>
          </div>
          </section>

          <section className='contact' id='contact'>
            <h2>Contact us</h2>
            <form onSubmit={(e)=> e.preventDefault()}>
              <input type='Text' placeholder='Enter Name'/>
              <br/><br/>
              <textarea placeholder="Enter Message"></textarea>
              <br/><br/>
              <button type='submit'>Submit</button>
              
            </form>
              </section>
          

        
      <footer>
        <p> contact : hello@LearnHub.example</p>
        <p>&copy; 2026 LearnHub.all rights reserved.</p>
      </footer>
       </div>
  );
}





export default App;
