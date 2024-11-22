"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams, usePathname } from 'next/navigation';
import { sortDown, sortUp } from "#/ui/icons";

const ToggleStyles = "flex items-center justify-between w-full px-8 py-6 text-white cursor-pointer bg-gray-1000 select-none hover:bg-gray-800";
const ToggleText = "font-medium text-sm";
const ButtonIconStyles = "sort-icon w-4 h-4 flex justify-center items-center fill-white";

const itemTypesWithElement = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw'];
const itemTypesWithRarity = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw', 'merch', 'relic', 'accessory', 'shield'];
const itemTypesWithStats = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw', 'merch', 'relic', 'accessory', 'shield'];

// Define default sort options for each itemType
const defaultSortOptions: { [key: string]: { option: string; order: 'asc' | 'desc' } } = {
  'one-handed-sword': { option: 'dps', order: 'desc' },
  'two-handed-sword': { option: 'dps', order: 'desc' },
  'rifle': { option: 'dps', order: 'desc' },
  'bow': { option: 'dps', order: 'desc' },
  'basket': { option: 'dps', order: 'desc' },
  'staff': { option: 'dps', order: 'desc' },
  'gauntlet': { option: 'dps', order: 'desc' },
  'claw': { option: 'dps', order: 'desc' },
  'merch': { option: 'rarity', order: 'desc' },
  'relic': { option: 'rarity', order: 'desc' },
  'accessory': { option: 'rarity', order: 'desc' },
  'shield': { option: 'rarity', order: 'desc' },
  'costume': { option: 'name', order: 'asc' },
  'equipment-costume': { option: 'name', order: 'asc' },
  'illustration-costume': { option: 'name', order: 'asc' },
  'defaulttype': { option: 'name', order: 'asc' },
};

const itemTypes = [
  { id: 'filter-mobile-category-1hsword', value: 'one-handed-sword', label: 'One-Handed Sword', icon: '/icons/equipment/1hsword.webp' },
  { id: 'filter-mobile-category-2hsword', value: 'two-handed-sword', label: 'Two-Handed Sword', icon: '/icons/equipment/2hsword.webp' },
  { id: 'filter-mobile-category-rifle', value: 'rifle', label: 'Rifle', icon: '/icons/equipment/rifle.webp' },
  { id: 'filter-mobile-category-bow', value: 'bow', label: 'Bow', icon: '/icons/equipment/bow.webp' },
  { id: 'filter-mobile-category-basket', value: 'basket', label: 'Basket', icon: '/icons/equipment/basket.webp' },
  { id: 'filter-mobile-category-staff', value: 'staff', label: 'Staff', icon: '/icons/equipment/staff.webp' },
  { id: 'filter-mobile-category-gauntlet', value: 'gauntlet', label: 'Gauntlet', icon: '/icons/equipment/gauntlet.webp' },
  { id: 'filter-mobile-category-claw', value: 'claw', label: 'Claw', icon: '/icons/equipment/claw.webp' },
  { id: 'filter-mobile-category-shield', value: 'shield', label: 'Shield', icon: '/icons/equipment/shield.webp' },
  { id: 'filter-mobile-category-accessory', value: 'accessory', label: 'Accessory', icon: '/icons/equipment/accessory.webp' },
  { id: 'filter-mobile-category-costume', value: 'costume', label: 'Hero Costume', icon: '/icons/equipment/herocostume.webp' },
  { id: 'filter-mobile-category-equipmentcostume', value: 'equipment-costume', label: 'Equipment Costume', icon: '/icons/equipment/equipmentcostume.webp' },
  { id: 'filter-mobile-category-illustrationcostume', value: 'illustration-costume', label: 'Illustration Costume', icon: '/icons/equipment/illustrationcostume.webp' },
  { id: 'filter-mobile-category-card', value: 'card', label: 'Card', icon: '/icons/equipment/card.webp' },
  { id: 'filter-mobile-category-merch', value: 'merch', label: 'Merch', icon: '/icons/equipment/merch.webp' },
  { id: 'filter-mobile-category-relic', value: 'relic', label: 'Relic', icon: '/icons/equipment/relic.webp' },
];

const itemTypeValues = itemTypes.map(option => option.value);

// Helper function to get valid sort options for an itemType
function getValidSortOptions(itemType: string): string[] {
  const options = ['name'];
  if (itemTypesWithElement.includes(itemType)) options.push('element');
  if (itemTypesWithRarity.includes(itemType)) options.push('rarity');
  if (itemTypesWithStats.includes(itemType)) options.push('dps');
  return options;
}

// Helper function to capitalize the first letter
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Helper function to convert searchParams to an object
function getSearchParamsObject(searchParams: URLSearchParams): Record<string, string> {
  const paramsObj: Record<string, string> = {};
  searchParams.forEach((value: string, key: string) => {
    paramsObj[key] = value;
  });
  return paramsObj;
}

