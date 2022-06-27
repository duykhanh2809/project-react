import ProductItem from "../Product/ProductItem";

const AllFootwear = function () {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pages-all">
      <p className="sub-heading mg-bt-large ">All footwear</p>
      <div className="pages-all__grid">
        {data.map((ele, ind) => {
          return <ProductItem id={ele} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default AllFootwear;
