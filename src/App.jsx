import React from 'react'
import Logo from './assets/logo.svg'
import Avatar from './assets/image-avatar.png'

function App() {
  return (
      <>
          <header>
              <img src={Logo} alt="Logo" />
              <nav>
                  <a href="#">Collections</a>
                  <a href="#">Men</a>
                  <a href="#">Women</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
              </nav>
              <div>
                  <button>Cart</button>
                  <img src={Avatar} alt="" />
              </div>
          </header>
          <main>
              <section>Galeria</section>
              <section>
                  <p>Sneaker Company</p>
                  <h2>Fall Limited Edition Sneakers</h2>
                  <p>
                      These low-profile sneakers are your perfect casual wear companion. Featuring a
                      durable rubber outer sole, they’ll withstand everything the weather can offer.
                  </p>
                  <p>
                      <span>$125.00</span>
                      <span>50%</span>
                  </p>
                  <p>$250.00</p>
                  <div>
                      <div>
                          <button>-</button>
                          <span>0</span>
                          <button>+</button>
                      </div>
                  </div>
                  <button>Add to Cart</button>
              </section>
          </main>
      </>
  );
}

export default App