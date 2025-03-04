const Layout = ({ children, assignment, notification, quiz }) => {
  return (
    <>
      <div className="grid grid-rows-2 h-screen">
        <div className="grid grid-cols-2">
          {assignment}
          {notification}
        </div>
        <div className="">{quiz}</div>
      </div>
      {children}
    </>
  );
};

export default Layout;
