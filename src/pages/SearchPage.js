import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "./response";
import Search from "./Search";
import "./searchpage.css";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { InsertEmoticon } from "@mui/icons-material";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

  // const data = response;
  console.log(data);

  return (
    <div className="searchpage">
      <div className="sp-header">
        <Link to="/">
          <img
            className="sp-logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="sp-headerbody">
          <Search val={term} hideButtons />
          <div className="sp-options">
            <div className="sp-option-left">
              <div className="sp-ipt">
                <SearchIcon />
                <Link to="/option">All</Link>
              </div>
              <div className="sp-ipt">
                <NewspaperIcon />
                <Link to="/option">News</Link>
              </div>
              <div className="sp-ipt">
                <ImageSearchIcon />
                <Link to="/option">Images</Link>
              </div>
              <div className="sp-ipt">
                <AddLocationAltIcon />
                <Link to="/option">Maps</Link>
              </div>
              <div className="sp-ipt">
                <ShoppingBasketIcon />
                <Link to="/option">Shopping</Link>
              </div>
              <div className="sp-ipt">
                <MoreHorizIcon />
                <Link to="/option">More</Link>
              </div>
            </div>
            <div className="sp-option-right">
              <div className="sp-ipt">
                <Link to="/option">Setting</Link>
              </div>
              <div className="sp-ipt">
                <Link to="/option">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sp-results">
        <div className="sp-result-count">
          About {data?.searchInformation.formattedTotalResults} results
          ({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </div>

        {data?.items.map((item) => (
          
          <div className="sp-comp">
              {/* <div csName="pic-link">
                  <img cl src={item.pagemap?.cse_image?.length>0&&item.pagemap?.cse_image[0]?.src} alt="" />
              </div>las */}
            <a   className="sp-result-link" href={item.link}>{item.displayLink}</a>

            <a className="sp-result-Tittle" href={item.link}>
              {item.title}
            </a>
            <p className="sp-result-snippet">{item.snippet}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default SearchPage;
