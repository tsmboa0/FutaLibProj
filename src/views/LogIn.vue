<template>
  <div>
    <navbar />
    <div class="Login log" id="login" style="padding-top: 5em;">
      <div class="flexArea">
        <div class="Login2">
          <p class="main">Log In</p>
          <p class="min">Please fill your detail to access your account.</p>

          <div class="flexx2">
              <p class="lec overlay" id="lecture">As a Lecturer</p>
              <!-- <p @mouseover="hover()" @mouseout="noHover()" @click="changee()" class="stu" id="student">As a Student</p>
              
                @mouseover="hover2()" @mouseout="noHover2()" @click="changg()"
              -->
          </div>

          <form @submit.prevent="onSubmit">
              <p id="invalidCred" style="color: red;display: none;"> Incorrect email or password!</p>
              <div class="lecturer">
                  <div>
                      <p>Email</p>
                      <input type="email" placeholder="name@futa.edu.ng" id="emaill">
                      <!-- v-model="v$.form.email.$model" -->
                      <!-- <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div> -->
                  </div>
                  <div>
                    <!-- :class="{ error: v$.form.password.$errors.length }" 
                    
                    v-model="v$.form.password.$model"
                    -->
                      <p>Password</p>
                      <input id="passwordd" required type="password" placeholder="••••••••">
                      <!-- <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div> -->
                  </div>
              </div>
              <!-- <div class="student">
                  <div>
                      <p>Matric Number</p>
                      <input type="text" placeholder="IFT/16/0024" v-model="v$.form.text.$model">
                      <div class="input-errors" v-for="(error, index) of v$.form.text.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                  </div>
                  <div>
                      <p>Email</p>
                      <input type="password" placeholder="••••••••" v-model="v$.form.password.$model">
                      <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                  </div>
              </div> -->
              <div class="flexx1">
                  <div class="flexx">
                      <input type="checkbox" id="remember">
                      <label for="remember">Remember me</label>
                  </div>
                  <div>
                      <a href="">Forgot Password?</a>
                  </div>
              </div>
              <button class="submit">Sign In</button>
          </form>
      </div>
      <div class="majorImg">
          <img src="../assets/gate.png" alt="FUTA gate image" class="firsst">
          <img src="../assets/auditorium.png" alt="FUTA auditorium" class="second">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import useVuelidate from '@vuelidate/core'
// import { required, email, minLength } from '@vuelidate/validators'

  export default {
    name: 'Login',

    setup () {
      return { v$: useVuelidate() }
    },

    // data() {
    //   return {
    //     form: {
    //       email: '',
    //       text: '',
    //       password: '',
    //       username: '',
    //     },
    //   }
    // },
    // computed: {
    //   email: {
    //         get() {
    //             return this.$store.state.email
    //         },
    //         set(value) {
    //             this.$store.commit('addEmail', value)
    //             // this.v$.form.email.$model()
    //         }
            
    //     },
    // },
    mounted() {
    var axios = require('axios');

      var config = {
        method: "GET",
        // url: 'http://localhost/project/login.php?login=1&user=ola@futa.edu.ng&password=Password1',
        url: 'https://futa.smarthub.click/php/login.php?login=1&user=ola@futa.edu.ng&password=Password1',
        headers: { }
      };

      axios(config)
      .then((response) =>  {
        this.username = response.data

        console.log(JSON.stringify(this.username))
      })
      .catch(function (error) {
        console.log(error);
      })
  },

    components: {
      navbar,
    },

    // validations() {
    //   return {
    //     form: {
    //       email: {
    //         required, email 
    //       },
    //       text: {
    //         required,
    //         min: minLength(11)
    //       },
    //       password: {
    //           required, 
    //       },
    //     },
    //   }
    // },

    methods: {
      onSubmit() {
        var submit = document.querySelector(".submit");

        var email = document.getElementById('emaill');
        var password = document.getElementById('passwordd');
        var cred = document.getElementById('invalidCred');

        if(email.value === "cpe-hod@futa.edu.ng" && password.value === 'FutaLibProj1#') {
          submit.disabled = false;
          localStorage.setItem('loggedin', true);
          console.log(localStorage.getItem('loggedin'));
          this.$router.push('/admin')
          
        } else {
          cred.style.display='block';
          submit.style.background = "red";
        }
        console.log(this.$store.state.email)
      },
      hover() {
        let log = document.getElementById("login");
        var stu = document.getElementById("student");
        var submit = document.querySelector(".submit");

        log.className = "active2";
        stu.classList.add("active");
        submit.classList.add("active");
      },
      hover2() {
        let log = document.getElementById("login");
        var lec = document.getElementById("lecture");
        var submit = document.querySelector(".submit");

        if(lec.classList.contains("overlay")) {
          
        } else {
          log.className = "loginD";
          lec.classList.add("overlayy");
          submit.classList.add("overlayy");
        }

        
      },
      noHover() {
        let log = document.getElementById("login");
        var stu = document.getElementById("student");
        var submit = document.querySelector(".submit");

        log.className = "log";
        stu.classList.remove("active");
        submit.classList.remove("active");
      },
      noHover2() {
        let log = document.getElementById("login");
        var lec = document.getElementById("lecture");
        var submit = document.querySelector(".submit");


          log.className = "log";
          lec.classList.remove("overlayy");
          submit.classList.remove("overlayy");
      },
      changee() {
        var element = document.getElementById("lecture");
        var stu = document.getElementById("student");
        var lec = document.getElementById("lecture");
        let log = document.getElementById("login");
        var submit = document.querySelector(".submit");

        $(".lecturer").hide(50);
        $(".student").show(50);
        $(".second").show();
        $(".firsst").hide();
        element.classList.remove("overlay");
        log.className = "active2";
        stu.classList.add("active1");
        stu.classList.remove("colored");
        stu.classList.add('white');
        submit.classList.add("active1");
      },

      changg() {
        var element1 = document.getElementById("student");
        var lec = document.getElementById("lecture");
        var stu = document.getElementById("student");
        let log = document.getElementById("login");
        var submit = document.querySelector(".submit");

        $(".student").hide(50);
        $(".firsst").show();
        $(".lecturer").show(50);
        $(".second").hide();
        element1.classList.add("active1");
        log.className = "loginD";
        lec.classList.add("overlay");
        submit.classList.remove("active1");
        submit.classList.add("overlayy");
        stu.classList.add("colored")
        stu.classList.remove("active1");
      }
    }
  }
