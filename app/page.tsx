// import data
import Header from "./components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import human from "./image/ei_1728499603408-removebg-preview.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Footer from "./components/Footer/Footer";
// Home page
export default function Home() {
  return (
    <div className="text-balance">
      {/* Header */}
      <Header></Header>
      
      {/* section Home */}
      <section className="flex justify-around items-center h-[80vh] ">
        <div>
          <span>Hello Wellcome</span>
          <h1 className="text-3xl font-bold text-white uppercase">I am <span className="text-yellow-400">JahansherKhan</span></h1>
          <h1 className="text-1xl font-bold text-white uppercase">I am <span className="text-yellow-400">Frontend Developer</span></h1>
          <p className="text-1xl font-bold text-white">
            This my personal website portfolio to show my skills and projects to
            others.
          </p>
          <a href="https://frabjous-druid-feabee.netlify.app" download="resume.pdf">
            <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded my-5">
              Download CV
            </button>
          </a>
          <div className="flex gap-5 cursor-pointer ">
          <li className="hover:text-yellow-400 hover:bg-yellow-700 hover:shadow-yellow-400 hover:rounded-full list-none"><Link href={"https://www.facebook.com/jahansher.khan.5"}><CiFacebook /></Link></li>
          <li className="hover:text-yellow-400 hover:bg-yellow-700 hover:shadow-yellow-400 hover:rounded-md list-none"><Link href={"https://www.instagram.com/jahansherkhan/"}><FaInstagram /></Link></li>
          <li className="hover:text-yellow-400 hover:bg-yellow-700 hover:shadow-yellow-400 hover:rounded-full list-none"><Link href={"https://github.com/jahansherkhan"}><FaGithub /></Link></li>
          <li className="hover:text-yellow-400 hover:bg-yellow-700 hover:shadow-yellow-400 hover:rounded list-none"><Link href={"https://www.linkedin.com/in/jahansherkhan"}><CiLinkedin /></Link></li>
          </div>
        </div>
        <div className="w-1/5">
          <Image src={human} alt="human" width={200} height={100} loading="lazy"/>
        </div>
      </section>
      <hr />

      {/* section About */}
       <section className="">
       <h1 className="text-3xl font-bold text-white uppercase text-center my-10">
        About Me
        </h1>
         <div className="flex justify-center items-center h-[80vh] mx-60">
         <div className="w-5/6  h-6/6 bg-black rounded">
           <Image src={human} alt="human" width={200} height={100} />
         </div>
         
         <div>
          
         
          <div className="flex gap-2 mx-10">
           <div className="w-1/3  h-1/4 bg-white rounded text-center">
           <i className="font-bold text-1xl flex justify-center items-center text-yellow-400 py-1"><FiAward /></i>
             <h1>Experience</h1>
             <span>6 Month</span>
             <span className="block">Practice</span>
           </div>
           <div className="w-1/3  h-1/4 bg-white rounded  text-center">
           <i className="font-bold text-1xl flex justify-center items-center text-yellow-400 py-1"><FiAward /></i>
             <h1>Completed</h1>
             <span>3</span>
             <span className="block">Assignment</span>
           </div>
           <div className="w-1/3  h-1/4 bg-white rounded  text-center">
           <i className="font-bold text-1xl flex justify-center items-center text-yellow-400 py-1"><FiAward /></i>
             <h1>Completed</h1>
             <span>3</span>
             <span className="block">Assignment</span>
           </div>
           </div>
           <p className="text-1xl font-bold text-white mx-10">
            Frontend Developer I am JahansherKhan I have 6 years of experience. and I have been working as a Frontend Developer.
            </p>
          
         </div>
       </div>

         
       </section>
       <hr />
      {/* section Skills */}
      
      <section className="">
        <h1 className="text-3xl font-bold text-white uppercase text-center my-10">
          Skills
        </h1>
        {/* skill div */}
         <div className="grid grid-cols-3 gap-5 ml-28 my-10 justify-center items-center gap-5">
            <div className="bg-black  rounded w-3/5 h-6/5 text-center border-2 border-red-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
               <i className="font-bold text-5xl flex justify-center items-center text-red-400 py-1"><FaHtml5 /></i>
               <h1 className="text-2xl font-bold text-red-400">HTML</h1>
               <span className="text-1xl font-bold text-red-400">90%</span>
            </div>
            <div className="bg-black  rounded w-3/5 h-6/5 text-center border-2 border-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <i className="font-bold text-5xl flex justify-center items-center text-blue-400 py-1"><FaCss3 /></i>
               <h1 className="text-2xl font-bold text-blue-400">CSS</h1>
               <span className="text-1xl font-bold text-blue-400">70%</span>
            </div>
            <div className="bg-black  rounded w-3/5 h-6/5 text-center border-2 border-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <i className="font-bold text-5xl flex justify-center items-center text-yellow-600 py-1"><FaJs /></i>
               <h1 className="text-2xl font-bold text-yellow-400">JavaScript</h1>
               <span className="text-1xl font-bold text-yellow-400">70%</span>
            </div>
            <div className="bg-black  rounded w-3/5 h-6/5 text-center border-2 border-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <i className="font-bold text-5xl flex justify-center items-center text-blue-600 py-1"><FaReact /></i>
               <h1 className="text-2xl font-bold text-blue-400">React</h1>
               <span className="text-1xl font-bold text-blue-400">40%</span>
            </div>
            
            <div className="bg-black  rounded w-3/5 h-6/5 text-center border-2 border-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
            <i className="font-bold text-5xl flex justify-center items-center text-blue-600 py-1"><SiTailwindcss  /></i>
               <h1 className="text-2xl font-bold text-blue-400">Tailwaind Css</h1>
               <span className="text-1xl font-bold text-blue-400">40%</span>
            </div>
            
         </div>
      </section>
      <hr className="my-10"/>
      {/* projects */}
      <section>
      <h1 className="text-3xl font-bold text-white uppercase text-center my-10">
          Projects
        </h1>
        <div className="flex  my-10 justify-center items-center gap-5">
          <div className="  bg-black rounded w-2/2 h-5/5 text-center p-20 text-white text-center border-2 border-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
             <h1 className="text-2xl font-bold my-19">First Assignment</h1>
              <Link href="https://next-js-assognment.netlify.app"><button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button></Link>
               <Link href="https://github.com/jahansher333/Thrusday-next.js-Assignment2.git"><button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Code</button></Link>
             
          </div>
          <div className="  bg-black rounded w-2/2 h-5/5 text-center p-20 text-white text-center border-2 border-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
             <h1 className="text-2xl font-bold my-19">Second Assignment</h1>
               <Link href="https://thrusday-2nd-assignment.netlify.app"><button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button></Link>
               <Link href="https://github.com/jahansher333/Thrusday-next.js-Assignment.git"><button className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Code</button></Link>
          </div>
          <div></div>
      </div>
      </section>
      <hr className="my-10"/>
      <Footer></Footer>
    </div>
  );
}
