import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="justify-center align-center items-center ">
            
                <h1 className="text-3xl font-bold text-white uppercase text-center my-10">Contact</h1>
            
            <div className="flex justify-center align-center text-base text-black-500 mx-20 my-7 ">
                <form action="" className="flex flex-col w-full md:w-1/2 justify-center align-center gap-2 ">
                 <input type="text" placeholder="Enetr Your Name" className="p-2 bg-transparent border-2 border-gray rounded-md text-black focus:outline-none placeholder:italic placeholder:text-black"/>
                 <input type="email" placeholder="Enetr Your Email" className="p-2 bg-transparent border-2 border-gray rounded-md text-black focus:outline-none placeholder:italic placeholder:text-black"/> 
                 <textarea rows={10} cols={30} placeholder="Enetr Your Message" className="p-2 bg-transparent border-2 border-gray rounded-md text-black focus:outline-none placeholder:italic placeholder:text-black"></textarea>
                 <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-3 px-6 w-1/5 rounded my-2 mx-auto flex justify-center hover:scale-110 duration-500">Submit</button>
                 </form>
            </div>
            <div className="flex justify-center align-center text-base text-black-500 mx-20 my-10 ">
                <div className="flex justify-center align-center text-base text-black-500 mx-20 w-1/5 h-1/5">
                <span className="text-2xl mr-3 text-green-800 bg-green-300 rounded-full p-2 hover:text-white"><FaWhatsapp /></span>
                <h1 className="m-2">03705751622</h1>
                </div>

                <div className="flex justify-center align-center text-base text-black-500 mx-20 w-1/5 h-1/5">
                <span className="text-2xl mr-3 text-rose-600 bg-rose-300 rounded-full p-2 hover:text-white"> <MdOutlineMailOutline /></span>
                <h1 className="m-2">jahansherkhan9876@gmail.com</h1> 
                </div>
                
                
            </div>
            <hr />
            <div className="flex justify-center align-center text-base text-black-500 mx-20 my-2 text-white ">
                    <h1>&copy; copyright  2024</h1>
                </div>
        </footer>
    );
}

export default Footer