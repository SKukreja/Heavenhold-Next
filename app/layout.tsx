// layout.tsx
import './globals.css';
import { GlobalNav } from '#/ui/global-nav';
import Sidebar from '#/ui/sidebar';
import { montserrat, oswald } from '#/ui/fonts';
import { ApolloWrapper } from './components/ApolloWrapper';
import { HeroesProvider } from './components/GetHeroesProvider';
import { ItemsProvider } from './components/GetItemsProvider';
import { TeamsProvider } from './components/GetTeamsProvider';
import UserInfo from './components/UserInfo';
import { cookies } from 'next/headers';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session');
  let user = null;

  if (sessionCookie) {
    try {
      user = JSON.parse(sessionCookie.value);
    } catch (e) {
      console.error('Failed to parse session cookie:', e);
    }
  }

  return (
    <ApolloWrapper>
      <html
        lang="en"
        className={`[color-scheme:dark] ${montserrat.variable} ${oswald.variable} font-montserrat tracking-wide font-medium text-xs 2xl:text-sm 3xl:text-sm 4xl:text-sm`}
      >
        <body className="h-screen overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 bg-gray-1100">
          <GlobalNav />
          <HeroesProvider>
            <ItemsProvider>
              <TeamsProvider>
                  <UserInfo user={user} />
                  <Sidebar />
                  <div className="absolute right-0 w-full main-body transition-width min-h-screen">
                    <div>
                      <div className="rounded-lg shadow-lg shadow-black/20">
                        <div className="min-h-screen ">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
              </TeamsProvider>
            </ItemsProvider>
          </HeroesProvider>
        </body>
      </html>
    </ApolloWrapper>
  );
}
