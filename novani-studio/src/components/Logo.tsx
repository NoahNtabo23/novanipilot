import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="NOVANI Studio"
      className="
        fixed top-5 left-5 z-50
        h-7 md:h-10 lg:h-12
        w-auto
      "
    />
  );
};

export default Logo;