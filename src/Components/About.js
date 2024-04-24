import Carousel from "./Carousel"
import '../sass/carousel.scss'


function About(){
    return (
        <div className="about section " id="about">
            <h2>About Eric</h2>
            <p>Eric received a Bachelor of Music in Vocal Performance and Master of Arts in Teaching from the University of North Carolina at Chapel Hill. He now lives and works in Houston TX with his fiancé Stephanie and their dog Bella. With over fifteen years of classroom and music ministry experience, Eric writes music made to resonate with any audience and any group of singers. 
                
</p>
<p> In his free time, Eric enjoys spending time with family, playing basketball, and a good game of chess. Both avid travelers, Eric and Stephanie have visited over 25 countries and more than 40 U.S. National Parks. He's passionate about making a positive difference in the world, and hopes his music helps you better serve your students and congregations.
</p>
<Carousel />


        </div>
    )
}

export default About
