
// import BasketBallImg from "../../Assets/Images/basketBallImg.png";
// import "./style1.css"

// function Event() {
//     return (
//         <div className='basee'>
//             <div className="cen">Events</div>
//             <div className="head">head 1</div>
//             <div className="content" id="image">
// {/* comment */}
//                 <div className='flex-containere'>
//                             <div className='lefte' style={{backgroundImage:`url(${BasketBallImg})`}} id="firstimage">
//                                 {/* hover */}
//                                 {/* <img src={BasketBallImg} alt="" /> */}
//                                 {/* hover */}
//                                 </div>
//                             <div className='righte' style={{backgroundImage:`url(${BasketBallImg})`}}   id="secoundimage"></div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte' style={{backgroundImage:`url(${BasketBallImg})`}}  id="thirdimage"></div>
//                             <div className='righte' style={{backgroundImage:`url(${BasketBallImg})`}}  id="fourthimage"></div>
//                 </div>
// {/* comment */}
//             </div>

//             <div className="head">INTERBRANCH SPORTS</div>
//             <div className="content">
// {/* comment */}
//                 <div className='flex-containere'>
//                             <div className='lefte'>Carrom</div>
//                             <div className='righte'>Kabaddi</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Chess</div>
//                             <div className='righte'>Kho-kho</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Basketball</div>
//                             <div className='righte'>Table Tennis</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Cricket</div>
//                             <div className='righte'>Yoga</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Football</div>
//                             <div className='righte'>Volleyball</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Handball</div>
//                             <div className='righte'>Badminton</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Hockey</div>
//                             <div className='righte'>Athletics</div>
//                 </div>

// {/* comment */}
//             </div>

//             <div className="head">Other</div>
//             <div className="content">
// {/* comment */}
//                 <div className='flex-containere'>
//                             <div className='lefte'>Night Camping</div>
//                             <div className='righte'>Archery</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Bon fire</div>
//                             <div className='righte'>Dart</div>
//                 </div>
//                 <div className='flex-containere'>
//                             <div className='lefte'>Cycling</div>
//                 </div>
// {/* comment */}
//             </div>
//             <div className="cen"><p>REGISTER NOW</p></div>
//         </div>
//     )
// }
import { useEffect } from "react";
import bgImg from "../../Assets/assets/herobg.png";
const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <div className="w-full h-auto py-24 bg-fixed bg-cover bg-no-repeat bg-center  bg-[url('https://live.staticflickr.com/65535/52305606430_40ba7828eb_h.jpg')]">
    //     <div className="block md:hidden lg:block">
    //        <div className=" flex flex-col lg:flex-row items-center justify-center">
    //         <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
    //             <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
    //             <div class="bg-white h-full flex-1 bg-opacity-50"></div>
    //             <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300"></div>
    //             <h5 class="uppercase text-xl font-bold text-center">Athletics</h5>
    //             <img src="https://live.staticflickr.com/65535/52312199966_4be79e7e75_w.jpg"/>
    //         </div>
    //        </div>
    //     </div>
    // </div>
    <div class="w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
    <div class="w-full h-auto py-24 bg-fixed bg-cover bg-no-repeat bg-center]">
      <div class="block md:hidden lg:block">

        {/* line 1  */}
        <div class=" flex flex-col lg:flex-row items-center justify-center p-20">
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900 ">
                Athletics
              </h5>
              <img
                src="https://live.staticflickr.com/65535/52312199966_4be79e7e75_w.jpg"
                class=""
                alt="Athletics background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Badminton
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345655636_fa9218d45e_n.jpg"
                class=""
                alt="Badminton background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                basketball
              </h5>
              <img
                src="https://live.staticflickr.com/65535/52312513238_7aeba39a52_w.jpg"
                class=""
                alt="basketball background"
              />
            </div>
          </div>
        </div>
        
        {/* line 2  */}
        <div class=" flex flex-col lg:flex-row items-center justify-center lg:-mt-16 p-20">
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Chess
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345960989_e9bca2e00d_z.jpg"
                class=""
                alt="Chess background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                cricket
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345655506_afcbbc0b43_w.jpg"
                class=""
                alt="cricket background"
              />
            </div>
          </div>
        </div>

        {/* line 3  */}
        <div class="flex flex-col lg:flex-row items-center justify-center lg:-mt-16 p-20">
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Football
              </h5>
              <img
                src="//live.staticflickr.com/65535/52346081405_d8c1db4e64_w.jpg"
                class=""
                alt="Football background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Handball
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345960904_a98942de1e_z.jpg"
                class=""
                alt="Handball background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Hockey
              </h5>
              <img
                src="https://live.staticflickr.com/65535/52312512833_16e26e1003_w.jpg"
                class=""
                alt="Hockey background"
              />
            </div>
          </div>
        </div>

        {/* line 4  */}
        <div class=" flex flex-col lg:flex-row items-center justify-center lg:-mt-16 p-20">
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Kabaddi
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345900268_8ed432f261.jpg"
                class=""
                alt="Kabaddi background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                KHO-KHO
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345900263_641f93d9a0_n.jpg"
                class=""
                alt="KHO-KHO background"
              />
            </div>
          </div>
        </div>

        {/* line 5  */}
        <div class=" flex flex-col lg:flex-row items-center justify-center lg:-mt-16 p-20">
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Karate
              </h5>
              <img
                src="//live.staticflickr.com/65535/52345900233_3ee17db6e8_z.jpg"
                class=""
                alt="Taekwondo background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Table Tennis
              </h5>
              <img
                src="https://live.staticflickr.com/65535/52312627659_5cac4cccb0.jpg"
                class=""
                alt="Table Tennis background"
              />
            </div>
          </div>
          <div class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
            <div class="bg-white h-full flex-1 bg-opacity-50"></div>
            <div class="bg-blue-400 h-full flex-1 bg-opacity-50"></div>
            <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">
              <h5 class="uppercase text-xl font-bold text-center text-teal-900">
                Volleyball
              </h5>
              <img
                src="https://live.staticflickr.com/65535/52312513168_c3bdfb59b3_w.jpg"
                class=""
                alt="Volleyball background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Event;
