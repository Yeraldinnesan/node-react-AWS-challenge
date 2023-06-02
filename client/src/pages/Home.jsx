import Form from "../components/Form";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className=" h-screen lg:py-20 py-10 lg:px-32 px-5">
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="md:p-5 md:order-first order-last ">
          <UserList />
        </div>
        <div className="md:p-5 card">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
