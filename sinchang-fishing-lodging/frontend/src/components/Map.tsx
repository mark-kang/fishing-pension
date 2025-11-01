import React from 'react';

const Map: React.FC = () => {
    return (
        <div className="map-container">
            <h2 className="text-center text-2xl font-bold">Our Location</h2>
            <div className="map" id="map" style={{ height: '400px', width: '100%' }}>
                {/* Map implementation will go here */}
            </div>
        </div>
    );
};

export default Map;