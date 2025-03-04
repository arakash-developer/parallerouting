import wait from "@/app/lib/wait";

const page = async () => {
  await wait(4000);
  return (
    <div className="h-full ">
      <div className="h-full py-5 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
        <div className="h-full bg-white rounded-lg shadow-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
          Quiz content here
        </div>
      </div>
    </div>
  );
};

export default page;

