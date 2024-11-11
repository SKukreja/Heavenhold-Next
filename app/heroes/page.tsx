import HeroGrid from "../components/HeroGrid";

export default async function Heroes(): Promise<JSX.Element> {
    return (
        <div className="pt-32 pb-16 lg:pt-4 lg:pb-4">
            <div className="w-full text-8xl font-oswald px-8 py-8">Heroes</div>
            <div id="active-filters" className="w-full px-8 text-2xl font-montserrat flex flex-wrap gap-4 mb-8"></div>
            <HeroGrid />
        </div>
    );
}