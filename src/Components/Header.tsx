import { useLocation } from "react-router-dom";
function Header() {
  const search = useLocation();
  if (search.pathname === "/") return null;
  return <div></div>;
}

export default Header;
