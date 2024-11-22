"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { sortDown, sortUp } from "#/ui/icons";

const ToggleStyles = "flex items-center justify-between w-full px-8 py-6 text-white cursor-pointer bg-gray-1000 select-none hover:bg-gray-800";
const ToggleText = "font-medium text-sm";
const ButtonIconStyles = "sort-icon w-4 h-4 flex justify-center items-center fill-white";

export default function HeroSorting() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeSort, setActiveSort] = useState<{ option: string; order: 'asc' | 'desc' }>({ option: 'Name', order: 'asc' });

  useEffect(() => {
    if(pathname.toString().includes('tier-list')) return;
    const params = Object.fromEntries(searchParams.entries());
    const sortOption = params.sort || 'Name';
    const sortOrder = params.order || 'asc';

    if (sortOption !== activeSort.option || sortOrder !== activeSort.order) {
      setActiveSort({ option: sortOption, order: sortOrder as 'asc' | 'desc' });
      applySort({ option: sortOption, order: sortOrder as 'asc' | 'desc' });
    }

    const activeFilterSection = document.querySelector(`#active-filters`);
    if (activeFilterSection) {
      // Prepend a div with classList.add('p-4', 'cursor-pointer', 'select-none', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-sm', 'font-medium', 'w-auto'); if one with textContent that includes 'Sorting = '  doesn't already exist, otherwise replace it
      const sortingFilter = activeFilterSection.querySelector('div.sorting-indicator') || document.createElement('div');
      sortingFilter.classList.add('sorting-indicator', 'p-2','lg:p-4', 'cursor-pointer', 'select-none', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-xs','lg:text-sm', 'font-medium', 'w-auto');
      sortingFilter.textContent = `Sorting = ${activeSort.option.charAt(0).toUpperCase() + activeSort.option.slice(1)} ${activeSort.order === 'asc' ? '↑' : '↓'}`;
      activeFilterSection.prepend(sortingFilter);
    };
  }, [searchParams]);

  const handleSortChange = (option: string) => () => {
    const isCurrentOption = activeSort.option === option.toLowerCase();
    const newOrder: 'asc' | 'desc' = isCurrentOption && activeSort.order === 'asc' ? 'desc' : 'asc';
    const newSort = { option, order: newOrder };
    setActiveSort(newSort);

    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set('sort', option.toLowerCase());
    newQuery.set('order', newOrder);
    router.replace(`?${newQuery.toString()}`);

    applySort(newSort);
  };

  const applySort = (sort: { option: string; order: 'asc' | 'desc' }) => {
    const elements = Array.from(document.querySelectorAll('[data-sort]')) as HTMLElement[];

    elements.sort((a, b) => {
      const aValue = a.getAttribute(`data-${sort.option.toLowerCase().replace(' ', '-')}`) || '';
      const bValue = b.getAttribute(`data-${sort.option.toLowerCase().replace(' ', '-')}`) || '';

      if (sort.option === 'Rarity') {
        const aNum = parseInt(aValue, 10);
        const bNum = parseInt(bValue, 10);
        return sort.order === 'asc' ? aNum - bNum : bNum - aNum;
      } else {
        return sort.order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
    });

    const parent = elements[0]?.parentNode;
    if (parent) {
      elements.forEach((el) => {
        parent.appendChild(el);
      });
    }
  };

  if(pathname.toString().includes('tier-list')) return;

  return (
    <form className="pt-8 pb-16 w-[calc(100%-0.5rem)] lg:w-full">
      <h3 className="px-8 mb-8 font-bold tracking-widest uppercase">Sorting</h3>
      <div className="flex flex-col gap-2">
        {['Name', 'Title', 'Element', 'Rarity', 'Party Buff'].map((option) => (
          <div
            key={option}
            className={`${ToggleStyles} ${activeSort.option === option.toLowerCase() ? 'bg-gray-800' : ''}`}
            onClick={handleSortChange(option)}
          >
            <span className={ToggleText}>{option}</span>
            {activeSort.option === option.toLowerCase() && (
              <span className={ButtonIconStyles}>
                {activeSort.order === 'asc' ? sortUp() : sortDown()}
              </span>
            )}
          </div>
        ))}
      </div>
    </form>
  );
}
