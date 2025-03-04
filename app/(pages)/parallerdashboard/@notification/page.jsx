import wait from "@/app/lib/wait";

const page = async () => {
  await wait(3000);
  return (
    <div
      className="bg-gradient-to-r from-blue-100 to-blue-200 border-t-4 border-blue-500 text-blue-700 px-8 py-6 rounded-lg shadow-md"
      role="alert"
    >
      <h2 className="font-bold text-2xl mb-4">Notification</h2>
      <p className="text-lg">
        This is a notification message. Please pay attention to this important
        information.
      </p>
    </div>
  );
};

export default page;
