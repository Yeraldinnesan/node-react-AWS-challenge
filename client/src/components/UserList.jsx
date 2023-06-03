import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../utils/api";

import { FiLoader } from "react-icons/fi";
import { AiOutlineReload } from "react-icons/ai";
import UserItem from "./UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(users);

  const fetchUsers = async () => {
    setLoading(true);
    const users = await getUsers();
    setLoading(false);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleReload = () => {
    fetchUsers();
  };

  return (
    <div>
      {loading ? (
        <div className="flex animate-spin animate-pulse text-7xl justify-center  items-center">
          <FiLoader />
        </div>
      ) : (
        <div className="grid  grid-cols-1  gap-3 ">
          {users?.map((el) => (
            <div key={el._id}>
              <UserItem user={el} />
            </div>
          ))}
          <div onClick={handleReload}>
            <button className=" flex gap-2 hover:bg-slate-600 justify-center items-center  w-full bg-slate-700 py-3 shadow-md shadow-neutral-900 px-3 mt-6 rounded-md ease-in-out  duration-200">
              <AiOutlineReload className="text-xl font-extrabold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
