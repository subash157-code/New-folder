import { CartContext } from '../App';
import './Cart.css';
import  {  useRef,useEffect ,useContext ,useState} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
   const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
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
    );
  }, []);


  // Increase quantity
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity or remove if 0
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const productTotal=cart.reduce((totalOne,item)=>
    totalOne+item.price * item.quantity,0 );

  if (cart.length === 0) {
    return <h2 className="empty">Your cart is empty.</h2>;
  }

   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all fields.");
      return;
    }

    // Process order here (API call etc.)
    console.log("Order placed:", formData, cart);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confirmation-message">
        <h2>🎉🎉🎉🎆🎆Thank you for your order, <b style={{color:"red"}}>{formData.name}!🎉🎉</b></h2>
        <p>Your Email ID :{formData.email}</p>
        <p>We will contact you at {formData.phone} to confirm delivery to:</p>
        <p><b>{formData.address}</b></p>
         <p style={{color:"red"}}>Please Pay the Confirm Amount Before buy the Item from the Delivery Partner</p>
         <p>🎁🎁🎁🎁🎁🎁🎁🎁</p>
      </div>
    );
  }

  return (
    <div className="cart-page"  ref={boxRef}>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item" >
          <img src={item.image} alt={item.name} className="cart-image" />
          <h4>{item.name}</h4>
            <p>Price: Rs <b> {item.price}</b></p>
            <p>Display: <b>{!item.display? "Nil":item.display}</b></p>
            <p>RAM :<b>{!item.ram? "Nil":item.ram}</b></p>
            <p>Storage:<b>{!item.storage? "Nil":item.storage}</b></p>
            <p>Ratings :🌟<b>{item.ratings}</b></p>
             <div className="cart-details">
            <p>Product Amount Total : {productTotal.toFixed(2)}</p>
            <div className="quantity-control">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="totalGrnad">
        <div className="itemTotal">
      <p >Total: Rs &nbsp;{(totalPrice).toFixed(2)}</p>
      <p >Tax : Rs &nbsp;00.00</p>
      <p >Shippnig : Rs &nbsp;00.00</p>
      <p >Discount : Rs &nbsp;00.00</p>
      <p style={{margin:0,padding:0}}>_____________</p>
      <p ><b>Total: Rs {(totalPrice).toFixed(2)}</b></p>
      </div>
      <div className="confirm-order">
      <h2>Confirm Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className='InputFeild'>
          <label>Full Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Mobile Number:</label><br />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />
            <label>Gmail:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        </div>

        <div className='Address'>
          <label>Address:</label><br />
          <textarea name="address" rows="5.9" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="radioBtn">
        <sup><input type="radio" id="coc" name="payment" value="coc"/></sup> 
        <label >Cash On Devliery</label><br/>
        <sup> <input type="radio" id="code" name="payment" value="code"/></sup>
        <label >UPI Payment</label><br/>
      </div>
        <button type="submit" className='btn'>Place Order</button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Cart;
