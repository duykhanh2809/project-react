import ProductItem from "../Product/ProductItem";

const Sale = function () {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pages-sale">
      <p className="sub-heading mg-bt-medium ">We're live.</p>
      <h2 className="heading-secondary mg-bt-huge">S/S 22 Sale. 30% Off.</h2>
      <div className="pages-sale__grid">
        {data.map((ele, ind) => {
          return <ProductItem id={ele} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default Sale;
