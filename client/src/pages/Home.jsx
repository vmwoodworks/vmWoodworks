import { useState } from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [mainImage, setMainImage] = useState("/assets/images/featured1.jpg");
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/assets/images/featured1.jpg",
      description:
        "A modern kitchen, designed by your company, features sleek, two-tone cabinets, stainless steel appliances, a marble backsplash, and a breakfast bar with three stools beneath a unique pendant light fixture.",
      category: "Kitchen",
    },
    {
      src: "/assets/images/featured2.jpg",
      description:
        "This kitchen features a large island with a dark countertop and white cabinetry. Stainless steel appliances and a light wood floor complete the classic design, enhanced by pendant lighting.",
      category: "Kitchen",
    },
    {
      src: "/assets/images/featured3.jpg",
      description:
        " This bright space combines a kitchen with a light wood island and marble countertop alongside a navy blue closet system for stylish storage.",
      category: "Kitchen, Closet",
    },
    {
      src: "/assets/images/featured4.jpg",
      description:
        "This custom ceiling features a coffered design with natural wood beams, creating a sophisticated and spacious feel in the room. Recessed lighting enhances the architectural details.",
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
              className={`img-carousel-div ${
                activeIndex === index ? "active" : ""
              }`}
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
        <h2 className="heading">
        <span>VM Woodworks</span>: Where Craftsmanship Meets Design
        </h2>
        <p>
        At VM Woodworks, we believe your home should reflect your unique style, which is why we specialize in custom-built kitchens, cabinets, and furniture that seamlessly blend form and function. From designing dream kitchens and storage solutions to crafting unique furniture, we guide you through every step of the process, delivering timeless pieces that elevate your living space with sophistication and practicality.
        </p>
      </div>
    </div>
  );
}
