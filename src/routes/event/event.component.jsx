import BasketBallImg from "../../Assets/Images/basketBallImg.png";
import "./style1.css"
function Event() {
    return (
        <div className="basee">
            <div className="evente">Event</div>
            <div className="evente" id="atte">Major Attractoins</div>
            <div className="imagee">
            <div className='flex-containere'>
                        <div className='lefte'><img src={BasketBallImg} alt="" /></div>
                        <div className='righte'><img src={BasketBallImg} alt="" /></div>      
            </div>
            </div>
            <div class="sectione">INTERBRACH SPORTS</div>
            <div className="gamese">
                <div className="lefte"><p>carron</p></div>
                <div className="righte"><p>kabaddi</p></div>
            </div>
            <div className="othere">OTHERS</div>
            <div className="oevente">
                <div className="righte">night camping</div>
                <div className="lefte">archery</div>
            </div>
            <div>REGISTER FOR EVENT</div>
        </div>
    )
}

export default Event
