import React from "react";
import { NavigationLink, ScrollReveal } from "../components";
import { features } from "../static/features";

function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <ScrollReveal>
            <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">
              This is a basic React-based Blog App
            </p>
            <p className="tracking-tight text-slate-too">
              You can find both of the front-end and back-end source code on
              Git:{" "}
            </p>
            <a
              href="https://github.com/jessica0522/react-showcase"
              rel="noreferrer"
              target="_blank"
              className="text-blue-500 cursor-pointer underline"
            >
              Front-end repo
            </a>
            &nbsp;&nbsp;
            <a
              href="https://github.com/jessica0522/react-showcase-backend"
              rel="noreferrer"
              target="_blank"
              className="text-blue-500 cursor-pointer underline"
            >
              Back-end repo
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-12 text-2xl leading-8 text-gray-900">
              Here are the functionalities available for you to explore in this
              app:
            </p>
          </ScrollReveal>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <ScrollReveal>
                <NavigationLink to="/login">
                  <div className="flex">
                    <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-indigo-100/60 transition hover:bg-indigo-100/40 sm:p-8">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12 text-indigo-500 inline"
                        >
                          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                      </div>

                      <p className="mt-6 text-2xl font-semibold text-gray-900">
                        User registration and login
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        You can create or log into a user account using an
                        email. This functionality is facilitated through
                        Firebase Authentication.
                      </p>
                    </article>
                  </div>
                </NavigationLink>
              </ScrollReveal>
              <ScrollReveal>
                <NavigationLink to="/posts">
                  <div className="flex">
                    <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-indigo-100/60 transition hover:bg-indigo-100/40 sm:p-8">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12 text-indigo-500 inline"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </div>
                      <p className="mt-6 font-display text-2xl font-semibold text-gray-900">
                        Viewing, adding and upvoting posts
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        You can browse through all existing posts. Additionally,
                        upon logging in, you are able to contribute new posts or
                        give existing ones a thumbs-up.
                      </p>
                    </article>
                  </div>
                </NavigationLink>
              </ScrollReveal>
              <ScrollReveal>
                <NavigationLink to="/database">
                  <div className="flex">
                    <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-indigo-100/60 transition hover:bg-indigo-100/40 sm:p-8">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12 text-indigo-500 inline"
                        >
                          <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                          <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                          <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                          <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                        </svg>
                      </div>
                      <p className="mt-6 font-display text-2xl font-semibold text-gray-900">
                        Database presenting and managing your posts
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        You have the capability to review the database table
                        containing all posts and exercise control to delete your
                        posts.
                      </p>
                    </article>
                  </div>
                </NavigationLink>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <ScrollReveal>
            <p className="mt-12 mb-8 text-2xl text-center leading-8 text-gray-900">
              These modern web development stacks have been used in this app:
            </p>
          </ScrollReveal>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <ScrollReveal key={feature.title}>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex items-center justify-center">
                      <img
                        src={`/logos/${feature.icon}.svg`}
                        alt={feature.icon}
                        className="h-12 w-12"
                      />
                    </div>
                    <p>{feature.title}</p>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.desc}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Home;
