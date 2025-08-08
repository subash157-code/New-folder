import React, { useState, useEffect, useRef ,useContext} from 'react';
import './MobileProduts.css';
import { MdShoppingCartCheckout } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartContext } from '../App';

gsap.registerPlugin(ScrollTrigger);

const MobileProduts = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);



  const containerRef = useRef(null); // ✅ wrap all cards in one container

  // Fetch mobile data
  useEffect(() => {
    fetch('/Mobile.json')
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
     // e
  }, [mobiles]); // ✅ rerun when mobiles are fetched

  if (loading) return <p>Loading mobiles...</p>;

   const addToCart = ({id, title, price, image,display,ram,storage,ratings}) => {
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
            display:display,
            ram:ram,
            storage:storage,
            ratings:ratings
          },
        ];
      }
    });
  };
 
  
  
  return (
    <>
     <div className="headerImageLenova" >
    <iframe 
  width="45%" 
  height="290" 
  src="https://www.youtube.com/embed/gVBELZqOOIE?si=HleMAVE0lv--zzwT&autoplay=1&mute=1&loop=1&playlist=gVBELZqOOIE" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

<iframe 
  width="45%" 
  height="290" 
  src="https://www.youtube.com/embed/CINU8j87Uiw?si=i03dJsVyY3OhXzWX&autoplay=1&mute=1&loop=1&playlist=CINU8j87Uiw" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
        </div>
        
      <div className="exploreHeading">
        <h1>Explore products at Lenovo</h1>
        <p>One Purpose. One Lenovo.Smarter Technology for All.</p>
      </div>

      <div className="MobileCart" ref={containerRef} > {/* ✅ container ref */}
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
                 image: mobile.image ,
                 quantity: 1,
                 display:mobile.display,
                 ram:mobile.ram,
                 storage:mobile.storage,
                 ratings:mobile.ratings
             })}>
              <sub><MdShoppingCartCheckout className="shopIcon" /></sub> Buy&nbsp;
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileProduts;
