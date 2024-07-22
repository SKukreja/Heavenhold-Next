"use client";

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import HeroFilters from '#/app/components/HeroFilters';
import HeroList from '#/app/components/HeroList';

export default function Sidebar() {
    const pathname = usePathname();
    const match = pathname.match(/^\/heroes\/(.+)$/);
    const heroPathValue = match ? match[1] : null;

    return(
        <div className="fixed top-0 z-10 flex flex-col overflow-y-scroll bg-black border-b border-gray-800 scrollbar-none w-72 left-72 lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800">
            <Suspense>
                {pathname === '/heroes' && <HeroFilters />}
                {heroPathValue && <HeroList />}
            </Suspense>
        </div>
    );
}
