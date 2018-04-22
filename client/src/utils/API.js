import axios from "axios";

export default {

  signUp: function(SignUpData){
    console.log("Signup working")
    console.log(SignUpData)
    return axios.post("/api/users", SignUpData)
  },

  login: function(loginData){
    console.log("Login working")
    console.log(loginData)
    return axios.post("/api/users", loginData)
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
