import React from "react";
import { NavigationLink } from "../components";

function Home() {
  return (
    <div className="relative  ">
      <div className="  ">
        <div className="absolute inset-0 backdrop-blur-none  bg-white/40"></div>
        <img alt="" className="  " src="/bg1.jpeg" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg">
          <div className="mx-auto px-6 pt-14 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-lg tracking-tight text-slate-700">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-slate-700">
                This is a React Showcase App
              </h1>
            </div>
            <div className="">
              <p className="mt-4 text-xl">
                This app, built on React Create App, incorporates several key
                features:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-xl">
                <li>
                  Utilizes <strong>TypeScript</strong> for enhanced type safety
                </li>
                <li>
                  Employs <strong>Tailwind CSS</strong> for sleek and responsive
                  design
                </li>
                <li>
                  Manages state efficiently with <strong>Redux Toolkit</strong>
                </li>
                <li>
                  Implements user authentication through{" "}
                  <strong>Firebase</strong>
                </li>
                <li>
                  Utilizes <strong>Firestore</strong> for streamlined database
                  storage
                </li>
                <li>
                  Deployed seamlessly using <strong>Firebase Hosting</strong>
                </li>
                <li>
                  Back-end APIs are built with <strong>Node.js</strong>
                </li>
              </ul>
              <p className="mt-5">
                You can explore the source code for the front-end of the app on
                GitHub:{" "}
                <a
                  className="underline text-blue-500"
                  href="https://github.com/jessica0522/react-showcase"
                  target="_blank"
                  rel="noreferrer"
                >
                  Front-end Repository
                </a>
              </p>
              <p>
                For the back-end code, you can find it here:{" "}
                <a
                  className="underline text-blue-500"
                  href="https://github.com/jessica0522/react-showcase-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  Back-end Repository
                </a>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <NavigationLink
                  to="/posts"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </NavigationLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
