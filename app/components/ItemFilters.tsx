"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';
import { transformStatKey } from "#/ui/helpers";

const ToggleStyles = "flex items-center justify-between w-full px-8 py-4 text-white bg-gray-800";
const ToggleText = "font-medium text-sm";
const InputStyles = "hidden"; // Hide the checkbox input
const LabelStyles = "flex items-center min-w-0 text-sm px-4 font-medium cursor-pointer";
const SectionStyles = "my-8";
const ButtonWrapperStyles = "flow-root w-full";
const ButtonIconContainerStyles = "flex items-center";
const ButtonIconStyles = "w-5 h-5";

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

const elementOptions = [
  { id: 'filter-mobile-color-basic', value: 'basic', label: 'Basic', icon: '/icons/basic.webp' },
  { id: 'filter-mobile-color-dark', value: 'dark', label: 'Dark', icon: '/icons/dark.webp' },
  { id: 'filter-mobile-color-earth', value: 'earth', label: 'Earth', icon: '/icons/earth.webp' },
  { id: 'filter-mobile-color-fire', value: 'fire', label: 'Fire', icon: '/icons/fire.webp' },
  { id: 'filter-mobile-color-light', value: 'light', label: 'Light', icon: '/icons/light.webp' },
  { id: 'filter-mobile-color-water', value: 'water', label: 'Water', icon: '/icons/water.webp' },
];

const rarityOptions = ['r-epic', 'r-legend', 'r-unique', 'r-rare', 'r-normal'];

// Define rarity label map
const rarityLabelMap: { [key: string]: string } = {
  'r-epic': 'Epic',
  'r-legend': 'Legend',
  'r-unique': 'Unique',
  'r-rare': 'Rare',
  'r-normal': 'Normal',
};

const statOptions = [
  'Fire Atk',
  'Earth Atk',
  'Water Atk',
  'Dark Atk',
  'Light Atk',
  'Basic Atk',
  'Fire type Atk (%)',
  'Earth type Atk (%)',
  'Water type Atk (%)',
  'Dark type Atk (%)',
  'Light type Atk (%)',
  'Basic type Atk (%)',
  'Atk (%)',
  'Crit Hit Chance',
  'Damage Reduction',
  'Def (Flat)',
  'Def (%)',
  'Heal (Flat)',
  'Heal (%)',
  'HP (Flat)',
  'HP (%)',
  'Atk increase on enemy kill',
  'HP recovery on enemy kill',
  'Seconds of weapon skill Regen time on enemy kill',
  'Shield increase on battle start',
  'Shield increase on enemy kill',
  'Melee Damage',
  'Range Damage',
  'Skill Damage',
  'Weapon Skill Regen Speed',
  'Atk, Heal [] for injured Chain Skills',
  'Atk Decrease % negated',
  'Def Decrease % negated',
  'Doom Damage % negated',
  'Injury Damage % negated',
  'On hit extra damage',
  'On hit heal allies',
  'Increase damage to enemies with HP',
  'Decrease damage taken by % of increased Skill Damage',
  'Increase damage to tanker Hero',
  'Crit Hit Multiplier',
  'When a shield is present, damage dealt increases by x% while damage taken decreases by x%',
];

