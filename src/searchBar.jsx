import { useState } from "react";

function SearchBar() {
  const [showSearch, setShowSearch] = useState(0);

  return (
    // <>
    //   <button
    //     className="btn btn-ghost btn-circle"
    //     onClick={() => setShowSearch(!showSearch)}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //       />
    //     </svg>
    //   </button>
    //   <div
    //     className={`form-control animate-pulse search-bar-animation ${
    //       showSearch == 1 ? "fade-in" : "fade-out"
    //     }`}
    //   >
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       className={`input input-bordered w-auto`}
    //     />
    //   </div>
    //   {showSearch == 1 ? (
    //     <div
    //       className={`dropdown  ${showSearch == 1 ? "bell-out" : "bell-in"}`}
    //     >
    //       <label tabIndex={0} className="btn m-1">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //           />
    //         </svg>

    //         <span className="badge badge-xs badge-primary indicator-item"></span>
    //       </label>
    //       <div
    //         tabIndex={0}
    //         className="dropdown-content z-[1] card card-compact w-64  p-2 shadow bg-primary text-primary-content"
    //         style={{ position: "absolute", left: "-200px", zIndex: "20" }}
    //       >
    //         <div className="card-body">
    //           <h3 className="card-title">Card title!</h3>
    //           <p>you can use any element as a dropdown.</p>
    //         </div>
    //       </div>
    //     </div>
    //   ) : null}
    // </>

    <div className="navbar-end flex place-items-end">
      <button className="btn btn-ghost btn-circle">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button className="btn btn-ghost btn-circle dropdown">
        <div className="indicator">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
        <div
            tabIndex={0}
            className="dropdown-content z-[1] card card-compact w-64  p-2 shadow bg-primary text-primary-content"
            style={{ position: "absolute", left: "-15rem", zIndex: "20" }}
          >
            <div className="card-body">
              <h3 className="card-title">Card title!</h3>
              <p>you can use any element as a dropdown.</p>
            </div>
          </div>
      </button>
    </div>
  );
}
export default SearchBar;
