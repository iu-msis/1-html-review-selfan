const booksApp = {
    data() {
      return {
        books: [],
        booksForm: {}
    }
},

methods: { 
    fetchBooks() {
      fetch('/api/books/index.php')
      .then( response => response.json() )
      .then( (responseJson) => {
          console.log(responseJson);
          this.books = responseJson;
      })
      .catch( (err) => {
          console.error(err);
      });
    },
    postNewBooks(evt) {

        fetch('api/offer/create.php', {
            method:'POST',
            body: JSON.stringify(this.booksForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.booksForm = {};
          });
}
},
postDeleteOffer() {  

  fetch('api/offer/delete.php', {
      method:'POST',
      body: JSON.stringify(this.booksForm),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.books = json;
       // reset the form
       this.booksForm = {};
      });
    },


created() {
    this.fetchBooks();
}
}
Vue.createApp(booksApp).mount('#bookApp');