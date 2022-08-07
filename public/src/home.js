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

function getMostPopularBooks(books) {
  return books.map((book) => { return {name: book.title, count: book.borrows.length} }).sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const results = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`; // Get full name of Author
    const booksByAuthor = books.filter((book) => book.authorId === author.id); // Filter books by author
    const totalBorrows = booksByAuthor.reduce((currentTotal, book) => currentTotal + book.borrows.length, 0); // Count all of author borrowed books using reduce
    return  {
      name: fullName,
      count: totalBorrows,
    };
  });
  

  return results.sort((authorA, authorB) => authorB.count - authorA.count).splice(0,5); // Reverse sort and get top 5 most popular authors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
