import logo from "../assets/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-5" src={logo} alt="logo" />
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <FaCodepen />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
        <FaLinkedin />
      </div>
    </nav>
  );
};
export default NavBar;

// import logo from "../assets/logo.png";
//

// const NavBar = () => {
//   return (
//     <nav className=" mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="w-20" src={logo} alt="logo" />
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         {/* <FaLinkedin /> */}
//         <FaCodepen />
//         <FaGithub />
//         <FaSquareXTwitter />
//         <FaInstagram />
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
