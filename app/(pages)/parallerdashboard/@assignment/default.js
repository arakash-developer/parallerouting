import Layout from "@/app/(pages)/parallerdashboard/@assignment/Layout";
import wait from "@/app/lib/wait";

const Default = async () => {
  await wait(3000);
  let data = {
    title: "Introduction to Computer Science",
    description:
      "Write a program in Python or Java to calculate the sum of all prime numbers less than 1000. The program should take an integer as input from the user and display the sum of all prime numbers less than the input number.",
    due: 3,
  };
  return (
    <>
      <Layout data={data} />
    </>
  );
};

export default Default;
