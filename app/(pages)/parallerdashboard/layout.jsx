import Assignment from "@/app/components/Assignment";
import Quiz from "@/app/components/Quiz";
import Notification from "@/app/components/Notification";

const Layout = ({ children,assignment,notification,quiz}) => {
  return (
    <>
    <div className="grid grid-rows-2 grid-cols-2 h-screen">
      {assignment}
      {quiz}
      {notification}
    </div>
      {children}
    </>
  );
};

export default Layout;

