import Link from "next/link";
const Header = () => {

    return (
        <header className="flex list-none justify-around  items-center bg-slate-300 h-10 px-20">
          <div className="flex justify-center  text-2xl text-purple-800">
            <h1 className="text-2xl font-semibold">JKPortfolio</h1>
          </div>
          <div className="flex list-none gap-7 text-base text-purple-800 mx-20 ">
            <li className="text-base hover:bg-cyan-600 hover:h-9 hover:px-5 hover:rounded hover:text-white hover:py-1   "><Link href={"/"}>Home</Link></li>
            <li className="text-base hover:bg-cyan-600 hover:h-9 hover:px-5 hover:rounded hover:text-white hover:py-1"><Link href={"/"}>About</Link></li>
            <li className="text-base hover:bg-cyan-600 hover:h-9 hover:px-5 hover:rounded hover:text-white hover:py-1"><Link href={"/"}>Skills</Link></li>
            <li className="text-base hover:bg-cyan-600 hover:h-9 hover:px-5 hover:rounded hover:text-white hover:py-1"><Link href={"/"}>Projects</Link></li>
            <li className="text-base hover:bg-cyan-600 hover:h-9 hover:px-5 hover:rounded hover:text-white hover:py-1"><Link href={"/"}>Contact</Link></li>
          </div>
          <div className="flex   justify-center gap-2 ">
             <button className="text-base bg-cyan-600 py-1 px-5 rounded-full text-white font-bold z-10 border-2 border-white hover:bg-cyan-500 hover:bg-cyan-500 hover:shadow-lg shadow-cyan-500/50">
             <Link href={""}>Hire Me</Link></button>
             
             
          </div>
        </header>
    );
}

export default Header