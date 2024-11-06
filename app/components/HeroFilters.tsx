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

export default function HeroFilters() {
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
    console.log("Setting active filters from query params:", filters);
    setActiveFilters(filters);
    applyFilters(filters);
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

    const newQuery = new URLSearchParams(searchParams);
    if (isActive) {
      newQuery.set(filter, 'true');
    } else {
      newQuery.delete(filter);
    }
    router.push(`?${newQuery.toString()}`);
    applyFilters(newFilters);
  };

  const applyFilters = (filters: { [key: string]: boolean }) => {
    const elements = document.querySelectorAll('[data-filter]');
    const elementFilters = Object.keys(filters).filter(filter => filters[filter] && elementOptions.some(option => option.value === filter));
    const roleFilters = Object.keys(filters).filter(filter => filters[filter] && roleOptions.some(option => option.value === filter));
    const rarityFilters = Object.keys(filters).filter(filter => filters[filter] && ['r-1-star', 'r-2-star', 'r-3-star'].includes(filter));

    if (elementFilters.length === 0 && roleFilters.length === 0 && rarityFilters.length === 0) {
      elements.forEach((el) => {
        el.classList.remove("hidden", "opacity-0");
      });
    } else {
      elements.forEach((el) => {
        const elFilters = el.getAttribute('data-filter')?.split(' ') || [];
        
        const matchesElement = elementFilters.length === 0 || elementFilters.some(filter => elFilters.includes(filter));
        const matchesRole = roleFilters.length === 0 || roleFilters.some(filter => elFilters.includes(filter));
        const matchesRarity = rarityFilters.length === 0 || rarityFilters.some(filter => elFilters.includes(filter));
        
        if (matchesElement && matchesRole && matchesRarity) {
          el.classList.remove("hidden", "opacity-0");
        } else {
          el.classList.add("hidden");
          setTimeout(() => el.classList.add("opacity-0"), 50); // Add a slight delay to trigger the transition
        }
      });
    }
  };

  return (
    <form className="pt-8 pb-8 w-full">
      <h3 className="px-8 font-bold tracking-widest uppercase">Filters</h3>

      {["Element", "Role", "Rarity"].map((section, index) => {
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
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionId] ? 'max-h-96' : 'max-h-0'}`}
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
            ${!isActive && value !== 'r-1-star' && value !== 'r-2-star' && value !== 'r-3-star' ? 'hover:bg-gray-800 hover:text-white' : ''} 
            ${isActive && value !== 'r-1-star' && value !== 'r-2-star' && value !== 'r-3-star' ? 'text-white' : ''} 
            ${!isActive && value !== 'r-1-star' && value !== 'r-2-star' && value !== 'r-3-star' ? 'text-gray-400' : ''} 
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
