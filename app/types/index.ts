export interface Record {
  title: string;
  amount: number;
  category: string;
  type: RecordType;
}

export interface Event {
  id: number;
  title: string;
  desc: string;
  image: any;
}

export interface Filter {
  id: number;
  name: string;
}

export type RecordType = 'income' | 'expense';
