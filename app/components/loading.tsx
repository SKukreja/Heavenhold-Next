export default function Loading(): JSX.Element {
  return (
    <main className="text-center h-screen w-full flex gap-4 justify-center items-center">
      <div className="animate-bounce rounded-full bg-gray-400 h-5 w-5"></div>
      <div className="animate-bounce animation-delay-300 rounded-full bg-gray-400 h-5 w-5"></div>
      <div className="animate-bounce animation-delay-600 rounded-full bg-gray-400 h-5 w-5"></div>
    </main>
  );
}
