import { Outlet } from "react-router";
import Hero from "../../components/Hero";

const HomeLayout = () => {
  return (
    <>
        <Hero name="Jasmine"/>
        <div className=" max-w-6xl mx-auto px-6 my-8">
        <Outlet />
        </div>
    </>
  );
};

export default HomeLayout;