<template>
    <div>
        <navbar />
        <div class="search">
            <div class="bar">
                <div class="inputs">
                <i class="ri-search-2-line"></i>
                <input type="search" placeholder="Project topic or keyword">
                <button>Search</button>
            </div>
            </div>
            <div class="tList">
                <ul v-if="(this.searchresults).length > 0">
                    <!-- <router-link to="/project">hey</router-link> -->
                    <li v-for="(item) in this.searchresults"   class="list" :key="item.index" @click="listt(item.index)">{{ item.title }}</li>
                </ul>
                <ul v-else>
                    <li class="list">Search Item Not Found!</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {

  components: {
    navbar,
  },

  data() {
    return {
      allData: '',
      searchkey:'',
      searchresults:[],
      empty: false,
    }
  },

  mounted() {
    this.searchkey = localStorage.getItem('searchKey');
    var axios = require('axios');

      var config = {
        method: "get",
        url: 'https://futa.smarthub.click/php/get.php?retrieve=1',
        // 'http://localhost/project/res.php?fetch_topics=1',
        headers: { }
      };

      axios(config)
      .then((response) =>  {
        this.allData = response.data;
        // Sample HTML input as a string
        const htmlString = this.allData;

        // Parse the HTML string into a DOM object
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const dataTopics = [];

        // Query the document
        const slabs = doc.querySelectorAll('.slab');
        slabs.forEach(slab => {
            const title = slab.querySelector('.parent > p').textContent;
            dataTopics.push(title);
        });

        (dataTopics).forEach(result => {
            console.log(result);
            if(result.toLowerCase().includes(this.searchkey)){
                const index_ = dataTopics.indexOf(result);
                const data_ = {index:index_, title:result}
                this.searchresults.push(data_);
            };
        });
        console.log("serachresult is ",(filteredList).length); 
      })
      .catch(function (error) {
        console.log(error);
      })
  },

  methods: {
    listt(index) {
        localStorage.setItem('dataIndex', index);
        // console.log('search data index is ', localStorage.getItem('dataIndex'));
        // this.$router.push('/search');
        this.$router.push('/project/');
    }
  },
}
</script>

<style scoped>
    .search {
        width: 100%;
        height: 100vh;
        padding-top: 10em;
    }
    .bar {
        margin: 0 auto;
        width: 50%;
    }
    .tList {
        width: 70%;
        margin: 0 auto;
        padding-top: 30px;
    }
    ul {
        overflow-y: scroll;
        height: calc(100% - 12em)
    }
    li {
        margin-bottom: 30px;
        padding: 1em;
        font-weight: 500;
        font-size: 20px;
        line-height: 0;
        letter-spacing: -0.01em;
        color: #2D2927;
    }
    li:hover {
        box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25);
        line-height: 16px;
    }
    /* width */
    ul::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ul::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ul::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ul::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
    .inputs {
        position: relative;
        display: flex;
        background: #EDEDED;
        border-radius: 52.5733px;
        padding: .5em 1.5em;
        width: 100%;
        max-width: 700px;
    }
   input {
        border: none;
        background: #EDEDED;
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
</style>