import Layout from "../componenets/Layout"

 function Properties() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Properties</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">Luxury Apartment</h2>
          <p className="text-gray-500">Pristina</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">Modern House</h2>
          <p className="text-gray-500">Prizren</p>
        </div>
      </div>
    </Layout>
  )
}

export default Properties