export default function ItemSorting() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  // Extract initial parameters
  const itemTypeFromParams = params.itemType || 'one-handed-sword';
  const itemType = (Array.isArray(itemTypeFromParams) ? itemTypeFromParams[0] : itemTypeFromParams).toLowerCase();
  const initialSortOption = searchParams.get('sort') || defaultSortOptions[itemType]?.option || 'dps';
  const initialSortOrder = searchParams.get('order') || defaultSortOptions[itemType]?.order || 'desc';

  const [validSortOptions, setValidSortOptions] = useState(getValidSortOptions(itemType));
  const [activeSort, setActiveSort] = useState<{ option: string; order: 'asc' | 'desc' }>({ option: initialSortOption, order: initialSortOrder as 'asc' | 'desc' });

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const filters: { [key: string]: boolean } = {};
    Object.keys(params).forEach((key) => {
      if (params[key] === 'true') {
        filters[key] = true;
      }
    });
    // Determine selectedItemType
    let itemType = itemTypeValues.find(type => filters[type]);
    // If no item type is selected, default to 'one-handed-sword'
    if (!itemType) {
      filters['one-handed-sword'] = true;
      itemType = 'one-handed-sword';
    }
    const sortOption = searchParams.get('sort') || defaultSortOptions[itemType]?.option || 'name';
    const sortOrder = searchParams.get('order') || defaultSortOptions[itemType]?.order || 'asc';

    const validOptions = getValidSortOptions(itemType);
    setValidSortOptions(validOptions);

    // Check if the current sort option is valid for the new itemType
    if (!validOptions.includes(sortOption)) {
      const defaultSort = defaultSortOptions[itemType] || { option: 'name', order: 'asc' };
      setActiveSort(defaultSort);

      // Update the searchParams
      const newQueryParams: Record<string, string> = getSearchParamsObject(searchParams);
      newQueryParams.sort = defaultSort.option;
      newQueryParams.order = defaultSort.order;

      const newUrl = `${pathname}?${new URLSearchParams(newQueryParams).toString()}`;
      router.replace(newUrl);

      applySort(defaultSort);
    } else if (activeSort.option !== sortOption || activeSort.order !== sortOrder) {
      setActiveSort({ option: sortOption, order: sortOrder as 'asc' | 'desc' });
      applySort({ option: sortOption, order: sortOrder as 'asc' | 'desc' });
    }

    // Update the sorting indicator in the DOM
    const activeFilterSection = document.querySelector(`#active-filters`);
    if (activeFilterSection) {
      const sortingFilter = activeFilterSection.querySelector('div.sorting-indicator') || document.createElement('div');
      sortingFilter.classList.add('sorting-indicator', 'p-2','lg:p-4', 'cursor-pointer', 'select-none', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-xs','lg:text-sm', 'font-medium', 'w-auto');
      sortingFilter.textContent = `Sorting = ${capitalize(activeSort.option)} ${activeSort.order === 'asc' ? '↑' : '↓'}`;
      activeFilterSection.prepend(sortingFilter);
    };
  }, [searchParams, params.itemType]);

  const handleSortChange = (option: string) => () => {
    const isCurrentOption = activeSort.option === option;
    const newOrder: 'asc' | 'desc' = isCurrentOption && activeSort.order === 'asc' ? 'desc' : 'asc';
    const newSort = { option, order: newOrder };
    setActiveSort(newSort);

    const newQueryParams: Record<string, string> = getSearchParamsObject(searchParams);
    newQueryParams.sort = option;
    newQueryParams.order = newOrder;

    const newUrl = `${pathname}?${new URLSearchParams(newQueryParams).toString()}`;
    router.replace(newUrl);

    applySort(newSort);
  };

  const applySort = (sort: { option: string; order: 'asc' | 'desc' }) => {
    const elements = Array.from(document.querySelectorAll('[data-sort]')) as HTMLElement[];

    elements.sort((a, b) => {
      const attribute = `data-${sort.option.replace(' ', '-')}`;
      const aValue = a.getAttribute(attribute) || '';
      const bValue = b.getAttribute(attribute) || '';

      if (sort.option === 'rarity' || sort.option === 'dps') {
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);
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

  return (
    <form className="pt-8 pb-16 w-[calc(100%-0.5rem)] lg:w-full">
      <h3 className="px-8 mb-8 font-bold tracking-widest uppercase">Sorting</h3>
      <div className="flex flex-col gap-2">
        {validSortOptions.map((option) => (
          <div
            key={option}
            className={`${ToggleStyles} ${activeSort.option === option ? 'bg-gray-800' : ''}`}
            onClick={handleSortChange(option)}
          >
            <span className={ToggleText}>{capitalize(option).replace('Dps','DPS')}</span>
            {activeSort.option === option && (
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
