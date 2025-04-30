
import image from "../../assets/wedding/wedding_main.jpg"
function HeroSection() {
    return (
        <div
            className=" bg-cover bg-no-repeat flex items-center justify-center  h-[60vh] sm:h-[90vh] relative z-0 md:-mt-48 mt-6 w-full mx-auto"
            style={{
                backgroundImage: `url(${image})`,
              }}
        >
            <div className="absolute inset-0 bg-black opacity-60 "></div>
            <div className="container mx-auto px-4 text-white text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">CAPTURE YOUR LOVE STORY</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Professional Wedding Photography & Videography Services – Cherish Every Beautiful Moment Forever.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;
