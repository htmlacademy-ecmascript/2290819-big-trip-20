import { FilterView } from './view/filter-view.js';
import NewSortView from './view/sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render } from './render.js';

// Хедер
const siteHeaderElement = document.querySelector('.page-header');
const siteHeaderSortElement = siteHeaderElement.querySelector('.trip-controls__filters');

// Мейн
const siteMainElement = document.querySelector('.page-main');
const siteMainFilterWrapper = siteMainElement.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: siteMainFilterWrapper});

render(new NewSortView(), siteHeaderSortElement);
render(new FilterView(), siteMainFilterWrapper);

boardPresenter.init();
