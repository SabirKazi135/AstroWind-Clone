import { useState } from "react";
import { Menu } from "lucide-react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div>
          <span>🚀</span>
          <span>AstroWind</span>
        </div>

        <button onClick={}>
          <Menu size={37}/>
        </button>
      </div>
    </>
  );
}

export default Header;
