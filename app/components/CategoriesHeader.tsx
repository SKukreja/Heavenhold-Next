
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Map of pathnames to display labels
const categoryLabels: Record<string, string> = {
    "": "All",
    "/colosseum": "Colosseum",
    "/raid": "Raid",
    "/arena": "Arena",
    "/boss-rush": "Boss Rush",
    "/expedition": "Expedition",
    "/death-match": "Death Match",
};

interface CategoriesProps {
    currentLocation: string;
}

export default function CategoriesHeader({
    currentLocation,
}: CategoriesProps) {  
    const pathname = usePathname();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const currentLabel = categoryLabels[pathname.replace(currentLocation, "")] || "Categories";

    // Re-render on resize
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024);
      };
  
      handleResize(); // Initial check
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const handleNavigation = (href: string) => {
      router.push(href);
      setIsDropdownOpen(false); // Close dropdown after navigation
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
  
      const handleScroll = () => {
        setIsDropdownOpen(false);
      };
  
      // Add event listeners
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
  
      // Clean-up function
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return (
        <div className="flex flex-col justify-start px-8 lg:px-0">

            <span className="font-normal text-xs tracking-widest">{isMobile ? "Category" : "Categories"}</span>
            
            {/* Mobile Dropdown */}
            <div className="lg:hidden relative z-30 text-lg font-bold" ref={dropdownRef}>
                <button
                id="dropdownCategoriesButton"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center text-gray-300 hover:text-white"
                type="button"
                >
                <span className="sr-only">Open categories menu</span>
                {currentLabel}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                {isDropdownOpen && (
                <div
                    id="dropdownCategories"
                    className={`w-screen h-screen absolute bg-black/90 transition-opacity duration-1000 ease-in-out ${
                    isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    } -ml-8 pl-4 mt-2`}
                >
                    <ul className="py-2 text-sm text-white z-40 relative">
                    {Object.entries(categoryLabels).map(([path, label]) => (
                        <li key={path}>
                        <button
                            onClick={() => handleNavigation(currentLocation + path)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                            {label}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex text-lg items-center gap-4 font-bold">
                {Object.entries(categoryLabels).map(([path, label]) => (
                <Link key={path} href={currentLocation + path} className={`cursor-pointer hover:text-gray-500 ${pathname === currentLocation + path ? 'text-gray-500' : ''}`}>
                    {label}
                </Link>
                ))}
            </div>
        </div>
    );
}
        