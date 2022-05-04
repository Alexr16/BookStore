const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DYS9eNOK7ZqdehV5UTfN/books';

const createBook = async (id, bookTitle, author) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title: bookTitle,
      author,
      category: 'default',
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
  const data = await response.text();
  return data;
};

const deleteBook = async (id) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
};

export { createBook, deleteBook, URL };
