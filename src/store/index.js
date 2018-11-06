import Home from './home';

export default class Store {
  constructor(initState = {}) {
    this.home = new Home(initState.home || {});
  }
}
