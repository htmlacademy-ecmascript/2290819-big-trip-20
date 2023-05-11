import FilterView from './view/filter-view';
import NewSortView from './view/sort-view';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';

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
