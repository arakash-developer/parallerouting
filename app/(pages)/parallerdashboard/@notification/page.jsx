import wait from "@/app/lib/wait";

const page = async () => {
  await wait(3000);
  return (
    <div
      className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-8 py-6 rounded-lg shadow-md"
      role="alert"
    >
      <h2 className="font-bold text-2xl mb-4">Notification</h2>
      <p className="text-lg">
        This is a notification message. Please pay attention to this important
        information.
      </p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          View details
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        This is a sample notification. You can customize the content and style
        to fit your needs.
      </p>
    </div>
  );
};

export default page;

