import { useState } from "react";
import Header from "./components/Header";
import { TbNumber1 } from "react-icons/tb";
import { TbNumber15Small } from "react-icons/tb";
import face from "./images/face.png";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="h-full w-full bg-gradient-to-r from-slate-900 to-slate-700 px-40 ">
        <div className="flex flex-row py-6 gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-white">Hello there!👋🏻 I am</div>
            <div className="text-lime-400 text-4xl">
              &lt;Abhay Pratap Singh/&gt;
            </div>
            <div className="text-2xl text-white">Front-End Developer</div>
            <div className="flex flex-col gap-5 text-white ">
              <div className="flex flex-row text-3xl">
                <span className="object-fill">
                  <TbNumber1 />
                </span>
                Years of Experience{" "}
              </div>
              <div className="flex flex-row text-3xl">
                <span className="object-fill">
                  <TbNumber15Small />
                </span>
                +Projects
              </div>
            </div>
          </div>
          <div className="px-10 py-6 pl-10 bg-slate-600 rounded-full">
            <img className="w-60 " src={face} />
          </div>
        </div>
        <div className="flex flex-row py-10">
          <div className="">
          <div className="text-lime-400 text-xl ">About me()</div>
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            consequatur unde dolorum libero. Iure est, labore quia quasi impedit
            vitae? Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Veniam veritatis vel 
            expedita ipsa asperiores similique dignissimos ipsum incidunt unde at.
          </div>
          </div>
          <div className="flex flex-col gap-1 w-96">
            <div className="bg-slate-700 rounded-md text-center ">
                <div>Front-End developer</div>
            </div>
            <div className="bg-slate-700 rounded-md text-center">
                <div>Front-End developer</div>
            </div>
          </div>
        </div>
        <div className="py-8">
            <div className="text-lime-400 text-xl">Skills()</div>
            <div className="flex flex-row gap-10 w-full py-5">
            <IoLogoJavascript size={100} />
            <FaHtml5 size={100} />
            <DiCss3 size={100}/>
            <FaReact size={100}/>
            <FaPython size={100}/>
            <FaPython size={100}/>
            </div>
        </div>
      </div>
      <div className="h-full w-full bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="text-lime-400 text-xl px-40">Projects()</div>
        <div className="flex flex-row gap-5 py-8 ">
          <div className="bg-white py-2 px-2"><img src="https://images.pexels.com/photos/905336/pexels-photo-905336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project 1" /></div>
          <div className="bg-white py-2 px-2"><img src="https://images.pexels.com/photos/905336/pexels-photo-905336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project 1" /></div>
          <div className="bg-white py-2 px-2"><img src="https://images.pexels.com/photos/905336/pexels-photo-905336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project 1" /></div>
          <div className="bg-white py-2 px-2"><img src="https://images.pexels.com/photos/905336/pexels-photo-905336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="project 1" /></div>



          
        </div>
        </div>
    </>
  );
}

export default App;
