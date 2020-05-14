<template>
  <div id="BookStore">
    <div class="inputContainer">
      <img class="logo" src="./Ubiqumbookstorelogo.png" />
      <label for="inputField"></label>
      <input
        type="text"
        placeholder="search for a book"
        v-model="message"
        id="inputField"
        v-on:keyup="searchFunction"
      />
    </div>
    <hr />
    <div
      v-if="bookDataFiltered.length > 0 && this.pictureGalleryVisible == false"
      class="container"
    >
      <div
        v-for="(book, index) in bookDataFiltered"
        v-bind:key="book.id"
        class="flip-box"
      >
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img :src="book.image" />
          </div>

          <div class="flip-box-back h4">
            <br />
            <br />
            <span><b>title:</b> {{ book.title }}</span>
            <br />
            <br />
            <span><b>description:</b> {{ book.description }}</span>
            <br />
            <br />
            <span><b>language:</b> {{ book.language }}</span>
            <br />
            <br />
            <span><b>author:</b> {{ book.author }}</span>
            <br />
            <br />

            <button
              v-on:click="() => setVisibility(index)"
              type="button"
              class="btn btn-danger"
            >
              Click for a larger picture
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="bookDataFiltered.length > 0 && this.pictureGalleryVisible == true"
      class="picture-gallery"
    >
      <div class="left-panel">
        <span v-on:click="decreaseIndex">&#8592;</span>
      </div>
      <div>
        <div class="close-gallery" v-on:click="closePictureGallery">Close</div>
        <div v-for="(book, index) in bookData" v-bind:key="book.id">
          <img v-if="index == indexNumber" :src="book.image" />
        </div>
      </div>

      <div class="right-panel">
        <span v-on:click="increaseIndex">&#8594;</span>
      </div>
    </div>
    <div v-if="bookDataFiltered.length == 0" class="no-books">
      No books found
    </div>
  </div>
</template>

<script>
export default {
  name: "BookStore",

  props: {},
  data() {
    return {
      indexNumber: "",
      bookData: [],
      bookDataFiltered: [],
      message: "",
      pictureGalleryVisible: false,
      bookURL: {
        bookURLrow: [],
      },
    };
  },

  created: async function fetchData() {
    // let url = "books";

    let url = "";
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:5000/books";
    }
    if (process.env.NODE_ENV === "production") {
      url = "https://daanbookapp.herokuapp.com/books";
    }
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())

      .then((data) => {
        this.bookData = data;
        return data;
      })
      .catch((error) => console.log(error));
    this.bookDataFiltered = this.bookData;
  },
  methods: {
    closePictureGallery() {
      this.pictureGalleryVisible = false;
    },
    increaseIndex() {
      if (this.indexNumber < this.bookData.length - 1) {
        this.indexNumber = this.indexNumber + 1;
      }
    },
    decreaseIndex() {
      if (this.indexNumber > 0) {
        this.indexNumber = this.indexNumber - 1;
      }
    },

    setVisibility(indexNumber) {
      this.indexNumber = indexNumber;
      this.pictureGalleryVisible = true;
    },
    searchFunction() {
      let bookDataFiltered = [];
      let bookDataCompareVariable = this.bookData;

      let i;
      for (i = 0; i < bookDataCompareVariable.length; i++) {
        //check for includes rather than match, and adjust to be non-case-sensitive
        if (
          bookDataCompareVariable[i].title
            .toUpperCase()
            .includes(this.message.toUpperCase()) ||
          bookDataCompareVariable[i].description
            .toUpperCase()
            .includes(this.message.toUpperCase()) ||
          bookDataCompareVariable[i].language
            .toUpperCase()
            .includes(this.message.toUpperCase())
        ) {
          //change to be a push method
          bookDataFiltered.push(bookDataCompareVariable[i]);
        }

        if (this.message === "") {
          this.bookDataFiltered = this.bookData;
        }
      }

      this.bookDataFiltered = bookDataFiltered;
    },
  },
};
</script>

<style>
.flip-box-front {
  width: 100%;
  height: 100%;
}

.flip-box-front img {
  width: 100%;
  height: 100%;
}

.flip-box {
  background-color: transparent;
  width: 300px;
  height: 500px;
  margin: 3%;
}

.flip-box-inner {
  position: relative;

  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;

  width: 300px;
  height: 500px;
  backface-visibility: hidden;
  font-size: 100% !important;
}

/* .flip-box-back {
  padding-left: 20%;
} */
.flip-box-front {
  background-color: transparent;
  color: black;
}

.flip-box-back {
  background-color: #f3e16d;
  transform: rotateY(180deg);
  font-size: 100%;
}

.container {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  flex-direction: row;
  flex-wrap: wrap;
}

.wrapping {
  display: flex;

  background-color: red;
}

#app {
  background: url("./bookbackground.jpg");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.btn {
  font-size: 120%;
}

.inputContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#inputField {
  height: 60px;
  border-radius: 5%;
  text-align: center;

  font-size: 100%;
  display: flex;
}

.logo {
  width: 10%;
  height: 20%;
  border-radius: 50%;
}

.inputContainer {
  padding: 2%;
  background-color: indigo;
}

.no-books {
  background-color: blue;
  height: 1000px;
  font-size: 400%;
  color: white;
  font-weight: bold;
  padding-top: 15%;
}

.picture-gallery {
  background-color: black;
  height: auto;
  width: auto;
  font-size: 400%;
  color: white;
  font-weight: bold;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  justify-content: space-evenly;
}

.picture-gallery img {
  width: 50%;
  height: 50%;
}

.close-gallery {
  width: 50%;
  margin-left: 25%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
