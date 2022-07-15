import React from "react";
import "./Home.css";
import Product from './Product';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function Home() {
  const slideImages = [
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/May_hero/YKDD_-_3000x1200_Hero-Tall_6._CB636814435_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jun22/SBIUNREC/WA_3000._CB634772465_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
    },
  ];

  return (
    <div className="home">
        <div className="home_container">
          <Slide>
              {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  </div>
                </div>
                    ))} 
           </Slide>

        {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/May_hero/YKDD_-_3000x1200_Hero-Tall_6._CB636814435_.jpg" /> */}
        </div>
        <div className="home__row">
          <Product
          id="1"
          title="French Connection - Analog Dial Women's Watch"
          price={5169}
          rating={4}
          image="https://m.media-amazon.com/images/I/713xekviESL._AC_UL640_QL65_.jpg"
          />
          <Product
          id="2"
          title="Maybelline New York City Mini Palette - Coney Island Pops"
          price={699.50}
          rating={4}
          image="https://m.media-amazon.com/images/I/91a3mO8c+1L._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
          id="3"
          title="Harry Potter and the Philosopher's Stone"
          price={313.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/5165He67NEL.jpg"
          />
          <Product
          id="4"
          title="Apple iPhone 12 (128GB) - Blue"
          price={59990}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg"
          />
        
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black) (2022 Model)"
            price={39999}
            rating={5}
            image="https://m.media-amazon.com/images/I/81qoKyMES2L._AC_UY436_FMwebp_QL65_.jpg"
            />
            <Product
            id="6"
            title="Lastest_Acer Student Business Laptop, 15.6 inch FHD Screen, AMD Ryzen 5-3500U Processor 8GB RAM,512GB SSD"
            price={36502}
            rating={5}
            image="https://m.media-amazon.com/images/I/71jT5WaW7WS._AC_UL640_FMwebp_QL65_.jpg"
            />
        </div>
        <div className="home__row">
        
        <Product
          id="7"
          title="boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display"
          price={3499.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61gscZYmaoL._SX679_.jpg"
          />
        <Product
          id="8"
          title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
          price={5649}
          rating={5}
          image="https://m.media-amazon.com/images/I/61-DjUz7JxL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
          id="9"
          title="Amazon Brand - Solimo Fuzzy Strings 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Orange"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/71B0vbMooUL._AC_UL640_QL65_.jpg"
          />
        
      </div>

    
    </div>
  )
}

export default Home
