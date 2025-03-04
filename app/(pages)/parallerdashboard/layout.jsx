import Assignment from "@/app/components/Assignment";
import Quiz from "@/app/components/Quiz";
import Notification from "@/app/components/Notification";

const Layout = ({ children,assignment,quiz,notification }) => {
  return (
    <>
    <div className="grid grid-rows-2 grid-cols-2 h-screen">
      <Assignment />
      {assignment}
      <Quiz />
      <Notification />
    </div>
      {children}
    </>
  );
};

export default Layout;

