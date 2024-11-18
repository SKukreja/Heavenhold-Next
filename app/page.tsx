import BlogList from "./components/BlogList";
import FadeInImage from "./components/FadeInImage";

export default async function HomePage() {

  return (
    <div className="w-full h-screen pt-48 flex justify-start items-center text-center flex-col">
      <div className="w-full text-4xl font-oswald px-8 lg:px-0 py-8">Welcome back!</div>
      <input type="text" className="bg-gray-700 text-white w-2/3 lg:w-1/2 px-8 py-4" placeholder="Search" />
      <FadeInImage src='/partner.png' className={'w-48 mt-16 mb-32'} width={300} height={100} alt='Kakao Games Partners' />
      <BlogList />
    </div>
  );
}
