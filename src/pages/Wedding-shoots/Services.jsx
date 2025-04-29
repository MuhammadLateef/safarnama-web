import Image2 from "../../assets/WEEDING.JPG"
import Image1 from "../../assets/drone-shoot/white-drone2.png"

function WeddingServices() {
  return (
    <div className="py-16">
      <div className="container max-w-[90%] mx-auto px-4">
        {/* Wedding Photography Services */}
        <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Wedding couple"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Wedding Photography Services</h2>
            <p className="mb-4">
              Capture every beautiful emotion of your big day with our professional wedding photography. 
              From candid moments to traditional poses, we ensure that each shot reflects the essence of your love story.
              Our team uses the latest techniques to create timeless memories that you will cherish forever.
            </p>
          </div>
        </div>

        {/* Wedding Videography Services */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={Image1}
                alt="Wedding videography"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Wedding Videography Services</h2>
            <p className="mb-4">
              Our cinematic wedding videography captures the magic, emotions, and celebration of your special day.
              We craft a beautiful narrative that brings your wedding story to life, allowing you to relive every moment
              — from the first look to the final dance — in stunning detail and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingServices;