export default function ItemFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "filter-section-mobile-0": true,
    "filter-section-mobile-1": false,
    "filter-section-mobile-2": false,
    "filter-section-mobile-3": false,
  });  
  // Generate URL-safe keys for stat options
  const itemStatsMap: { [key: string]: string } = useMemo(() => {
    return statOptions.reduce((acc, stat) => {
      const key = transformStatKey(stat);
      acc[key] = stat;
      return acc;
    }, {} as { [key: string]: string });
  }, []);

  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({});

  // Extract item type values for easy access
  const itemTypeValues = itemTypes.map(option => option.value);

  // Define the item types that should show Element and Rarity filters
  const itemTypesWithElement = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw'];
  const itemTypesWithRarity = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw', 'merch', 'relic', 'accessory', 'shield'];
  const itemTypesWithStats = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw', 'merch', 'relic', 'accessory', 'shield'];

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const filters: { [key: string]: boolean } = {};
    Object.keys(params).forEach((key) => {
      if (params[key] === 'true') {
        filters[key] = true;
      }
    });
  
    // Determine selectedItemType
    let selectedItemType = itemTypeValues.find(type => filters[type]);
    // If no item type is selected, default to 'one-handed-sword'
    if (!selectedItemType) {
      filters['one-handed-sword'] = true;
      selectedItemType = 'one-handed-sword';
    }
  
    const activeFilterSection = document.querySelector(`#active-filters`);
    if (activeFilterSection) {
      activeFilterSection.innerHTML = '';
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          const filter = document.createElement('div');
          if(itemTypeValues.includes(key)) {
            filter.textContent = "Item Type = " + itemTypes.find(option => option.value === key)?.label;
          }
          else if(elementOptions.some(option => option.value === key)) {
            filter.textContent = "Element = " + elementOptions.find(option => option.value === key)?.label;
          }
          else if(rarityOptions.includes(key)) {
            filter.textContent = "Rarity = " + rarityLabelMap[key];
          }
          else if (itemStatsMap[key]) {
            filter.textContent = "Stats = " + itemStatsMap[key];
          }
          filter.classList.add('p-4', 'cursor-pointer', 'select-none', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-sm', 'font-medium', 'w-auto');       
          activeFilterSection.appendChild(filter);
        }
      });
  
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
            console.log(k)
            if (itemTypeValues.includes(k)) {
              return filterText === "Item Type = " + itemTypes.find(option => option.value === k)?.label;
            } 
            else if (elementOptions.some(option => option.value === k)) {
              return filterText === "Element = " + elementOptions.find(option => option.value === k)?.label;
            } 
            else if (rarityOptions.includes(k)) {
              const rarityLabel = rarityLabelMap[k].charAt(0).toUpperCase() + rarityLabelMap[k].slice(1);
              return filterText === "Rarity = " + rarityLabel;
            }
            else if (itemStatsMap[k]) {
              return filterText === "Stats = " + itemStatsMap[k];
            }
            return false;
          });
          if (key) {
            handleToggleChange(key)();
          }
        }
      };
  
      activeFilterSection.addEventListener('click', clickHandler);
      (activeFilterSection as any)._clickHandler = clickHandler;

      // Add reset button
      const resetButton = document.createElement('div');
      resetButton.textContent = "Reset";
      resetButton.classList.add('p-4', 'cursor-pointer', Object.keys(filters).length > 0 ? 'flex' : 'hidden', 'select-none', 'bg-red-900/50', 'border-2', 'border-gray-800', 'text-white', 'text-sm', 'font-medium', 'w-auto');
      resetButton.addEventListener('click', () => {
        // Navigate to a new URL
        router.replace('/items?one-handed-sword=true');
      });
      activeFilterSection.appendChild(resetButton);
    }
    
  
    // Clean up filters
    const cleanedFilters = cleanupFilters(filters, selectedItemType);
  
    // Compare cleanedFilters with original filters
    const filtersChanged = JSON.stringify(filters) !== JSON.stringify(cleanedFilters);
  
    // Update activeFilters
    setActiveFilters(cleanedFilters);
  
    // Apply filters
    applyFilters(cleanedFilters);
  
    // If filters have changed, update the URL
    if (filtersChanged) {
      const newQuery = new URLSearchParams();
      Object.keys(cleanedFilters).forEach(key => {
        if (cleanedFilters[key]) {
          newQuery.set(key, 'true');
        }
      });
      router.replace(`?${newQuery.toString()}`);
    }
  }, [searchParams]);  

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleToggleChange = (filter: string) => () => {
    if (itemTypeValues.includes(filter)) {
      // It's an item type filter
      if (activeFilters[filter]) {
        // If the filter is already active, do nothing
        return;
      } else {
        // Deactivate all other item type filters
        let newFilters = { ...activeFilters };
        itemTypeValues.forEach(typeFilter => {
          newFilters[typeFilter] = false;
        });
        newFilters[filter] = true;

        // Determine new selectedItemType
        const newSelectedItemType = filter;

        // Clean up filters based on new selectedItemType
        newFilters = cleanupFilters(newFilters, newSelectedItemType);

        // Update query parameters
        const newQuery = new URLSearchParams(searchParams.toString());

        // Update the URL immediately
        router.replace(`?${newQuery.toString()}`);

        // Update the state
        setActiveFilters(newFilters);

        // Apply filters
        applyFilters(newFilters);
      }
    } else {
      // For other filters, toggle as before
      const isActive = !activeFilters[filter];
      let newFilters = { ...activeFilters };
      newFilters[filter] = isActive;

      // Determine selectedItemType
      const selectedItemType = itemTypeValues.find(type => newFilters[type]) || 'one-handed-sword';
      
      // Clean up filters based on selectedItemType
      newFilters = cleanupFilters(newFilters, selectedItemType);

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

      setActiveFilters(newFilters);
    
      applyFilters(newFilters);
    }
  };

  const applyFilters = (filters: { [key: string]: boolean }) => {
    const elements = document.querySelectorAll('[data-filter]');
    const elementFilters = Object.keys(filters).filter(filter => filters[filter] && elementOptions.some(option => option.value === filter));
    const typeFilters = Object.keys(filters).filter(filter => filters[filter] && itemTypes.some(option => option.value === filter));
    const rarityFilters = Object.keys(filters).filter(filter => filters[filter] && rarityOptions.includes(filter));
    const statFilters = Object.keys(filters).filter(filter => filters[filter] && itemStatsMap[filter]);
    
    elements.forEach((el) => {
      const elFilters = el.getAttribute('data-filter')?.split(' ') || [];

      const matchesType = typeFilters.some(filter => elFilters.includes("t-" + filter) || elFilters.includes("w-" + filter));

      const otherFiltersSelected = elementFilters.length > 0 || rarityFilters.length > 0 || statFilters.length > 0;

      const matchesElement = elementFilters.some(filter => elFilters.includes("e-" + filter));
      const matchesRarity = rarityFilters.some(filter => elFilters.includes(filter));
      const matchesStat = statFilters.some(filter => elFilters.includes(filter));

      const matchesOtherFilters = matchesElement || matchesRarity || matchesStat;

      if (matchesType && (!otherFiltersSelected || matchesOtherFilters)) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  };  

  function cleanupFilters(filters: { [key: string]: boolean }, selectedItemType: string | undefined) {
    const newFilters = { ...filters };

    if (selectedItemType && !itemTypesWithElement.includes(selectedItemType)) {
      // Remove Element filters
      elementOptions.forEach(option => {
        delete newFilters[option.value];
      });
    }
  
    if (selectedItemType && !itemTypesWithRarity.includes(selectedItemType)) {
      // Remove Rarity filters
      rarityOptions.forEach(value => {
        delete newFilters[value];
      });
    }
  
    if (selectedItemType && !itemTypesWithStats.includes(selectedItemType)) {
      // Remove Stat filters
      Object.keys(itemStatsMap).forEach(statKey => {
        delete newFilters[statKey];
      });      
    }
  
    return newFilters;
  }
  

  // Determine the selected item type
  const selectedItemType = itemTypeValues.find(type => activeFilters[type]);

  return (
    <form className="pt-8 pb-16 w-[calc(100%-0.5rem)] lg:w-full">
      <h3 className="px-8 font-bold tracking-widest uppercase">Filters</h3>

      {["Type", "Element", "Rarity", "Stats"].map((section, index) => {
        const sectionId = `filter-section-mobile-${index}`;

        // Conditionally render Element and Rarity sections
        if (section === "Element") {
          if (!selectedItemType || !itemTypesWithElement.includes(selectedItemType)) {
            return null; // Skip rendering this section
          }
        } else if (section === "Rarity") {
          if (!selectedItemType || !itemTypesWithRarity.includes(selectedItemType)) {
            return null; // Skip rendering this section
          }
        } else if (section === "Stats") {
          if (!selectedItemType || !itemTypesWithStats.includes(selectedItemType)) {
            return null; // Skip rendering this section
          }
        }

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
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionId] ? '' : 'max-h-0'}`}
              id={sectionId}
            >
              <div>
                {section === "Type" && itemTypes.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleToggleChange(option.value)} isActive={!!activeFilters[option.value]} />
                ))}
                {section === "Element" && elementOptions.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleToggleChange(option.value)} isActive={!!activeFilters[option.value]} />
                ))}
                {section === "Rarity" && (
                  <>
                    <FilterToggle id="filter-mobile-size-0" value="r-epic" label="Epic" onChange={handleToggleChange('r-epic')} isActive={!!activeFilters['r-epic']} />
                    <FilterToggle id="filter-mobile-size-1" value="r-legend" label="Legend" onChange={handleToggleChange('r-legend')} isActive={!!activeFilters['r-legend']} />
                    <FilterToggle id="filter-mobile-size-2" value="r-unique" label="Unique" onChange={handleToggleChange('r-unique')} isActive={!!activeFilters['r-unique']} />
                    <FilterToggle id="filter-mobile-size-3" value="r-rare" label="Rare" onChange={handleToggleChange('r-rare')} isActive={!!activeFilters['r-rare']} />
                    <FilterToggle id="filter-mobile-size-4" value="r-normal" label="Normal" onChange={handleToggleChange('r-normal')} isActive={!!activeFilters['r-normal']} />
                  </>
                )}
                {section === "Stats" && Object.entries(itemStatsMap).map(([key, value]) => (
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
      className={`flex items-center p-4 cursor-pointer 
          ${isActive ? 'bg-gray-800' : 'bg-gray-900'} 
          ${!isActive && !rarityOptions.includes(value) ? 'hover:bg-gray-800 hover:text-white' : ''} 
          ${isActive && !rarityOptions.includes(value) ? 'text-white' : ''} 
          ${!isActive && !rarityOptions.includes(value) ? 'text-gray-400' : ''} 
          ${value === 'r-epic' ? 'text-green-500' : ''} 
          ${value === 'r-legend' ? 'text-yellow-500' : ''} 
          ${value === 'r-unique' ? 'text-orange-700'  : ''} 
          ${value === 'r-rare' ? 'text-blue-500' : ''} 
          ${value === 'r-normal' ? 'text-gray-500' : ''}`}
      onClick={onChange}
    >
      <input id={id} name="filter" value={value} type="checkbox" className={InputStyles} checked={isActive} readOnly />
      <label htmlFor={id} className={`${LabelStyles} normal-case`}> 
        {icon && <Image src={icon} alt={label} width={16} height={16} className="mr-4 fill-white" />}
        {label}
      </label>
    </div>
  );
}
