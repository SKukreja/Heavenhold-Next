import HeroGrid from "../components/HeroGrid";

export default async function Heroes(): Promise<JSX.Element> {
    return (
        <div className="pt-32 pb-16 lg:pt-4 lg:pb-4">
            <HeroGrid />
        </div>
    );
}