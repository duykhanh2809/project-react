const ProductInfo = function () {
  return (
    <div className="product-info">
      <div className="product__description">
        <h3 className="heading-tertiary mg-bt-large">Description</h3>
        <p className="mg-bt-medium">
          This classic off-court sneaker comes in matching suede and nubuck
          leather. Built to last. With a nod to deconstructed silhouettes. The
          combination of leathers and minimalistic color make this a style that
          can dress up any outfit.
        </p>
        <ul className="product__description-list">
          <li>Handmade in Portugal</li>
          <li>Metal free tanned nubuck and suede upper</li>
          <li>Natural rubber outsoles</li>
          <li>
            Ultra-absorbent and abrasion resistant onSteam® microfiber lining
            (OEKO-TEX® certified)
          </li>
          <li>Tonal metal eyelets and nylon laces </li>
          <li>Branded with our signature square heel pin</li>
          <li>
            ETQ design - removable memory foam insoles with moisture management
          </li>
          <li>The Strobel construction technique offers extreme flexibility</li>
          <li>
            Comes with a multifunctional dust bag made from recycled PET bottles
          </li>
          <li>
            Delivered in a recycled cardboard shoe-and-shipping box
            (FSC-certified)
          </li>
        </ul>
      </div>
      <div className="product__information">
        <h3 className="heading-tertiary mg-bt-large">Information</h3>
        <div className="product__shipping">
          <p className="sub-heading">Shipping</p>
          <span>
            We ship worldwide and offer free shipping on all orders above €150
            in Europe and the UK. Same day shipment applies on all orders placed
            before 4pm on working days.
          </span>
          <a href="#" className="btn-default">
            More info
          </a>
        </div>
        <div className="product__sizing">
          <p className="sub-heading">Sizing</p>
          <span>
            Fits true size. If you're looking for a half size, we recommend to
            take one size up and take now.
          </span>
          <a href="#" className="btn-default">
            Size advice
          </a>
        </div>
        <div className="product__return">
          <p className="sub-heading">Return & exchange</p>
          <span>
            We offer free returns for customers based in The Netherlands,
            Luxembourg, Belgium, Germany, and France. Orders can be returned
            within a period of 30 days, starting from the moment you receive
            your order.
          </span>
          <a href="#" className="btn-default">
            More info
          </a>
        </div>
        <div className="product__help">
          <p className="sub-heading">Help</p>
          <span>
            Need some help? Call us on +31 (0) 20 225 61 53 or contact our
            customer care
          </span>
          <a href="#" className="btn-default">
            by email.
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
