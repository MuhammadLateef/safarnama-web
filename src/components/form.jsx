import React from 'react'

const form = () => {
  return (
    <div>
      
 (
    <div className="p-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-10">The Way You Like</h1>
      <h2 className="text-2xl font-semibold text-center mb-6">Book Your Custom Tour</h2>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Full Name"
          className="border p-3 w-full rounded"
        />
        <input
          type="text"
          placeholder="Your Whatsapp Number"
          className="border p-3 w-full rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 w-full rounded"
        />
        <input
          type="text"
          placeholder="Your City"
          className="border p-3 w-full rounded"
        />

        <label className="block font-semibold">Tour Type</label>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="tourType" value="Custom / Private Tour" />
            Custom / Private Tour
          </label>
          <label>
            <input type="radio" name="tourType" value="Group Tour" /> Group Tour
          </label>
          <label>
            <input type="radio" name="tourType" value="Rates of Both" /> Give me Rates of Both
          </label>
        </div>

        <textarea
          placeholder="Where You want to Travel? e.g Hunza, Skardu, Nathiagali etc"
          className="border p-3 w-full rounded"
        />

        <input
          type="date"
          placeholder="Travel Start Date"
          className="border p-3 w-full rounded"
        />

        <input
          type="text"
          placeholder="For How many days you want to Travel? e.g 3, 5, 7 or more days"
          className="border p-3 w-full rounded"
        />

        <input
          type="number"
          placeholder="How many Adults? e.g 2"
          className="border p-3 w-full rounded"
        />
        <input
          type="number"
          placeholder="How many Children? e.g 1"
          className="border p-3 w-full rounded"
        />

        <label className="block font-semibold">Tour By Transportation?</label>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="transportation" value="By Road" /> By Road
          </label>
          <label>
            <input type="radio" name="transportation" value="By Air" /> By Air
          </label>
        </div>

        <input
          type="number"
          placeholder="How many Rooms You need?"
          className="border p-3 w-full rounded"
        />

        <label className="block font-semibold">Tour Budget</label>
        <div className="grid grid-cols-2 gap-4">
          <label>
            <input type="radio" name="budget" value="Economy" /> Economy
          </label>
          <label>
            <input type="radio" name="budget" value="Standard" /> Standard
          </label>
          <label>
            <input type="radio" name="budget" value="Luxury" /> Luxury
          </label>
          <label>
            <input type="radio" name="budget" value="Executive" /> Executive
          </label>
        </div>

        <textarea
          placeholder="Let us know if you want us to take care of anything specific. We take care of everything"
          className="border p-3 w-full rounded"
        />

        <button className="bg-blue-600 text-white py-3 px-6 w-full rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );


    </div>
  )
}

export default form
