import TeamsList from "#/app/components/RenderTeamsList";

interface TeamListProps {
    params: Promise<{
        uri: string;
    }>;
}

export default async function Page({ params }: TeamListProps) {
    const activeCategory = (await params).uri.toString().toLowerCase();

    return (
        <div
        id="TeamsListPage"      
        >        
            <TeamsList activeCategory={activeCategory} />
        </div>    
    );
}
