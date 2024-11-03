// layout.tsx
import './globals.css';
import { GlobalNav } from '#/ui/global-nav';
import Sidebar from '#/ui/sidebar';
import { montserrat, oswald } from '#/ui/fonts';
import { ApolloWrapper } from './components/ApolloWrapper';
import { HeroesProvider } from './components/GetHeroesProvider';
import { ItemsProvider } from './components/GetItemsProvider';
import { TeamsProvider } from './components/GetTeamsProvider';
import { UserProvider } from './components/UserContext';
import { getUserData } from './components/UserDataFetcher';
import { cookies } from 'next/headers';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const userData = getUserData();
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session');

  return (
    <ApolloWrapper>
      <html
        lang="en"
        className={`[color-scheme:dark] ${montserrat.variable} ${oswald.variable} font-montserrat tracking-wide font-medium text-xs 2xl:text-sm 3xl:text-sm 4xl:text-sm`}
      >
        <body className="h-screen overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 bg-gray-1100">
          <UserProvider initialUser={userData}>
            <HeroesProvider>
              <ItemsProvider>
                <TeamsProvider>
                    <GlobalNav />
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
          </UserProvider>
        </body>
      </html>
    </ApolloWrapper>
  );
}
