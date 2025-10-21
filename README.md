# React + Vite

1. HomeLayout
2. date-fns: format, new Date()
3. react-fast-marquee
4. load category
5. ask chatgpt with json data to design NewsCard

6. loading when click category:

```js
const navigate = useNavigation();
// console.log(navigate);

{
  navigate.state === "loading" ? (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-60 w-full"></div>
    </div>
  ) : (
    <Outlet></Outlet>
  );
}
```

7. loading when page is loading

```js
{
   path: "category/:id",
   Component: CategoryNews,
   loader: () => fetch("../news.json"),
   hydrateFallbackElement: <div className="flex items-center justify-center py-10">
                              <span className="loading loading-bars loading-xl"></span>
                           </div>,
},
```
## Remove from Git history
```js
git rm --cached src/firebase/firebase.config.js

git commit -m "Remove sensitive Firebase config file"

git push
```