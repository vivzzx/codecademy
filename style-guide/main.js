/* 🌈 colors section */
const colors = {
    red: {
        cherry: "#990F02",
        jam: "#60100B",
        apple: "#A91B0D",
        sangria: "#5E1916",
        blush: "#BC544B",
    },
    orange: {
        tangerine: "#FA8128",
        rust: "#8D4004",
        ginger: "#BE5504",
        honey: "#EC9706",
        cantaloupe: "#FDA172",
    },
    yellow: {
        beige: "#EEDC9A",
        macaroon: "#F9E076",
        oat: "#DFC98A",
        latte: "#E7C27D",
        sand: "#E7C27D",
    },
    green: {
        juniper: "#3A5311",
        sage: "#728C69",
        mint: "#99EDC3",
        pistacchio: "#B2D3C2",
        croco: "#607D3B",
    },
    blue: {
        sky: "#63C5DA",
        teal: "#48AAAD",
        aegean: "#1F456E",
        denim: "#151E3D",
        stone: "#59788E",
    },
    purple: {
        mauve: "#7A4988",
        plum: "#601A35",
        grape: "#663046",
        rasin: "#290916",
        violet: "#700193",
    },
    pink: {
        pink: "#F699CD",
        punch: "#F25278",
        lemonade: "#FCBACB",
        rosewood: "#9E4244",
        watermelon: "#FE7F9C",
    },
    brown: {
        mocha: "#3C280D",
        peanut: "#795C34",
        tortilla: "#9A7B4F",
        walnut: "#432616",
        caramel: "#65350F",
    },
    grey: {
        gray: "#808080",
        iron: "#322D31",
        cloud: "#C5C6D0",
        coin: "#9897A9",
        lead: "#3F3F4E",
    },
    white: {
        frost: "#FCFBFC",
        rice: "#FAF5EF",
        salt: "#F8EEEC",
        ivory: "#FDF6E4",
        alabaster: "#FEF9F3",
    }
}

const boxColors = document.getElementById("box-colors");

for (let color in colors) {
    console.log(`${color} ---------------------`);
    // title and text of each group of colors
    let colorTitle = document.createElement("h3");
    colorTitle.textContent =`Shades of ${color}`;
    boxColors.appendChild(colorTitle);
    // space to group of colors
    let groupColor = document.createElement("div");
    // add classes
    groupColor.className = "d-flex color-box";
    boxColors.appendChild(groupColor);

    for (const [key, value] of Object.entries(colors[color])) {
        console.log(`${key}: ${value}`);
        let colorUnit = document.createElement("div");
        colorUnit.className = "color-block";

        /* color title */
        let colorUnitTitle = document.createElement("h4");
        colorUnitTitle.textContent = key;
        colorUnit.appendChild(colorUnitTitle);
        /* color subtitle */
        let colorUnitSubtitle = document.createElement("p");
        colorUnitSubtitle.textContent = value;
        colorUnit.appendChild(colorUnitSubtitle);
        /* color block background */
        colorUnit.style.backgroundColor = value;
        groupColor.appendChild(colorUnit);
    }
}

/* ✍️ fonts section */
const boxFonts = document.getElementById("box-fonts");
