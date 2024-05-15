import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("alert").showModal();
  }, []);
  return (
    <main>
      {/* Alert */}
      <dialog id="alert" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            This website is designed to be a shell of a working website, hence
            the placeholder text and other placeholder elements. I would have
            loved to make this website work fully but I do not have the time to
            setup the backend and database and host it all.
            <br />
            <br />
            This code is also really bad btw, I should have component-ized it all, but I didn't have time to do that, and also
            I probably wont be working on it later lol.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Navbar */}
      <div className="mt-5 mx-10">
        <div className="navbar bg-base-200 rounded-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <a href="/">Homepage</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl" href="/">
              Coopers Chihuahuas
            </a>
          </div>
          <div className="navbar-end">
            <label className="swap swap-rotate mr-2">
              {/* This hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* Sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placehold.co/600x400"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6 max-w-lg mr-10">
              We are a top rated grooming service in the area, specializing in
              Chihuahuas. We have been servicing the San Diego area for over 10
              years, providing reliable and affordable grooming services.
            </p>
            <a className="btn btn-primary" href="/about">Learn More</a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-base-200 h-28 flex justify-between px-20 mt-20">
        <div className="stats bg-base-200">
          <div className="stat">
            <div className="stat-title">Total dogs serviced</div>
            <div className="stat-value">1432</div>
          </div>
        </div>
        <div className="stats bg-base-200">
          <div className="stat">
            <div className="stat-title">Total amount raised for charity</div>
            <div className="stat-value">$29,000+</div>
          </div>
        </div>
        <div className="stats bg-base-200">
          <div className="stat">
            <div className="stat-title">Customer satisfaction rate</div>
            <div className="stat-value">98%</div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="hero min-h-screen mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Services</h1>
            <ul className="py-6">
              <li>• Dog walking</li>
              <li>• Daily doggy daycare for working pet owners</li>
              <li>• Yard cleanup of dog waste</li>
              <li>• At-home pet sitting for dog owners on vacation</li>
              <li>• Brushing and nail trimming</li>
            </ul>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-20">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="john.doe@email.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="address"
                  placeholder="721 McCarty Ln"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Services Requested</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Request Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-primary text-primary-content mt-20">
        <aside>
          <img src="/CC.png" alt="Coopers Chihuahuas" className="h-12 w-12" />
          <p className="font-bold">
            Coopers Chihuahuas Ltd. <br />
            Providing reliable dog grooming services since 2005.
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </main>
  );
}
