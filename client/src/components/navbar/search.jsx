import PopupCart from "../cart/popupcart";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
export default function Search()  {
  const [search, setSearch] = useState("");
	const navigate = useNavigate();

	function handleSearchChange(e) {
		const value = e.target.value;
		setSearch(value);
	}
	function handleSearchKeyUp(e) {
		const value = e.target.value;
		if (e.keyCode === 13) {
			if (!value) return;
			navigate({
				pathname: "/search",
				search: `?${createSearchParams({
					q: value,
				})}`,
			});
		}
	}
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top header_top"
        id="mainNav"
      >
        <div className="col-lg-2 col-md-3 col-12 ">
          <div className="right-bar">
            <div className="grid">
              <div className="header-with-search col-md-12">
                <div className="header-search">
                  <div className="header-search-input-wrap">
                    <input
                      className="header-search-input"
                      type="text"
                      placeholder="Tìm kiếm"
                      value={search}
                      onKeyUp={handleSearchKeyUp}
                      onChange={handleSearchChange}
                    ></input>
                  
                  </div>

                  <div
                    className="header-search-btn"
                  >
                    <i className="header-search-btn-icon ti-search"></i>
                  </div>
                </div>
                <PopupCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
