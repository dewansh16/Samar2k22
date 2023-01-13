import BasketBallImg from "../../Assets/Images/basketBallImg.png";
import "./style.css"
function Event() {
    return (
        <div className="base">
            <div className="event">Event</div>
            <div className="event" id="att">Major Attractoins</div>
            <div className="image">
                <div><img src={BasketBallImg} alt="" /></div>
                <div><img src={BasketBallImg} alt="" /></div>
            </div>
            <div class="section">INTERBRACH SPORTS</div>
            <div className="games">
                <div className="left"><p>carron</p></div>
                <div className="right"><p>kabaddi</p></div>
            </div>
            <div className="other">OTHERS</div>
            <div className="oevent">
                <div className="right">night camping</div>
                <div className="left">archery</div>
            </div>
            <div>REGISTER FOR EVENT</div>
        </div>
    )
}

export default Event
