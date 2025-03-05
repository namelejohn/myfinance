import {Event, Filter} from '../types';

export const eventData: Event[] = [
  {
    id: 1,
    title:
      'The U.S. says Russian Federation should fully withdraw from NIS stake',
    desc: "BELGRADE, January 12. /TASS/. The decision of the United States to put NIS (“Naftna Industrija Srbije”), whose majority shareholders are Gazprom Neft (50% of shares), Gazprom (6.15%) and Serbia (29.87%), on the sanctions list is aimed at depriving Moscow of revenues in the energy sector, thus complicating the position of the Russian army in the conflict in Ukraine. This opinion was expressed by US Assistant Secretary of State for European and Eurasian Affairs James O'Brien on the air of RTS.\n",
    image: require('../assets/event1_1.png'),
  },
  {
    id: 2,
    title: "Analysts have estimated insurance companies' payouts",
    desc:
      'Payments by insurance companies due to wildfires in Los Angeles may exceed $20 billion - thus, these fires are likely to become the most financially devastating in U.S. history, analysts at JPMorgan Chase & Co. predict. Overall, damage and economic losses due to the fires could reach $57 billion\n' +
      'Payments by insurance companies due to wildfires in Los Angeles may exceed $20 billion - thus, these fires are likely to be the most financially devastating in U.S. history, analysts predicted',
    image: require('../assets/event2_1.png'),
  },
];

export const categories: Filter[] = [
  {
    id: 1,
    name: 'Freelance',
  },
  {
    id: 2,
    name: 'Rent',
  },
  {
    id: 3,
    name: 'Passive',
  },
  {
    id: 4,
    name: 'Business',
  },
  {
    id: 5,
    name: 'Salary',
  },
  {
    id: 6,
    name: 'Other',
  },
];
