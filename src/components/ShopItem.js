// import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const ShopItem = (props) => {
  const shop = props.shop;
  return (
    <div>
        <Link to={`/shops/${shop.slug}`}>
      <h3>{shop.name}</h3>
      </Link>
        <img src={shop.img} />
      
    </div>
  );
};
export default ShopItem;