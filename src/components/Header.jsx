import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className=" flex m-4 justify-between ">
          <div className="text-2xl font-bold">
            <span>🚀 AstroWind</span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
        <div>
          <ul>
            <li>
              <button>Home</button>
              <a href="#">SaaS</a>
              <a href="#">Startup</a>
              <a href="#">Mobile App</a>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
