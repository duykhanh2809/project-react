import { useRef, useState } from "react";
import ProductSelect from "./ProductSelect";

const ProductBuy = function (props) {
  return (
    <div className="product-buy">
      <h1 className="heading-primary">{props.productData.name}</h1>
      {props.productData.priceSale && (
        <p className="text-describe mg-bt-medium">
          <del>€{props.productData.price}</del>€{props.productData.priceSale}
        </p>
      )}
      {!props.productData.priceSale && (
        <p className="text-describe mg-bt-medium">€{props.productData.price}</p>
      )}
      <p className="text-describe">
        It&lsquo;s back. But better. Our lugged Low Top 02 is back from the
        archives. This low top style combines a classic low top with a lugged
        outsole. A hybrid for any day and any time. Adds a rugged feel to...
      </p>
      <a href="#" className="btn-default mg-bt-medium">
        More information
      </a>
      <ProductSelect />
      <a href="#" className="btn-default mg-bt-medium product-buy__guide">
        Size guide
      </a>
      <ul className="product-buy__offer text-describe">
        <li>Free shipping on all orders above €150 in Europe and the UK</li>
        <li>Orders can be returned within a period of 30 days</li>
        <li>
          We offer free returns for customers based in The Netherlands,
          Luxembourg, Belgium, Germany, and France
        </li>
        <li>
          Pay with Apple Pay, Mastercard, Visa, American Express, Paypal,
          Klarna, iDeal
        </li>
      </ul>
    </div>
  );
};

export default ProductBuy;
