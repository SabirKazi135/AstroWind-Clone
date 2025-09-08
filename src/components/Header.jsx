import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className=" flex p-4 sticky z-20 top-0 bg-[#030620] justify-between ">
          <div className="text-2xl font-bold">
            <span>🚀 AstroWind</span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
        {isOpen ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <ul>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Homes
                </button>
                <div className="pl-4 flex flex-col ">
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    SaaS
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Startup
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Mobile App
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Personal
                  </a>
                </div>
              </li>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Homes
                </button>
                <div className="pl-4 flex flex-col ">
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    SaaS
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Startup
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Mobile App
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Personal
                  </a>
                </div>
              </li>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Homes
                </button>
                <div className="pl-4 flex flex-col ">
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    SaaS
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Startup
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Mobile App
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Personal
                  </a>
                </div>
              </li>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Landing
                </button>
                <div className="pl-4 flex flex-col ">
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Lead Generation
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Long-Form Sales
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Click-Through
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Product Details (or Services)
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Coming Soon or Pre-Launch
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Subscription
                  </a>
                </div>
              </li>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Blog
                </button>
                <div className="pl-4 flex flex-col ">
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Blog List
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Article
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Article (with MDX)
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Category Page
                  </a>
                  <a
                    href="#"
                    className="text-[20px] font-medium w-full hover:bg-[#374151] py-2 px-5 cursor-pointer rounded-[4px]"
                  >
                    Tag Page
                  </a>
                </div>
              </li>
              <li className="list-outside ">
                <button className="text-[20px] px-4 py-3  cursor-pointer">
                  Widgets
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Header;
