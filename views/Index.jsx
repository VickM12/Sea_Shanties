const React = require ('react');

export default function Index() {

  return(
    <html>
      <head>
        <title>Sea Shanties</title>
      </head>
      <body>
        <div className="header">
          <h1>Welcome Abaord!</h1>
        </div>
        <div className="side-bar">
          <ul>
            <li><a href="#">Shanties List</a></li>
            <li>History</li>
            <li>About</li>
          </ul>
        </div>
        <div className="main-content">
          <h1>Welcome!</h1>
          <article>
            <p>Whether you're a land lubber or an old salty dog, welcome to the port! If you're looking for the finest collection of Sea Shanties, you've come to right spot!</p>
            <p>We have scoured the seven seas and found the most popular shanties for you. Take a gander and sing along! We have lyrics and videos so you can impress your family and friends the next time you're cooped up on a long voyage in quarantine.</p>
          </article>
        </div>
      </body>
    </html>
  );
};