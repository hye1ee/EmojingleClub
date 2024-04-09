const getIdNumber = () => {
  let idNum = "";
  for (let i = 0; i < 10; i++) {
    idNum += Math.floor(Math.random() * 16).toString(16);
  }
  return idNum.toUpperCase();
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};

const createIdFace = () => {
  const IdFaceWrapper = document.createElement("div");
  IdFaceWrapper.className = "card-face";

  const IdFaceface = document.createElement("img");
  IdFaceface.className = "preview-img";
  IdFaceface.id = "preview-face";
  IdFaceface.src = localStorage.getItem("face");

  const IdFaceEye = document.createElement("img");
  IdFaceEye.className = "preview-img";
  IdFaceEye.id = "preview-eye";
  IdFaceEye.src = localStorage.getItem("eye");

  const IdFaceMouth = document.createElement("img");
  IdFaceMouth.className = "preview-img";
  IdFaceMouth.id = "preview-mouth";
  IdFaceMouth.src = localStorage.getItem("mouth");

  const IdFaceAccessory = document.createElement("img");
  IdFaceAccessory.className = "preview-img";
  IdFaceAccessory.id = "preview-accessory";
  IdFaceAccessory.src = localStorage.getItem("accessory");

  const IdFaceExpression = document.createElement("img");
  IdFaceExpression.className = "preview-img";
  IdFaceExpression.id = "preview-expression";
  IdFaceExpression.src = localStorage.getItem("expression");

  IdFaceWrapper.append(
    IdFaceface,
    IdFaceEye,
    IdFaceMouth,
    IdFaceAccessory,
    IdFaceExpression
  );
  return IdFaceWrapper;
};

const idNumber = document.createElement("div");
idNumber.innerText = getIdNumber();
idNumber.className = "font-title-serif card-id";
document.getElementById("card").append(idNumber);

const idDate = document.createElement("div");
idDate.innerText = getCurrentDate();
idDate.className = "font-script card-date";
document.getElementById("card").append(idDate);

const idName = document.createElement("input");
idName.value = "Name Here";
idName.className = "font-script card-name";
document.getElementById("card").append(idName);

document.getElementById("card").append(createIdFace());

document.getElementById("button-download").addEventListener("click", () => {
  domtoimage.toBlob(document.getElementById("card")).then(function (blob) {
    window.saveAs(blob, "emojingle_id.png");
  });
});
