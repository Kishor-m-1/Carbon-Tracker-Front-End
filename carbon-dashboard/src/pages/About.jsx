const About=()=>{
    return(
        <div className="bg-gray-900 grid grid-cols-1 p-4 md:grid-cols-2 gap-20 mb-8 max-w-7xl mx-auto">
            <div className="text-white text-center max-w-2xl">
                <div className="p-6 px-2">
                    <h3 className="text-3xl font-bold mb-2">Making the Invisible Visible</h3>
                    <h4 className="font-semibold">Track, understand, and reduce your digital carbon footprint in real-time.</h4>
                </div>
                <div className="p-6 px-2">
                    <h3 className="text-3xl font-bold mb-2">The Hidden Cost of Our Digital Lives</h3>
                    <p>We stream, we search, and we generate AI content every single day. But while the internet feels weightless, it relies on a 
                        massive, energy-intensive physical infrastructure. Every email sent, every 4K video streamed, and every AI prompt generated carries a carbon cost.
                        As our digital consumption grows, so does our environmental impact. We built this tracker because you can't improve what you don't measure.
                        </p>
                </div>
                <div className="p-6 px-2">
                    <h3 className="text-3xl font-bold mb-2">Empowering Sustainable Browsing</h3>
                    <li>
                        <p>
                            Real-Time Tracking: Our background extension silently calculates the estimated emissions of your daily web 
                            browsing and screen time without invading your privacy.
                        </p>
                    </li>
                    <li>
                        <p>
                            AI & Heavy-Compute Monitoring: Not all tasks are created equal. We provide specialized metrics to show the true cost of compute-heavy tasks like 
                            AI image generation and large language model queries.
                        </p>
                        </li>
                        <li>
                        <p>
                            The Eco-Simulator: A safe sandbox to experiment with your habits. Discover exactly how much CO₂ you could save by tweaking your streaming resolution, 
                            pausing autoplay, or switching to dark mode.
                        </p>
                    </li>
                </div>
                <div className="p-6 px-2">
                    <h3 className="text-3xl font-bold mb-2">Our Mission : Towards a Greener Web</h3>
                    <p>
                        Technology should move humanity forward, not set our planet backward. Our goal is to empower users with the data they need to make mindful, sustainable choices online. By making small adjustments 
                        to our digital routines, we can collectively make a massive impact.
                    </p>
                </div>
                <div className="p-6 px-2">
                    <h3 className="text-3xl font-bold mb-2">Built by Forward-Thinking Developers</h3>
                    <p>This platform was developed as a comprehensive solution to modern digital sustainability. Built with a modern React frontend and a robust backend engine, 
                        it serves as a bridge between data analytics and environmental responsibility.
                        </p>
                </div>
            </div>
            <div className="bg-black">

            </div>
        </div>
        
    );
};

export default About;