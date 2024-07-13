import './globals.css';
import { GlobalNav } from '#/ui/global-nav';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="h-screen overflow-y-scroll bg-gray-1100 pb-36">
        <GlobalNav />
        <div className="fixed top-0 z-10 flex flex-col bg-black border-b border-gray-800 w-72 left-72 lg:bottom-0 lg:border-b-0 lg:border-r lg:border-gray-800">
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" className="block px-2 py-3">Totes</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">Backpacks</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">Travel Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">Hip Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
              </li>
            </ul>

            <div className="px-4 py-6 border-t border-gray-200">
              <h3 className="flow-root -mx-2 -my-3">
                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                  <span className="font-medium text-gray-900">Color</span>
                  <span className="flex items-center ml-6">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-mobile-0">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-0" className="flex-1 min-w-0 ml-3 text-gray-500">White</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-1" className="flex-1 min-w-0 ml-3 text-gray-500">Beige</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-2" className="flex-1 min-w-0 ml-3 text-gray-500">Blue</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-3" className="flex-1 min-w-0 ml-3 text-gray-500">Brown</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-4" className="flex-1 min-w-0 ml-3 text-gray-500">Green</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-color-5" className="flex-1 min-w-0 ml-3 text-gray-500">Purple</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t border-gray-200">
              <h3 className="flow-root -mx-2 -my-3">
                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                  <span className="font-medium text-gray-900">Category</span>
                  <span className="flex items-center ml-6">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-category-0" className="flex-1 min-w-0 ml-3 text-gray-500">New Arrivals</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-category-1" className="flex-1 min-w-0 ml-3 text-gray-500">Sale</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-category-2" className="flex-1 min-w-0 ml-3 text-gray-500">Travel</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-category-3" className="flex-1 min-w-0 ml-3 text-gray-500">Organization</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-category-4" className="flex-1 min-w-0 ml-3 text-gray-500">Accessories</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t border-gray-200">
              <h3 className="flow-root -mx-2 -my-3">
                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                  <span className="font-medium text-gray-900">Size</span>
                  <span className="flex items-center ml-6">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pt-6" id="filter-section-mobile-2">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-0" className="flex-1 min-w-0 ml-3 text-gray-500">2L</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-1" className="flex-1 min-w-0 ml-3 text-gray-500">6L</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-2" className="flex-1 min-w-0 ml-3 text-gray-500">12L</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-3" className="flex-1 min-w-0 ml-3 text-gray-500">18L</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-4" className="flex-1 min-w-0 ml-3 text-gray-500">20L</label>
                  </div>
                  <div className="flex items-center">
                    <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="filter-mobile-size-5" className="flex-1 min-w-0 ml-3 text-gray-500">40L</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute right-0 w-[calc(100%-36rem)]">
          <div>
            <div className="p-px rounded-lg shadow-lg shadow-black/20">
              <div className="bg-black ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
