"use client";

import { Suspense, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HeroFilters from '#/app/components/HeroFilters';
import HeroList from '#/app/components/HeroList';
import ItemList from '#/app/components/ItemList';
import ItemFilters from '#/app/components/ItemFilters';
import { chevron } from "#/ui/icons";
import SearchResults from '#/app/components/SearchResults';

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const heroMatch = pathname.match(/^\/heroes\/(.+)$/);
  const itemMatch = pathname.match(/^\/items\/(.+)$/);
  const heroPathValue = heroMatch ? heroMatch[1] : null;
  const itemPathValue = itemMatch ? itemMatch[1] : null;

  useEffect(() => {
    if (pathname === '/' || pathname.includes('/tier-list')) {
      // Sidebar is inactive on these paths regardless of stored preference
      setIsActive(false);
      setIsEnabled(false);
    } else {
      // Check for stored user override
      setIsEnabled(true);
      const storedSidebarState = localStorage.getItem('sidebarState');
      if (storedSidebarState !== null) {
        // Use the stored value
        setIsActive(storedSidebarState === 'true');
      } else {
        // Use default behavior based on pathname
        if (
          pathname.includes('/heroes') ||
          pathname.includes('/items') ||
          heroPathValue ||
          itemPathValue
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Adjust main body classes when isActive changes
    const mainBody = document.querySelector('.main-body');
    if (mainBody) {
      mainBody.classList.remove('lg:w-[calc(85%)]', 'lg:w-[calc(70%)]');
      if (isActive) {
        mainBody.classList.add('lg:w-[calc(70%)]');
      } else {
        mainBody.classList.add('lg:w-[calc(85%)]');
      }
    }
  }, [isActive]);

  const toggleSidebar = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    localStorage.setItem('sidebarState', newIsActive.toString());
  };

  return (
    <>
      <div
        className={`hidden fixed top-0 z-40 lg:flex lg:flex-col overflow-x-visible overflow-y-scroll bg-black border-b border-gray-800 scrollbar-none transition-width ${
          isActive ? 'w-[calc(15vw)]' : 'w-0 -left-[2px]'
        } left-[calc(15vw)] lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800`}
      >
        <Suspense>
          <div className={"search-bar"}>
            <input
              type="text"
              className="bg-gray-900 text-white outline-gray-900 w-full h-16 px-8 py-4"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
          </div>
          {isSearchFocused && searchQuery ? (
            <SearchResults searchQuery={searchQuery} />
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
    </>
  );
}
