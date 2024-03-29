class MovsTable {
  // root node
  _el: HTMLElement | null;
  constructor(el: HTMLElement | string) {
    this._el = typeof el === "string" ? document.querySelector(el) : el;
    if (this._el === null) {
      throw new Error("Root node does not exist");
    }
    // this._el.appendChild();
  }
}

export default MovsTable;
