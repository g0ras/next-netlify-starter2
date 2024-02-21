import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <!--=================== M A I N ===================-->
      <main class="main">
         <!--=================== H O M E ===================-->
         <section class="home section" id="home">
            <div class="home_container container grid">
               <img src="assets/img/home-cactus.png" alt="image" class="home_img">

               <div class="home_data">
                  <h1 class="home_title">
                     ORNAMENTAL <br>
                     <span>PLANTS</span> FOR <br>
                     YOUR HOME <br>
                  </h1>

                  <p class="home_description">
                     We design ornamental plants four your
                     home in-house for an original style and
                     quality you won't find anywhere else.
                  </p>

                  <div class="home_buttons">
                     <a href="#" class="buttons">
                        <span>
                           <i class="ri-arrow-right-line"></i>
                        </span>
                        GO TO SHOP
                     </a>

                     <a href="#" class="buttons_link">MORE DETAILS</a>
                  </div>
               </div>
            </div>
         </section>

         <!--=================== N E W S ===================-->
         <section class="new section" id="news">
            <div class="news_container container grid">
               <div class="news_data">
                  <h2 class="section_title">
                     NEW PLANTS FOR <br> YOUR HOME
                  </h2>

                  <p class="news_description">
                     Select new ornamental plants for home 
                     decoration and obtain an atmosphere of 
                     harmony and freshness.
                  </p>
               </div>

               <div class="news_content grid">
                  <article class="news_card">
                     <img src="assets/img/new-cactus-1.png" alt="image" class="news_img">
                     <h2 class="news_title">Gymnocalycium Cactus</h2>
                  </article>

                  <article class="news_card">
                     <img src="assets/img/new-cactus-2.png" alt="image" class="news_img">
                     <h2 class="news_title">Lily Pad Cactus</h2>
                  </article>

                  <article class="news_card">
                     <img src="assets/img/new-cactus-3.png" alt="image" class="news_img">
                     <h2 class="news_title">Rebutia Cactus</h2>
                  </article>
               </div>
            </div>
         </section>

         <!--==================== SHOP ====================-->
         <section class="shop section" id="shop">
            <h2 class="section_title">
               THE BEST PLANTS
            </h2>

            <div class="shop_container container grid">
               <article class="shop_card">
                  <img src="assets/img/shop-cactus-1.png" alt="image" class="shop_img">

                  <h3 class="shop_title">Gymnocalycium <br> Cactus</h3>
                  <span class="shop_price">$15</span>

                  <buttons class="shop_buttons">
                     <i class="ri-shopping-bag-line"></i>
                  </buttons>
               </article>

               <article class="shop_card">
                  <img src="assets/img/shop-cactus-2.png" alt="image" class="shop_img">

                  <h3 class="shop_title">Echeveria <br> Succulent</h3>
                  <span class="shop_price">$10</span>

                  <buttons class="shop_buttons">
                     <i class="ri-shopping-bag-line"></i>
                  </buttons>
               </article>

               <article class="shop_card">
                  <img src="assets/img/shop-cactus-3.png" alt="image" class="shop_img">

                  <h3 class="shop_title">Ferrocactus <br> Cactus</h3>
                  <span class="shop_price">$15</span>

                  <buttons class="shop_buttons">
                     <i class="ri-shopping-bag-line"></i>
                  </buttons>
               </article>

               <article class="shop_card">
                  <img src="assets/img/shop-cactus-4.png" alt="image" class="shop_img">

                  <h3 class="shop_title">Melocactus <br> Cactus</h3>
                  <span class="shop_price">$15</span>

                  <buttons class="shop_buttons">
                     <i class="ri-shopping-bag-line"></i>
                  </buttons>
               </article>

               <article class="shop_card">
                  <img src="assets/img/shop-cactus-5.png" alt="image" class="shop_img">

                  <h3 class="shop_title">Redbone <br> Cactus</h3>
                  <span class="shop_price">$23</span>

                  <buttons class="shop_buttons">
                     <i class="ri-shopping-bag-line"></i>
                  </buttons>
               </article>
            </div>
         </section>

         <!--==================== CARE ====================-->
         <section class="care section" id="care">
            <h2 class="section_title">
               CARE AND HEALTH FOR<br> YOUR CACTUS
            </h2>

            <div class="care_container container grid">
               <img src="assets/img/care-cactus.png" alt="image" class="care_img">
            <ul class="care_list">
               <li class="care_item">
                  <i class="ri-checkbox-fill"></i>
                  <p>
                     In cold times, add water once a month 
                     and during the summer do it when the 
                     soil is very dry.
                  </p>
               </li>

               <li class="care_item">
                  <i class="ri-checkbox-fill"></i>
                  <p>
                     Have good drainage so that the cactus 
                     does not accumulate water.
                  </p>
               </li>

               <li class="care_item">
                  <i class="ri-checkbox-fill"></i>
                  <p>
                     Place your cactus or succulent in a 
                     location with indirect light.
                  </p>
               </li>

               <li class="care_item">
                  <i class="ri-checkbox-fill"></i>
                  <p>
                     Do not water more than necessary, as 
                     it can accumulate too much water and 
                     the plant will rot.
                  </p>
               </li>

               <li class="care_item">
                  <i class="ri-checkbox-fill"></i>
                  <p>
                     Do not expose to high temperatures, as 
                     succulent plants are not fans of 
                     extremes.
                  </p>
               </li> 
            </ul>
            </div>
         </section>

         <!--==================== CONTACT ====================-->
         <section class="contact section" id="contact">
            <h2 class="section_title">
               YOU WANT A CACTUS <br> CONTACT US
            </h2>

            <div class="contact_container container grid">
               <img src="assets/img/contact-cactus.png" alt="image" class="contact_img">
            
               <div class="contact_content">
                  <div>
                     <h3 class="contact_title">Write to us</h3>

                     <div class="contact_social">
                        <a href="https://www.whatsapp.com/" target="_blank">
                           <i class="ri-whatsapp-fill"></i>
                        </a>

                        <a href="#" target="_blank">
                           <i class="ri-messenger-fill"></i>
                        </a>

                        <a href="https://www.outlook.com/" target="_blank">
                           <i class="ri-mail-fill"></i>
                        </a>
                     </div>
                  </div>

                  <div>
                     <h3 class="contact_title">Call us at the numbers</h3>
                     <adress class="contact_info">
                        +49 180 5 4646 <br>
                        +49 137 9 444999
                     </adress>
                  </div>

                  <div>
                     <h3 class="contact_title">Find us here</h3>
                     <adress class="contact_info">
                        67661 Kaiserslautern <br>
                        55606 Kirn
                     </adress>
                  </div>
               </div>
            </div>
         </section>
      </main>
      <Footer />
    </div>
  )
}
