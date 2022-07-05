function About() {
  return (
    <section className="about-section container">
      <div className="about__item">
        <img
          src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Laundry_Store_Homepage-image_750x.jpg?v=1631259918"
          alt="Store space 1"
          className=" about__img"
        />
        <p className="sub-heading mg-bt-small">ETQ Laundry Store</p>
        <p className="text-describe">Let us clean your shoes</p>
      </div>
      <div className="about__item">
        <img
          src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Store-New-Wall_0ebac655-98b3-41ef-9df9-5a1ec474b90a_750x.jpg?v=1621592281"
          alt="Store space 2"
          className=" about__img"
        />
        <p className="sub-heading mg-bt-small">Amsterdam Flagship Store</p>
        <p className="text-describe">Find us at Singel 465</p>
      </div>
    </section>
  );
}

export default About;
