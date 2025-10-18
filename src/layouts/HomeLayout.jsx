import React, { Suspense } from "react";
import Header from "../components/Header";
import MyContainer from "../components/MyContainer";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import CategoryList from "../components/CategoryList";
import CategoryNews from "../components/CategoryNews";
import { Outlet } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const HomeLayout = () => {
  return (
    <MyContainer>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <NavBar></NavBar>
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
          <Outlet></Outlet>
        </section>

        <aside className="login-with col-span-3">
          <h1>Login With</h1>
        </aside>
      </main>
    </MyContainer>
  );
};

export default HomeLayout;
