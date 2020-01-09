function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    // .then(resp => resp.json()) - shorter & different way of writing the function
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      // console.log(json);
      renderBooks(json);
    })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// return fetch()
// it's running your function with then , waiting for everything to finish before checking the results
// fetchBooks() needs to RETURN the promise so that the test can chain then on to it
// basically, the code you wrote works (as you could see in the browser), its just that for the test to be able to wait for the function to be done in order to test what it did, it needed you to return the function so it could chain another then on to it