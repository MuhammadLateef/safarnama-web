import Image1 from "../../assets/drone-shoot/white-drone1.png"
import Image2 from "../../assets/drone-shoot/white-drone2.png"

function DroneServices() {
  return (
    <div className="py-16 ">
      <div className="container max-w-[90%] mx-auto px-4">
        {/* Arial Video Services */}
        <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Drone flying"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Aerial Video Services</h2>
            <p className="mb-4">
              Aerial drone videos deliver a unique way for you to tell your business story. Also, provide frames of
              reference, perspectives of project, industry, company, event, product or service that cannot be captured
              from the ground or conventional methods. They can stand in 4k resolution and above as well as
              advertisement-fix, giving fantastic professional looking results. And video will give your brand that
              amazing aerial view your competitors don't have from the crowd. All though, if you want to promote your
              business with video to drone, this is a great tool for making your business or brand more successful.
            </p>
          </div>
        </div>

        {/* Drone Video and Photography Services */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={Image1}
                alt="Drone photography"
                className="w-full h-auto object-cover"
              />
              {/* <img
                  src="https://propakistani.pk/wp-content/uploads/2022/07/Untitled-design-20.jpg"
                  alt="City aerial view"
                  className="w-full h-auto object-cover"
                /> */}
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Drone Video and Photography Services</h2>
            <p className="mb-4">
              Artic Films deliver Arial photography, video services and also, provide first-class results with premium
              quality while achieving the highest level of work. Along as the technology advances, we are constantly
              upgrading our equipment to meet your requirements. We have spared no expense investing in the latest drone
              platforms producing unrivalled results. These breathtakingly stunning videos add great impact to your
              marketing material.
            </p>
            <h2 className="text-xl font-bold mb-4">📍 Our Drone Services Cover</h2>
            <ul className="mb-4 list-decimal ml-5 space-y-4">

              <li className="">
                <span className="font-bold">  Deosai Nationa Park: </span>

                Home to wildflowers, brown bears, and vast alpine plains — perfect for cinematic drone shots that showcase untouched wilderness.
              </li>
              <li className="">
                <span className="font-bold">Sarfaranga Desrt (Cold Desert Skardu): </span>

                The only cold desert of its kind in the world. We capture mesmerizing sand dunes surrounded by snow-capped mountains — a surreal contrast from the sky.
              </li>

              <li className="">
                <span className="font-bold">Skardu Valley: </span>

                From Shigar Fort to Upper Kachura Lake, get majestic aerial views of lush valleys, lakes, and historic architecture — all in cinematic quality.
              </li>

              <li className="">
                <span className="font-bold">  Basho Valley: </span>

                Ideal for capturing thick pine forests, flowing rivers, and vibrant green meadows. We offer custom drone packages for travelers and local tourism companies.
              </li>

            </ul>
            <h2 className="text-xl font-bold mb-4">🎯 Why Choose Us?</h2>
            <ul className="mb-4 list-decimal ml-5 space-y-4">

              <li className="">
                Licensed Drone Operators
              </li>
              <li className="">
                Fast Editing & Delivery
              </li>

              <li className="">
                High-Resolution 4K & 6K Aerial Shots
              </li>

              <li className="">
                Tourism, Event, & Real Estate Packages Available

              </li>
              <li className="">
                Experience Working in High-Altitude Locations

              </li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DroneServices;
