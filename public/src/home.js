const {
  sortByCount
} = require("./helpers/util.js");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksNotReturnedYetCount = 0;
  books.forEach((book) => {
    let booksNotReturned = book.borrows.filter(
      (borrowedBook) => !borrowedBook.returned
    );
    booksNotReturnedYetCount += booksNotReturned.length;
  });
  return booksNotReturnedYetCount;
}

function getMostCommonGenres(books) {
  let results = [];
  let booksByGenreObj = {};

  books.forEach((book) => {
    let genre = book.genre;
    if (!booksByGenreObj[genre]) {
      booksByGenreObj[genre] = 1;
    } else {
      booksByGenreObj[genre] += 1;
    }
  });
  for (let keyName in booksByGenreObj) {
    results.push({
      name: keyName,
      count: booksByGenreObj[keyName],
    });
    
    sortByCount(results)
  }
  return results.slice(0, 5);
}

function getMostPopularBooks(books) {
 const popularBooks = books.map((book) => { return {name: book.title, count: book.borrows.length} })
 return sortByCount(popularBooks).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const results = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`; 
    const booksByAuthor = books.filter((book) => book.authorId === author.id); 
    const totalBorrows = booksByAuthor.reduce((currentTotal, book) => currentTotal + book.borrows.length, 0); // Count all of author borrowed books using reduce
    return  {
      name: fullName,
      count: totalBorrows,
    };
  });
  

  return sortByCount(results).splice(0,5); 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
