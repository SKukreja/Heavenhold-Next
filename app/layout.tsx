import './globals.css';
import { GlobalNav } from '#/ui/global-nav';
import Sidebar from '#/ui/sidebar';
import { montserrat, oswald } from '#/ui/fonts';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`[color-scheme:dark] ${montserrat.variable} ${oswald.variable} font-montserrat tracking-wide font-medium`}>
      <body className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 bg-gray-1100 pb-36">
        <GlobalNav />
        <Sidebar />
        <div className="absolute right-0 w-[calc(100%-36rem)]">
          <div>
            <div className="rounded-lg shadow-lg shadow-black/20">
              <div className="bg-black ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
