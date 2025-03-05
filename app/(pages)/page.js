import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-[400px] flex gap-4 justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <Link
        href="/parallerdashboard"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded text-lg"
      >
        Paraller Routing
      </Link>
      <Link
        href="/interceptor"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded text-lg"
      >
        Interceptor Routing
      </Link>
    </div>
  );
};

export default page;
