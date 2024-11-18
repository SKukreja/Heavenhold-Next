import GuidePage from "#/app/guides/[uri]/GuidePage";

interface PageProps {
    params: Promise<{
      uri: string;      
    }>;
  }
  export default async function Page({ params }: PageProps) {
    const tabParam = await params;
    return (
      <GuidePage uri={tabParam.uri} />
    );
  }