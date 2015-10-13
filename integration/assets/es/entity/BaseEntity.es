const n = require("nanoajax");

export class BaseEntity {
  set url(url) {
    this._url = url;
  }

  fetch(url) {
    if (this.url) {
      return false;
    }
    this.data = n.ajax(
      { url: this.url },
      (code, responseText) => {
        console.log(code);
        console.log(responseText);
        // this.data.id
        // etc
        return responseText;
      }
    );
  }
  save() {
    return n.ajax(
      {
        url: this.url,
        method: "POST",
        body: this.toSave()
      },
      (code, responseText) => {
        return code;
      }
    );
  }
  toSave() {
    // this.data.toString
    return "";
  }
}
