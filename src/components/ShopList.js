
import ShopItem from "./ShopItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
const ShopList = () => {
  const user = useSelector(state => state.user.user)

  const [query, setQuery] = useState("");
  const shopsData = useSelector((state) => state.shops.shops);
  let shops = shopsData
    .filter((shop) =>
      shop.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <center>
      {user?
      <>
      <SearchBar setQuery={setQuery} />
      {shops}
      </>
       :  <Redirect to="/" />     }
    </center>
  );
};

export default ShopList;