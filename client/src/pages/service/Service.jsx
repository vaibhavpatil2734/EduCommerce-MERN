import React, { useEffect, useState } from 'react';
import './service.css'; // Import a CSS file for custom styling

export default function Service() {
  const [services, setServices] = useState([]); // State to hold the services data
  const [error, setError] = useState(''); // State to hold any error message

  useEffect(() => {
    // Fetch services data from the backend
    const fetchService = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/service/service'); // Replace with your backend URL
        if (!response.ok) {
          const errorMessage = await response.text(); // Get more info about the error
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }
        const data = await response.json(); // Parse the JSON from the response
        setServices(data); // Update state with fetched services
      } catch (err) {
        console.error('Failed to fetch services:', err);
        setError('Failed to load services. Please try again later.');
      }
    };

    fetchService(); 
  }, []);

  return (
    <div className="service-container">
      <h3>Our Services</h3>
      {error && <p className="error">{error}</p>} {/* Display error message if any */}
      <div className="cards-container">
        {services.map((service) => (
          <div key={service._id} className="card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <p><strong>Benefit:</strong> {service.benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
