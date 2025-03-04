const layout = ({ children, assignment, notification, quiz }) => {
  return (
    <>
      <div className="">
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

export default layout;
