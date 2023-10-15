import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png"
import "./Nav.css";
function Navbar() {
  const initialItems = [
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Toys",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState(initialItems);
  const [moreItems, setMoreItems] = useState([]);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(initialItems.length);
  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  useEffect(() => {
    // Add an event listener to track window size changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Call the handleResize function initially and add a resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Calculate the number of items to show based on window width
    const calculatedItemsToShow = Math.ceil(windowWidth / 280); // Adjust the item width as needed
    setItemsToShow(calculatedItemsToShow);

    // Calculate items to hide
    const itemsToHide = initialItems.length - calculatedItemsToShow;

    // Create a copy of the items array and hide items that don't fit
    const updatedItems = [...initialItems];
    if (itemsToHide > 0) {
      updatedItems.splice(-itemsToHide, itemsToHide);
    }

    // Update the state with the modified items
    setItems(updatedItems);

    // Update the moreItems state if needed
    if (itemsToHide > 0) {
      setMoreItems(initialItems.slice(-itemsToHide));
    } else {
      setMoreItems([]);
    }
    console.log(moreItems);
  }, [windowWidth]);

  return (
    <div className="navbar">
      <ul>
        <img className="img-nav" src={logo}/>
        {items.map((item, index) => (
          <li className="item" key={index}>
            <a>{item}</a>
          </li>
        ))}

        {moreItems.length > 0 && (
          <li>
            <a className="item">More</a>

            <ul className="dropdown">
              {moreItems.map((item, index) => (
                <li className="item" key={index}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </li>
        )}
        
        
      </ul>
    </div>
  );
}

export default Navbar;
