import React from 'react';
import Hero from '../components/Hero';
import LodgingCard from '../components/LodgingCard';
import BoatCard from '../components/BoatCard';
import { useResponsive } from '../hooks/useResponsive';

const Home: React.FC = () => {
    const { isMobile } = useResponsive();

    return (
        <div className="home">
            <Hero />
            <section className="lodging-section">
                <h2 className="section-title">Our Lodging Options</h2>
                <div className={`lodging-cards ${isMobile ? 'mobile' : 'desktop'}`}>
                    {/* Map through lodging data to render LodgingCard components */}
                    {/* Example data, replace with actual data from state or props */}
                    {[1, 2, 3].map((lodging) => (
                        <LodgingCard key={lodging} />
                    ))}
                </div>
            </section>
            <section className="boats-section">
                <h2 className="section-title">Fishing Boat Rentals</h2>
                <div className={`boat-cards ${isMobile ? 'mobile' : 'desktop'}`}>
                    {/* Map through boat data to render BoatCard components */}
                    {/* Example data, replace with actual data from state or props */}
                    {[1, 2, 3].map((boat) => (
                        <BoatCard key={boat} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;