function HeroSection() {
    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-center justify-center  h-[60vh] sm:h-[60vh] mt-8 relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1744805624890-9931ebb50428?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
