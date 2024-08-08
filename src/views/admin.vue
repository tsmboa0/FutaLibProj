<template>
    <div>
        <div v-if="this.display === 'block'" class="admin">
            <div class="nav">
                <div>
                    <router-link to="/"><img src="@/assets/Logo.svg" alt="" width="150px" height="150px"></router-link>                   
                </div>
                <div>
                    <ul>
                        <li @click="showProj" class="listt chosen" id="pList">
                            <svg width="30" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.0938 15.75H20.25C19.3549 15.75 18.4964 15.3944 17.8635 14.7615C17.2306 14.1286 16.875 13.2701 16.875 12.375V2.53125C16.875 2.45666 16.8454 2.38512 16.7926 2.33238C16.7399 2.27963 16.6683 2.25 16.5938 2.25H10.125C8.93153 2.25 7.78693 2.72411 6.94302 3.56802C6.09911 4.41193 5.625 5.55653 5.625 6.75V29.25C5.625 30.4435 6.09911 31.5881 6.94302 32.432C7.78693 33.2759 8.93153 33.75 10.125 33.75H25.875C27.0685 33.75 28.2131 33.2759 29.057 32.432C29.9009 31.5881 30.375 30.4435 30.375 29.25V16.0312C30.375 15.9567 30.3454 15.8851 30.2926 15.8324C30.2399 15.7796 30.1683 15.75 30.0938 15.75ZM23.625 27H12.375C12.0766 27 11.7905 26.8815 11.5795 26.6705C11.3685 26.4595 11.25 26.1734 11.25 25.875C11.25 25.5766 11.3685 25.2905 11.5795 25.0795C11.7905 24.8685 12.0766 24.75 12.375 24.75H23.625C23.9234 24.75 24.2095 24.8685 24.4205 25.0795C24.6315 25.2905 24.75 25.5766 24.75 25.875C24.75 26.1734 24.6315 26.4595 24.4205 26.6705C24.2095 26.8815 23.9234 27 23.625 27ZM23.625 21.375H12.375C12.0766 21.375 11.7905 21.2565 11.5795 21.0455C11.3685 20.8345 11.25 20.5484 11.25 20.25C11.25 19.9516 11.3685 19.6655 11.5795 19.4545C11.7905 19.2435 12.0766 19.125 12.375 19.125H23.625C23.9234 19.125 24.2095 19.2435 24.4205 19.4545C24.6315 19.6655 24.75 19.9516 24.75 20.25C24.75 20.5484 24.6315 20.8345 24.4205 21.0455C24.2095 21.2565 23.9234 21.375 23.625 21.375Z"/>
                                <path d="M29.4764 13.2602L19.3648 3.14856C19.3451 3.12901 19.3201 3.11571 19.2929 3.11034C19.2657 3.10496 19.2375 3.10774 19.2119 3.11834C19.1863 3.12893 19.1643 3.14687 19.1489 3.16988C19.1334 3.1929 19.1251 3.21997 19.125 3.2477V12.375C19.125 12.6733 19.2435 12.9595 19.4545 13.1705C19.6655 13.3814 19.9516 13.5 20.25 13.5H29.3773C29.405 13.4999 29.4321 13.4915 29.4551 13.4761C29.4781 13.4606 29.496 13.4387 29.5066 13.4131C29.5172 13.3875 29.52 13.3593 29.5146 13.3321C29.5093 13.3049 29.496 13.2799 29.4764 13.2602Z"/>
                            </svg>
                            <span>Project</span>
                        </li>
                        <!-- <li>
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 19.5001V22.5001H0V19.5001C0 19.5001 0 13.5001 10.5 13.5001C21 13.5001 21 19.5001 21 19.5001ZM15.75 5.25008C15.75 4.21173 15.4421 3.19669 14.8652 2.33334C14.2883 1.46998 13.4684 0.797072 12.5091 0.399712C11.5498 0.00235149 10.4942 -0.101616 9.47577 0.100956C8.45737 0.303529 7.52192 0.803543 6.78769 1.53777C6.05346 2.27199 5.55345 3.20745 5.35088 4.22585C5.1483 5.24426 5.25227 6.29985 5.64963 7.25917C6.04699 8.21848 6.7199 9.03842 7.58326 9.61529C8.44661 10.1922 9.46165 10.5001 10.5 10.5001C11.8924 10.5001 13.2277 9.94695 14.2123 8.96239C15.1969 7.97782 15.75 6.64247 15.75 5.25008ZM20.91 13.5001C21.8321 14.2137 22.5867 15.1207 23.1205 16.1573C23.6544 17.194 23.9546 18.335 24 19.5001V22.5001H30V19.5001C30 19.5001 30 14.0551 20.91 13.5001ZM19.5 7.88685e-05C18.4675 -0.0056702 17.4578 0.303012 16.605 0.885079C17.5162 2.15818 18.0061 3.68451 18.0061 5.25008C18.0061 6.81565 17.5162 8.34197 16.605 9.61508C17.4578 10.1971 18.4675 10.5058 19.5 10.5001C20.8924 10.5001 22.2277 9.94695 23.2123 8.96239C24.1969 7.97782 24.75 6.64247 24.75 5.25008C24.75 3.85769 24.1969 2.52233 23.2123 1.53777C22.2277 0.553203 20.8924 7.88685e-05 19.5 7.88685e-05Z" fill="#828282"/>
                            </svg>
                            <span>Students</span>
                        </li> -->
                        <!-- <li>
                            <svg width="30" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5 18.5V21.5H10.5V18.5C10.5 18.5 10.5 12.5 19.5 12.5C28.5 12.5 28.5 18.5 28.5 18.5ZM24 5C24 4.10999 23.7361 3.23996 23.2416 2.49994C22.7471 1.75991 22.0443 1.18314 21.2221 0.842544C20.3998 0.50195 19.495 0.412835 18.6221 0.586468C17.7492 0.760102 16.9474 1.18868 16.318 1.81802C15.6887 2.44736 15.2601 3.24918 15.0865 4.1221C14.9128 4.99501 15.0019 5.89981 15.3425 6.72208C15.6831 7.54434 16.2599 8.24715 16.9999 8.74161C17.74 9.23608 18.61 9.5 19.5 9.5C20.6935 9.5 21.8381 9.0259 22.682 8.18198C23.5259 7.33807 24 6.19348 24 5ZM28.8 12.59C29.6199 13.3465 30.281 14.2587 30.7446 15.2734C31.2081 16.2881 31.465 17.385 31.5 18.5V21.5H36V18.5C36 18.5 36 13.325 28.8 12.59ZM27 0.500002C26.5468 0.500273 26.0964 0.571122 25.665 0.710002C26.5426 1.96846 27.0131 3.46578 27.0131 5C27.0131 6.53423 26.5426 8.03155 25.665 9.29C26.0964 9.42888 26.5468 9.49973 27 9.5C28.1935 9.5 29.3381 9.0259 30.182 8.18198C31.0259 7.33807 31.5 6.19348 31.5 5C31.5 3.80653 31.0259 2.66194 30.182 1.81802C29.3381 0.974108 28.1935 0.500002 27 0.500002ZM12 8H7.5V3.5H4.5V8H0V11H4.5V15.5H7.5V11H12V8Z" fill="#828282"/>
                            </svg>
                            <span>Add Students</span>
                        </li> -->
                        <!-- <li @click="showLec" class="listt" id="addL">
                            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 5.828C3.75 8.8205 6.0075 11.078 9 11.078C11.9925 11.078 14.25 8.8205 14.25 5.828C14.25 2.8355 11.9925 0.578003 9 0.578003C6.0075 0.578003 3.75 2.8355 3.75 5.828ZM25.5 5H22.5V9.5H18V12.5H22.5V17H25.5V12.5H30V9.5H25.5V5ZM3 21.5H18V20C18 15.8645 14.6355 12.5 10.5 12.5H7.5C3.3645 12.5 0 15.8645 0 20V21.5H3Z"/>
                            </svg>
                            <span>Add Lecturers</span>
                        </li> -->
                        <li @click="logoout" class="logout">
                            <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.796 2.24399C12.653 1.82599 14 3.42199 14 4.99999V19C14 20.578 12.653 22.174 10.796 21.756C6.334 20.752 3 16.766 3 12C3 7.23399 6.334 3.24799 10.796 2.24399ZM16.293 8.29299C16.4805 8.10552 16.7348 8.0002 17 8.0002C17.2652 8.0002 17.5195 8.10552 17.707 8.29299L20.707 11.293C20.8945 11.4805 20.9998 11.7348 20.9998 12C20.9998 12.2652 20.8945 12.5195 20.707 12.707L17.707 15.707C17.5184 15.8891 17.2658 15.9899 17.0036 15.9877C16.7414 15.9854 16.4906 15.8802 16.3052 15.6948C16.1198 15.5094 16.0146 15.2586 16.0123 14.9964C16.01 14.7342 16.1108 14.4816 16.293 14.293L17.586 13H9C8.73478 13 8.48043 12.8946 8.29289 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1053 8.73478 11 9 11H17.586L16.293 9.70699C16.1055 9.51946 16.0002 9.26515 16.0002 8.99999C16.0002 8.73482 16.1055 8.48052 16.293 8.29299Z" fill="#924374"/>
                            </svg>
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="details">
                <div class="topNav">
                    <li id="menu"><i class="ri-menu-3-line bluue menu"></i></li>
                    <div class="searchBar">
                        <svg width="15" height="14" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9C16.5 12.866 13.366 16 9.5 16C5.63401 16 2.5 12.866 2.5 9C2.5 5.13401 5.63401 2 9.5 2C13.366 2 16.5 5.13401 16.5 9ZM16.5319 14.6177C17.7635 13.078 18.5 11.125 18.5 9C18.5 4.02944 14.4706 0 9.5 0C4.52944 0 0.5 4.02944 0.5 9C0.5 13.9706 4.52944 18 9.5 18C11.625 18 13.578 17.2635 15.1177 16.0319L17.7929 18.7071C18.1834 19.0976 18.8166 19.0976 19.2071 18.7071C19.5976 18.3166 19.5976 17.6834 19.2071 17.2929L16.5319 14.6177Z" fill="#6F767E"/>
                        </svg>
                        <input type="search" placeholder="Search or type a command">
                    </div>
                    <div class="btnAva" style="display: flex; justify-content: space-between">
                        <button @click=create class="create">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44771 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1Z" fill="#FCFCFC"/>
                            </svg>
                            <span>Create Project</span>
                        </button>
                        <button @click="next" class="next" id="next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: .5em; vertical-align: -.5em">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM7.498 7.135C7.64952 7.04715 7.82145 7.00063 7.9966 7.0001C8.17174 6.99957 8.34396 7.04506 8.496 7.132L15 10.848V8C15 7.73478 15.1054 7.48043 15.2929 7.29289C15.4804 7.10536 15.7348 7 16 7C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V13.152L8.496 16.868C8.34394 16.9549 8.17174 17.0003 7.99662 16.9997C7.8215 16.9991 7.64961 16.9525 7.49814 16.8646C7.34667 16.7767 7.22094 16.6506 7.13352 16.4989C7.0461 16.3472 7.00006 16.1751 7 16V8C6.99998 7.82483 7.04597 7.65273 7.13336 7.50093C7.22076 7.34912 7.3465 7.22293 7.498 7.135Z" fill="white"/>
                            </svg>
                            <span @click="submitData">Next</span>
                        </button>
                        <div></div>
                    </div>
                </div>
                <div class="boddy">
                    <div class="noFile">
                        <div class="heaad">
                            <div class="barr"></div>
                            <p>All Project</p>
                        </div>
                        <div class="bodyy vFlex">
                            <img src="@/assets/noFile.png" alt="">
                            <p>No Project Available</p>
                        </div>
                    </div>
                    <div class="other">
                        <div class="heaad">
                            <div class="barr"></div>
                            <p>Create Project</p>
                        </div>
                        <div class="bodyy">
                            <div class="inpuuts">
                                <div style="width: 47%">
                                    <p>Student Name</p>
                                    <input type="text" id="name" v-model="name" name="name">
                                </div>
                                <div style="width: 47%" >
                                    <p>Matric Number</p>
                                    <input type="text" id="matric" v-model="matric" name="matric">
                                </div>
                            </div>
                            <div class="inpuuts">
                                <div style="width: 47%">
                                    <p>School</p>
                                    <div class="fixedd">SEET</div>
                                    <!-- <input type="text"> -->
                                </div>
                                <div style="width: 47%" >
                                    <p>Department</p>
                                    <div class="fixedd">Computer Engineering</div>
                                    <!-- <input type="text"> -->
                                </div>
                            </div>
                            <div class="inpuuts">
                                <!-- <div class="custom-file-upload">
                                    <input id="file-upload" type="file" ref="imageUploader"  @change="onFileChange"  class="input-file" />
                                        <div v-if="!files || !files.length" class="fllex"> 
                                            <div class="icon"><i class="ri-upload-cloud-fill"></i></div>
                                            <br>
                                            <p style="text-align: left;">Upload files<br>PNG, JPG, JEPG</p>
                                        </div>
                                        <div v-else>
                                            <p v-for="file in files" :key="file.name">
                                                <span  class="image-name_color"> {{ file.name }} </span> 
                                            </p>
                                        </div>
                                </div> -->
                                <div tyle="width: 47%">
                                    <p>Project Page</p>
                                    <input type="number" name="pages" id="pages" v-model="pages">
                                </div>
                            </div>
                            <div class="inpuuts">
                                <div style="width: 100%" >
                                    <p>Project Topic</p>
                                    <input type="text" id="topic" v-model="topic" name="topic">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="other2">
                        <div class="heaad">
                            <div class="barr"></div>
                            <p>All Projects</p>
                        </div>
                        <div class="bodyy">
                            <!-- <div class="slab"> 
                                <div class="parent">
                                    <p>Automated Market Basket Analysis System</p>
                                    <div style="display: flex; gap: 10px">
                                        <p class="name">Ifeoluwa Emmanuel</p>
                                        <p class="name">CPE/18/0106</p>
                                    </div>
                                    
                                    <div class="det" style="display: flex;">
                                        <div class="pdf">PDF</div>
                                        <div class="pages">68 Pages</div>
                                        <p class="date">Jan 01 2023</p>
                                    </div>
                                    <div class="absBtn">
                                        <button class="edit" @click="fire">
                                            <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z" fill="#128BC7"/>
                                            </svg>
                                            <span>Edit</span>
                                        </button>
                                        <button class="delete" @click="test">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.79419 8.47349L8.89419 7.59849C8.69419 7.41515 8.45652 7.32749 8.18119 7.33549C7.90652 7.34415 7.67752 7.44015 7.49419 7.62349C7.31086 7.80682 7.21919 8.04015 7.21919 8.32349C7.21919 8.60682 7.31086 8.84015 7.49419 9.02349L10.0942 11.6235C10.2775 11.8068 10.5109 11.8985 10.7942 11.8985C11.0775 11.8985 11.3109 11.8068 11.4942 11.6235L14.1192 8.99849C14.3025 8.81515 14.3902 8.58582 14.3822 8.31049C14.3735 8.03582 14.2775 7.80682 14.0942 7.62349C13.9109 7.44015 13.6775 7.34415 13.3942 7.33549C13.1109 7.32749 12.8775 7.42349 12.6942 7.62349L11.7942 8.47349V5.29849C11.7942 5.01515 11.6985 4.78182 11.5072 4.59849C11.3152 4.41515 11.0775 4.32349 10.7942 4.32349C10.5109 4.32349 10.2735 4.41915 10.0822 4.61049C9.89019 4.80249 9.79419 5.04015 9.79419 5.32349V8.47349ZM6.79419 15.3235H14.8192C15.1025 15.3235 15.3359 15.2275 15.5192 15.0355C15.7025 14.8442 15.7942 14.6068 15.7942 14.3235C15.7942 14.0402 15.6982 13.8025 15.5062 13.6105C15.3149 13.4192 15.0775 13.3235 14.7942 13.3235H6.76919C6.48586 13.3235 6.25252 13.4192 6.06919 13.6105C5.88586 13.8025 5.79419 14.0402 5.79419 14.3235C5.79419 14.6068 5.88986 14.8442 6.08119 15.0355C6.27319 15.2275 6.51086 15.3235 6.79419 15.3235ZM10.7942 20.3235C9.41086 20.3235 8.11086 20.0608 6.89419 19.5355C5.67752 19.0108 4.61919 18.2985 3.71919 17.3985C2.81919 16.4985 2.10686 15.4402 1.58219 14.2235C1.05686 13.0068 0.794189 11.7068 0.794189 10.3235C0.794189 8.94015 1.05686 7.64015 1.58219 6.42349C2.10686 5.20682 2.81919 4.14849 3.71919 3.24849C4.61919 2.34849 5.67752 1.63582 6.89419 1.11049C8.11086 0.58582 9.41086 0.323486 10.7942 0.323486C12.1775 0.323486 13.4775 0.58582 14.6942 1.11049C15.9109 1.63582 16.9692 2.34849 17.8692 3.24849C18.7692 4.14849 19.4815 5.20682 20.0062 6.42349C20.5315 7.64015 20.7942 8.94015 20.7942 10.3235C20.7942 11.7068 20.5315 13.0068 20.0062 14.2235C19.4815 15.4402 18.7692 16.4985 17.8692 17.3985C16.9692 18.2985 15.9109 19.0108 14.6942 19.5355C13.4775 20.0608 12.1775 20.3235 10.7942 20.3235Z" fill="#924374"/>
                                            </svg>

                                            <span>Download</span>
                                        </button>
                                    </div>
                                </div>
                            </div> -->
                            <div v-html="this.storage"></div>
                        </div>
                    </div>
                    <div class="otherStudents">
                        <div class="heaad">
                            <div class="barr"></div>
                            <p>All Students</p>
                        </div>
                        <div class="bodyy">
                            <div class="slab"> 
                                <div style="position: relative">
                                    <p class="name2">Fagbemi Emmanuel</p>
                                    <div class="det" style="display: flex;">
                                        <div class="pdf">IFT</div>
                                        <p class="mat">CPE/18/0003</p>
                                    </div>
                                    <button class="delete">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 3C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4C18 4.26522 17.8946 4.51957 17.7071 4.70711C17.5196 4.89464 17.2652 5 17 5H16L15.997 5.071L15.064 18.142C15.0281 18.6466 14.8023 19.1188 14.4321 19.4636C14.0619 19.8083 13.5749 20 13.069 20H4.93C4.42414 20 3.93707 19.8083 3.56688 19.4636C3.1967 19.1188 2.97092 18.6466 2.935 18.142L2.002 5.072C2.00048 5.04803 1.99982 5.02402 2 5H1C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H17ZM11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H7C6.73478 2 6.48043 1.89464 6.29289 1.70711C6.10536 1.51957 6 1.26522 6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0H11Z" fill="#F04B4B"/>
                                        </svg>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="addLecturer">
                        <div class="heaad">
                            <div class="barr"></div>
                            <p>Add Lecturers</p>
                        </div>
                        <div class="bodyy">
                            <div class="inpuuts">
                                <div style="width: 47%">
                                    <p>Name</p>
                                    <input type="text" name="name" placeholder="example example">
                                </div>
                                <div style="width: 47%" >
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="example@futa.edu.ng">
                                </div>
                            </div>
                            <div class="spacee"></div>
                            <div class="inpuuts">
                                <div style="width: 47%">
                                    <p>School</p>
                                    <div class="fixedd">SOC</div>
                                    <!-- <input type="text"> -->
                                </div>
                                <div style="width: 47%" >
                                    <p>Department</p>
                                    <div class="fixedd">Information Technology</div>
                                    <!-- <input type="text"> -->
                                </div>
                            </div>
                            <div class="spacee"></div>
                            <div class="inpuuts">
                                <div style="width: 47%">
                                    <p>Password</p>
                                    <input type="password" id="pass" name="password" placeholder="••••••••">
                                </div>
                                <div style="width: 47%" >
                                    <p>Confirm Password</p>
                                    <input type="password" id="cpass" name="cpassword" placeholder="••••••••">
                                </div>
                            </div>
                            <div class="spacee"></div>
                            <div class="btnDiv">
                                <button>Add Lecturer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p v-else></p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                name: "",
                matric: "",
                topic: "",
                pages: "",
                storage: "",
                display: "",
                files: null
            }
        },

        mounted() {
            console.log('login value is ',localStorage.getItem('loggedin'));
            if(localStorage.getItem('loggedin') === 'true'){
                this.display = 'block';
                console.log('after block');
            }else{
                alert('You must log in first');
                this.$router.push('/login');
            }
            var axios = require('axios');

            var config = {
                method: "GET",
                // url: 'http://localhost/project/get.php?retrieve=1',
                url: 'https://futa.smarthub.click/php/get.php?retrieve=1', 
                headers: { }
            };

            axios(config)
            .then((response) =>  {
                this.username = response.data

                // this.storage = this.username;
                console.log("The storage from the server is" + response.data);
                console.log("This is from the local server")

                // Sample HTML input as a string
                const htmlString = response.data;

                // Parse the HTML string into a DOM object
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                const dataList = [];

                // Query the document
                const slabs = doc.querySelectorAll('.slab');
                slabs.forEach(slab => {
                    const title = slab.querySelector('.parent > p').textContent;
                    const name = slab.querySelector('.child1 .name').textContent;
                    const pages = slab.querySelector('.pages').textContent;
                    const date = slab.querySelector('.date').textContent;
                
                    const data_ = {title:title, name:name, pages:pages, date: 2024};
                    dataList.push(data_);
                    console.log('this is the data ', data_);
                });

                   // Clear the text content of all elements with the class '.date'
                    const dateElements = doc.querySelectorAll('.date');
                    dateElements.forEach(dateElement => {
                        dateElement.textContent = '';  // Replace text content with an empty string
                    });
                    const downloadElements = doc.querySelectorAll('button');
                    downloadElements.forEach(downloadElement => {
                        downloadElement.innerHTML = '';  // Replace text content with an empty string
                    });

                    // Convert the modified HTML back to a string
                    const modifiedHTML = doc.documentElement.outerHTML;

                    // Use this modifiedHTML in your Vue component
                    this.storage = modifiedHTML;
            })
            .catch(function (error) {
                console.log(error);
            })

            // if(this.username !== "") {
            //     $(".other2").show()
            //     $(".noFile").hide()
            // }
        },

        methods: {
            create() {
                $(".noFile").hide(100);
                $(".create").hide(100);
                $(".other").show(200);
                $(".other2").hide(200);
                $(".next").show(200);
            },

            next() {
                var name = document.getElementById("name")
                var matric = document.getElementById("matric")
                var topic = document.getElementById("topic")

                if(name.value !== '' && matric.value !== "" && topic.value !== "") {
                    $(".other").hide(100);
                    $(".other2").show(200);
                    $(".next").hide(100);
                    $(".create").show(200);
                }
            },
            submitData() {
                axios.get('https://futa.smarthub.click/php/save.php?save=1&name=' + this.name + '&matric=' + this.matric + '&topic=' + this.topic + '&pages=' + this.pages)
                // https://futatimetable.online/library/php/
                .then(response => {
                    this.storage = response.data;
                    console.log(this.storage)
                    location.reload();
                    console.log("This is working")
                    // Handle success response
                })
                .catch(error => {
                    console.log(error.response.data);
                    // Handle error response
                });
            },

            fire() {
                console.log(this.pages)
            },

            shownew() {
                this.$router.push('/project');
            },
            test() {
                this.$router.push('/');
            },

            showLec() {
                const add = document.getElementById("addL");
                const proj = document.getElementById("pList");

                $(".addLecturer").show();
                $(".other2").hide();
                add.classList.add("chosen");
                proj.classList.remove("chosen");
            },

            logoout() {
                localStorage.setItem('loggedin', false);
                console.log(localStorage.getItem('loggedin'));
                this.$router.push('/login');
            },

            showProj() {
                const add = document.getElementById("addL");
                const proj = document.getElementById("pList");

                $(".addLecturer").hide();
                $(".other2").show();
                add.classList.remove("chosen");
                proj.classList.add("chosen");
            },

            onFileChange(e) {
                const error = document.querySelector ('.errorMsg');

                this.files = e.target.files

                if(this.files) {
                    error.style.display = 'none';
                } 
            },
        },
    }

