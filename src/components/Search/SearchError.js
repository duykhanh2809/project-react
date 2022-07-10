import { useState, useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import { Hash } from "phosphor-react";

const SearchError = function () {
  const [productSearch, setProductSearch] = useState([]);
  const [notFoundSearch, setNotFoundSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const { dataRender, hasError, fetchShoesSale } = useFetch();
  // const [querySearch, setQuerySearch] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("running");

  const queryParams = new URLSearchParams(location.search);
  const renderData = function () {
    const isSearch = queryParams.get("searchTerm");
    console.log(isSearch);
    setValueSearch(isSearch);
    console.log(dataRender);
    const product = dataRender.filter((ele) => {
      return ele.name.toLowerCase().includes(isSearch);
    });
    console.log(product);
    product.length === 0 && location.search !== ""
      ? setNotFoundSearch(true)
      : setNotFoundSearch(false);

    setProductSearch(product);
    console.log("render data running");
  };

  const changeValSearchHandler = function (event) {
    if (event.target.value === "") {
      setProductSearch([]);
      navigate({
        pathname: location.pathname,
        search: "",
      });
      // setQuerySearch("");
      return;
    }

    navigate({
      pathname: location.pathname,
      search: `?searchTerm=${event.target.value}`,
    });
    // setQuerySearch(`?searchTerm=${event.target.value}`);
    console.log("value change running");
  };

  useEffect(() => {
    fetchShoesSale(
      "https://project-react-cf626-default-rtdb.firebaseio.com/all.json"
    );

    console.log("effect 1 running");
  }, [fetchShoesSale]);

  useEffect(() => {
    renderData();
    console.log("effect 2 running");
  }, [location]);

  return (
    <section className="search-section container">
      <input
        type="text"
        placeholder="Start typing what you're looking for"
        className="search__input"
        onChange={changeValSearchHandler}
      />
      {notFoundSearch && (
        <div className="search__notfound">
          <Hash size={32} />
          <p className="search__notfound-heading">NO SEARCH RESULTS FOUND</p>
          <p>NO RESULTS FOUND FOR THE SEARCH: "{valueSearch.toUpperCase()}"</p>
        </div>
      )}
      {hasError && <p className="error-boundary">{hasError}</p>}
      <div className="search__result">
        {productSearch.map((ele, ind) => {
          return <ProductItem key={ind} product={ele} isSale={ele.priceSale} />;
        })}
      </div>
    </section>
  );
};

export default SearchError;
