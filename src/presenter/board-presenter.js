import {render} from './render.js';
import {DestinationButtonView} from '../view/destination-button-view.js';
import {NewTripListView} from '../view/trip-list-view.js';
import {NewFormAddView} from '../view/task-view.js';
import {NewFormEditView} from '../view/task-edit-view.js';

export default class BoardPresenter {
  tripListComponent = new NewTripListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripListComponent, this.boardContainer);
    render(new NewFormAddView(), this.boardContainer);
    render(new NewFormEditView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new DestinationButtonView(), this.tripListComponent.getElement());
    }
  }

}

