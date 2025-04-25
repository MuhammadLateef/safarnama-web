function DroneServices() {
    return (
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Arial Video Services */}
          <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1000&auto=format&fit=crop"
                alt="Drone flying"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Arial Video Services</h2>
              <p className="mb-4">
                Arial drone videos deliver a unique way for you to tell your business story. Also, provide frames of
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
                  src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=1000&auto=format&fit=crop"
                  alt="Drone photography"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="https://propakistani.pk/wp-content/uploads/2022/07/Untitled-design-20.jpg"
                  alt="City aerial view"
                  className="w-full h-auto object-cover"
                />
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
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default DroneServices;
  