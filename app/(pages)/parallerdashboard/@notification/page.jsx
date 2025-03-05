import Link from "next/link";

const page = async () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-8 py-6 rounded-lg shadow-md"
      role="alert"
    >
      <h2 className="font-bold text-2xl mb-4">Notification</h2>
      <p className="text-lg">Click Button to see notification</p>
      <div className="mt-4 flex gap-4">
        <Link
          href="/parallerdashboard/seen"
          className="bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default page;
