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
        <div className="lg:pl-72">
          <div className="max-w-xl">
            <div className="p-px rounded-lg shadow-lg shadow-black/20">
              <div className="p-4 bg-black">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
