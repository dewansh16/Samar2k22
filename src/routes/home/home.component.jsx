import Countdown from './Countdown';
import Schedule from "./Schedule";
import OurTeams from "./OurTeams";
import FinalPart from "./FinalPart";
import FirstPart from './FirstPart';

import bgImg from "../../Assets/assets/herobg.png";
// import Cards from './Cards';

// import "./home.component.css";

function Home() {

  // const [scrollbar, setScrollbar] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const totalHeight = document.body.scrollHeight - window.innerHeight;
  //     const progressHeight = (window.pageYOffset / totalHeight) * 100;
  //     setScrollbar(progressHeight);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const scrollbarStyleRight = {
  //   width: '10px',
  //   height: `${scrollbar}%`,
  //   position: 'fixed',
  //   top: 0,
  //   right: 0,
  //   background: 'linear-gradient(to top, #ec9921, #dc5a42)',
  //   zIndex: 9999,
  // };
  // const scrollbarStyleLeft = {
  //   width: '10px',
  //   height: `${scrollbar}%`,
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   background: 'linear-gradient(to top, #ec9921, #dc5a42)',
  //   zIndex: 9999,
  // };

  // smoke animation 

  // const root = document.querySelector(".container");
  // let x=0;
  // let y=0;

  // window.addEventListener("mousemove",(e) =>{
  //   x=e.clientX;
  //   y=e.clientY;
  // })

  // let draw = () => {
  //   const smoke = document.createElement("div");
  //   smoke.classList.add("smoke");
  //   smoke.style.left = x + "px";
  //   smoke.style.top = y + "px";

  //   root.appendChild(smoke);
    
  //   smoke.animate(
  //     [
  //       {
  //         backgroundColor: "magenta",
  //         filter: "blur(10px)",
  //       },
  //       {
  //         backgroundColor: "yellow",
  //         filter: "blur(20px)",
  //         top: y- (Math.random() * 400) + "px",
  //         opacity: 0,
  //         scale: 3,
  //       }
  //     ],
  //     {
  //       duration: 500
  //     }
  //   );

  //   setTimeout(() => {
  //     smoke.remove()
  //   }, 500);
  //   requestAnimationFrame(draw);
  // }
  // requestAnimationFrame(draw);
  
  return (
    <>
    {/* <div className="fireAnimation"> */}
     {/* <div id="progressBar" style={scrollbarStyleRight}></div> */}
     {/* <div id="progressBar" style={scrollbarStyleLeft}></div> */}


     <div class="w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div class="block lg:block">

        <FirstPart/>

      <div className="home-container">        

        <Schedule/>

        <Countdown/>

        <OurTeams/>

        <FinalPart/>

        {/* <Cards/> */}


        
         {/* gallery event and merchandise  */}


        {/* speakers, schedule, sponsers, gallary */}
        {/* <div className='flex sssg-container'>
            <div className="sssg gallery">
                <Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/gallery'
                >
                    <div className='card sssg-item-3'>
                       <img src="https://cdn-icons-png.flaticon.com/128/1040/1040241.png" alt="" />
                        </div>
                 
                    <p>Gallary</p>
                </Link>
            </div>
                
            <div className="sssg merchandise">
                <Link
                    onClick={() => {
                                setActiveLink(2)
                            }}
                            to='/merchandise'
                >
                    <div className='card sssg-item-2'>
                       
                        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176395.png" alt="" />
                        </div>
                   
                    <h3>Merchandise</h3>
                </Link>
            </div>

            <div className="sssg sponsers">
                <Link
                    onClick={() => {
                                setActiveLink(3)
                            }}
                            to='/sponsors'
                >
                    <div className='card sssg-item-'>
                       
                            <img src="	https://live.staticflickr.com/65535/52395640653_0ba071af3a_c.jpg" alt="" />
                       
                    </div>
                    <p>Sponsers</p>
                </Link>
            </div> */}
      </div>

     
      </div>
      </div>
    </>
  );
}

export default Home;
