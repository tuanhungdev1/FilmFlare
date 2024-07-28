import Logo from "../assets/images/logo/netflix.png";
import { MENU_ITEMS } from "../constants/menuItems";
import { IconSearch } from "../components/icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 text-white h-14 bg-slate-950">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="" className="w-16 sm:w-28" />
        {MENU_ITEMS.map((item, index) => (
          <a key={index} href={item.link}>
            {item.title}
          </a>
        ))}
      </div>
      <div>
        <IconSearch height={20} width={20} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
