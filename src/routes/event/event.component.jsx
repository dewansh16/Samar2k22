import BasketBallImg from "../../Assets/Images/basketBallImg.png";
import "./style1.css"

function Event() {
    return (
        <div className='basee'>
            <div className="cen">Events</div>
            <div className="head">head 1</div>
            <div className="content" id="image">
{/* comment */}
                <div className='flex-containere'>
                            <div className='lefte' id="firstimage">
                                {/* hover */}
                                {/* <img src={BasketBallImg} alt="" /> */}
                                {/* hover */}
                                </div>
                            <div className='righte' id="secoundimage"></div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte' id="thirdimage"></div>
                            <div className='righte' id="fourthimage"></div>      
                </div>
{/* comment */}
            </div>

            <div className="head">INTERBRANCH SPORTS</div>
            <div className="content">
{/* comment */}
                <div className='flex-containere'>
                            <div className='lefte'>Carrom</div>
                            <div className='righte'>Kabaddi</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Chess</div>
                            <div className='righte'>Kho-kho</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Basketball</div>
                            <div className='righte'>Table Tennis</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Cricket</div>
                            <div className='righte'>Yoga</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Football</div>
                            <div className='righte'>Volleyball</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Handball</div>
                            <div className='righte'>Badminton</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Hockey</div>
                            <div className='righte'>Athletics</div>      
                </div>

{/* comment */}
            </div>

            <div className="head">Other</div>
            <div className="content">
{/* comment */}
                <div className='flex-containere'>
                            <div className='lefte'>Night Camping</div>
                            <div className='righte'>Archery</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Bon fire</div>
                            <div className='righte'>Dart</div>      
                </div>
                <div className='flex-containere'>
                            <div className='lefte'>Cycling</div>      
                </div>
{/* comment */}
            </div> 
            <div className="cen"><p>REGISTER NOW</p></div>
        </div>
    )
}

export default Event