</script>

<style scoped>
    .admin {
        display: flex;
        height: 100vh;
    }
    .nav {
        position: relative;
        width: 30%;
        padding: 0px 24px;
        /* border: 1px solid grey; */
        height: 100vh;
    }
    .nav img {
        width: 150px;
        height: 150px;
        margin-top: -1em;
    }
    li {
        margin-bottom: 35px;
        display: flex;
        gap: 20px;
        padding: .5em;
    }
    li span {
        margin-top: .1em;
        text-align: left;
    }
    #menu {
        display: none;
    }
    /* .boddy {
        display: none;
    } */

    .listt svg{
        fill: #828282;
    }

    .changed {
        background: #128BC7;
    }

    #next {
        display: none;
    }
    .chosen {
        background: #128BC7;
        border-radius: 12px;
        color: white;
        width: 180px;
    }

    .chosen svg {
        fill: white;
    }
    .logout {
        position: absolute;
        bottom: 30px;
    }
    .logout span {
        margin-top: 0em;
    }
    .details {
        width: 70%;
        /* border: 1px solid; */
        background: #F4F4F4;
    }
    .topNav {
        display: flex;
        justify-content: space-between;
        padding: 19px 40px;
        background: white;
        margin-bottom: 1em;
    }
    .searchBar {
        position: relative;
        padding: .5em 3em;
        background: #F4F4F4;
        border-radius: 12px;
    }
    .searchBar input {
        border: none;
        background: #F4F4F4;
        width: 100%;
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
        letter-spacing: -0.01em;
        outline: none;
    }
    .searchBar svg {
        position: absolute;
        top: 50%;
        left: 12%;
        transform: translate(-50%, -50%);
    }
    .btnAva {
        display: flex; 
        justify-content: space-between
    }
    .btnAva button {
        display: flex;
        gap: 10px;
        border: none;
        background: #924374;
        border-radius: 12px;
        padding: 0em 1em;
    }
    button span {
        font-weight: 600;
        font-size: 15px;
        line-height: 40px;
        letter-spacing: -0.01em;
        color: #FCFCFC;
    }

    button svg {
        margin-top: .9em;
    }
     .addLecturer, .otherStudents, .noFile, .other{
        width: 90%;
        margin: 0 auto;
        display: none;
    }
    .other2{
        width: 90%;
        margin: 0 auto;
    }
    .vFlex {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .heaad {
        display: flex;
        gap: 16px;
    }
    .barr {
        width: 16px;
        height: 32px;
        background: #924374;
        border-radius: 4px;
    }
    .heaad p {
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #4F4F4F;
    }
    .bodyy {
        background: white;
        margin-top: 1em;
        padding: 1em;
        height: 450px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .bodyy input[type=text], input[type=email], input[type=password], .fixedd{
        border: 1px solid #667085;
        border-radius: 4px;
        padding: .5em;
        width: 100%;
        outline: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
    }

    .inpuuts p {
        color:#344054;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }
    .spacee {
        margin: 2em 0em;
    }

    .btnDiv {
        text-align: center;
    }

    .btnDiv button {
        background: #128BC7;
        color: white;
        width: 30%;
        border-radius: 8px;
        padding: 1em .5em;
    }
    .bodyy input[type=number] {
        border: 1px solid #667085;
        border-radius: 14px;
        width: 50%;
        height: 50px;
        text-align: center;
        outline: none;
    }
    .inpuuts {
        display: flex; 
        justify-content: space-between;
        margin-bottom: 1em;
    }
    .inpuuts p, label {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #4F4F4F;
        margin-bottom: .5em;
    }
    .fInput {
        background: #F5F5F5;
        border: 2px dashed #C2C2C2;
        border-radius: 14px;
        padding: 1em 5em;
    }
    .det {
        display: flex;
        gap: 20px;
    }
    .pdf, .pages{
        /* display: flex;
        gap: 4px; */
        border-radius: 9px;
        padding: 4px 8px;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: -0.01em;
        color: #EDEDED;
        width: 10%;
        text-align: center;
    }
    .pdf {
        background: #128BC7;
    }
    .pages {
        background: #924374;
    }
    .date, .mat {
        font-weight: 400;
        font-size: 10px;
        line-height: 11px;
        letter-spacing: -0.01em;
        color: #828282;
        margin-top: .5em;        
    }

    .absBtn {
        position: absolute;
        top: 50%;
        right: -160px;
        width: 250px;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .delete {
        display: flex;
        background: #F6EEFF;
        padding: 10px 20px;
        gap: 4px;
        border-radius: 28px;
        /* z-index: 9999999 */
    }

    .edit {
        display: flex;
        background: #E9F8FF;
        padding: 10px 20px;
        gap: 4px;
        border-radius: 28px;
        /* z-index: 9999999 */
    }
    .delete svg, .edit svg {
        margin-top: -.2em;
    }
    .delete span, .edit span {
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: -0.01em;
    }

    .delete span {
        color: #924374;
    }

    .edit span {
        color: #128BC7;
    }
    .slab {
        box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25);
        border-radius: 12px;
        padding: .5em 1em;
        cursor: pointer;
    }
    .name {
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.01em;
        color: #828282;
        margin-bottom: .5em;
    }
    .name2 {
        font-weight: 500;
        font-size: 15px;
        line-height: 16px;
        letter-spacing: -0.01em;
        color: #2D2927;
        margin-bottom: 1em;
    }

    .parent {
        position: relative; 
        width: 100%;
    }

    @media only screen and (max-width: 425px) {
        .nav {
            display: none;
        }
        #menu {
            display: block;
        }
        .details {
            width: 100%;
        }
        .topNav {
            padding: 9px 10px;
            height: 60px;
        }
        .searchBar {
            padding: .5em 1em;
            /* width: 60%; */
        }
        .searchBar input {
            font-size: 11px;
        }
        .searchBar svg {
            display: none;
        }
        button svg {
            display: none;
        }
        button span {
            font-weight: 600;
            font-size: 11px;
            line-height: 40px;
            letter-spacing: -0.01em;
            color: #FCFCFC;
        }
        .bodyy input[type=text], .fixedd{
            border: 1px solid #667085;
            border-radius: 4px;
            padding: .5em;
            width: 100%;
            outline: none;
            font-weight: 400;
            font-size: 12px;
            line-height: 24px;
            color: #667085;
        }
        .fInput {
            background: #F5F5F5;
            border: 2px dashed #C2C2C2;
            border-radius: 14px;
            padding: 1em 2em;
        }
        .inpuuts p, label {
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            color: #4F4F4F;
            margin-bottom: .5em;
        }
    }
</style>