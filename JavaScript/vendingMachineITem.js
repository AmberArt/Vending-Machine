const itemImageLinkElement = document.getElementById("itemImageLink");
const priceOfItemElement = document.getElementById("priceOfItem");
const submitBtnElement = document.getElementById("submitBtn");



const vendingMachineController = new VendingMachineItemsController();

function itemSubmitBtnHandler(e) {
    e.preventDefault();
    const itemImageLink = itemImageLinkElement.value;
    const priceOfItem = priceOfItemElement.value;
    console.log("Line 8");
    vendingMachineController.addItem(itemImageLink, priceOfItem);
    console.log(itemImageLink);
    console.log(priceOfItem);
    vendingMachineController.addItemsToLocalStorage();
}

submitBtn.addEventListener("click", itemSubmitBtnHandler);


const createTravelPackageCard = (travelPackage) => {
    const bootstrapCard = 
    `
  <div class="col-lg-4 col-md-6 mt-3 gx-5 card-package" data-id="${travelPackage.id}">
      <div class="card" style="width: 19rem;">
        <img src="${travelPackage.imageFilePath}"
        style="width: 100%; height: 50%"
         class="card-img-top" alt="Picture representing a travel package.">
        <div class="card-body">
          <h5 class="card-title">${travelPackage.tripName}</h5>
          <p class="card-text mb-3 description-container">${travelPackage.description}</p>
        </div>
        <div class="card-body">
        <a href="./purchase-package.html?productId=${travelPackage.id}" class="btn btn-primary">Purchase</a>
        </div>
      </div>
  </div>
    `;
    return bootstrapCard;
  }


  const createVendingMachineItems = (item) => {
    const itemRow = 
    `
    <div class="row">
        <div class="col-3 items">
            <img src="${itemImageLinkElement.value}" alt="" class="item-1">
            <button>${priceOfItemElement.value}</button>
        </div>
    </div>  
    `
    return itemRow;
  }

  const renderVendingMachineItems = () => {
    const itemCol = document.getElementById("item-col");

    const itemsArr = vendingMachineController.getItemsFromLocalStorage();

    itemsArr.forEach(item => {
       const vendingMachineItem = createVendingMachineItems(item);
       itemCol.innerHTML += vendingMachineItem;
    })
  }

  renderVendingMachineItems();