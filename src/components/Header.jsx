import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div>
          <span>🚀</span>
          <span>AstroWind</span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>
    </>
  );
}

export default Header;
