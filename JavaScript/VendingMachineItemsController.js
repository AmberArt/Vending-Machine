class VendingMachineItemsController {
    constructor(currentId) {
        this._items = [];
        this._currentId = currentId || 0;
    }

    get items() {
        return this._items;
    }

    set items(item) {

    }

    get currentId() {
        // return this.currentId;
    }

    set currentId(id){
        this._currentId = id;
    }

    addItem(itemImageLink, priceOfItem) {
        this._currentId++;
        const id = this._currentId;
        console.log(id);
        const itemObj = { itemImageLink, priceOfItem, id  };
        this.items.push(itemObj);
      }

    addItemsToLocalStorage(){
        localStorage.setItem("item", JSON.stringify(this._items));
        localStorage.setItem("currentId", JSON.stringify(this._currentId));
    }

    getItemsFromLocalStorage(){
        // this.users = JSON.parse(localStorage.getItem("user"));
        this.items = JSON.parse(localStorage.getItem("item"));
        // localStorage.getItem("item", JSON.parse(this._items));
    }
}

// export {}