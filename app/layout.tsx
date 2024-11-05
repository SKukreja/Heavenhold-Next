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
import { User } from './components/UserContext';
import { Suspense } from 'react';
import Loading from './components/loading';
import { GetAllHeroesDocument, GetAllItemsDocument } from '#/graphql/generated/types';
import { fetchGraphQL } from './components/FetchGraphQL';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps): Promise<JSX.Element> {
  const userData = await getUserData();
  
  const heroData = await fetchGraphQL(GetAllHeroesDocument);
  const itemsData = await fetchGraphQL(GetAllItemsDocument);

  return (
    <ApolloWrapper>
      <html
        lang="en"
        className={`[color-scheme:dark] ${montserrat.variable} ${oswald.variable} font-montserrat tracking-wide font-medium text-xs 2xl:text-sm 3xl:text-sm 4xl:text-sm`}
      >
        <body className="h-screen overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 bg-gray-1100">
          <Suspense fallback={<Loading />}>
            <UserProvider initialUser={userData as User}>
            <HeroesProvider initialData={heroData}>
            <ItemsProvider initialData={itemsData}>
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
          </Suspense>
        </body>
      </html>
    </ApolloWrapper>
  );
}
