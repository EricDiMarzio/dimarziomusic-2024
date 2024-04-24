import hope from '../Images/the-hope-i-hold-cover.png'
import edsr from '../Images/EDSR-f-treble-cover.png'
import jolly from '../Images/jr-working.png'

function Education(){
    return (
        <div className="Education section" id="education">
            <h2>Music For Education</h2>
            <div className="trifold">
                <div className="trifold__score">
                    <h3>Octavos</h3>
                    <a href="https://payhip.com/EricDiMarzio/collection/education" target="_blank" rel="noreferrer">
                        <img src={hope} alt="score" />
                        </a>  
                    <p>These carefully crafted octavos are perfect for Texas UIL preparation or as a standalone a cappella piece. Powerful original text and accessible harmonies lend to wonderful pieces for beginner or intermediate choirs.</p>
                </div>
                <div className="trifold__score">
                    <h3>Sight Reading</h3>
                    <a href="https://payhip.com/EricDiMarzio/collection/education" target="_blank" rel="noreferrer">
                    <img src={edsr} alt="score" />
                        </a>
                    <p>Every-Day Sight Reading is a one-year curriculum designed to give students the tools and incentives to be independent, proactive learners. This PDF workbook is reproducible. Purchase once and make as many copies as you need for your program!</p>
                </div>
                <div className="trifold__score">
                    <h3>Concert</h3>
                    <a href="https://payhip.com/EricDiMarzio/collection/education-concert-and-festival" target="_blank" rel="noreferrer">
                    <img src={jolly} alt="score" />
                    </a>
                    <p>These original concert pieces are sure to captivate audiences and singers alike, while remaining accessible to choirs of all skill levels.</p>
                </div>
            </div>
        </div>
    )
}

export default Education
