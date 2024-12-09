import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogTemplate.css';

const blogs = [
  
  { title: 'Gujrat’s First Vande Metro: A New Era of Connectivity Between Ahmedabad and Dholera', intro: 'An overview of the ambitious Dholera Smart City project.', image: 'images/dhol.png', id: 1 },
  { title: 'Investment Opportunities in Dholera', intro: 'Exploring investment opportunities in Dholera.', image: 'images/dholera_3.jpg', id: 2 },
  { title: 'Dholera: The Future of Urban Development', intro: 'How Dholera is shaping the future of urban development.', image: 'images/dholera_map.png', id: 3 },
  { title: 'Infrastructure Projects in Dholera', intro: 'A look at the major infrastructure projects in Dholera.', image: 'images/dhol.png', id: 4 },
  { title: 'Dholera’s Green City Initiative', intro: 'Dholera’s initiatives towards creating a green city.', image: 'images/emitence_dholera4.jpg', id: 5 },
  { title: 'Dholera Special Investment Region (SIR)', intro: 'Understanding the Dholera Special Investment Region.', image: 'images/dholera_3.jpg', id: 6 },
  { title: 'Real Estate in Dholera', intro: 'Current trends and future prospects in Dholera’s real estate.', image: 'images/dhol.png', id: 7 },
  { title: 'Dholera: A Hub for Industries', intro: 'Why Dholera is becoming a hub for various industries.', image: 'images/emitence_dholera5.png', id: 8 },
  { title: 'Education Facilities in Dholera', intro: 'Educational infrastructure and opportunities in Dholera.', image: 'images/dholera_3.jpg', id: 9 },
  { title: 'Healthcare Services in Dholera', intro: 'An overview of healthcare services in Dholera.', image: 'images/emitence_dholera_@.jpg', id: 10 },
  { title: 'Dholera’s Transportation Network', intro: 'How Dholera’s transportation network is evolving.', image: 'images/dhol.png', id: 11 },
  { title: 'Smart Technologies in Dholera', intro: 'Implementation of smart technologies in Dholera.', image: 'images/emitence_dholera.png', id: 12 },
  { title: 'Sustainability Initiatives in Dholera', intro: 'Sustainability is integral to Dholera’s vision of a smart, green city that balances economic growth with environmental conservation.', image: 'images/dhol.png', id: 13 },
  { title: 'Living in Dholera', intro: 'A guide to living in Dholera Smart City.', image: 'images/dhol.png', id: 14 },
  { title: 'Dholera’s Water Management System', intro: 'How Dholera manages its water resources.', image: 'images/dhol.png', id: 15 },
  { title: 'Renewable Energy in Dholera', intro: 'The role of renewable energy in Dholera’s development.', image: 'images/dhol.png', id: 16 },
  // { title: 'Cultural Heritage of Dholera', intro: 'Exploring the cultural heritage of Dholera.', image: 'images/dholera_3.jpg', id: 17 },
  // { title: 'Dholera’s Economic Growth', intro: 'Factors driving economic growth in Dholera.', image: 'images/dhol.png', id: 18 },
  // { title: 'Smart Governance in Dholera', intro: 'How smart governance is implemented in Dholera.', image: 'images/dholera_3.jpg', id: 19 },
  // { title: 'Environmental Sustainability in Dholera', intro: 'Efforts towards environmental sustainability in Dholera.', image: 'images/dhol.png', id: 20 },
  // { title: 'Dholera’s Residential Projects', intro: 'A look at residential projects in Dholera.', image: 'images/dholera_3.jpg', id: 21 },
  // { title: 'Dholera’s Connectivity to Major Cities', intro: 'How Dholera is connected to major cities in India.', image: 'images/dholera_3.jpg', id: 22 },
  // { title: 'Dholera’s IT and Tech Sector', intro: 'The growth of the IT and tech sector in Dholera.', image: 'images/dhol.png', id: 23 },
  // { title: 'Dholera’s Urban Planning', intro: 'The innovative urban planning strategies in Dholera.', image: 'images/dholera_3.jpg', id: 24 },
  // { title: 'Public Services in Dholera', intro: 'Overview of public services available in Dholera.', image: 'images/dhol.png', id: 25 },
  // { title: 'Dholera’s Financial Sector', intro: 'Development of the financial sector in Dholera.', image: 'images/dhol.png', id: 26 },
  // { title: 'Dholera’s Port and Maritime Infrastructure', intro: 'The role of port and maritime infrastructure in Dholera’s growth.', image: 'images/dholera_3.jpg', id: 27 },
  // { title: 'Agriculture in Dholera', intro: 'Modern agricultural practices in Dholera.', image: 'images/dhol.png', id: 28 },
  // { title: 'Dholera’s Startup Ecosystem', intro: 'The vibrant startup ecosystem in Dholera.', image: 'images/dholera_3.jpg', id: 29 },
  // { title: 'Future Prospects of Dholera', intro: 'The future prospects and potential of Dholera Smart City.', image: 'images/dhol.png', id: 30 },
];

const BlogTemplate = () => {
  const history = useHistory();

  const handleBlogClick = (id) => {
    history.push(`/blog/${id}`);
  };

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className={`blog-card size-${index % 3}`} key={index} onClick={() => handleBlogClick(blog.id)}>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-intro">{blog.intro}</p>
              <button className="read-more-button">Read More</button>
            </div>
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTemplate;
