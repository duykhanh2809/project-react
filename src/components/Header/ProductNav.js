function ProductNav(props) {
  const productClasses =
    props.page === "hero" ? "product" : "product product-modify";
  return (
    <ul className={productClasses}>
      <li>Sale</li>
      <li>Shop All</li>
      <li>E-Gift Card</li>
    </ul>
  );
}

export default ProductNav;
