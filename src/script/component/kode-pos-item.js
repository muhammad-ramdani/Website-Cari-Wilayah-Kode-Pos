class KodePosItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set kodePos(kodepos) {
    this._kodepos = kodepos;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .kode-pos-info {
          padding: 24px;
        }
        .kode-pos-info > h2 {
          font-weight: lighter;
        }
        .kode-pos-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        hr {
          margin-top: 10px;
        }
      </style>

      <div class="kode-pos-info">
        <h4>Desa: ${this._kodepos.village}</h4>
        <hr>
        <p>Kode Pos: ${this._kodepos.postalcode}</p>
        <p>Kecamatan: ${this._kodepos.subdistrict}</p>
        <p>Kabupaten/Kota: ${this._kodepos.city}</p>
        <p>Provinsi: ${this._kodepos.province}</p>
      </div>
    `;
  }
}

customElements.define('kode-pos-item', KodePosItem);
