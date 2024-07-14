import React, { useState } from "react";
import Image from "next/image";

const ToggleStyles = "flex items-center justify-between w-full px-8 py-4 text-white bg-gray-800";
const ToggleText = "font-medium";
const InputStyles = "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500";
const LabelStyles = "flex min-w-0 ml-4 text-sm font-medium text-gray-400 hover:text-gray-300";
const SectionStyles = "my-6";
const ButtonWrapperStyles = "flow-root w-full";
const ButtonIconContainerStyles = "flex items-center ml-6";
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
  { id: 'filter-mobile-category-tank', value: 'tank', label: 'Tank', icon: '/icons/tank.webp' },
  { id: 'filter-mobile-category-warrior', value: 'warrior', label: 'Warrior', icon: '/icons/warrior.webp' },
  { id: 'filter-mobile-category-ranged', value: 'ranged', label: 'Ranged', icon: '/icons/ranged.webp' },
  { id: 'filter-mobile-category-support', value: 'support', label: 'Support', icon: '/icons/support.webp' },
];

interface HeroFiltersProps {
  onFilterChange: (filter: string, value: boolean) => void;
  onSortChange: (sort: string) => void;
}

export default function HeroFilters({ onFilterChange, onSortChange }: HeroFiltersProps) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "filter-section-mobile-0": false,
    "filter-section-mobile-1": false,
    "filter-section-mobile-2": false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (filter: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(filter, event.target.checked);
  };

  return (
    <form className="pt-8 pb-8">
      <h3 className="px-8">Filters</h3>

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
              className={`px-8 pt-4 transition-max-height duration-500 ease-in-out overflow-hidden ${openSections[sectionId] ? 'max-h-96' : 'max-h-0'}`}
              id={sectionId}
            >
              <div className="space-y-6">
                {section === "Element" && elementOptions.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleCheckboxChange(option.value)} />
                ))}
                {section === "Role" && roleOptions.map((option) => (
                  <FilterToggle key={option.id} {...option} onChange={handleCheckboxChange(option.value)} />
                ))}
                {section === "Rarity" && (
                  <>
                    <FilterToggle id="filter-mobile-size-0" value="2l" label="2L" onChange={handleCheckboxChange('2l')} />
                    <FilterToggle id="filter-mobile-size-1" value="6l" label="6L" onChange={handleCheckboxChange('6l')} />
                    <FilterToggle id="filter-mobile-size-2" value="12l" label="12L" onChange={handleCheckboxChange('12l')} />
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

function FilterToggle({ id, value, label, icon, onChange, checked = false }: { id: string; value: string; label: string; icon?: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; checked?: boolean }) {
  return (
    <div className="flex items-center cursor-pointer">
      <input id={id} name="filter" value={value} type="checkbox" checked={checked} onChange={onChange} className={InputStyles} />
      <label htmlFor={id} className={LabelStyles}>
        {icon && <Image src={icon} alt={label} width={20} height={20} className="mr-2" />}
        {label}
      </label>
    </div>
  );
}
