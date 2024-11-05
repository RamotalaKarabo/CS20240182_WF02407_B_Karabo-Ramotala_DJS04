class BookPreview extends HTMLElement {
  constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');

      template.innerHTML = `
          <style>
              /* Add your CSS here */
              .preview {
                  display: flex;
                  align-items: center;
              }
              .preview__image {
                  width: 100px;
                  height: auto;
                  margin-right: 10px;
              }
              .preview__info {
                  display: flex;
                  flex-direction: column;
              }
              .preview__title {
                  font-size: 1.2em;
                  margin: 0;
              }
              .preview__author {
                  color: grey;
              }
          </style>
          <button class="preview">
              <img class="preview__image" src="" alt="Book Image" />
              <div class="preview__info">
                  <h3 class="preview__title"></h3>
                  <div class="preview__author"></div>
              </div>
          </button>
      `;

      shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
      this.shadowRoot.querySelector('.preview__image').src = this.getAttribute('image');
      this.shadowRoot.querySelector('.preview__title').innerText = this.getAttribute('title');
      this.shadowRoot.querySelector('.preview__author').innerText = this.getAttribute('author');
  }
}

customElements.define('book-preview', BookPreview);