</script>

<style scoped>
  .white {
    color: #fff;
  }
  .colored {
    color: #924374
  }
  .Login {
    width: 100%;
    /* height: 100%; */
    overflow-y: hidden;    
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
  .Login::-webkit-scrollbar {
    display: none;
  }
  .log::before {
    content: "+";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(18, 139, 199, 0.07);
    filter: blur(175px);
    z-index: -1;
  }
  .log.active2::before {
    content: "-";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(146, 67, 116, 0.07);
    filter: blur(175px);
    z-index: -1;
  }
  
  .log.loginD::before {
    content: "*";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(18, 139, 199, 0.07);
    filter: blur(175px);
    z-index: -1;
  }


  .Login2 {
    width: 95%;
    max-width: 300px;
    margin: 0 auto;
    color: black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  .error-msg {
    color: red;
    font-size: 12px;
    margin-top: -1em;
    margin-bottom: .5em;
  }
  .imageNav {
    margin: 0 auto;
    width: 90%;
  }
  .imageNav img {
    width: 120px;
    height: 60px;
  }
  .main {
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #344054;
  }
  .min {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #667085;
  }
  .flexx2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1px;
    background: rgba(146, 67, 116, 0.1);
    border-radius: 20px;
    font-size: 14px;
    margin-top: 43px;
    margin-bottom: 26px;
    height: 34px;
    cursor: pointer ;
  }
  .lecturer p, .student p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-bottom: .5em;
  }
  .lecturer input, .student input {
    width: 100%;
    padding: 8px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    background: transparent;
    margin-bottom: 1em;
  }
  .lec, .stu {
    text-align: center;
    flex-grow: 1;
    flex-basis: 0;
    width: 150px;
  }
  .lec {
    height: 34px;
    line-height: 35px;
    border-radius: 20px;
    color: #128BC7;
    box-shadow: inset 0 0 0 0 #128BC7;
    transition: ease-out 0.3s;
    outline: none;
  }
  .stu {
    color: #924374;
    border-radius: 20px;
    height: 34px;
    line-height: 35px;
    box-shadow: inset 0 0 0 0 #924374;
    transition: ease-out 0.3s;
    outline: none;
  }
  .active {
    background: #924374;
    box-shadow: inset 500px 0 0 0 #924374;
    color: #fff;
    border-radius: 20px;
  }
  .active1 {
    background: #924374;
    box-shadow: inset 500px 0 0 0 #924374;
    color: #fff;
    border-radius: 20px;
  }
  .overlay {
    background: #128BC7;
    border-radius: 20px;
    color: #fff;
    padding: 5px;
    width: 150px;
    height: 34px;
    line-height: 23px;
    transition: ease-out 0.3s;
    box-shadow: inset 500px 0 0 0 #128BC7;
  }
  .overlayy {
    background: #128BC7;
    box-shadow: inset 500px 0 0 0 #128BC7;
    color: #fff;
    border-radius: 20px;
  }
  .overlayy1 {
    background: #128BC7;
    box-shadow: inset 500px 0 0 0 #128BC7;
    color: #fff;
    border-radius: 20px;
  }
  .overlay2 {
    background: #924374;
    border-radius: 20px;
    color: white;
    padding: 5px;
    width: 150px;
    height: 34px;
    line-height: 23px;
  }
  .student {
    display: none;
  }
  .flexx1 {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-top: .5em;
  }
  .flexx {
    display: flex;
    gap: 10px;
  }
  .submit {
    background: #128BC7;
    border: none;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin-top: 32px;
    transition: ease-out 0.3s;
  }

  .flexArea {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    gap: 20px;
  }

  .majorImg {
      display: none;
      /* flex-grow: 1;
      flex-basis: 0; */
  }
  .majorImg img {
      border-radius: 20px;
      width: 100%;
      height: 550px;
  }

  .firsst {
    animation: slideInFromRight .4s ease-in;
  }

  .second {
    display: none;
    animation: slideInFromRight .4s ease-in;
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }


  @media only screen and (min-width: 768px) {
    .Login2 {
      width: 60%;
      max-width: 500px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .main {
      margin-top: 2em;
    }
    .Login2 {
      width: 40%;
    }
    .majorImg {
      display: block;
      width: 45%;
      margin-top: 1.5em;
    }
  }
</style>
