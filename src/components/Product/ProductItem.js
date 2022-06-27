const ProductItem = (props) => {
  const productClasses = props.hidden
    ? "product-item product-hidden"
    : "product-item";
  return (
    <figure className={productClasses}>
      <span className="text-describe">-30% - {`Item --- ${props.id}`}</span>
      <img
        src="https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_072Angel3_640x.jpg?v=1644524185"
        alt="Shoe 1"
        className="product-item__img"
      />
      <figcaption>
        <p className="sub-heading">LT 02 Light Sand</p>
        <p className="text-describe">
          <del>€209</del>€146,30
        </p>
      </figcaption>
    </figure>
  );
};

export default ProductItem;
