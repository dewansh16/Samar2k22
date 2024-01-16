import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";

const FirstPart = () => {
  return (
     <section className={`relative w-full h-screen mx-auto`}>
      <div
        // className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        className={`absolute inset-0 top-[40px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 mt-10 lg:mt-0 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Team <span className='text-[#915EFF] pr-20 lg:pr-0'>SHAURYA</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            &nbsp; Brings You ... 
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>SAMAR</span>
          <p className={`${styles.heroSubText} text-white-100`} >
            &nbsp; The sports fest 
          </p>
          {/* <br /> <br /> */}
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>
            &nbsp; <span className='text-[#915EFF]'>Get Ready </span>to enter <br />
            &nbsp; the world of <span className='text-[#915EFF]'>ANIME</span>
          </p>
          </h1>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-[150px] bottom-[150px] w-full flex justify-center items-center'>
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> */}
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>

  )
}

export default FirstPart