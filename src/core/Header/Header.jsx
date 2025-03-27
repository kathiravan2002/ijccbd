import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import NavItems from "./NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/assets/IJCCBD.png'

const Header = () => {
  const menuRef = useRef(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const isActive = location.pathname;
  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setDropdown2(false);
      }
      if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
        setDropdown3(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    console.log();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Aboutus = [
    { name: "About Us", path: "/aboutus" },
    { name: "Aim & Scope", path: "/aimscope" },
    { name: "Editorial Board", path: "/editorial" },
    { name: "Issues", path: "/issues" },
    { name: "Author Guidelines", path: "/authorguidelinespage" },
    { name: "Copyrights", path: "/copyrightformpage" },
  ];
  const Overview = [
    { name: "Peer Review Process", path: "/peer" },
    { name: "Publication Ethics", path: "/publicationethicspage" },
    { name: "Abstracting and Indexing", path: "/abstractindexing" },
    { name: "Article Processing", path: "/articleprocessingpage" }
  ];
  const Policy = [
    { name: "Plagiarism ", path: "/plagiarismpage" },
    { name: "Malpractice", path: "/malpracticepage" },
    { name: "Correction", path: "/correctionpage" },
    { name: "Publication Rights", path: "/publicationrightspage" },
  ];

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed top-0 w-full z-[100] bg-white ${scroll?' ':''}  `}
      >
        <div className={`${scroll ? "bg-[#4B164C]" : "bg-[#4B164C]"}  `}>
          <div className="max-w-full mx-auto w-full ">
            <div className="w-full flex items-center justify-between">

            <div className=" flex items-center z-10 w-[150px]" >
                <div className=" " ></div>
                <Link to={'/'}>
                  <div className=" bg-white 2xl:w-[332px] xl:w-[332px] lg:w-[280px] md:w-[230px] w-[200px] rounded-tr-[150px] rounded-br-[150px] h-[81px] lg:border-none border border-b-[#4B164C]" >
                    
                    <div className="flex justify-center items-center h-full">
                    <img
                      src={Logo}
                      loading='lazy'
                      alt="Website Logo"
                      className=" lg:min-w-40 lg:w-48 min-w-28 w-36 select-none "
                    />
                    </div>
                  </div>
                </Link>
              </div>
  
              <Link to={"/"} className="lg:block hidden  lg:pl-44 xl:pl-0">
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-semibold text-primary-dark whitespace-nowrap text-white namdhinggo-bold ">International Journal of Cloud Computing and Big Data</h1>
                </div>
              </Link>

              <div className="hidden lg:block"></div>

              <div
                onClick={ToggleMenu}
                className={`${scroll ? "" : ""
                  } text-white inline-flex align-middle cursor-pointer items-center duration-300 min-w-24 select-none lg:hidden `}
              >
                {" "}
                
                < GiHamburgerMenu 
                  className={`${scroll ? " " : ""}  ml-12 text-3xl text-primary-dark cursor-pointer duration-300 m-1.5  rotate-180 `}
                />
              </div>

            
              
            </div>
          </div>

          <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} dropdown2Ref={dropdown2Ref} setDropdown1={setDropdown1} setDropdown2={setDropdown2} dropdown1={dropdown1} dropdown2={dropdown2} />
          {MenuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="h-screen w-full bg-black/40 absolute top-0"
            ></div>
          )}
        </div>

        {/* lg navigations */}
        <div className="py-2.5 bg-primary-mid w-full hidden lg:block bg-[#F8E7F6]" 
        >
          <div className="w-fit mx-auto lg:pl-44 xl:pl-0 h-full text-[#4B164C] font-medium">
            <ul className="flex gap-5 h-full items-center justify-center">
              <li className="">
                <Link to='/'>Home</Link>
              </li>
              
              <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className="flex items-center gap-1" >About<FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown1 &&
                  <div className="absolute bg-[#F8E7F6] border border-[#4B164C] mt-2 rounded-tr-[1vw] rounded-bl-[1vw]">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Aboutus.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1 hover:bg-primary-dark text-[#4B164C] font-medium rounded-md border-b border-primary-dark" >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className="flex items-center gap-1" >Journal Overview <FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown2 &&
                  <div className="absolute bg-[#F8E7F6] border border-[#4B164C] mt-2 rounded-tr-[1vw] rounded-bl-[1vw]">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Overview.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1 hover:bg-primary-dark  text-[#4B164C] font-medium rounded-md border-b border-primary-dark" >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li ref={dropdown3Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown3(!dropdown3)} className="flex items-center gap-1" >Journal Policy<FaChevronDown className={`${dropdown3 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                {dropdown3 &&
                  <div className="absolute bg-[#F8E7F6] border border-[#4B164C] mt-2 rounded-tr-[1vw] rounded-bl-[1vw] ">
                    <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap ">
                      {Policy.map((link, index) => (
                        <Link key={index} onClick={() => setDropdown3(!dropdown3)} to={link.path} className="!w-full" >
                          <li className="px-4 py-1 hover:bg-primary-dark  text-[#4B164C] font-medium rounded-md border-b border-primary-dark" >{link.name} </li>
                        </Link>
                      ))}
                    </ul>
                  </div>}
              </li>
              <li className="">
                <Link to='/contactuspage'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;