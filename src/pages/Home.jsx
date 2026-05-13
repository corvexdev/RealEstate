import Layout from "../componenets/Layout.jsx";

function Home({ user, logout }) {
  return (
    <Layout user={user} logout={logout}>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Real Estate
        </h1>

        <p className="text-gray-600">
          Modern real estate platform
        </p>

        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
          Explore Properties
        </button>
      </div>
    </Layout>
  );
}

export default Home;