
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {
    const userALastName = a.name.last.toLowerCase();
    const userBLastName = b.name.last.toLowerCase();
    if (userALastName < userBLastName) {
      return -1;
    } else if (userALastName > userBLastName) {
      return 1;
    }

    return 0;
  });
}


function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  books.forEach((book) => {
    for (let index = 0; index < book.borrows.length; index++) {
      if (book.borrows[index].id === account.id) {
        numberOfBorrows += 1;
      }
    }
  });
  return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const getAuthorProfileById = (authors, id) => {
    return authors.find((author) => author.id === id);
  };
  const booksCheckedOutByAccount = books.filter((book) => {
    return book.borrows.some(
      (borrow) => borrow.id === accountId && !borrow.returned
    );
  });
  const result = booksCheckedOutByAccount.map((book) => {
    const author = getAuthorProfileById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };

    return newBook;
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
