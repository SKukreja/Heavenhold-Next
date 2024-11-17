"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';

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

export default function ItemFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "filter-section-mobile-0": true,
    "filter-section-mobile-1": false,
    "filter-section-mobile-2": false,
  });

  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({});

  // Extract item type values for easy access
  const itemTypeValues = itemTypes.map(option => option.value);

  // Define the item types that should show Element and Rarity filters
  const itemTypesWithElement = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw'];
  const itemTypesWithRarity = ['one-handed-sword', 'two-handed-sword', 'rifle', 'bow', 'basket', 'staff', 'gauntlet', 'claw', 'merch', 'relic', 'accessory', 'shield'];

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    let filters: { [key: string]: boolean } = {};
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
            filter.textContent = "Rarity = " + key.replace('r-', '');
          }
          filter.classList.add('p-4', 'cursor-pointer', 'bg-gray-transparent', 'border-2', 'border-gray-800', 'text-white', 'text-sm', 'font-medium', 'w-auto');          
          activeFilterSection.appendChild(filter);
        }
      });
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
        const newQuery = new URLSearchParams();

        // Add active filters to query
        Object.keys(newFilters).forEach(key => {
          if (newFilters[key]) {
            newQuery.set(key, 'true');
          }
        });

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

      // Update query parameters
      const newQuery = new URLSearchParams();

      // Add active filters to query
      Object.keys(newFilters).forEach(key => {
        if (newFilters[key]) {
          newQuery.set(key, 'true');
        }
      });

      // Update the URL immediately
      router.replace(`?${newQuery.toString()}`);

      // Update the state
      setActiveFilters(newFilters);

      // Apply filters
      applyFilters(newFilters);
    }
  };

  const applyFilters = (filters: { [key: string]: boolean }) => {
    const elements = document.querySelectorAll('[data-filter]');
    const elementFilters = Object.keys(filters).filter(filter => filters[filter] && elementOptions.some(option => option.value === filter));
    const typeFilters = Object.keys(filters).filter(filter => filters[filter] && itemTypes.some(option => option.value === filter));
    const rarityFilters = Object.keys(filters).filter(filter => filters[filter] && rarityOptions.includes(filter));

    if (elementFilters.length === 0 && typeFilters.length === 0 && rarityFilters.length === 0) {
      elements.forEach((el) => {
        el.classList.remove("hidden");
      });
    } else {
      elements.forEach((el) => {
        const elFilters = el.getAttribute('data-filter')?.split(' ') || [];
        
        const matchesElement = elementFilters.length === 0 || elementFilters.some(filter => elFilters.includes("e-" + filter));
        const matchesType = typeFilters.length === 0 || typeFilters.some(filter => elFilters.includes("t-" + filter) || elFilters.includes("w-" + filter));
        const matchesRarity = rarityFilters.length === 0 || rarityFilters.some(filter => elFilters.includes(filter));
        
        if (matchesElement && matchesType && matchesRarity) {
          el.classList.remove("hidden");
        } else {
          el.classList.add("hidden");
        }
      });
    }
  };

  function cleanupFilters(filters: { [key: string]: boolean }, selectedItemType: string | undefined) {
    const newFilters = { ...filters };

    if (!selectedItemType || !itemTypesWithElement.includes(selectedItemType)) {
      // Remove Element filters
      elementOptions.forEach(option => {
        delete newFilters[option.value];
      });
    }

    if (!selectedItemType || !itemTypesWithRarity.includes(selectedItemType)) {
      // Remove Rarity filters
      rarityOptions.forEach(value => {
        delete newFilters[value];
      });
    }

    return newFilters;
  }

  // Determine the selected item type
  const selectedItemType = itemTypeValues.find(type => activeFilters[type]);

  return (
    <form className="pt-8 pb-16 w-[calc(100%-0.5rem)] lg:w-full">
      <h3 className="px-8 font-bold tracking-widest uppercase">Sorting</h3>

      {["Type", "Element", "Rarity"].map((section, index) => {
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
            ${!isActive && !['r-1-star', 'r-2-star', 'r-3-star'].includes(value) ? 'hover:bg-gray-800 hover:text-white' : ''} 
            ${isActive && !['r-1-star', 'r-2-star', 'r-3-star'].includes(value) ? 'text-white' : ''} 
            ${!isActive && !['r-1-star', 'r-2-star', 'r-3-star'].includes(value) ? 'text-gray-400' : ''} 
            ${value === 'r-3-star' ? 'text-yellow-500' : ''} 
            ${value === 'r-2-star' ? 'text-gray-300' : ''} 
            ${value === 'r-1-star' ? 'text-orange-600' : ''}`}
        onClick={handleClick}
    >
      <input id={id} name="filter" value={value} type="checkbox" className={InputStyles} checked={isActive} readOnly />
      <label htmlFor={id} className={LabelStyles}> 
        {icon && <Image src={icon} alt={label} width={16} height={16} className="mr-4 fill-white" />}
        {label}
      </label>
    </div>
  );
}
