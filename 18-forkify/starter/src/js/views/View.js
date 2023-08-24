
import icons from 'url:../../img/icons.svg';

export default class View {
    _data;

    render(data) {
      if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

      this._data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
/////////////////////////////////////advanced///////////////////////////////////////////////////////////////
    update(data){
      if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

      this._data = data;
      const newMarkup = this._generateMarkup();

      const newDom = document.createRange().createContextualFragment(newMarkup);
      const newElements = Array.from(newDom.querySelectorAll('*'));
      const currentElements = Array.from(this._parentElement.querySelectorAll('*'));

      newElements.forEach((newEl, i) => {
        const curEl = currentElements[i];
        // console.log(curEl, newEl.isEqualNode(curEl))

        //Updates changes TEXT
        if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '' ){
          curEl.textContent = newEl.textContent;
        }

        //Updates changes ATTRIBUTES
        if(!newEl.isEqualNode(curEl)){
          Array.from(newEl.attributes).forEach(attribute => curEl.setAttribute(attribute.name, attribute.value))
        }
      });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    _clear() {
      this._parentElement.innerHTML = '';
    }
  
    renderSpinner() {
      const markup = `
      <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
      `;
      this._parentElement.innerHTML = '';
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  
    renderError(message = this._errorMessage) {
      const markup = `
      <div class="message">
              <div>
                <svg>
                  <use href="${icons}g#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
      `;
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
  
    }
}