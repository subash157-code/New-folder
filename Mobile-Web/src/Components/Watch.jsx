import React, { useState, useEffect, useRef ,useContext} from 'react';
import './MobileProduts.css';
import { MdShoppingCartCheckout } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartContext } from '../App';

gsap.registerPlugin(ScrollTrigger);

const Watch = () => {
    const [mobiles, setMobiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart, setCart } = useContext(CartContext);

  const containerRef = useRef(null); // ✅ wrap all cards in one container

  // Fetch mobile data
  useEffect(() => {
    fetch('/Watch.json')
      .then((res) => res.json())
      .then((data) => {
        setMobiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching mobile data:', error);
        setLoading(false);
      });
    
  }, []);

  // GSAP scroll animation
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll('.cart-design'), // ✅ use correct class
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        // stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
          // markers: true // 👈 enable to debug
        }
      }
    );
  }, [mobiles]); // ✅ rerun when mobiles are fetched

  if (loading) return <p>Loading mobiles...</p>;

  const addToCart = ({id, title, price, image}) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === id);
  
      if (existing) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: id,
            name: title,
            image: image,
            price: price,
            quantity: 1,
          },
        ];
      }
    });
  };
 
  

  return (
    <>
     <div className="panel">
    <video
      src="https://www.apple.com/assets-www/en_WW/mac/welcome/7ba0e8f66_large_2x.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
     className="IphoneVideo"
      alt="Xiaomi 14 Ultra Video"
    />
    <div className="overlay">
      <h3>New Model Mac Launch</h3>
      <p>Ultra power with stunning Performance.</p>
    </div>
    
  </div>
      <div className="exploreHeading">
        <h1>Learn. Work. Play. All on Mac.</h1>
        <p>Why Apple is the best place to buy Mac.</p>
      </div>

      <div className="MobileCart" ref={containerRef}> {/* ✅ container ref */}
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="cart-design">
            <div className="itemImageMobile">
              <img src={mobile.image} alt={mobile.name} className="seleItemMobile" />
            </div>

            <h4>{mobile.name}</h4>
            <p>Display: <b>{mobile.display}</b></p>
            <p>Price: <b>{mobile.price}</b></p>
            <p>Rating: ⭐ <b>{mobile.ratings}</b></p>
            <button className="mobileCart" onClick={() => addToCart({ 
                id: mobile.id, 
                title: mobile.name, 
                 price: mobile.price, 
                 image: mobile.image,
                 quantity: 1,
                 display:mobile.display,
                 ram:mobile.ram,
                storage:mobile.storage,
                ratings:mobile.ratings
             })}>
              <sub><MdShoppingCartCheckout className="shopIcon" /></sub> &nbsp;Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Watch;
