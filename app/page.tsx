export default async function HomePage() {

  return (
    <div className="w-full h-screen flex justify-center items-center text-center flex-col">
      <div className="w-full text-4xl font-oswald px-8 lg:px-0 py-8">Welcome back!</div>
      <input type="text" className="bg-gray-700 text-white w-2/3 lg:w-1/2 px-8 py-4" placeholder="Search" />
    </div>
  );
}
