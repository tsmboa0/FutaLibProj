<template>
  <div>
    <navbar />
    <div class="home">
      <div class="layer">
          <div class="area another">
            <div class="mainClass">
              <h1>Browse into a project topic of your 
                <span>Choice.
                  <svg width="238" height="20" viewBox="0 0 238 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                    <path d="M4 16C37.4343 6.94452 130.242 -5.73316 234 16" stroke="#128BC7" stroke-width="8" stroke-linecap="round"/>
                  </svg>
                </span>
              </h1>
            </div>         
            <p class="ip">Input project topic below</p>
            <div class="inputs">
              <i class="ri-search-2-line"></i>
              <input type="search" placeholder="Project topic or keyword"  id="search" @keyup="filterFunction" @change="show" @blur="checkk">
              <!-- ; filterFunction() -->
              <button id="searchBtn" @click="check()">Search</button>
              <!-- @click="check()" -->
              <div class="searchBox" id="searchBox" >
                  <ul class="result" id="result"> 
                      <li v-for="(topic, index) in allData" :key="index" @click="setDataIndex(index)">
                        <router-link to="/project" id="empty">{{ topic }}</router-link>
                      </li>
                  </ul>
                  <div v-if="isEmpty">
                    No data found!
                      <div class="default">
                          <img src="@/assets/SnF.png" alt="">
                          <p>No results found</p>
                      </div>
                  </div>
              </div>
            </div>
            <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" class="book">
              <path d="M85.0781 54.2953L96.6797 65.7422L45.1687 90.3375C45.1687 90.3375 38.3625 93.4312 35.1141 88.4812C22.4297 68.6812 85.0781 54.2953 85.0781 54.2953Z" fill="#256382"/>
              <path d="M43.9312 75.9516C43.9312 75.9516 34.0312 79.3547 35.8875 86.0063C37.7437 92.8125 45.6328 88.636 45.6328 88.636L94.514 65.8969C94.514 65.8969 91.7297 58.6266 96.6797 53.8313L43.9312 75.9516Z" fill="#D9E3E8"/>
              <path d="M52.1296 7.73438L98.9999 53.3672L43.6218 75.0234L8.0437 19.6453L52.1296 7.73438Z" fill="#42ADE2"/>
              <path d="M53.5218 18.0984L62.4937 27.689L28.9265 39.7546L21.0375 27.5343L53.5218 18.0984Z" fill="white"/>
              <path d="M94.3593 58.7812L61.7203 72.0844L93.8953 57.389L94.3593 58.7812ZM93.8953 62.8031L59.0906 77.189L93.2765 61.2562L93.8953 62.8031ZM94.2046 64.9687L49.8093 84.3047L93.5859 63.5765L94.2046 64.9687Z" fill="#94989B"/>
              <path d="M35.1141 88.4812C29.7 77.189 43.6219 75.178 43.6219 75.178L8.04375 19.6452C8.04375 19.6452 0 19.4905 0 27.8437C0 31.2468 1.54688 33.8765 1.54688 33.8765L35.1141 88.4812Z" fill="#428BC1"/>
            </svg>
          </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2023 FUTA Project Library. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'HomeView',

  data() {
    return {
      allData: '',
      empty: false,
      storage:[],
    }
  },

  computed: {
    isEmpty: function () {
      return jQuery.isEmptyObject(this.allData)
    }
  },

  mounted() {
      var axios = require('axios');

      var config = {
          method: "GET",
          // url: 'http://localhost/project/get.php?retrieve=1',
          url: 'https://futa.smarthub.click/php/get.php?retrieve=1', 
          headers: { }
      };

      axios(config)
      .then((response) =>  {
          this.storage = response.data

          // Sample HTML input as a string
          const htmlString = this.storage;

          // Parse the HTML string into a DOM object
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, 'text/html');

          const dataList = [];
          const dataTopics = [];

          // Query the document
          const slabs = doc.querySelectorAll('.slab');
          slabs.forEach(slab => {
              const title = slab.querySelector('.parent > p').textContent;
              const name = slab.querySelector('.child1 .name').textContent;
              const pages = slab.querySelector('.pages').textContent;
              const date = slab.querySelector('.date').textContent;
          
              const data_ = {title:title, name:name, pages:pages, date: new Date().toLocaleDateString()};
              dataList.push(data_);
              dataTopics.push(title);
              console.log('this is the data ', data_);
          });
          this.allData = [...dataTopics];
          localStorage.setItem('dataList', JSON.stringify(dataList));
          console.log('this is the dataList in the localStorage ',JSON.parse(localStorage.getItem('dataList')));
          console.log('first data is ', (JSON.parse(localStorage.getItem('dataList')))[0].title);
          console.log('the data topics are ', this.allData);
      })
      .catch(function (error) {
          console.log(error);
      })

      // End dataList;
  },

  components: {
    navbar,
  },

  methods: {

    filterFunction() {

      var input, filter, ul, li, a, i;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      ul = document.getElementById("result");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }

      let search = document.getElementById ('search');

      if(search.value !== '') {
        $(".searchBox").show(200);
      } else {
        $(".searchBox").hide(200);
      }

    },
    show() {

      let search = document.getElementById ('search');

      if(search.value !== '') {
        $(".searchBox").show(200);
      } else {
        $(".searchBox").hide(200);
      }
    },

    setDataIndex(index){
      localStorage.setItem('dataIndex', index);
      console.log('The index is ', localStorage.getItem('dataIndex'));
    },

    checkk() {
        const searchBox = document.getElementById('empty')

        if(searchBox.childNodes.length === 0) {
            $(".default").show()
            console.log('Element is empty')
        } else {
            $(".default").hide()
            console.log('Element is not empty')
        }
    },
    // show() {

    //   let search = document.getElementById ('search');

    //   if(search.value !== '') {
    //     $(".searchBox").show(200);
    //   } else {
    //     $(".searchBox").hide(200);
    //   }
    // },

    // fetchApi() {
    //   var axios = require('axios');

    //   var config = {
    //     method: "get",
    //     url: 'http://localhost/project/res.php?fetch_topics=1',
    //     headers: { }
    //   };

    //   axios(config)
    //   .then((response) =>  {
    //     this.topicFeed = response.data

    //     console.log(JSON.stringify(this.allData))
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    // },

    check() {

      let btn = document.getElementById ('searchBtn');
      localStorage.setItem('searchKey', search.value);
      console.log(localStorage.getItem('searchKey'));
      console.log("passed localstorage");

      if(search.value !== '') {
        
        this.$router.push('/search');
      } else {
        
      }
    }
  },
}

