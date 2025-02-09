export interface GameFromServer {
    id: number;
    name: string;
    description?: string;
    version?: string;
    price?: number;
    tags?: string[];
    forKids: boolean;
    releaseDate?: string;
    developer?: string;
    publisher?: string;
    rating?: number;
    imgSrc?: string,
}

export type GamesFromServer = GameFromServer[];

export const GAMES: GamesFromServer = [
  {
      id: 1,
      name: 'Mortal Kombat X',
      description: 'A fighting game with iconic characters and brutal fatalities.',
      version: 'X',
      price: 19.99,
      tags: ['Fighting', 'Competitive', 'Multiplayer'],
      forKids: false,
      releaseDate: '2015-04-14',
      developer: 'NetherRealm Studios',
      publisher: 'Warner Bros.',
      rating: 9.0,
      imgSrc: 'https://image.api.playstation.com/cdn/EP1018/CUSA00970_00/sN9NrMFgwWxGCDdj6tbLMIAr13d7TQdR.png',
  },
  {
      id: 2,
      name: 'NFS: Most Wanted',
      description: 'A high-speed street racing game with police pursuits.',
      version: 'X',
      price: 9.99,
      tags: ['Racing', 'Open World', 'Action'],
      forKids: true,
      releaseDate: '2005-11-11',
      developer: 'EA Black Box',
      publisher: 'Electronic Arts',
      rating: 8.7,
      imgSrc: 'https://upload.wikimedia.org/wikipedia/ru/1/15/NFS-Most-Wanted-Front.jpg',
  },
  {
      id: 3,
      name: 'FIFA 23',
      description: 'A football simulation game with realistic gameplay and teams.',
      version: 'X',
      price: 59.99,
      tags: ['Sports', 'Multiplayer', 'Simulation'],
      forKids: true,
      releaseDate: '2022-09-30',
      developer: 'EA Sports',
      publisher: 'Electronic Arts',
      rating: 8.5,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKAKYcDPBxBIEudWlDZ3xl_6fyydrFvgMFw&s',
  }
];
