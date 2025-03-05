import MainStore from './MainStore.ts';

class RootStore {
  productStore: MainStore;

  constructor() {
    this.productStore = new MainStore();
  }
}

export default RootStore;
