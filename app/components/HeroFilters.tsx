"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Hero } from "#/graphql/generated/types";
import { useHeroes } from "./GetHeroesProvider";

const ToggleStyles = "flex items-center justify-between w-full px-8 py-4 text-white bg-gray-800";
const ToggleText = "font-medium text-sm";
const InputStyles = "hidden"; // Hide the checkbox input
const LabelStyles = "flex items-center min-w-0 text-sm px-4 font-medium cursor-pointer";
const SectionStyles = "my-8";
const ButtonWrapperStyles = "flow-root w-full";
const ButtonIconContainerStyles = "flex items-center";
const ButtonIconStyles = "w-5 h-5";

const elementOptions = [
  { id: 'filter-mobile-color-basic', value: 'basic', label: 'Basic', icon: '/icons/basic.webp' },
  { id: 'filter-mobile-color-dark', value: 'dark', label: 'Dark', icon: '/icons/dark.webp' },
  { id: 'filter-mobile-color-earth', value: 'earth', label: 'Earth', icon: '/icons/earth.webp' },
  { id: 'filter-mobile-color-fire', value: 'fire', label: 'Fire', icon: '/icons/fire.webp' },
  { id: 'filter-mobile-color-light', value: 'light', label: 'Light', icon: '/icons/light.webp' },
  { id: 'filter-mobile-color-water', value: 'water', label: 'Water', icon: '/icons/water.webp' },
];

const roleOptions = [
  { id: 'filter-mobile-category-tank', value: 'tanker', label: 'Tank', icon: '/icons/tanker.webp' },
  { id: 'filter-mobile-category-warrior', value: 'warrior', label: 'Warrior', icon: '/icons/warrior.webp' },
  { id: 'filter-mobile-category-ranged', value: 'ranged', label: 'Ranged', icon: '/icons/ranged.webp' },
  { id: 'filter-mobile-category-support', value: 'support', label: 'Support', icon: '/icons/support.webp' },
];

const rarityOptions = ['r-1-star', 'r-2-star', 'r-3-star'];