</script>

<style scoped>
  .home {
    background: url("@/assets/library.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    /* margin-top: -1.8%; */
  }
  .layer {
    background: url("@/assets/lines.png");
    background-color: rgba(229, 246, 255, 0.8);
    background-position: 0em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .area {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;
    width: 85%;
    margin: 0 auto;
    max-width: 700px;
    z-index: 2;
  }

  .another::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(146, 67, 116, 0.15);
    filter: blur(175px);
    z-index: -1;
  }
  .svg {
    position: absolute;
    width: 200px;
    right: -5px;
    bottom: -10px;
  }
   h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 150%;
    text-align: center;
    color: #128BC7;
   }
   span {
    position: relative;
    color: #924374;
   }
   .ip {
    margin-top: 2em;
    margin-bottom: 1em;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #272625;
   }
   .inputs {
    position: relative;
    display: flex;
    background: #FFFFFF;
    border-radius: 52.5733px;
    padding: .5em 1.5em;
    width: 100%;
    max-width: 700px;
   }
   input {
    border: none;
    width: 80%;
    padding: 1em .5em;
    font-size: 16px;
    outline: none;
    margin-left: .2em;
    margin-right: .2em;
   }
   i {
    font-size: 20px;
    margin-top: .7em;
    color: #924374;
   }
   button {
    background: #924374;
    border-radius: 31.544px;
    padding: .3em;
    color: white;
    border: none;
    height: 45px;
    width: 20%;
    margin-top: .1em;
    font-weight: 700;
    font-size: 21.0293px;
    line-height: 140%;
    cursor: pointer;
   }
   .book {
    position: absolute;
    top: 40%;
    right: 0;
   }
   .copyright {
    position: absolute; 
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
   }

   .copyright p {
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    color: #344054;
   }

   .searchBox {
    display: none;
    position: absolute;
    width: 100%;
    height: 230px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 28px;
    top: 0%;
    left: 0;
    z-index: -1;
    cursor: pointer;
    padding: 5em 2em 2em 3.5em;
    text-align: left;
   }

   .result p{
    margin-bottom: .5em;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* display: flex;
    align-items: center; */
    letter-spacing: -0.01em;
    color: #2D2927;
    /* display: none; */
   }

   .default {
    display: none;
    margin-top: 1.5em;
    text-align: center;
    
   }

   @media only screen and (max-width: 767px) {
    .area {
      width: 90%;
    }
    h1 {
      font-size: 30px;
    }
    .svg {
      width: 100px;
    }
    .book {
      display: none;
    }
    .ip {
      font-size: 14px;
    }
    .inputs {
      padding: .5em;
      width: 100%;
      max-width: 700px;
    }
    input {
      padding: .5em;
    }
    button {
      border-radius: 31.544px;
      width: 40%;
      margin-top: .05em;
      font-size: 14px;
      height: auto;
    }
    i {
      font-size: 20px;
      margin-top: .3em;
    }
    .searchBox {
      padding: 3em 2em 2em 2.5em;
    }
    .default {
      margin-top: 2em;
      text-align: center;
      
    }
   }
</style>
