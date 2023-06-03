/* eslint-disable react/prop-types */
const UserItem = ({ user }) => {
  return (
    <div className="bg-neutral-700 p-3 rounded-lg shadow-md shadow-zinc-950">
      <div>
        <h1 className="font-bold">{user.fullName}</h1>
      </div>
      <div className="py-2">
        <h1 className="font-bold">From:</h1>
        <h2>
          {user.placeOfBirth.city}, {user.placeOfBirth.state}{" "}
          {user.placeOfBirth.country}{" "}
        </h2>
      </div>
    </div>
  );
};

export default UserItem;
