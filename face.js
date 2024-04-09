const createItem = (type, name, src) => {
  const itemWrapper = document.createElement("div");
  itemWrapper.className = "item-wrapper";

  const itemImg = document.createElement("img");
  itemImg.className = "item-img";
  itemImg.src = src;

  const itemName = document.createElement("div");
  itemName.id = `name_${type}_${name}`;
  itemName.className = "item-name font-title-mono";
  itemName.innerText = name;

  const onItemClick = () => {
    localStorage.setItem(type, src);
    document.getElementById(`preview-${type}`).src = src;
  };
  itemWrapper.addEventListener("mouseenter", () => {
    document.getElementById(`name_${type}_${name}`).style.display = "block";
  });
  itemWrapper.addEventListener("mouseleave", () => {
    document.getElementById(`name_${type}_${name}`).style.display = "none";
  });

  itemWrapper.append(itemImg, itemName);
  itemWrapper.onclick = onItemClick;
  return itemWrapper;
};

const faceItems = [
  {
    type: "face",
    name: "yellow face",
    src: "assets/face_yellow.png",
  },
  {
    type: "face",
    name: "blue face",
    src: "assets/face_blue.png",
  },
  {
    type: "face",
    name: "green face",
    src: "assets/face_green.png",
  },
  {
    type: "face",
    name: "orange face",
    src: "assets/face_orange.png",
  },
  {
    type: "face",
    name: "white face",
    src: "assets/face_white.png",
  },
  {
    type: "face",
    name: "pink face",
    src: "assets/face_pink.png",
  },
  {
    type: "face",
    name: "skyblue face",
    src: "assets/face_skyblue.png",
  },
  {
    type: "face",
    name: "purple face",
    src: "assets/face_purple.png",
  },
  {
    type: "face",
    name: "gray face",
    src: "assets/face_gray.png",
  },
];

const eyeItems = [
  {
    type: "eye",
    name: "smile eyes",
    src: "assets/eye_smile.png",
  },
  {
    type: "eye",
    name: "open eyes",
    src: "assets/eye_open.png",
  },
  {
    type: "eye",
    name: "glow eyes",
    src: "assets/eye_glow.png",
  },
  {
    type: "eye",
    name: "laugh eyes",
    src: "assets/eye_laugh.png",
  },
  {
    type: "eye",
    name: "spin eyes",
    src: "assets/eye_spin.png",
  },
  {
    type: "eye",
    name: "wink eyes",
    src: "assets/eye_wink.png",
  },
];

const mouthItems = [
  {
    type: "mouth",
    name: "charm mouth",
    src: "assets/mouth_charm.png",
  },
  {
    type: "mouth",
    name: "grin mouth",
    src: "assets/mouth_grin.png",
  },
  {
    type: "mouth",
    name: "laugh mouth",
    src: "assets/mouth_laugh.png",
  },
  {
    type: "mouth",
    name: "smile mouth",
    src: "assets/mouth_smile.png",
  },
  {
    type: "mouth",
    name: "surprise mouth",
    src: "assets/mouth_surprise.png",
  },
];

const accessoryItems = [
  {
    type: "accessory",
    name: "birthday hat",
    src: "assets/accessory_birthday.png",
  },
  {
    type: "accessory",
    name: "clown mask",
    src: "assets/accessory_clown.png",
  },
  {
    type: "accessory",
    name: "ghost mask",
    src: "assets/accessory_ghost.png",
  },
  {
    type: "accessory",
    name: "glasses",
    src: "assets/accessory_glasses.png",
  },
  {
    type: "accessory",
    name: "ribbon",
    src: "assets/accessory_ribbon.png",
  },
];

const expressionItems = [
  {
    type: "expression",
    name: "bad expression",
    src: "assets/expression_bad.png",
  },
  {
    type: "expression",
    name: "blush expression",
    src: "assets/expression_blush.png",
  },
  {
    type: "expression",
    name: "heart expression",
    src: "assets/expression_heart.png",
  },
  {
    type: "expression",
    name: "party expression",
    src: "assets/expression_party.png",
  },
  {
    type: "expression",
    name: "tear expression",
    src: "assets/expression_tear.png",
  },
];

const createItemRail = (items, alignLeft) => {
  const itemRailWrapper = document.createElement("div");
  itemRailWrapper.className = "rail-wrapper";

  const itemRailRow = document.createElement("div");
  itemRailRow.className = "rail-row";
  if (alignLeft) itemRailRow.classList.add("rail-row-left");

  const itemRailImg = document.createElement("img");
  itemRailImg.className = "rail-img";
  itemRailImg.src = "assets/star.png";
  if (alignLeft) itemRailImg.classList.add("rail-img-left");

  itemRailWrapper.append(itemRailRow, itemRailImg);

  items.forEach((el) => {
    itemRailRow.appendChild(createItem(el.type, el.name, el.src));
  });

  return itemRailWrapper;
};

const createPreview = () => {
  const previewWrapper = document.createElement("div");
  previewWrapper.className = "preview-wrapper";

  const previewFace = document.createElement("img");
  previewFace.className = "preview-img";
  previewFace.id = "preview-face";
  previewFace.src = "assets/face_skyblue.png";
  localStorage.setItem("face", "assets/face_skyblue.png");

  const previewEye = document.createElement("img");
  previewEye.className = "preview-img";
  previewEye.id = "preview-eye";
  previewEye.src = "assets/eye_wink.png";
  localStorage.setItem("eye", "assets/eye_wink.png");

  const previewMouth = document.createElement("img");
  previewMouth.className = "preview-img";
  previewMouth.id = "preview-mouth";
  previewMouth.src = "assets/mouth_charm.png";
  localStorage.setItem("mouth", "assets/mouth_charm.png");

  const previewAccessory = document.createElement("img");
  previewAccessory.className = "preview-img";
  previewAccessory.id = "preview-accessory";
  previewAccessory.src = "assets/accessory_glasses.png";
  localStorage.setItem("accessory", "assets/accessory_glasses.png");

  const previewExpression = document.createElement("img");
  previewExpression.className = "preview-img";
  previewExpression.id = "preview-expression";
  previewExpression.src = "assets/expression_party.png";
  localStorage.setItem("expression", "assets/expression_party.png");

  previewWrapper.append(
    previewFace,
    previewEye,
    previewMouth,
    previewAccessory,
    previewExpression
  );
  return previewWrapper;
};

document.body.append(createPreview());

const railColLeft = document.createElement("div");
railColLeft.className = "col-left";
railColLeft.append(
  createItemRail(faceItems, true),
  createItemRail(eyeItems, true),
  createItemRail(mouthItems, true)
);
document.body.append(railColLeft);

const railColRight = document.createElement("div");
railColRight.className = "col-right";
railColRight.append(
  createItemRail(accessoryItems, false),
  createItemRail(expressionItems, false)
);
document.body.append(railColRight);
