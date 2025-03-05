const Layout = ({ data, Load = false }) => {
  // console.log(data);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">{data?data.title:"Assignment.."}</h2>
      {Load ? (
        <div className="">
          <p className="text-gray-600">Loading....</p>
          <div className="flex items-center mt-4"></div>
        </div>
      ) : (
        <div className="">
          <p className="text-gray-600">
            {data?data.description:""}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <div className="flex items-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Assignment
            </button>
            <span className="ml-4 text-gray-600">Due in 3 days</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
