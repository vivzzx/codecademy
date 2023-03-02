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

function isColorDark(colorHex) {
    // Converter cor hex para RGB
    let r = parseInt(colorHex.substr(1,2),16);
    let g = parseInt(colorHex.substr(3,2),16);
    let b = parseInt(colorHex.substr(5,2),16);
    
    // Calcular brilho relativo da cor
    let brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
    // Avaliar se a cor é clara ou escura
    if (brightness < 128) {
      return true; // Cor escura
    } else {
      return false; // Cor clara
    }
}
  
const boxColors = document.getElementById("box-colors");

for (let color in colors) {
    //console.log(`${color} ---------------------`);
    // title and text of each group of colors
    let colorTitle = document.createElement("h3");
    colorTitle.textContent =`Shades of ${color}`;
    colorTitle.className = "shades-title"
    boxColors.appendChild(colorTitle);
    // space to group of colors
    let groupColor = document.createElement("div");
    // add classes
    groupColor.className = "d-flex color-box";
    boxColors.appendChild(groupColor);

    for (const [key, value] of Object.entries(colors[color])) {
        //console.log(`${key}: ${value}`);
        let colorUnit = document.createElement("div");
        let checkDark = isColorDark(value);
        //colorUnit.className = "color-block";
        colorUnit.className = checkDark ? "color-block" : "color-block dark-txt"

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

/** ✍️ fonts section **/
const boxFonts = document.getElementById("box-fonts");

function titleEdit(title) {
    if (title.includes("-")) {
        //console.log("tem - aqui: ", title);
        let newTitle = title.replace("-", " ");
        return newTitle;
    }
    return title;
}

const fontClasses = ["playfair-display", "quicksand", "shantell-sans", "asap", "open-sans", "roboto-mono"]
const textDemo = "The quick brown fox jumps over the lazy dog."

fontClasses.map((font) => {
    let fontUnit = document.createElement("div");
    fontUnit.className = "fontUnit";
    let fontTitle = document.createElement("h3");
    let fontTitleEdit = titleEdit(font);
    fontTitle.textContent = fontTitleEdit;
    fontTitle.className = "font-title";
    fontUnit.appendChild(fontTitle);
    let txtDemoBox = document.createElement("div");
    txtDemoBox.className = font;
    let fontDemo1 = document.createElement("p");
    let fontDemo2 = document.createElement("p");
    let fontDemo3 = document.createElement("p");

    fontDemo1.textContent = textDemo;
    fontDemo2.textContent = textDemo;
    fontDemo3.textContent = textDemo;

    fontDemo2.style.fontWeight = "bold";
    fontDemo3.style.fontStyle = "italic";

    txtDemoBox.appendChild(fontDemo1);
    txtDemoBox.appendChild(fontDemo2);
    txtDemoBox.appendChild(fontDemo3);

    fontUnit.appendChild(txtDemoBox);
    boxFonts.appendChild(fontUnit);
})

/** ✍️ text styles section **/
const textStyles = [
    {
        type: "h1",
        title: "H1: Main page heading",
        weight: "700 (bold)",
        size: "26px",
        family: "Playfair Display",
    },
    {
        type: "h2",
        title: "H2: Subheading",
        weight: "500",
        size: "18px",
        family: "Nunito Sans",
    },
    {
        type: "p",
        title: "P: Paragraph text",
        weight: "400 (regular)",
        size: "14px",
        family: "Nunito Sans",
    }
]

const textStylesFonts = [
    {
        h1: "playfair-display",
        h2: "open-sans",
        p: "open-sans",
    },
    {
        h1: "shantell-sans",
        h2: "asap",
        p: "quicksand",
    },
    {
        h1: "open-sans",
        h2: "quicksand",
        p: "roboto-mono",
    }
]

const boxStyles = document.getElementById("box-styles");

const createBlockStyle = (style, counter) => {
    let styleContainer = document.createElement("div");
    let typeBlock = style.type;
    let styleTitle = document.createElement(style.type);
    styleTitle.textContent = style.title;
    styleTitle.className = textStylesFonts[counter][typeBlock];
    styleContainer.appendChild(styleTitle);
    let styleList = document.createElement("ul");
    let item1 = document.createElement("li");
    item1.textContent = "Font-weight: " + style.weight;
    styleList.appendChild(item1);
    let item2 = document.createElement("li");
    item2.textContent = "Font-size: " + style.size;
    styleList.appendChild(item2);
    let item3 = document.createElement("li");
    item3.textContent = "Font-family: " + textStylesFonts[counter][typeBlock];
    styleList.appendChild(item3);
    styleContainer.appendChild(styleList)

    return styleContainer;
}

for (let index = 0; index < 3; index++) {
    let styleUnit = document.createElement("div");
    styleUnit.className = "styleUnit";
    for (let i = 0; i < 3; i++) {
        let newStyle = createBlockStyle(textStyles[i], index);
        styleUnit.appendChild(newStyle);
    }
    boxStyles.appendChild(styleUnit)
}

/* video time rate */
const vid = document.getElementById("bg-video");
vid.playbackRate = 0.4;
