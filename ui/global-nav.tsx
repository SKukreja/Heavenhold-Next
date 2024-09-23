'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import { home, item, hero, book, rank, login, contribute, discord } from './icons';
import FadeInImage from '#/app/components/FadeInImage';

type Item = {
    id: number;
    icon: () => JSX.Element;
    name: string;
    slug: string;
    description?: string;
};

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const menu: { items: Item[] }[] = [
    {
      items: [
        {
          id: 1,
          icon: home,
          name: 'Home',
          slug: 'home',
          description: 'Create UI that is shared across routes',
        },
        {
          id: 2,
          icon: hero,
          name: 'Heroes',
          slug: 'heroes?r-3-star=true&r-2-star=true',
          description: 'Organize routes without affecting URL paths',
        },
        {
          id: 3,
          icon: item,
          name: 'Items',
          slug: 'items',
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
            id: 6,
            icon: login,
            name: 'Log In',
            slug: 'log-in',
            description: 'See the current meta',
          },
          {
            id: 7,
            icon: discord,
            name: 'Discord',
            slug: 'discord',
            description: 'Organize routes without affecting URL paths',
          },
          {
            id: 8,
            icon: contribute,
            name: 'Contribute',
            slug: 'contribute',
            description: 'Render multiple pages in the same layout',
          },
        ],
      },
  ];

  return (
    <div className="fixed top-0 z-30 flex flex-col bg-black border-b border-gray-800 w-full h-16 lg:h-auto lg:w-[calc(15%)] lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex items-center px-4 py-4 h-full lg:h-auto">
        <Link
          href="/"
          className="group flex w-auto lg:w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="p-4 rounded-full h-full w-fit lg:h-7 lg:w-100">
            <FadeInImage src={'/logo.png'} className={'object-contain h-full w-auto'} alt={'logo'} width={128} height={128} />
          </div>
        </Link>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 flex items-center px-4 group h-full gap-x-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
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
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="pt-2 space-y-6 pb-28">
          {menu.map((section) => {
            return (
              <div key={section.items[0].id}>
                <div className="mb-6 border-b border-gray-800 w-100 text-gray-400/80">

                </div>

                <div>
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
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

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'px-8 py-4 text-sm font-medium hover:text-gray-300 flex items-center gap-x-4',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.icon()} {item.name}
    </Link>
  );
}