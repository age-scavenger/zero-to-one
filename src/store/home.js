import { observable, computed, action, autorun } from 'mobx';

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

  printNewestListLength = autorun(() => {
    console.log(`autorun:${this.list.length}`);
  });

  @action
  addListItem(item) {
    console.log(item);
    this.list.push(item);
  }
}
