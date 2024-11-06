"use client";

import { Suspense, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import HeroFilters from '#/app/components/HeroFilters';
import HeroList from '#/app/components/HeroList';
import ItemList from '#/app/components/ItemList';
import ItemFilters from '#/app/components/ItemFilters';
import { chevron, closeFilter, filter } from "#/ui/icons";
import SearchResults from '#/app/components/SearchResults';

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef(null);

  const heroMatch = pathname.match(/^\/heroes\/(.+)$/);
  const itemMatch = pathname.match(/^\/items\/(.+)$/);
  const heroPathValue = heroMatch ? heroMatch[1] : null;
  const itemPathValue = itemMatch ? itemMatch[1] : null;

  useEffect(() => {
    if (pathname === '/') {
      setIsActive(false);
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
      const storedSidebarState = localStorage.getItem('sidebarState');
      if (storedSidebarState !== null) {
        setIsActive(storedSidebarState === 'true');
      } else {
        setIsActive(!!(pathname.includes('/heroes') || pathname.includes('/items') || heroPathValue || itemPathValue));
      }
    }
  }, [pathname]);

  useEffect(() => {
    const mainBody = document.querySelector('.main-body');
    if (mainBody) {
      mainBody.classList.remove('lg:w-[calc(85%)]', 'lg:w-[calc(70%)]');
      mainBody.classList.add(isActive ? 'lg:w-[calc(70%)]' : 'lg:w-[calc(85%)]');
    }
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && Array.isArray(searchRef.current) && !(searchRef.current as Node[]).includes(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close sidebar on route change in mobile view
  useEffect(() => {
    if (window.innerWidth < 1024) { // Adjust as needed for mobile breakpoint
      setIsActive(false);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    localStorage.setItem('sidebarState', newIsActive.toString());
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-40 lg:flex lg:flex-col overflow-x-visible overflow-y-scroll bg-black border-b border-gray-800 scrollbar-none transition-width ${
          isActive ? 'flex flex-col pt-16 lg:pt-0 inset-0 w-screen h-screen lg:w-[calc(15vw)]' : 'hidden w-0 lg:-left-[2px]'
        } lg:left-[calc(15vw)] lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800`}
      >
        <Suspense>
          <div className="relative search-bar" ref={searchRef}>
            <input
              type="text"
              className="bg-gray-900 text-white outline-gray-900 w-full h-16 px-8 py-4"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          {isSearchFocused && searchQuery ? (
            <SearchResults searchQuery={searchQuery} closeSidebar={() => setIsActive(false)} />
          ) : (
            <>
              {pathname === '/heroes' && <HeroFilters />}
              {pathname === '/items' && <ItemFilters />}
              {heroPathValue && <HeroList />}
              {itemPathValue && <ItemList />}
            </>
          )}
        </Suspense>
      </div>
      <div
        className={`${isEnabled ? "visible pointer-events-auto" : "invisible pointer-events-none"} toggle-sidebar cursor-pointer fixed top-[calc(50vh-2rem)] transition-transform ${
          isActive ? 'translate-x-[calc(30vw-1px)]' : 'translate-x-[calc(15vw-1px)]'
        } bg-black hover:bg-gray-700 hidden lg:flex justify-center items-center px-1 z-30 py-8 border border-gray-800`}
        onClick={toggleSidebar}
      >
        <span className={`chevron-icon duration-200 origin-center ease-in-out flex items-center justify-center fill-white h-[0.3rem] w-[0.3rem] ${isActive ? '' : 'rotate-180'}`}>
          {chevron()}
        </span>
      </div>
      <div
        className={`${isEnabled ? "visible pointer-events-auto" : "invisible pointer-events-none"} fixed bottom-6 right-6 w-20 h-20 flex justify-center items-center border-gray-800 border-2 text-white bg-gray-900/95 lg:bg-gray-900/80 hover:bg-gray-900 z-50 p-6 cursor-pointer`}
        onClick={toggleSidebar}
      >        
          <span className="fill-white relative w-full h-full z-50">{isActive ? closeFilter() : filter()}</span>
      </div>
    </>
  );
}
