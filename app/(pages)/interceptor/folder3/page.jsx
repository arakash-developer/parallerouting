import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Folder 3</h2>
      <p className="text-gray-600">You can intercept the routes here.</p>
      <div className="flex items-center mt-4">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/interceptor/folder2"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default page;
