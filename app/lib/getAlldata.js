const getAlldata = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos",{
    cache: "no-store",  
  });
  let data = await res.json();
  return data;
};

export default getAlldata;
