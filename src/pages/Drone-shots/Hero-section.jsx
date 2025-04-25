function HeroSection() {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container mx-auto px-4 text-white text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">DRONE VIDEO PRODUCTION COMPANY </h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Best Drone Photography & Videography Services in Gilgit Baltistan – Aerial Shots for Events, Tours & Real Estate
                </p>
            </div>
        </div>
    )
}

export default HeroSection;
