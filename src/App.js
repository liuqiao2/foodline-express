import React from "react";

export default function FoodlineExpressHome() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Foodline Express</h1>
        <p className="text-lg mt-2">Fresh Wholesale Delivery for Restaurants</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Chicken Leg Quarters", "Green Bell Peppers", "25 lb Rice Bag"].map((item, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{item}</h2>
            <p className="text-sm mb-2">Price: TBD (同步 RD 价格)</p>
            <button className="bg-black text-white px-4 py-2 rounded">Add to Order</button>
          </div>
        ))}
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Delivery available in DC Metro Area | Pay on Delivery</p>
      </footer>
    </div>
  );
}
