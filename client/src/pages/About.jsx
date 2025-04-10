import '../css/about.css';

export default function About() {
  return (
    <div className="about-container">
      <h2 className="heading">About</h2>
      
      <div className="about-section-page">
        <div className="about-content">
          <p>At <span style={{color: '#1d3503'}}>VM Woodworks</span>, we craft more than just furniture—we create pieces that become part of your home's story. With years of experience in custom furniture design, we specialize in bespoke kitchens and cabinets tailored to fit your space, style, and needs. From concept to completion, every detail is handled with care, precision, and craftsmanship that speaks for itself. Whether it's a full kitchen renovation or a custom storage solution, we work closely with our clients to bring their vision to life with quality materials and timeless design.</p>
        </div>
        <div className="about-image-container">
          <img className="about-image" src="assets/images/about-1.jpg" alt="Custom woodworking" />
        </div>
      </div>
      
      <div className="about-section-page reverse">
        <div className="about-image-container">
          <img className="about-image" src="assets/images/about-2.jpg" alt="Woodworking craftsmanship" />
        </div>
        <div className="about-content">
          <p>At the heart of <span style={{color: '#1d3503'}}>VM Woodworks</span> is a commitment to excellence, integrity, and customer satisfaction. Our philosophy is simple: design with purpose, build with passion. We believe that great furniture should not only look beautiful but also function flawlessly for years to come. Our goal is to deliver personalized solutions that enhance everyday living while building long-term relationships with our clients. Rooted in honesty, creativity, and craftsmanship, we aim to set a standard in custom woodworking that reflects both our dedication to the trade and our respect for your home.</p>
        </div>
      </div>
    </div>
  );
}