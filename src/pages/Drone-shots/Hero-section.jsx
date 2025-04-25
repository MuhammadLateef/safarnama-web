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
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DRONE VIDEO PRODUCTION COMPANY</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional aerial cinematography services for breathtaking views and stunning visual storytelling.
          </p>
        </div>
      </div>
    )
  }
  
  export default HeroSection;
  