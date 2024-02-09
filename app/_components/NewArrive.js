import React from 'react'

const NewArrive = ({ data: { attributes: p, id } }) => {
  return (
    // <section id="product1" class="section-p1">
        // <h2>New Arrivals</h2>
        // <p>Summer Collection New Morden Design</p>
        <div class="pro-container">
        <div class="pro">
                <img src={p.thumbnail.data.attributes.url} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$74</h4>
                </div>
                 <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>   {/* <!-- <i class="bi bi-cart cart"> --> */}
            </div>
        </div>
    // </section>
  )
}

export default NewArrive