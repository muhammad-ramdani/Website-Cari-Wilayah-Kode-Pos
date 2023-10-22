import './kode-pos-item.js';

class KodePosList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set kodePos(kodePoses) {
    this._kodePoses = kodePoses;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._kodePoses.forEach(kodePos => {
      const kodePosItemElement = document.createElement('kode-pos-item');
      kodePosItemElement.kodePos = kodePos;
      this.shadowDOM.appendChild(kodePosItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          text-align: center;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('kode-pos-list', KodePosList);
