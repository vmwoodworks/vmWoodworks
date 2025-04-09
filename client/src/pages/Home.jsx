import { useState } from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [mainImage, setMainImage] = useState("/assets/images/featured1.jpg");
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/assets/images/featured1.jpg",
      description: "A modern kitchen, designed by your company, features sleek, two-tone cabinets, stainless steel appliances, a marble backsplash, and a breakfast bar with three stools beneath a unique pendant light fixture.",
      category: "Kitchen",
    },
    {
      src: "/assets/images/featured2.jpg",
      description: "This kitchen features a large island with a dark countertop and white cabinetry. Stainless steel appliances and a light wood floor complete the classic design, enhanced by pendant lighting.",
      category: "Kitchen",
    },
    {
      src: "/assets/images/featured3.jpg",
      description: " This bright space combines a kitchen with a light wood island and marble countertop alongside a navy blue closet system for stylish storage.",
      category: "Kitchen, Closet",
    },
    {
      src: "/assets/images/featured4.jpg",
      description: "This modern, built-in dresser offers a sleek, dark blue finish with nine drawers, providing ample and concealed storage space. Its minimalist design enhances any room.",
      category: "Dresser",
    },
    {
      src: "/assets/images/featured5.jpg",
      description: "This custom ceiling features a coffered design with natural wood beams, creating a sophisticated and spacious feel in the room. Recessed lighting enhances the architectural details.",
      category: "Custom Ceiling",
    },
  ];

  return (
    <div className="homepage">
      <h2 className="heading">Our Featured Designs</h2>
      <div className="hero-section">
        <div className="hero-main-img">
          <img className="main-image" src={mainImage} alt="Main Display" />
          <Link to="/portfolio">
            <button className="see-more-button">See More Designs</button>
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="img-carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`img-carousel-div ${activeIndex === index ? "active" : ""}`}
              onClick={() => {
                setMainImage(image.src);
                setActiveIndex(index);
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={image.src} alt={`Featured ${index + 1}`} />
              <div className="img-desc">
                <p>{image.description}</p>
                <p className="category">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="heading">VM Woodworks: Where Craftsmanship Meets Design</h2>
        <p>
          At VM Woodworks, we believe that your home should reflect your unique
          style, and there's no better way to achieve this than with
          custom-built kitchens, cabinets, and furniture. Specializing in
          bespoke woodworking, we create timeless pieces that seamlessly blend
          form and function. Whether you're looking to design a dream kitchen,
          build storage solutions like cabinets and closets, or bring a unique
          piece of furniture to life, we’re here to make it happen.
        </p>
        <p>
          At VM Woodworks, we don’t just build furniture; we build relationships.
          From concept to completion, we guide you through every step of the
          process, delivering results that exceed expectations. Whether you’re
          transforming a single room or undertaking a full home renovation, our
          custom kitchens, cabinets, and closets are designed to elevate your
          living space with sophistication and practicality.
        </p>
      </div>
    </div>
  );
}
