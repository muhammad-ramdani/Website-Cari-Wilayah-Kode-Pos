import '../component/kode-pos-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import $ from 'jquery';
import moment from 'moment';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const kodePosListElement = document.querySelector('kode-pos-list');

  const onButtonSearchClicked = async () => {
    if (searchElement.value.trim() === '') {
      kodePosListElement.renderError('Inputan tidak boleh kosong!');
      return;
    }

    try {
      const result = await DataSource.searchKodePos(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    if (results.length === 0) {
      kodePosListElement.renderError('Daerah atau Kode Pos yang Anda cari tidak ada!');
    } else {
      kodePosListElement.kodePos = results;
    }
  };

  const fallbackResult = message => {
    kodePosListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

const displayTime = () => {
  moment.locale('id');
  $('.time').text(moment().format('LTS'));
  $('.date').text(moment().format('dddd, LL'));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1);
};

updateTime();