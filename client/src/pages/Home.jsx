import Form from "../components/Form";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className=" h-screen lg:py-20 py-10 lg:px-32 px-5">
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="md:px-5 md:order-first order-last ">
          <UserList />
        </div>
        <div className="md:p-5 card ">
          <h1 className="text-xl text-center pb-8 pt-5 font-bold">
            Add a new User
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
