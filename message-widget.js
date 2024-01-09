["https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"].forEach((u) => {
  var script = document.createElement("script");
  script.src = u;
  document.head.appendChild(script);
});

class messageWidget extends HTMLElement {
  static _WIDGETNAME = "message-widget";
  static _WIDGETURL = "https://brave-field-0f6faca10.4.azurestaticapps.net";

  connectedCallback() {
    this.classList.add("neo-widget");
    this.classList.add(`widget--${messageWidget._WIDGETNAME}`);
    this.style.overflowX = "hidden";

    fetch(`${messageWidget._WIDGETURL}/${messageWidget._WIDGETNAME}.html`)
      .then((data) => {
       return data.text()})
        
      .then((html) => {
        this.innerHTML += `<link rel="stylesheet" href="${messageWidget._WIDGETURL}/${messageWidget._WIDGETNAME}.css">`;
        this.innerHTML += html;
        this.initWidgetCode();
      });
    {

    }
  }

  initWidgetCode() {
    console.log("Init Widget code");
  }
}

customElements.define(messageWidget._WIDGETNAME, messageWidget);
