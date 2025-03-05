import {makeAutoObservable} from 'mobx';
import {Record, RecordType} from '../types';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MainStore {
  name: string = '';
  avatarUrl: string = '';
  showEditProfile: boolean = true;
  selectedCategory: string = '';
  incomeBalance: number = 0;
  expenseBalance: number = 0;
  recordTitle: string = '';
  amount: string = '';
  history: Record[] = [];
  age: string = '';

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ProductStore',
      properties: [
        'name',
        'avatarUrl',
        'age',
        'showEditProfile',
        'incomeBalance',
        'expenseBalance',
        'history',
      ],
      storage: AsyncStorage,
    });
  }

  setName = (value: string) => {
    this.name = value;
  };

  setAge = (value: string) => {
    this.age = value;
  };

  setRecordTitle = (value: string) => {
    this.recordTitle = value;
  };

  setAmount = (value: string) => {
    this.amount = value;
  };

  setAvatarUrl = (value: string) => {
    this.avatarUrl = value;
  };

  setShowEditProfile = (value: boolean) => {
    this.showEditProfile = value;
  };

  setSelectedCategory = (value: string) => {
    this.selectedCategory = value;
  };

  createRecord = (type: RecordType) => {
    const newRecord: Record = {
      title: this.recordTitle,
      amount: Number(this.amount),
      category: this.selectedCategory,
      type,
    };
    if (type === 'income') {
      this.incomeBalance += Number(this.amount);
    } else {
      this.expenseBalance += Number(this.amount);
    }
    this.history.unshift(newRecord);
    const temp = this.history;
    this.history = [...temp];
    this.reset();
  };

  reset = () => {
    this.selectedCategory = '';
    this.amount = '';
    this.recordTitle = '';
  };

  deleteRecord = (index: number) => {
    const record = this.history[index];
    if (record.type === 'income') {
      this.incomeBalance -= record.amount;
    } else {
      this.expenseBalance -= record.amount;
    }
    this.history = this.history.filter((_, i) => i !== index);
  };
}

export default MainStore;
