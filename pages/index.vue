<template>
  <div>
    <main class="mpIndex main">
      <!-- banner start -->
      <section class="banner" ref="banner">
        <div>
          <h1 data-aos="fade-right" data-aos-duration="1500">
            提供Line即時看診預約服務<br />
            讓您的診所成為家庭的健康互動中心
          </h1>
          <span class="subtitle" data-aos="fade-left" data-aos-duration="2000">
            <img src="/mp/title_logo.png" />
            <p>專為醫療診所設計的智慧醫療互動平台</p>
          </span>
          <v-btn data-aos="fade-right" data-aos-duration="1500" elevation="0" color="primaryDark">立即免費試用 <v-icon color="#fff">mdi-arrow-right</v-icon></v-btn>
        </div>
      </section>
      <!-- banner end -->
      <!-- 診所的日常工作中，您是否常遇到. start -->
      <section class="infoSection">
        <div class="">
          <h2>診所的日常工作中，您是否常遇到......</h2>
          <v-container>
            <v-row class="infoContainer">
              <v-col class="item" cols="12" md="6">
                <v-img data-aos="fade-right" data-aos-duration="1000" style="width: 200px" src="/mp/img_people_01.png"></v-img>
                <div class="" data-aos="fade-right" data-aos-duration="1000">
                  <h3>診所業者端</h3>
                  <p>診所櫃檯人力負擔大，櫃檯人員除了處理現場掛號、接聽預約電話外，還得注意診間叫號狀況、提醒預約就診者回診.......</p>
                </div></v-col
              >
              <v-col class="item" cols="12" md="6">
                <v-img data-aos="fade-left" data-aos-duration="1000" style="width: 200px" src="/mp/img_people_02.png"></v-img>
                <div class="" data-aos="fade-left" data-aos-duration="1000">
                  <h3>就診者端</h3>
                  <p>預約掛號和查詢叫號狀況都需靠電話聯繫，遇到診所尖峰時段，還得等待電話接聽，不然就得跑到診所現場人擠人......</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!-- 診所的日常工作中，您是否常遇到. end -->
      <!--身為 就診者 start -->
      <section class="userInfoSection">
        <div class="">
          <h2>
            身為
            <span>就診者</span>
            ，使用DoctorMe您可以......
          </h2>
          <v-container>
            <v-row>
              <v-col class="col" cols="12" md="4" data-aos="fade-up" data-aos-duration="1000"
                ><v-img contain src="/mp/function_icon_01.png"></v-img>
                <div class="item">
                  <h3>
                    <span>1</span>
                    免安裝，隨時隨地預約門診不受限
                  </h3>
                  <p>不用再打電話也無需下載APP，透過Line官方帳號即可隨時預約門診，簡單好上手</p>
                </div>
              </v-col>
              <v-col class="col" cols="12" md="4" data-aos="fade-up" data-aos-duration="1500"
                ><v-img contain src="/mp/function_icon_02.png"></v-img>
                <div class="item">
                  <h3>
                    <span>2</span>
                    代理預約服務， 一機掌握家人就診狀態
                  </h3>
                  <p>代理家戶親友進行預約，協助不便使用手機的親友也能使用預約服務，即刻照護親友的預約就診狀況</p>
                </div></v-col
              >
              <v-col class="col" cols="12" md="4" data-aos="fade-up" data-aos-duration="2000">
                <v-img contain src="/mp/function_icon_03.png"></v-img>
                <div class="item">
                  <h3>
                    <span>3</span>
                    診間叫號、門診預約提醒，貼心守護您左右
                  </h3>
                  <p>診所化身您的貼心助理，讓您隨時查詢看診進度、門診資訊，並透過自動叫號提醒，讓您有效利用等候時間</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!--身為 就診者 end -->
      <!--身為 診所業者 start -->
      <section class="clinicInfoSection">
        <div class="">
          <h2>
            身為
            <span>診所業者</span>
            使用DoctorMe您可以......
          </h2>
          <v-container>
            <v-row>
              <v-col class="col" cols="12" md="6" data-aos="fade-up" data-aos-duration="1100">
                <v-img src="/mp/img_computer.png"></v-img>
              </v-col>
              <v-col class="col" cols="12" md="6">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    <h3>
                      <span class="num">1</span>
                      <span>預約作業數位化，診所管理最強助力</span>
                    </h3>
                    <p>預約管理流程全面數位化，減輕診所行政管理負擔，最大化看診產能，後台提供數據報表資料，輕鬆掌握診所預約動態</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <h3>
                      <span class="num">2</span>
                      <span>多元預約規則設定，因應不同診療需求</span>
                    </h3>
                    <p>後台可設定多樣化的預約規則，包含服務種類、細項、說明、給號方式...... 最大的彈性條件，自由設置最符合您診所的預約機制</p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="2000">
                    <h3>
                      <span class="num">3</span>
                      <span>智慧管理服務，帶領您成為家庭的健康中心</span>
                    </h3>
                    <p>雲端架構，不需額外安裝系統即可操作後台。服務連動LINE官方帳號，透過線上客服、分眾訊息管理，搭建您與就診者良好的醫病關係，成為每戶家庭的健康中心</p>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!--身為 診所業者 end -->
      <!--就診者端功能  start -->
      <section class="productSection" ref="product">
        <div class="">
          <div class="mb-8">
            <h2>就診者端功能</h2>
            <span data-aos="fade-down" data-aos-duration="1000" class="subtitle">「自由預約、隨時查看叫號、門診資訊」</span>
            <v-container>
              <v-row>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_01.png"></v-img>
                  <span>線上預約</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_02.png"></v-img>
                  <span>親友預約</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_03.png"></v-img>
                  <span>看診進度</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_04.png"></v-img>
                  <span>叫號提醒</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_05.png"></v-img>
                  <span>預約提醒</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_06.png"></v-img>
                  <span>診所資訊</span>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div>
            <h2>診所業者端功能</h2>
            <span data-aos="fade-down" data-aos-duration="1000" class="subtitle">「預約服務智慧化，輕鬆管理診所業務」</span>
            <v-container>
              <v-row>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_07.png"></v-img>
                  <span>預約管理</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_08.png"></v-img>
                  <span>彈性規則</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_09.png"></v-img>
                  <span>診間叫號</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_10.png"></v-img>
                  <span>數據報表</span>
                </v-col>
                <v-col class="col" cols="4" md="2">
                  <v-img src="/mp/icon_11.png"></v-img>
                  <span>會員管理</span>
                </v-col>
                <v-col>
                  <v-img src="/mp/icon_12.png"></v-img>
                  <span>線上客服</span>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </section>
      <!--就診者端功能  end -->
      <!--安全且 持續進化 的系統  start -->
      <section class="systemSection">
        <div class="">
          <h2>
            安全且
            <span>持續進化</span>
            的系統
          </h2>
          <v-container>
            <v-row>
              <v-col data-aos="fade-up" data-aos-duration="1000" cols="12" sm="4">
                <v-img src="/mp/safe_icon_01.png"></v-img>
                <h3>資料安全機制</h3>
                <p>所有資料加密保護 保護個人資料安全</p>
              </v-col>
              <v-col data-aos="fade-up" data-aos-duration="1500" cols="12" sm="4">
                <v-img src="/mp/safe_icon_02.png"></v-img>
                <h3>功能持續進化</h3>
                <p>持續發展產品功能 認真滿足客戶需求</p>
              </v-col>
              <v-col data-aos="fade-up" data-aos-duration="2000" cols="12" sm="4">
                <v-img src="/mp/safe_icon_03.png"></v-img>
                <h3>快速技術支援</h3>
                <p>台灣專業軟體業者 提供即時技術支援</p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <section class="priceSection" ref="price">
        <div class="">
          <h2>DoctorMe 方案價格</h2>
          <v-container>
            <v-row>
              <v-col data-aos="fade-up" data-aos-duration="1000" class="col" cols="12" md="4">
                <v-card class="card payCard">
                  <div class="title" color="primaryDark">
                    <h6>基礎版</h6>
                    <p>NT$ <span>0</span> /月</p>
                  </div>
                  <ul>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span> 專屬診所LINE官方帳號 </span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供單一位醫生的預約服務</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>預約服務每月最多1000筆</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供門診預約服務設定</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>會員群發訊息</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>統計圖表報告</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>權限角色設定</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>叫號設定與管理</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>大螢幕叫號顯示</span>
                    </li>
                  </ul>
                </v-card>
              </v-col>
              <v-col data-aos="fade-up" data-aos-duration="1500" class="col" cols="12" md="4">
                <v-card class="card payCard">
                  <div class="title" color="primaryDark">
                    <h6>基本版</h6>
                    <p>NT$ <span>2,400</span> /月</p>
                  </div>
                  <ul>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span> 專屬診所LINE官方帳號 </span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供單一位醫生的預約服務</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>無限次數的預約名額</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供門診預約服務設定</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>會員群發訊息</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>統計圖表報告</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>權限角色設定</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>叫號設定與管理</span>
                    </li>
                    <li>
                      <v-icon color=" errorSecondary">mdi-close</v-icon>
                      <span>大螢幕叫號顯示</span>
                    </li>
                  </ul>
                </v-card>
              </v-col>
              <v-col data-aos="fade-up" data-aos-duration="2000" class="col" cols="12" md="4">
                <v-card class="card payCard">
                  <div class="title" color="primaryDark">
                    <h6>專業版</h6>
                    <p>NT$ <span>4,000</span> /月</p>
                  </div>
                  <ul>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span> 專屬診所LINE官方帳號 </span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供單一位醫生的預約服務</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>預約服務每月最多1000筆</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>提供門診預約服務設定</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>會員群發訊息</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>統計圖表報告</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>權限角色設定</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>叫號設定與管理</span>
                    </li>
                    <li>
                      <v-icon color=" successSecondary">mdi-check</v-icon>
                      <span>大螢幕叫號顯示</span>
                    </li>
                  </ul>
                </v-card>
              </v-col>
            </v-row>
            <p class="infoText">※ 以上費用不包含使用LINE官方帳號所產生的訊息費用</p>
          </v-container>
        </div>
      </section>
      <!--安全且 持續進化 的系統  end -->
      <!-- 提升診所服務 start -->
      <section class="clinicServeSection">
        <v-container>
          <div class="">
            <h2>
              提升診所服務，創造良好的醫病關係<span class="block"></span>從<span>DcotorMe智慧醫療服務</span>
              開始
            </h2>
            <v-btn color="primaryDark" elevation="0">立即免費使用 <v-icon color="#fff">mdi-arrow-right</v-icon></v-btn>
          </div>
        </v-container>
      </section>
      <!-- 提升診所服務 end -->
      <!-- 預約顧問介紹 start -->
      <section class="introduceSection" ref="contact">
        <v-container>
          <div class="">
            <h2>預約顧問介紹、諮詢</h2>
            <span>尋找專業顧問嗎？立即預約諮詢，我們將安排專業顧問介紹，<span class="block"></span>提供最適合您診所的智慧解決方案。</span>
            <v-btn color="primaryDark" elevation="0">與顧問聯繫 <v-icon color="#fff">mdi-arrow-right</v-icon></v-btn>
          </div>
        </v-container>
      </section>
      <!-- 預約顧問介紹 end -->
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// @import 'sass/test.css';
// @import 'styles/main.scss';
// @import 'styles/main.scss';
</style>
