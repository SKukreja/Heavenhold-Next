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
import { GetBlogQuery, GetGuidesQuery, GetAllHeroesDocument, GetAllHeroesQuery, GetAllItemsDocument, GetAllItemsQuery, GetAllTeamsDocument, GetAllTeamsQuery, GetMetaVotesDocument, GetMetaVotesQuery, GetTeamVotesDocument, GetTeamVotesQuery, GetBlogDocument, GetGuidesDocument } from '#/graphql/generated/types';
import { fetchGraphQL } from './components/FetchGraphQL';
import { SidebarProvider } from './components/SidebarProvider';
import { fetchVotes } from './components/FetchVotes';
import { GuidesProvider } from './components/GetGuidesProvider';
import { BlogProvider } from './components/GetBlogProvider';

export const metadata = {
  title: "Heavenhold",
  description: "Guardian Tales Wiki",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const revalidate = 3600;

export default async function RootLayout({ children }: RootLayoutProps): Promise<JSX.Element> {
  const userData = await getUserData();

  // Fetch paginated hero and item data with proper typing
  const heroData: GetAllHeroesQuery = await fetchGraphQL<GetAllHeroesQuery>(GetAllHeroesDocument);
  const itemData: GetAllItemsQuery = await fetchGraphQL<GetAllItemsQuery>(GetAllItemsDocument);
  const teamData: GetAllTeamsQuery = await fetchGraphQL<GetAllTeamsQuery>(GetAllTeamsDocument);
  const teamVotes: GetTeamVotesQuery = await fetchVotes<GetTeamVotesQuery>(GetTeamVotesDocument);
  const metaVotes: GetMetaVotesQuery = await fetchVotes<GetMetaVotesQuery>(GetMetaVotesDocument);
  const blogData: GetBlogQuery = await fetchGraphQL<GetBlogQuery>(GetBlogDocument);
  const guideData: GetGuidesQuery = await fetchGraphQL<GetGuidesQuery>(GetGuidesDocument);

  return (
    <ApolloWrapper>
      <html
        lang="en"
        className={`[color-scheme:dark] ${montserrat.variable} ${oswald.variable} font-montserrat tracking-wide font-medium text-xs 2xl:text-sm 3xl:text-sm 4xl:text-sm`}
      >
        <body className="h-screen overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-1100 bg-gray-1100">
          <Suspense fallback={<Loading />}>
            <UserProvider initialUser={userData as User}>
              <HeroesProvider initialData={heroData} initialVotes={metaVotes}>
                <ItemsProvider initialData={itemData}>                  
                  <TeamsProvider initialData={teamData} initialVotes={teamVotes}>
                    <GuidesProvider initialData={guideData}>
                      <BlogProvider initialData={blogData}>
                        <SidebarProvider>
                        <GlobalNav />
                        <Sidebar />
                        <div id="main-body" className="absolute right-0 w-full main-body transition-width min-h-screen">
                          <div>
                            <div className="rounded-lg shadow-lg shadow-black/20">
                              <div className="min-h-screen">
                                {children}
                              </div>
                            </div>
                          </div>
                        </div>
                        </SidebarProvider>
                      </BlogProvider>
                    </GuidesProvider>
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
