'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

type Item = {
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
          name: 'Home',
          slug: 'home',
          description: 'Create UI that is shared across routes',
        },
        {
          name: 'Heroes',
          slug: 'route-groups',
          description: 'Organize routes without affecting URL paths',
        },
        {
          name: 'Items',
          slug: 'parallel-routes',
          description: 'Render multiple pages in the same layout',
        },
      ],
    },
    {
        items: [
          {
            name: 'Tier List',
            slug: 'tier-list',
            description: 'See the current meta',
          },
          {
            name: 'Guides',
            slug: 'guides',
            description: 'Learn the best strategies',
          },
        ],
      },
      {
        items: [
          {
            name: 'Log In',
            slug: 'log-in',
            description: 'See the current meta',
          },
          {
            name: 'Discord',
            slug: 'discord',
            description: 'Organize routes without affecting URL paths',
          },
          {
            name: 'Contribute',
            slug: 'contribute',
            description: 'Render multiple pages in the same layout',
          },
        ],
      },
  ];

  return (
    <div className="fixed top-0 z-10 flex flex-col w-full bg-black border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex items-center px-4 py-4 h-14 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="p-4 rounded-full h-7 w-100">
            <img src={'/logo.png'} />
          </div>
        </Link>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 flex items-center px-4 group h-14 gap-x-2 lg:hidden"
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
        <nav className="pt-8 space-y-6 pb-28">
          {menu.map((section) => {
            return (
              <div>
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
        'block px-8 py-4 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}