export default function HeroFilters() {
  const { data } = useHeroes();
  const heroes = [...(data?.heroes?.nodes ?? [])] as Hero[];
  const pathname = usePathname();

  const partyBuffsMap: { [key: string]: string } = useMemo(() => {
    return heroes.reduce((acc, hero) => {
      const partyBuffs = hero.heroInformation?.abilityFields?.partyBuff ?? [];
      partyBuffs.forEach((passive) => {
        if (!passive?.affectsParty) return;
        const originalStat = passive?.stat;
        const transformedStat = originalStat?.toString()
          .replaceAll(/ /g, "-")
          .replaceAll('[]','')
          .replaceAll(',','')
          .replaceAll('--','-')      
          .toLowerCase()
          .replaceAll('x%','x')
          .replaceAll('%', '')
          .replace('when-a-shield-is-present-damage-dealt-increases-by-x-while-damage-taken-decreases-by-x','shield-damage')
          .replace('decrease-damage-taken-by-of-increased-skill-damage','skill-damage-decreased-damage-taken') ?? '';
        if (!acc[transformedStat]) {
          acc[transformedStat] = originalStat?.toString().replaceAll('[]', 'x').replaceAll('x%','x').replaceAll('%','x') ?? '';
        }
      });
      return acc;
    }, {} as { [key: string]: string });
  }, [heroes]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "filter-section-mobile-0": false,
    "filter-section-mobile-1": false,
    "filter-section-mobile-2": false,
  });

  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const filters: { [key: string]: boolean } = {};
    Object.keys(params).forEach((key) => {
      if (params[key] === 'true') {
        filters[key] = true;
      }
    });
  
    const activeFilterSection = document.querySelector(`#active-filters`);
    if (activeFilterSection) {
      activeFilterSection.innerHTML = '';
      // Create and append filter divs
      Object.keys(filters).forEach((key) => {
        console.log(rarityOptions.includes(key))
        if (filters[key]) {
          const filter = document.createElement('div');
          if (roleOptions.some(option => option.value === key)) {
            filter.textContent = "Role = " + roleOptions.find(option => option.value === key)?.label;
          } else if (elementOptions.some(option => option.value === key)) {
            filter.textContent = "Element = " + elementOptions.find(option => option.value === key)?.label;
          } else if (rarityOptions.includes(key)) {
            filter.textContent = "Rarity = " + key.replace('r-', '');
          } else if (partyBuffsMap[key]) {
            filter.textContent = "Party Buff = " + partyBuffsMap[key];
          }
          filter.classList.add('filter-indicator', 'p-2','lg:p-4', 'cursor-pointer', 'select-none', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-xs','lg:text-sm', 'font-medium', 'w-auto');
          activeFilterSection.appendChild(filter);
        }
      });
      
      // Toggle 'mb-8' class if activeFilterSection has children
      if (activeFilterSection.children.length > 0) {
        activeFilterSection.classList.add('mb-8');
      } else {
        activeFilterSection.classList.remove('mb-8');
      }

      // Remove existing event listener to prevent duplicates
      const existingClickHandler = (activeFilterSection as any)._clickHandler;
      if (existingClickHandler) {
        activeFilterSection.removeEventListener('click', existingClickHandler);
      }
  
      // Add event listener once
      const clickHandler = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('cursor-pointer')) {
          const filterText = target.textContent;
          const key = Object.keys(filters).find(k => {
            if (roleOptions.some(option => option.value === k)) {
              return filterText === "Role = " + roleOptions.find(option => option.value === k)?.label;
            } else if (elementOptions.some(option => option.value === k)) {
              return filterText === "Element = " + elementOptions.find(option => option.value === k)?.label;
            } else if (rarityOptions.includes(k)) {
              return filterText === "Rarity = " + k.replace('r-', '');
            } else if (partyBuffsMap[k]) {
              return filterText === "Party Buff = " + partyBuffsMap[k];
            }
            return false;
          });
          if (key) {
            handleToggleChange(key)();
          }
        }
      };
  
      activeFilterSection.addEventListener('click', clickHandler);
  
      // Store the handler to remove it later if needed
      (activeFilterSection as any)._clickHandler = clickHandler;
  
      // Add reset button
      const resetButton = document.createElement('div');
      resetButton.textContent = "Reset";
      resetButton.classList.add('p-2','lg:p-4', 'cursor-pointer', Object.keys(filters).length > 0 ? 'flex' : 'hidden', 'select-none', 'bg-red-900/50', 'border-2', 'border-gray-800', 'text-white', 'text-xs','lg:text-sm', 'font-medium', 'w-auto');
      resetButton.addEventListener('click', () => {
        const newQuery = new URLSearchParams();
        // Navigate to a new URL
        router.replace(pathname.toString().includes('tier-list') ? `?${newQuery.toString()}` : '/heroes?sort=name&order=asc&r-3-star=true&r-2-star=true');
      });
      activeFilterSection.appendChild(resetButton);
    }
  
    // Compare with current activeFilters
    const filtersChanged = JSON.stringify(filters) !== JSON.stringify(activeFilters);
  
    if (filtersChanged) {
      setActiveFilters(filters);
      applyFilters(filters);
    }
  }, [searchParams]);
  

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleToggleChange = (filter: string) => () => {
    const isActive = !activeFilters[filter];
    const newFilters = {
      ...activeFilters,
      [filter]: isActive,
    };
    setActiveFilters(newFilters);
  
    // Initialize newQuery with existing searchParams
    const newQuery = new URLSearchParams(searchParams.toString());
  
    // Update the query parameters with the new filter state
    if (isActive) {
      newQuery.set(filter, 'true');
    } else {
      newQuery.delete(filter);
    }
  
    // Update the URL without adding to history
    router.replace(`?${newQuery.toString()}`);
  
    applyFilters(newFilters);
  };
  

  const applyFilters = (filters: { [key: string]: boolean }) => {
    const elements = document.querySelectorAll('[data-filter]');
    const elementFilters = Object.keys(filters).filter(filter => filters[filter] && elementOptions.some(option => option.value === filter));
    const roleFilters = Object.keys(filters).filter(filter => filters[filter] && roleOptions.some(option => option.value === filter));
    const rarityFilters = Object.keys(filters).filter(filter => filters[filter] && rarityOptions.includes(filter));
    const partyBuffFilters = Object.keys(filters).filter(filter => filters[filter] && partyBuffsMap[filter]);

    if (elementFilters.length === 0 && roleFilters.length === 0 && rarityFilters.length === 0 && partyBuffFilters.length === 0) {
      elements.forEach((el) => {
        el.classList.remove("hidden");
      });
    } else {
      elements.forEach((el) => {
        const elFilters = el.getAttribute('data-filter')?.split(' ') || [];
        
        const matchesElement = elementFilters.length === 0 || elementFilters.some(filter => elFilters.includes(filter));
        const matchesRole = roleFilters.length === 0 || roleFilters.some(filter => elFilters.includes(filter));
        const matchesRarity = rarityFilters.length === 0 || rarityFilters.some(filter => elFilters.includes(filter));
        const matchesPartyBuff = partyBuffFilters.length === 0 || partyBuffFilters.some(filter => elFilters.includes(filter));
        
        if (matchesElement && matchesRole && matchesRarity && matchesPartyBuff) {
          el.classList.remove("hidden");
        } else {          
          el.classList.add("hidden");
        }
      });
    }
  };

  return (
    <form className="pt-8 pb-16 w-[calc(100%-0.5rem)] lg:w-full">
      <h3 className="px-8 font-bold tracking-widest uppercase">Filters</h3>

      {["Element", "Role", "Rarity", "Party Buffs"].map((section, index) => {
        const sectionId = `filter-section-mobile-${index}`;
        return (
          <div key={sectionId} className={SectionStyles}>
            <h3 className={ButtonWrapperStyles}>
              <button
                type="button"
                className={ToggleStyles}
                aria-controls={sectionId}
                aria-expanded={openSections[sectionId]}
                onClick={() => toggleSection(sectionId)}
              >
                <span className={ToggleText}>{section}</span>
                <span className={ButtonIconContainerStyles}>
                  {openSections[sectionId] ? (
                    <svg className={ButtonIconStyles} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className={ButtonIconStyles} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  )}
                </span>
              </button>
            </h3>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionId] ? 'h-auto' : 'max-h-0'}`}
              id={sectionId}
            >
              <div>
                {section === "Element" && elementOptions.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleToggleChange(option.value)} isActive={!!activeFilters[option.value]} />
                ))}
                {section === "Role" && roleOptions.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleToggleChange(option.value)} isActive={!!activeFilters[option.value]} />
                ))}
                {section === "Rarity" && (
                  <>
                    <FilterToggle id="filter-mobile-size-0" value="r-1-star" label="★" onChange={handleToggleChange('r-1-star')} isActive={!!activeFilters['r-1-star']} />
                    <FilterToggle id="filter-mobile-size-1" value="r-2-star" label="★★" onChange={handleToggleChange('r-2-star')} isActive={!!activeFilters['r-2-star']} />
                    <FilterToggle id="filter-mobile-size-2" value="r-3-star" label="★★★" onChange={handleToggleChange('r-3-star')} isActive={!!activeFilters['r-3-star']} />
                  </>
                )}
                {section === "Party Buffs" && Object.entries(partyBuffsMap).map(([key, value]) => (
                  <FilterToggle
                    key={key}
                    id={key}
                    value={key}
                    label={value}
                    onChange={handleToggleChange(key)}
                    isActive={!!activeFilters[key]}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
}

function FilterToggle({ id, value, label, icon, onChange, isActive }: { id: string; value: string; label: string; icon?: string; onChange: () => void; isActive: boolean }) {
  const handleClick = () => {
    onChange();
  };

  return (
    <div
        className={`flex items-center p-4 select-none cursor-pointer 
            ${isActive ? 'bg-gray-800' : 'bg-gray-900'} 
            ${!isActive && !rarityOptions.includes(value) ? 'hover:bg-gray-800 hover:text-white' : ''} 
            ${isActive && !rarityOptions.includes(value) ? 'text-white' : ''} 
            ${!isActive && !rarityOptions.includes(value) ? 'text-gray-400' : ''} 
            ${value === 'r-3-star' ? 'text-yellow-500' : ''} 
            ${value === 'r-2-star' ? 'text-gray-300' : ''} 
            ${value === 'r-1-star' ? 'text-orange-600' : ''}`}
        onClick={handleClick}
    >
      <input id={id} name="filter" value={value} type="checkbox" className={InputStyles} checked={isActive} readOnly />
      <label htmlFor={id} className={LabelStyles}>
        {icon && <Image src={icon} alt={label} width={20} height={20} className="mr-4" />}
        {label}
      </label>
    </div>
  );
}
