import "../css/homepage.css";

export default function Home() {
  return ( 
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-main-img">
            <img
              className=""
              src="/assets\images\example1.jpg"
            ></img>
        </div>
        <div className="img-carousel">
          <div className="img-carousel-div">
            <img src="/assets\images\example2.jpg" alt="" />
            <div className="img-desc">
            <p>Handmade Wood Kitchen for bla-bla-bla asdasdasdasdasdasd</p>
            <p className="category">Kitchen</p>
            </div>
          </div>
          <div className="img-carousel-div">
            <img src="/assets\images\example2.jpg" alt="" />
            <div className="img-desc">
            <p>Handmade Wood Kitchen for bla-bla-bla asdasdasdasdasdasd</p>
            <p className="category">Kitchen</p>
            </div>
          </div>
          <div className="img-carousel-div">
            <img src="/assets\images\example3.jpg" alt="" />
            <div className="img-desc">
            <p>Handmade Wood Kitchen for bla-bla-bla asdasdasdasdasdasd</p>
            <p className="category">Kitchen</p>
            </div>
          </div>
          <div className="img-carousel-div">
            <img src="/assets\images\example4.jpg" alt="" />
            <div className="img-desc">
            <p>Handmade Wood Kitchen for bla-bla-bla asdasdasdasdasdasd</p>
            <p className="category">Kitchen</p>
            </div>
          </div>
          <div className="img-carousel-div">
            <img src="/assets\images\example5.jpg" alt="" />
            <div className="img-desc">
            <p>Handmade Wood Kitchen for bla-bla-bla asdasdasdasdasdasd</p>
            <p className="category">Kitchen</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Bout</h2>
      <p>
        Introducing VMWoodworks: Where craftsmanship meets design. We specialize
        in building bespoke kitchens and cabinets, offering a seamless blend of
        functionality and aesthetics. With our expertise in both design and
        production, we bring your dream project to life.
      </p>
    </div>
  );
}
