import React from 'react'
import './Home.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useState,useEffect ,useRef ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CartContext } from '../App';
import { BsFillCartCheckFill } from "react-icons/bs";



gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: "toprated", label: "Top Rated" },
  { key: "topselling", label: "Top Selling" },
  { key: "newarrival", label: "New Arrival" },
];
const Home = () => {

   const { cart, setCart } = useContext(CartContext);
  

   const navigate= useNavigate();
   const [currentImage, setCurrentImage] = useState('');
   const [currentImageOne, setCurrentImageOne] = useState('');
   const [currentImageTwo, setCurrentImageTwo] = useState('');
   const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("toprated");
    
   const addToCart = ({id, title, price, image,ram,display,storage,ratings}) => {
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
          ram:ram,
          display:display,
          storage:storage,
          ratings:ratings
        },
      ];
    }
  });
};
useEffect(() => {
  console.log("Cart updated:", cart);
}, [cart]);


    useEffect(() => {
    fetch("/NewArivel.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);
    const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );


   const images = [
      "https://images.unsplash.com/photo-1651747137395-065bd3af97bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
       "https://cdn.arstechnica.net/wp-content/uploads/2022/01/white-cover-768x432.jpg",
       "https://techstory.in/wp-content/uploads/2024/02/Samsung-1.jpg",
       "https://sg-files.apjonlinecdn.com/landingpages/category-family/hp-laptops-family/images/w100_hero_mobile_v2.jpg",
       "https://wifihifi.com/wp-content/uploads/2024/01/The-many-modes-of-the-ASUS-Zenbook-DUO-1600x801.jpg",
       "https://i.ytimg.com/vi/LkPDmbtS7DQ/maxresdefault.jpg",
       "https://www.zdnet.com/a/img/resize/9d4d0645883045d18293ed07c121882f51eba7de/2023/08/24/807861e2-f856-48e1-8296-3342717ab5ab/acer-swift-x-14-header.jpg?auto=webp&width=1280",
       
  ];

  const boxRef = useRef(null);
  useEffect(() => {
     const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
       const randomIndexOne = Math.floor(Math.random() * images.length);
        const randomIndexTwo = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
      setCurrentImageOne(images[randomIndexOne]);
      setCurrentImageTwo(images[randomIndexTwo]);
    }, 3000); // every 3 seconds
     gsap.fromTo(
      boxRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80%', // when the top of the box hits 80% of the viewport
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => clearInterval(interval); // clean up
  }, []);

   
const mobilePurchase=()=>{
  navigate('/MobileProduts');
}
const WatchPurchase=()=>{
  navigate('/Watch');
}
const EarBudsPurchase=()=>{
  navigate('/EarBuds');
}
const LaptopPurchase=()=>{
  navigate('/Laptop');
}
const SamsungPurchase=()=>{
  navigate('/samsung');
}
const AcerPurchase=()=>{
  navigate('/acer');
}
const AsusPurchase=()=>{
  navigate('/asus');
}
const DellPurchase=()=>{
  navigate('/dell');
}

  return (
    <div  >
        <div className="headerImage" >
            <img src={currentImage} alt="" className='OfferImage'/>
            <img src={currentImageOne} alt=""  className='OfferFirstImage'/>
            <img src={currentImageTwo} alt="" className='OfferthreeImage'/>
        </div>
        <div className="shippingDetails" ref={boxRef}>
            <pre className='freeDel'><TbTruckDelivery  className='icon'/><h4 className='h4'>Free Delivery</h4>
            <p className='p'>All Order Over Rs.1000</p></pre>
            <pre  className='freeDel'><RiSecurePaymentLine className='icon' /><h4  className='h4'>Secure Payment</h4>
            <p className='p'>We Ensure Secure Payment</p></pre>
             <pre  className='freeDel'><GiReceiveMoney  className='icon' /><h4  className='h4'>100% money Back</h4>
            <p className='p'>30 Days Money Return</p></pre>
             <pre  className='freeDel'><MdSupportAgent  className='icon' /><h4  className='h4'>online Support</h4>
            <p  className='p'>24/7 Support</p></pre>
         </div>
              <div className="productDetails" >
                <div className="frist"> 
                  {/* lenova */}
                    <button className='shopNow' onClick={mobilePurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* xiaomi */}
                <div className="scond">
                     <button  className='shopNow' onClick={EarBudsPurchase} ><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* apple */}
                 <div className="third">
                     <button  className='shopNow'onClick={WatchPurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* hp */}
                 <div className="four">
                     <button  className='shopNow' onClick={LaptopPurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
             </div>
              <div className="productDetails" >
                <div className="fristOne">
                  {/* acer */}
                    <button className='shopNow' onClick={AcerPurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* Asus */}
                <div className="scondSnd">
                     <button  className='shopNow' onClick={AsusPurchase} ><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* samsung */}
                 <div className="thirdThree">
                     <button  className='shopNow'onClick={SamsungPurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
                {/* dell */}
                 <div className="fourFour">
                     <button  className='shopNow' onClick={DellPurchase}><sub><MdShoppingCartCheckout className='shopIcon'/></sub>&nbsp;Shop Now</button>
                </div>
             </div>
             <div className="QucikProductDisplay">
                <h4 className='FearuesProducts'>Featured Products</h4>
                 <div  className='select-btn'>
      <div style={{ marginBottom: "20px" }} >
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            style={{
              marginRight: 12,
              padding: "10px 20px",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: selectedCategory === key ? "#007bff" : "#eee",
              color: selectedCategory === key ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }} ref={boxRef}>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => {
          const { id, title, price, image, ram, display, storage, ratings } = product;
             const isInCart = cart.some(item => item.id === id); // Key logic
            return (
      <div
        key={id}
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
          backgroundColor: "#fff",
          margin:10
        }}
      >
        <div className="itemImage">
          <img src={image} alt={title} className="seleItem" />
        </div>
        <h3 className='title'>{title}</h3>
        <p style={{ fontWeight: "bold", fontSize: "10px" }}>
          ₹{price.toFixed(2)}
        </p>
        <button
          className='shopIconPur'
          onClick={() => addToCart({ id, title, price, image, ram, display, storage, ratings })}
        >
          {isInCart ? <sub><BsFillCartCheckFill className='shopIcon'/> </sub>: (
            <>
              <sub><MdShoppingCartCheckout className='shopIcon' /></sub> 
            </>
          )}
        </button>
      </div>
    );
        })
        )}
      </div>
    </div>
         </div>



</div>
  )
}

export default Home
