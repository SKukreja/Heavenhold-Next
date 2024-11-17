"use client";

import { Suspense, useEffect, useState, useRef, useContext } from 'react';
import { usePathname } from 'next/navigation';
import HeroFilters from '#/app/components/HeroFilters';
import HeroList from '#/app/components/HeroList';
import ItemList from '#/app/components/ItemList';
import ItemFilters from '#/app/components/ItemFilters';
import { chevron, closeFilter, filter, heroesIcon, itemsIcon, close, sort } from "#/ui/icons";
import SearchResults from '#/app/components/SearchResults';
import { SidebarContext } from '#/app/components/SidebarProvider';
import FadeInImage from '#/app/components/FadeInImage';
import HeroSorting from '#/app/components/HeroSorting';
import ItemSorting from '#/app/components/ItemSorting';

export default function Sidebar() {
  const { isActive, toggleSidebar, setIsActive } = useContext(SidebarContext) || {};
  const [isEnabled, setIsEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef(null);

  const heroMatch = pathname.match(/^\/heroes\/(.+)$/);
  const itemMatch = pathname.match(/^\/items\/(.+)$/);
  const heroPathValue = heroMatch ? heroMatch[1] : null;
  const itemPathValue = itemMatch ? itemMatch[1] : null;

  if (typeof isActive === 'undefined') {
    return null;
  }

  // Update useEffect hooks to use context's setIsActive
  useEffect(() => {
    if (pathname === '/') {
      setIsActive?.(false);
      setIsEnabled(false);
    } else {
      if (pathname.includes('tier-list') || (pathname.includes('/heroes') && !heroPathValue) || (pathname.includes('/items') && !itemPathValue)) setSettingsOpen(true);
      else if (settingsOpen) { setSettingsOpen(false); }
      if (sortingOpen) { setSortingOpen(false); }
      setIsEnabled(true);
      const storedSidebarState = localStorage.getItem('sidebarState');
      if (storedSidebarState !== null) {        
        setIsActive?.(storedSidebarState === 'true');
      } else {
        setIsActive?.(
          !!(pathname.includes('/heroes') || pathname.includes('/items') || heroPathValue || itemPathValue)
        );
      }
    }
  }, [pathname, heroPathValue, itemPathValue]);

  useEffect(() => {
    const mainBody = document.querySelector('.main-body');
    if (mainBody) {
      mainBody.classList.remove('lg:w-[calc(85%)]', 'lg:w-[calc(70%)]');
      mainBody.classList.add(isActive ? 'lg:w-[calc(70%)]' : 'lg:w-[calc(85%)]');      
      if (isActive && window.innerWidth < 1024) {
        document.body.style.overflowY = 'hidden';
      } 
      else {
        document.body.style.overflowY = 'auto';
      }
    }
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !((searchRef.current as HTMLElement).contains(event.target as Node))) {
        setTimeout(() => {
          setIsSearchFocused(false);
        }, 300); // Add a delay of 300 milliseconds
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close sidebar on route change in mobile view
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsActive?.(false);
    }
  }, [pathname, setIsActive]);

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const clickFilterSettings = () => {
    if(settingsOpen && heroPathValue || itemPathValue) { setSettingsOpen(false); }
    else { setSettingsOpen(true); }
    setSortingOpen(false);
  }

  const clickSortingSettings = () => {
    if(sortingOpen && heroPathValue || itemPathValue) { setSortingOpen(false); }
    else { setSortingOpen(true); }
    setSettingsOpen(false);
  }


  return (
    <>
      <div
        className={`fixed top-0 z-40 lg:flex lg:flex-col overflow-x-visible overflow-y-scroll bg-black border-b border-gray-800 scrollbar-none transition-width ${
          isActive ? 'flex flex-col items-center lg:items-start pt-16 lg:pt-0 inset-0 w-screen h-screen lg:w-[calc(15vw)]' : 'hidden w-0 lg:-left-[2px]'
        } pb-32 lg:pb-16 lg:left-[calc(15vw)] lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800`}
      >
        <Suspense>
        <div className={`w-full h-full ${settingsOpen || sortingOpen ? 'flex' : 'hidden'} bg-black absolute flex-col inset-0 pt-16`}>
          {((pathname === '/heroes' && !heroPathValue) || pathname.includes('tier-list') || heroPathValue) && <div className={settingsOpen ? 'flex' : 'hidden'}><HeroFilters /></div>}
          {((pathname === '/items' && !itemPathValue) || itemPathValue) && <div className={settingsOpen ? 'flex' : 'hidden'}><ItemFilters /></div>}
          {((pathname === '/heroes' && !heroPathValue) || pathname.includes('tier-list') || heroPathValue) && <div className={sortingOpen ? 'flex' : 'hidden'}><HeroSorting /></div>}
          {((pathname === '/items' && !itemPathValue) || itemPathValue) && <div className={sortingOpen ? 'flex' : 'hidden'}><ItemSorting /></div>}
        </div>
        <div className="relative search-bar w-full" ref={searchRef}>
          <input
            id="search-bar" 
            type="text"
            className="bg-gray-900 text-white outline-gray-900 w-[calc(100%-0.5rem)] lg:w-full h-16 px-8 py-4"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

          {isSearchFocused && searchQuery ? (
            <SearchResults searchQuery={searchQuery} closeSidebar={() => setIsActive?.(false)} />
          ) : (
            <>
              {heroPathValue && <HeroList />}
              {itemPathValue && <ItemList />}
            </>
          )}          
          <div
            className={`${isActive ? "visible pointer-events-auto" : "invisible pointer-events-none"} fixed select-none bottom-0 w-full lg:w-[15vw] h-16 flex justify-center items-center border-gray-800 border-1 border-t border-r text-white font-bold bg-gray-1000 hover:bg-gray-900 cursor-pointer`}
          > 
            {heroPathValue || itemPathValue || (pathname === '/heroes' && !heroPathValue) || (pathname === '/items' && !itemPathValue) ? (       
              <>
                <div
                  className={`${isActive ? "visible pointer-events-auto" : "invisible pointer-events-none"} ${settingsOpen ? 'bg-gray-800' : ''} w-1/3 h-16 flex justify-center items-center border-gray-800 border-1 text-white font-bold bg-gray-1000 hover:bg-gray-900 cursor-pointer`}
                  onClick={() => clickFilterSettings()}
                >        
                    <span className="fill-white relative w-6 h-6 flex justify-center items-center">{settingsOpen && pathname != '/heroes' && pathname != '/items' ? close() : filter() }</span>
                </div>
                <div
                  className={`${isActive ? "visible pointer-events-auto" : "invisible pointer-events-none"} ${sortingOpen ? 'bg-gray-800' : ''} w-1/3 h-16 flex justify-center items-center border-gray-800 border-l border-r border-1 text-white font-bold bg-gray-1000 hover:bg-gray-900 cursor-pointer`}
                  onClick={() => clickSortingSettings()}
                >        
                    <span className="fill-white relative w-6 h-6 flex justify-center items-center">{sortingOpen && pathname != '/heroes' && pathname != '/items' ? close() : sort()}</span>
                </div>
              </>
            ) : null}
            <div
              className={`${isActive ? "visible pointer-events-auto" : "invisible pointer-events-none"} ${heroPathValue || itemPathValue || (pathname === '/heroes' && !heroPathValue) || (pathname === '/items' && !itemPathValue) ? 'w-1/3' : 'w-full'} h-16 flex justify-center items-center border-gray-800 border-1 text-white font-bold bg-gray-1000 hover:bg-gray-900 cursor-pointer`}
              onClick={toggleSidebar}
            >        
                <span className="fill-white relative w-full h-full flex justify-center items-center">Close</span>
            </div>
          </div>
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
        className={`${isEnabled && !isActive ? "visible pointer-events-auto" : "invisible pointer-events-none"} 
        fixed ${false ? "bottom-6 right-6" : "lg:hidden top-24 right-8"} w-16 h-16 lg:w-20 lg:h-20 
        flex justify-center items-center border-gray-800 border-1 text-white bg-gray-1000/90 
        hover:bg-gray-1000 z-50 ${heroPathValue || itemPathValue ? 'p-2' : 'p-4'} lg:p-6 cursor-pointer`}
        onClick={toggleSidebar}
      >        
          <span className="fill-white relative w-full h-full z-50">{isActive ? (heroPathValue ? filter() : close()) 
          : (heroPathValue ? (<FadeInImage src={heroesIcon} width={32} height={32} className='w-full h-full' alt='Hero List Button Icon' />) 
            : itemPathValue ? (<FadeInImage src={itemsIcon} width={32} height={32} className='w-full h-full' alt='Item List Button Icon' />) 
            : filter())}</span>
      </div>
    </>
  );
}
