import HeroGrid from "../components/HeroGrid";

export default async function Heroes(): Promise<JSX.Element> {
    return (
        <div className="pt-4">
            <HeroGrid />
        </div>
    );
}