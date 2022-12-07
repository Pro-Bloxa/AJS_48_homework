import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card with goods', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  const expected = [
    {
      id: 1001,
      name: "War and Piece",
      author: "Leo Tolstoy",
      price: 2000,
      pages: 1225
    },
    {
      id: 1008,
      name: "Meteora",
      author: "Linkin Park",
      price: 900
    }
  ];
  expect(cart.items).toEqual(expected);
});

test('function calculateSumWithDiscount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const recieved = cart.calculateSumWithDiscount(0.2);

  expect(recieved).toBeCloseTo(2894.2);
});

test('card should remove goods', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'action movie', 'fantasy', 'adventures'], '137 мин', 500));
  cart.removeItem(1010);

  const expected = [
    {
      id: 1001,
      name: "War and Piece",
      author: "Leo Tolstoy",
      price: 2000,
      pages: 1225
    },
    {
      id: 1008,
      name: "Meteora",
      author: "Linkin Park",
      price: 900
    }
  ];
  expect(cart.items).toEqual(expected);
});

// import Cart from '../service/Cart';
// import Movie from '../domain/Movie';

// test('new card should be empty', () => {
//   const cart = new Cart();
//   expect(cart.items.length).toBe(0);
// });

// test('movie created', () => {
//   const movie = new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'action movie', 'fantasy', 'adventures'], '137 мин', 500);
//   expect(movie).toEqual({
//     id: 1010,
//     name: 'The Avengers',
//     year: 2012,
//     country: 'USA',
//     slogan: 'Avengers Assemble',
//     genre: ['fantastic', 'action movie', 'fantasy', 'adventures'],
//     duration: '137 мин',
//     price: 500,
//   });
// });

// test('checking cart add and remove', () => {
//   const movie = new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'action movie', 'fantasy', 'adventures'], '137 мин', 500);
//   const cart = new Cart();
//   cart.add(movie);
//   cart.removeItem(1010);
//   expect(cart.items.length).toBe(0);
// });

// test('checking sum', () => {
//   const movie = new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'action movie', 'fantasy', 'adventures'], '137 мин', 500);
//   const cart = new Cart();
//   cart.add(movie);
//   cart.add(movie);
//   cart.add(movie);
//   expect(cart.calculateSumWithoutDiscount()).toBe(1500);
// });

// test('checking sum with discount', () => {
//   const movie = new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'action movie', 'fantasy', 'adventures'], '137 мин', 500);
//   const cart = new Cart();
//   cart.add(movie);
//   cart.add(movie);
//   cart.add(movie);
//   expect(cart.calculateSumWithDiscount(10)).toBe(1350);
// });
