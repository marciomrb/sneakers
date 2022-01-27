import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {useClickAway} from 'react-use';

export default function Header({order, setOrder} = props ) {

 
  const ref = useRef(null);
  useClickAway(ref, () => {
    setCart(false);
  });

  const [Cart, setCart] = useState(false);

  return (
    <header>
      <div className="container">

        <Link href="/"><a className="brand"><img src="/logo.svg" /></a></Link>

        <ul className="nav">
          <li><Link href="#">Collections</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Women</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
       

        <style jsx>{`
        .cart-profile li button.cart::before {          
            content: '${order && order.map(item => item.qty.addMore)}';
            position: absolute;
            right: 10px;
            top: 10px;             
            background-color: hsl(26, 100%, 55%);
            color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            display: ${order ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;     
            font-size: 10px;      
        }
        `}</style>

        <ul className='cart-profile'>
          <li><button className="cart" onClick={() => setCart(cart => !cart)}><img src="/icon-cart.svg" /></button></li>
          <li><button className="profile"><img src="/image-avatar.png" /></button></li>
        </ul>


        <div className={`boxCart ${Cart && 'show'}`} ref={ref}>
       <div className="headCart">
         Cart
       </div>
     {order === null ?
       <div className="bodyCart" >
        <span>Your cart is empty.</span>
       </div>
       : order.map(item => (
         <>
          <div className="bodyProduct">
            <img src={item.imagem} />
            <div className="infos">
              <span>{item.nome}</span>
              <span class="preco">{item.preco} x {item.qty.addMore} <b>${item.precoFinal.finalPrice}.00</b></span>
            </div>
            <button className="remove" onClick={() => setOrder(null)}><img src="/icon-delete.svg" /></button>
          </div>
          <button className="checkout">Checkout</button>
          
          </>
       )) 
       }
       
      </div>


      </div> 
    </header>
  );
}