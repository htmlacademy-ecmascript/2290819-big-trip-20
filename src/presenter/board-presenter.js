import {render} from '../render';
import DestinationButtonView from '../view/destination-button-view';
import NewTripListView from '../view/trip-list-view';
import NewFormAddView from '../view/task-view';
import NewFormEditView from '../view/task-edit-view';

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

