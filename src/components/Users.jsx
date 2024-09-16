import React, { useEffect, useState } from "react";
import { fetchUserData } from "../apiLayer";
import userImg from "../assets/images/user.png";

const Users = () => {
  //creating state to store userdata
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  //function to call api and set state
  const getUsers = async () => {
    const data = await fetchUserData()
      .then((res) => {
        setUsers(res);
        setFilteredUsers(res);
      })
      .catch((err) => alert(err, "error"));
  };

  //onetime call
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users, "user");

  const handleSearch = () => {
    const filtered = users.filter((user) => {
      return user.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <div className=" mx-auto">
        <div className="flex gap-2 items-center justify-center mt-10">
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="border-2 border-zinc-600 focus:outline-none px-2 py-1 text-zinc-700 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 py-12 md:py-16 px-12 md:px-32">
          {filteredUsers?.map((user) => (
            <div
              key={user?.id}
              className="w-full max-w-56 h-full max-h-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4"
            >
              <div className="flex flex-col items-center justify-center text-center pb-10">
                <img
                  className="w-[200px] mb-3"
                  src={userImg}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {user?.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.address?.city}
                </span>
                <a href="#" className="underline text-blue-600 ">
                  {user?.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
