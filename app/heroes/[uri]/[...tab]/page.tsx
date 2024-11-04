import HeroPage from "./HeroPage";

interface PageProps {
  params: Promise<{
    uri: string;
    tab?: string[] | undefined;
  }>;
}

function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function Page({ params }: PageProps) {
  const tabParam = await params;

  const activeTab = capitalize(tabParam.tab?.[0] || "Bio");

  return (
    <HeroPage
      activeTab={activeTab}
      uri={tabParam.uri ?? ""}
    />
  );
}