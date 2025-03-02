  // Element Icons
  export const basic = '/icons/basic.webp';
  export const dark = '/icons/dark.webp';
  export const earth = '/icons/earth.webp';
  export const fire = '/icons/fire.webp';
  export const light = '/icons/light.webp';
  export const water = '/icons/water.webp';
  export const ranged = '/icons/ranged.webp';
  export const support = '/icons/support.webp';
  export const tank = '/icons/tank.webp';
  export const warrior = '/icons/warrior.webp';

  export const heroesIcon = '/icons/heroes.webp';
  export const itemsIcon = '/icons/items.webp';
  export const teamsIcon = '/icons/teams.webp';
  
  const menuClasses = 'w-6 h-6 fill-gray-300 hover:fill-white';

  export const close = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"/></svg>
  )
  export const sort = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 32l32 0 128 0 32 0 0 32 0 8 0 14.5-10.9 9.6L428 160l52 0 32 0 0 64-32 0-128 0-32 0 0-32 0-8 0-14.5 10.9-9.6L404 96l-52 0-32 0 0-64zm-160 .6l23.6 25.7 88 96L293.2 178 246 221.2l-21.6-23.6L192 162.3 192 448l0 32-64 0 0-32 0-285.7L95.6 197.6 74 221.2 26.8 178l21.6-23.6 88-96L160 32.6zM395.5 256l41.1 0 8.6 18.7 88 192 6.1 13.3-70.4 0-14.7-32-76.3 0-14.7 32-70.4 0 6.1-13.3 88-192 8.6-18.7zM416 364.8L399.9 400l32.3 0L416 364.8z"/></svg>
  )
  export const sortUp = () => (
    <svg className="-mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 176L160 32 320 176v48H0V176z"/></svg>
  );
  export const sortDown = () => (
    <svg className="-mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 336L160 480 320 336V288H0v48z"/></svg>
  );
  export const settings = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M200 0L312 0l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512l-112 0-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zm56 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
  )
  export const search = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
  )

  export const home = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
    </svg>
  );
  export const item = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M400 16L166.6 249.4l96 96L496 112 512 0 400 16zM0 416l96 96 32-32-16-32 56-56 88 56 32-32L96 224 64 256l56 88L64 400 32 384 0 416z"/>
    </svg>
  );
  export const hero = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 13.4-22.1 25.6-57.7 34.3c1.1 7.1 1.7 14.3 1.7 21.7c0 13.9-2.1 27.4-6 40h10.9H416l-17.5 48-5.8 16-17.5 48H416l2.9 15.9L439.3 464l8.7 48H399.2 280 168 48.8 0l8.7-48L29.1 351.9 32 336H72.7L55.3 288l-5.8-16L32 224H83.1 94c-3.9-12.6-6-26.1-6-40c0-7.4 .6-14.6 1.7-21.7C54.1 153.6 32 141.4 32 128c0-17 35.5-32 89.1-40.5zM268 464H390.5l-14.5-80h-.7H306.7l23.4-64.4L347.5 272H327.7c-16.9 19.9-39.5 34.9-65.2 42.5L240 352l28 112zM185.5 314.5c-25.7-7.6-48.3-22.6-65.2-42.5H100.5l17.3 47.6L141.3 384H72.7h-.7L57.5 464H180l28-112-22.5-37.5zM224 272c34.2 0 63.8-19.5 78.4-48H240l-8-32H216l-8 32H145.6c14.6 28.5 44.2 48 78.4 48z"/>
    </svg>
  );
  export const book = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32 32V448H416V384h32V0H416 384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-256H352v32H128V128zm224 64v32H128V192H352z"/>
    </svg>
  );
  export const rank = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M351.8 62.3L320 0 288.2 62.3l-69 11 49.4 49.5L257.7 192 320 160.3 382.3 192l-10.9-69.1 49.4-49.5-69-11zM416 256H224V512H416V256zM192 320H0V512H192V320zm256 64V512H640V384H448z"/>
    </svg>
  );
  export const login = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 96L352 256 192 416l-32 0 0-96L0 320 0 192l160 0 0-96 32 0zM352 416l96 0 0-320-96 0-32 0 0-64 32 0 128 0 32 0 0 32 0 384 0 32-32 0-128 0-32 0 0-64 32 0z"/></svg>
  );
  export const logout = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M22.6 233.4L0 256l22.6 22.6 128 128 22.6 22.6L218.5 384l-22.6-22.6L122.5 288 320 288l32 0 0-64-32 0-197.5 0 73.4-73.4L218.5 128 173.3 82.7l-22.6 22.6-128 128zM352 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0 0 64 32 0 96 0 0 320-96 0z"/></svg>
  );
  export const discord = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
  );
  export const github = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
  );
  export const contribute = () => (
    <svg className={menuClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M199.2 135.1L224 159.9l96 96 96-96 24.8-24.8c14.9-14.9 23.2-35 23.2-56V75.6C464 33.8 430.1-.1 388.4-.1c-23 0-44.7 10.4-59.1 28.4L320 39.9l-9.3-11.6C296.4 10.4 274.6-.1 251.6-.1C209.9-.1 176 33.8 176 75.6v3.6c0 21 8.3 41.1 23.2 56zM144 64H120 24 0V88 392v9.9l7 7 84.8 84.8 17 17 33.9-33.9-17-17L48 382.1V112H96V312v9.9l7 7 7 7 17 17 40 40 16 16 1 1 16 16L233.9 392l-16-16-1-1-16-16-23-23L208 305.9l88 88V488v24h24 24V488 393.9l88-88L462.1 336l-23 23 0 0-16 16-17 17L440 425.9l17-17 16-16 0 0 40-40 17-17 7-7 7-7V312 112h48V382.1l-77.8 77.8-17 17 33.9 33.9 17-17L633 409l7-7V392 88 64H616 520 496V88 302.1l-47-47-17-17-17 17-95 95-95-95-17-17-17 17-47 47V88 64z"/></svg>
  );

  export const arrowUpRight = (color: string) => (        
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill={color}><path d="M320 96l32 0 0 32 0 224 0 32-64 0 0-32 0-146.7L86.6 406.6 64 429.3 18.7 384l22.6-22.6L242.7 160 96 160l-32 0 0-64 32 0 224 0z"/></svg>
  );

  export const arrowDownLeft = (color: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 384 512"><path d="M64 416l-32 0 0-32 0-224 0-32 64 0 0 32 0 146.7L297.4 105.4 320 82.7 365.3 128l-22.6 22.6L141.3 352 288 352l32 0 0 64-32 0L64 416z"/></svg>
  );

  export const crown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L192 256 72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L96 480l384 0 55.3-304c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24L384 256 309 106z"/></svg>
  );

  export const filter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 416V320L0 96V32H512V96L320 320V512L192 416z"/></svg>
  )
 
  export const closeFilter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L407 293.2 576 96l0-64L70.5 32 48.4 14.8zM384 398.5L256 297.7 256 416l128 96 0-113.5z"/></svg>
  )

  export const equipmentIcons = {
    'One-Handed Sword': '/icons/equipment/1hsword.webp',
    'Two-Handed Sword': '/icons/equipment/2hsword.webp',
    'Basket': '/icons/equipment/basket.webp',
    'Bow': '/icons/equipment/bow.webp',
    'Claw': '/icons/equipment/claw.webp',
    'Gauntlet': '/icons/equipment/gauntlet.webp',
    'Rifle': '/icons/equipment/rifle.webp',
    'Shield': '/icons/equipment/shield.webp',
    'Staff': '/icons/equipment/staff.webp',
    'Merch': '/icons/equipment/merch.webp',
    'Relic': '/icons/equipment/relic.webp',
    'Cards': '/icons/equipment/card.webp',
    'Accessory': '/icons/equipment/accessory.webp',
}

