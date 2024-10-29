import MetaList from "./MetaList";


export default async function TierList(): Promise<JSX.Element> {
    
    return (
    <div
      id="TierList"
      className="relative overflow-visible z-20 w-full h-auto items-start flex px-4 3xl:px-8"
    >
        <MetaList />
    </div>
      );
}