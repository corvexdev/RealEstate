import Layout from "../componenets/Layout";

function Contact({ user, logout }) {
  return (
    <Layout user={user} logout={logout}>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded"
        />

        <button className="bg-yellow-500 px-6 py-2 rounded">
          Send
        </button>
      </form>
    </Layout>
  );
}

export default Contact;