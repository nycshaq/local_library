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
    results.sort((a, b) => b.count - a.count);
  }
  return results.slice(0, 5);
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
