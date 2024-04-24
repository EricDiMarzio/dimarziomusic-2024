// import piano from '../Images/piano-background.jpg'
import portrait from '../Images/portrait-quito-color.jpg'

function Header(){
    return (
      <div className="Header section" id="hero">
        <div className="title">
          <h1>Eric</h1><h1> DiMarzio</h1>
          </div>
        <h3>Composer &nbsp; | &nbsp; Teacher &nbsp; | &nbsp; Worship Leader</h3>
          <div className="Header__img-container">
          <img className="Header__portrait" src={portrait} alt="Eric DiMarzio portrait" />
          </div>
          <div className="Header__blurb-container">


          <p className="Header__blurb">
          Hi, I'm Eric! I write accessible, evocative music for education and worship. I think all singers should have access to music with depth, sincerity, and emotional content. I'm uploading new pieces every day, and I hope you can find something that connects with you and the community you serve.
          </p>
          <div className="button-container">
          <a href="https://payhip.com/ericdimarzio" target="_blank" rel="noreferrer">
          <button className="btn-hot">Explore Music</button>
          </a>
          </div>
          </div>
        
      </div>
    )
  }
  
  export default Header