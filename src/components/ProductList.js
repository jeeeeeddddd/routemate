import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {

  const [searchParams] = useSearchParams();
  //const location = useLocation();

  console.log(location);
  //console.log(searchParams.get("keyword"));

    return (
      <div className="component">ProductList</div>
    )
  }