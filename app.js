const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const menuItemsDOM = document.querySelector(".section-center");
const btnContainerDOM = document.querySelector(".btn-container");

// Creates an array of category elements, initially containing "All".
const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

// This function creates a button for each category in the categories array.
const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainerDOM.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        return category === "All" || menuItem.category === category;
      });
      menuList(menuCategory);
    });
  });
};

// This function takes an item parameter and creates a menu item based on that parameter.
const renderMenuItem = (item) => {
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-items", "col-lg-6", "col-sm-12");

  const itemPhoto = document.createElement("img");
  itemPhoto.classList.add("photo");
  itemPhoto.src = item.img;
  itemPhoto.alt = item.title;
  menuItemDiv.appendChild(itemPhoto);

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");

  const menuTitleDiv = document.createElement("div");
  menuTitleDiv.classList.add("menu-title");
  const menuTitle = document.createElement("h4");
  menuTitle.innerText = item.title;
  menuTitleDiv.appendChild(menuTitle);
  const menuPrice = document.createElement("h4");
  menuPrice.innerText = item.price;
  menuTitleDiv.appendChild(menuPrice);

  menuInfo.appendChild(menuTitleDiv);

  const menuText = document.createElement("div");
  menuText.classList.add("menu-text");
  const text = document.createElement("p");
  text.classList.add("menu-text");
  text.textContent = item.desc;
  menuText.appendChild(text);

  menuInfo.appendChild(menuText);

  menuItemDiv.appendChild(menuInfo);

  return menuItemDiv;
};

//This function is used to display and render menu items in HTML.
const menuList = (menuItems) => {
  const displayMenu = menuItems
    .map((item) => {
      const renderedItem = renderMenuItem(item);
      return renderedItem.outerHTML;
    })
    .join("");
  menuItemsDOM.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
