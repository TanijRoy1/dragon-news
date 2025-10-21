import React, { Suspense, useEffect } from "react";
import Header from "../components/Header";
import MyContainer from "../components/MyContainer";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategoryList";
import { Outlet, useNavigation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../components/Slider";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const HomeLayout = () => {
  const navigate = useNavigation();
  // console.log(navigate);


  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false, // 🔥 animate every time when scrolling
      mirror: true, // ✅ re-animate on scroll up
    });
  }, []);

  return (
    <MyContainer>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <NavBar></NavBar>
        <Slider></Slider>
      </header>

      <main className="grid grid-cols-12 gap-3">
        <aside className="category-list col-span-3">
          <h1>All Category</h1>
          <Suspense
            fallback={
              <h1 className="text-blue-500 text-center text-2xl font-bold">
                Loading...
              </h1>
            }
          >
            <CategoryList categoryPromise={categoryPromise}></CategoryList>
          </Suspense>
        </aside>

        <section className="categoy-news col-span-6">
          <h1 className="mb-3">Dragon News Home</h1>
          {navigate.state === "loading" ? (
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-4 w-10/12"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
              <div className="skeleton h-60 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </section>

        <aside className="login-with col-span-3">
          <h1>Login With</h1>
        </aside>
      </main>
    </MyContainer>
  );
};

export default HomeLayout;
