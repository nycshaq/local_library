function getTotalBooksCount(books) {

  return books.length
}


function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let booksNotReturnedYetCount = 0
  books.forEach(book => {
     let booksNotReturned = book.borrows.filter(borrowedBook => !borrowedBook.returned);
     booksNotReturnedYetCount += booksNotReturned.length;
  })
  return booksNotReturnedYetCount;
}

function getMostCommonGenres(books) {}

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
