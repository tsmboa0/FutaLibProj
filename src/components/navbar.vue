<template>
    <div>
        <div class="navbar">
            <ul class="navList">
                <li>
                    <img src="../assets/Logo.svg" alt="Futa logo">
                </li>
                <div class="flexx rest">
                    <div class="flexx1">
                        <li><router-link to="/" active-link='active'>Home</router-link></li>
                        <!-- <li><router-link to="/faq">FAQ</router-link></li> -->
                        <!-- <li><router-link to="/admin">admin</router-link></li> -->
                    </div>
                    
                    <!-- <li @click="dawn()"><i class="ri-moon-line dawn"></i></li>
                    <li><i class="ri-sun-line day"></i></li> -->
                    <li><router-link to="/login"><p class="login">Login</p></router-link></li>
                </div>
                <li class="menu bluue" id="menu" @click="opeen()"><i class="ri-menu-3-line"></i></li>
            </ul>

            
        </div>
        <div class="opened" id="open">
            <div class="icon" @click="close()">
                <i class="ri-close-circle-line"></i>
            </div>
            <div class="vertical">               
                <li><router-link to="/" active-link='active' @click="close()">Home</router-link></li>
                <!-- <li @click="close()"><router-link to="/faq">FAQ</router-link></li> -->
                <!-- <li @click="close()"><router-link to="/admin">admin</router-link></li> -->
                <li><router-link to="/login" @click="close()"><p class="login">Login</p></router-link></li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',

        methods: {
            opeen() {
                let menu = document.getElementById("open");

                menu.classList.add("show");
            },
            close() {
                let menu = document.getElementById("open");

                menu.classList.remove("show");
            },
            // dawn() {
            //     let body = document.getElementsByTagName ('BODY')[0];

            //     body.style.background = "#28282B"
            // },
        },
    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        width: 100%;
        z-index: 99;
    }
    li {
        font-size: 21px;
        padding: 2px;
        line-height: 60px;
    }
    li img {
        width: 170px;
        height: 60px;
        vertical-align: middle;
    }
    .navList {
        display: flex;
        justify-content: space-between;
        padding: .5em;
        width: 90%;
        margin: 0 auto;
    }
    .flexx li {
        flex-grow: 1;
        flex-basis: 0;
        margin-left: .55em;
    }
    .login {
        background: #924374;
        border-radius: 20px;
        color: white;
        padding: 1em;
        margin-top: .3em;
        line-height: 5px;
    }

    .active-link {
        color: #924374;
        font-weight: 700;
    }

    .active-link p {
        color: #924374;
        background: white;
        border: 1px solid #924374;
    }
    .rest {
        display: none;
    }

    .opened {
        position: fixed;
        width: 100%;
        background: white;
        top: -50%;
        padding: 1em;
        transition: top .5s;
        z-index: 99999999;
    }

    .show {
        top: 0%;
        transition: top .5s;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }

    .icon i {
        position: absolute;
        right: 8%;
    }

    @media only screen and (min-width: 768px) {
        .rest {
            display: flex;
        }
        .menu {
            display: none;
        }
    }
</style>