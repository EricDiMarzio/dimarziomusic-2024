import selah from '../Images/selah-cover.png'
import mal from '../Images/MAL-cover.png'
import battle from '../Images/battle-cover.png'

function Worship(){
    return (
        <div className="Worship section" id="worship">
            <h2>Music For Worship</h2>
            <div className="trifold">
                <div className="trifold__score">
                    <h3>Psalms</h3>
                    <a href="https://payhip.com/EricDiMarzio/collection/responsorial-psalm-bundles" target="_blank" rel="noreferrer">
                    <img src={selah} alt="score" />
                    </a>
                    <p>This was my first goal as a Catholic composer. To create responsorial psalms that were singable, powerful, and faithful to the text. The verses are written to meaningfully convey the message of the text while still remaining simple enough for a cantor to learn week to week. The melody is consistent between verses, and the range is accessible for all singers.</p>
                </div>
                <div className="trifold__score">
                    <h3>Mass Settings</h3>
                    <a href="https://payhip.com/b/0AyVf" target="_blank" rel="noreferrer">
                    <img src={mal} alt="score" />
                    </a>
                    <p>The Mass of Abundant Love is a contemporary mass setting which captures the jubilation and reverence of Catholic worship. Appropriate for Ordinary Time, Christmas, and Easter seasons; the Mass of Abundant Love is a singable, powerful expression of the joy and mystery of the Mass.</p>
                </div>
                <div className="trifold__score">
                    <h3>Anthems</h3>
                    <a href="https://payhip.com/ericdimarzio" target="_blank" rel="noreferrer">
                    <img src={battle} alt="score" />
                    </a>
                    <p>I offer a variety of anthems appropriate for any Christian worship setting. These songs connect with the parts of our faith which I cherish the most: forgiveness, perserverance, and the unrelenting power of God.</p>
                </div>
            </div>
        </div>
    )
}

export default Worship