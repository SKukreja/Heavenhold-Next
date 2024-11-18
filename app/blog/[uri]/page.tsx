import BlogPage from "./BlogPage";

interface PageProps {
    params: Promise<{
      uri: string;      
    }>;
  }
  export default async function Page({ params }: PageProps) {
    const tabParam = await params;
    return (
      <BlogPage uri={tabParam.uri} />
    );
  }