export const normal = '/icons/normal.webp';
export const special = '/icons/special.webp';
export const chain = '/icons/chain.webp';
export const chevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M2.7 256l22.6 22.6 192 192L240 493.3 285.3 448l-22.6-22.6L93.3 256 262.6 86.6 285.3 64 240 18.7 217.4 41.4l-192 192L2.7 256z"/></svg>
);

export const upvote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 272L160 128 320 272v48H0V272z"/></svg>
);

export const downvote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 240L160 384 0 240l0-48 320 0 0 48z"/></svg>
);

export const collapse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 416L96 256 256 96l32 0 0 96 160 0 0 128-160 0 0 96-32 0zM64 96l0 320 0 32L0 448l0-32L0 96 0 64l64 0 0 32z"/></svg>
);

export const abilities = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0 0-64 32 0L448 0 416 0 384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zM264 200l24-56 24 56 56 24-56 24-24 56-24-56-56-24 56-24zM176 64l16 32 32 16-32 16-16 32-16-32-32-16 32-16 16-32z"/></svg>
);

export const bio = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 0L0 0 0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-80.6 54.1-148.5 128-169.4L384 0zM80 128l224 0 16 0 0 32-16 0L80 160l-16 0 0-32 16 0zm0 96l160 0 16 0 0 32-16 0L80 256l-16 0 0-32 16 0zm0 96l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm15.3-224l0 32-32 0 0-32 32 0zm1.2 64l0 16 0 64 15.5 0 0 32-15.5 0-.5 0-32 0-16 0 0-32 16 0 .5 0 0-48-.5 0-16 0 0-32 16 0 16.5 0 16 0z"/></svg>
);

export const teams = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 0L64 0 576 0l32 0 0 32 0 216.4c-17-15.2-39.4-24.4-64-24.4l0-160L96 64l0 160c-24.6 0-47 9.2-64 24.4L32 32 32 0zm0 320a64 64 0 1 1 128 0A64 64 0 1 1 32 320zm224 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm288-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM416 512l-192 0 32-96 128 0 32 96zM32 416l128 0 32 96L0 512l32-96zm608 96l-192 0 32-96 128 0 32 96z"/></svg>
);

export const review = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM448 512l-9.9-32.3C354.3 474.6 288 405 288 320c0-5.4 .3-10.7 .8-16L64 304 0 512l448 0zm0-271.9a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208c26.7 0 51.5-8.2 72-22.1l63.1 62.7 17 16.9 33.8-34-17-16.9-63-62.6c13.9-20.5 22.1-45.3 22.1-71.9c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z"/></svg>
);

export const costumes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 64C64 64 0 160 0 272S80 448 176 448l48 0 32-96 64 0 32 96 48 0c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
);

export const gallery = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 32L138.7 96 0 96 0 480l512 0 0-384L373.3 96 352 32 160 32zm96 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
);