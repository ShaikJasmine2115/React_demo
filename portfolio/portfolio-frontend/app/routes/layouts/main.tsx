import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
        <div className=" max-w-6xl mx-auto px-6 my-8">
        <Outlet />
        </div>
    </>
  );
};

export default MainLayout;