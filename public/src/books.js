function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let result =[]
  let booksReturnedArray =[]
  let booksOutArray =[]
  
  books.forEach(book => { 
    let isBookCheckedOut = book.borrows.some(borrowStatus => !borrowStatus.returned)
      if(isBookCheckedOut){
        booksOutArray.push(book)
      }
      else{
        booksReturnedArray.push(book)
      }
      
  })
  return [booksOutArray, booksReturnedArray]
    }
  
function getBorrowersForBook(book, accounts) {
  results = []
// Loop through each account
accounts.forEach(account => {
  let currentAccountId = account.id
  let borrowedBookByAccount = book.borrows.find(borrowedBook => borrowedBook.id === currentAccountId && borrowedBook.returned === true );

  if(borrowedBookByAccount) {
    results.push({returned: true, ...account});
  }
})
  

  return results.slice(0, 10); // get 1st 10 items
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
