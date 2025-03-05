import getAlldata from "@/app/lib/getAlldata";

const page = async () => {
  let data = await getAlldata();
  return (
    <div className="">
      <div className="gap-3 flex-wrap h-full py-5 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
        {data?.map((item) => (
          <div key={item.id} className="h-[150px] bg-white rounded-lg shadow-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <span>{item.id}.</span>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
