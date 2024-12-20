'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '#/app/components/SidebarProvider';
import { home, item, hero, book, rank, login, contribute, discord, logout, github, search, heroesIcon, teamsIcon, itemsIcon } from './icons'; // Add a logout icon if you have one
import FadeInImage from '#/app/components/FadeInImage';
import { useRouter } from 'next/navigation';
import { useUser } from '#/app/components/UserContext';

type Item = {
  id: number;
  icon: () => JSX.Element;
  name: string;
  slug: string;
  description?: string;
  external?: boolean; // Optional
};

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const { setIsActive } = useContext(SidebarContext) || {};
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const openSidebar = () => {
    setIsActive?.(true);
  };

  const handleLogout = async () => {
    try {
      // Trigger the logout API call
      await fetch('/api/auth/logout', {
        method: 'GET',
      });

      // Redirect to the homepage after logging out
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const focusSearch = () => {
    if (isMobile) {
      close();
    }
    openSidebar();
    // Wait for the sidebar to open before focusing the search input
    setTimeout(() => {
      const searchInput = document.querySelector('#search-bar') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    }, 300);    
  }

  useEffect(() => {
    const mainBody = document.querySelector('.main-body');
    if (mainBody) {
      mainBody.classList.remove('lg:w-[calc(85%)]', 'lg:w-[calc(70%)]');
      mainBody.classList.add(isOpen ? 'lg:w-[calc(70%)]' : 'lg:w-[calc(85%)]');      
      if (isOpen && isMobile) {
        document.body.style.overflowY = 'hidden';
      } 
      else {
        document.body.style.overflowY = 'auto';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const mainBody = document.querySelector('.main-body');
    if (mainBody) {
      mainBody.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname])

  const menu: { items: Item[] }[] = [
    {
      items: [
        {
          id: 1,
          icon: home,
          name: 'Home',
          slug: '',
          description: 'Create UI that is shared across routes',
        },
        {
          id: 2,
          icon: (() => (<FadeInImage src={heroesIcon} width={32} height={32} className="w-6 h-6 heroes-icon" alt="Heroes" />)),
          name: 'Heroes',
          slug: 'heroes?r-3-star=true&r-2-star=true',
          description: 'Organize routes without affecting URL paths',
        },
        {
          id: 3,
          icon: (() => (<FadeInImage src={itemsIcon} width={32} height={32} className="w-6 h-6 items-icon" alt="Items" />)),
          name: 'Items',
          slug: 'items?one-handed-sword=true',
          description: 'Render multiple pages in the same layout',
        },
      ],
    },
    {
      items: [
        {
          id: 4,
          icon: rank,
          name: 'Tier List',
          slug: 'tier-list',
          description: 'See the current meta',
        },
        {
          id: 5,
          icon: (() => (<FadeInImage src={teamsIcon} width={12} height={12} className="w-6 h-6 teams-icon" alt="Teams" />)),
          name: 'Teams',
          slug: 'teams',
          description: 'Find the best teams',
        },
        {
          id: 6,
          icon: book,
          name: 'Guides',
          slug: 'guides',
          description: 'Learn the best strategies',
        },
      ],
    },
    {
      items: [
        {
          id: 7,
          icon: discord,
          name: 'Discord',
          slug: 'https://discord.gg/heavenhold',
          description: 'Join our Discord server',
          external: true,
        },
        {
          id: 8,
          icon: github,
          name: 'Roadmap',
          slug: 'https://github.com/users/SKukreja/projects/1',
          description: 'Visit our roadmap',
          external: true,
        },
        {
          id: 9,
          icon: contribute,
          name: 'Contribute',
          slug: 'contribute',
          description: 'Render multiple pages in the same layout',
        },
      ],
    },
    {
      items: [
        {
          id: 10,
          icon: user == null ? login : logout,
          name: user == null ? 'Log In' : 'Log Out',
          slug: user == null ? 'https://api.heavenhold.com/login/' : 'logout',
          description: user == null ? 'Log into the site' : 'Log out of your account',
          external: true,
        },
      ],
    }
  ];

  return (
    <div className="fixed top-0 z-60 flex flex-col bg-black border-b border-gray-800 w-full h-16 lg:h-auto lg:w-[calc(15vw)] lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex items-center pl-4 py-0 h-full lg:h-auto">
        <Link
          href="/"
          className="group flex w-auto lg:w-full items-center gap-x-2 py-4"
          onClick={close}
        >
          <div className="p-4 rounded-full flex items-center h-full w-fit lg:h-7 lg:w-100">
            <FadeInImage src={'/logo.png'} className={'object-contain h-full w-auto'} alt={'logo'} width={128} height={128} />
          </div>
        </Link>
        <div className='search-icon border-gray-800 cursor-pointer border-l hidden lg:flex justify-center items-center py-0 px-4 h-full aspect-square fill-gray-400 hover:bg-gray-800 hover:fill-white' onClick={() => focusSearch()}>
          <span className="w-6 h-6">{search()}</span>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 flex justify-end items-center px-4 h-full gap-x-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 w-full group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <div className="block w-6 text-gray-400"></div>
        ) : (
          <div className="block w-6 text-gray-400"></div>
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-16 bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-4 mt-0 lg:-mt-6 lg:space-y-6 pb-28">
          <div className="mt-4 lg:mt-6 px-8 py-4 text-sm font-medium text-gray-300 w-full flex lg:hidden items-center gap-x-4" onClick={() => focusSearch()}><span className="w-6 h-6 fill-gray-300">{search()}</span>Search</div>
          {menu.map((section) => {
            return (
              <div key={section.items[0].id}>
                <div className="mb-4 lg:mb-6 border-b border-gray-800 w-100 text-gray-400/80"></div>
                <div>
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} handleLogout={handleLogout} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({ item, close, handleLogout }: { item: Item, close: () => void, handleLogout: () => void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  // Check if the slug is an external URL
  const isExternal = item.slug.startsWith('http');
  const isAuth = item.slug.includes('login');

  const commonClasses = clsx(
    'px-8 py-4 text-sm font-medium hover:text-gray-300 w-full flex items-center gap-x-4',
    {
      'text-gray-400 hover:bg-gray-800': !isActive,
      'text-white': isActive,
    } 
  );

  // Handle external links
  if (isExternal && !isAuth) {
    return (
      <a
        href={item.slug}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {item.icon()} {item.name}
      </a>
    );
  }

  // Handle logout link
  if (item.slug === 'logout') {
    return (
      <button
        onClick={() => {
          close();
          handleLogout();
        }}
        className={commonClasses}
      >
        {item.icon()} {item.name}
      </button>
    );
  }

  // Handle internal links
  return (
    <Link onClick={close} href={`${!isExternal ? '/' : ''}${item.slug}`} className={commonClasses}>
      {item.icon()} {item.name}
    </Link>
  );
}
