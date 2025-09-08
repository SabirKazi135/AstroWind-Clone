import { Menu } from "lucide-react";

function Header() {
  return (
    <>
      <div>
        <div>
          <span>🚀</span>
          <span>AstroWind</span>
        </div>

        <button>
          <Menu size={37}/>
        </button>
      </div>
    </>
  );
}

export default Header;
