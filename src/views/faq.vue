<template>
    <div>
        <navbar />
        <div class="faq">
            <div class="layer">
                <div class="area another">
                    <div class="head">
                        <p>Frequently Asked <span>Questions</span></p>
                    </div>
                    <div style="position: relative; max-width: 1100px; margin: 0 auto; z-index: 1">
                        <div class="quesDiv">
                            <div class="ques">
                                <div class="flexxx">
                                    <div class="col"></div>
                                    <p>What is FUTA Library Project?</p>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                                <div class="flexxx">
                                    <div class="col"></div>
                                    <p>How do I register as a student?</p>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                                <div class="flexxx">
                                    <div class="col"></div>
                                    <p>What do I need to register as a student?</p>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                                <div class="flexxx">
                                    <div class="col"></div>
                                    <p>What is FUTA Library Project?</p>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                                <div class="flexxx">
                                    <div class="col"></div>
                                    <p>What is FUTA Library Project?</p>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                            </div>
                        </div>
                        <div class="ansDiv">
                            <div class="ans">
                                <div class="header">
                                    <h2>What is FUTA Library Project?</h2>
                                </div>
                                <div class="sum">
                                    Lorem ipsum dolor sit amet consectetur. Augue egestas adipiscing vulputate nisl turpis. 
                                    Tellus rhoncus id nibh leo ullamcorper arcu eget convallis blandit. In dolor donec amet aliquam at enim commodo feugiat. 
                                    Curabitur urna lacus at nulla malesuada duis ultrices elementum sit. Urna adipiscing dolor proin vitae tristique
                                    suspendisse purus nulla. Accumsan pulvinar urna pharetra nisl nunc pharetra. Egestas metus tortor natoque eget placerat 
                                    imperdiet. Nibh lectus amet pretium arcu at sem mauris. Odio gravida at eu morbi. Placerat nunc dolor penatibus fames 
                                    augue sit neque scelerisque libero. Nunc dui est congue commodo quisque.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'HomeView',

  components: {
    navbar,
  }
}

</script>

<style scoped>
    .faq {
        background: url("@/assets/library.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
        /* overflow-y: hidden; */
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
        width: 85%;
        margin: 0 auto;
        z-index: 2;
        padding-top: 91px;
    }
    .head {
        font-weight: 800;
        font-size: 48px;
        line-height: 64px;
        font-feature-settings: 'salt' on, 'liga' off;
        color: #128BC7;
        margin-bottom: 60px;
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
    span {
        position: relative;
        color: #924374;
    }
    .quesDiv {
        background: white;
        width: 60%;
        height: auto;
        max-width: 640px;
    }
    .ques {
        cursor: pointer;
    }
    .col {
        background: #82D5FF;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        transition: .4s ease-in-out;
    }
    .flexxx p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    .flexxx:hover {
        background: #FAFBFF;
        box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
        transition: .3s ease-in-out;
    }
    .flexxx:hover .col{
        background: #924374;
        transition: .3s ease-in-out;
    }
    .flexxx:hover i {
        color: #924374;
        transition: .3s ease-in-out;
    }
    i {
        position: absolute;
        right: 24px;
        font-size: 25px;
        color: #82D5FF;
        transition: .3s ease-in-out;
    }

    .ansDiv {
        position: absolute;
        background: #FAFBFF;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        width: 90%;
        max-width: 648px;
        height: 472px;
        top: 28%;
        right: 0;
        z-index: -1;
        padding: 40px 40px 40px 144px;
    }
    .sum {
        overflow-y: scroll;
        height: calc(100vh - 24em)
    }
    .sum::-webkit-scrollbar {
        display: none;
    }
    .header {
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 1023px) {
        /* .area {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 80vh;
        } */
        .head {
            font-size: 18px;
            margin-bottom: 1em;
        }
        i {
            right: 10px;
        }
        .flexxx {
            gap: 10px;
            padding: 24px 10px;
        }
        .flexxx p {
            font-size: 12px;
        }
        .col {
            margin-top: .2em;
            width: 15px;
            height: 15px;
        }
        .quesDiv {
            width: 100%;
        }
        .ansDiv {
            display: none;
        }
    }

    @media only screen and (min-width: 1024px) {
        .area {
            width: 90%;
        }
        .quesDiv {
            width: 50%;
            max-width: 630px;
        }
        .ansDiv {
            position: absolute;
            background: #FAFBFF;
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
            border-radius: 16px;
            font-size: 16px;
            width: 65%;
            max-width: 648px;
            height: 472px;
            top: -15%;
            right: 0;
            z-index: -1;
            padding: 40px 40px 40px 150px;
        }
    }
</style>