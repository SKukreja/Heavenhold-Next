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