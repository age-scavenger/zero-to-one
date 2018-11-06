import { observable, computed, action } from 'mobx';

export default class Home {
  /** 数据可观测 */
  @observable
  list = ['xiaoming', 'xiaozhang', 'xiaowang'];

  @observable
  common = [];

  @computed
  get listLength() {
    return this.list.length;
  }

  @action
  addListItem(item) {
    console.log(item);
    this.list.push(item);
  }
}
