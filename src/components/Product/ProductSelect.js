import { useState } from "react";

const ProductSelect = function () {
  const [size, setSize] = useState();
  return (
    <form className="product-select">
      <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">--Size--</option>
        <option value="EU 39 | US 6 | UK 5">EU 39 | US 6 | UK 5</option>
        <option value="EU 40 | US 7 | UK 6">EU 40 | US 7 | UK 6</option>
        <option value="EU 41 | US 8 | UK 7">EU 41 | US 8 | UK 7</option>
        <option value="EU 42 | US 9 | UK 8">EU 42 | US 9 | UK 8</option>
        <option value="EU 43 | US 10 | UK 9">EU 43 | US 10 | UK 9</option>
        <option value="EU 44 | US 11| UK 10">EU 44 | US 11| UK 10</option>
        <option value="EU 45 | US 12| UK 11">EU 45 | US 12| UK 11</option>
        <option value="EU 46 | US 13| UK 12">EU 46 | US 13| UK 12</option>
      </select>
      <button className="btn btn-create" disabled={!size} type="submit">
        Add to bag
      </button>
    </form>
  );
};

export default ProductSelect;
