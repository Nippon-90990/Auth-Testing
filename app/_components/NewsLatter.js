import React from 'react'

const NewsLatter = () => {
  return (
    <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Singup For Newsletters</h4>
            <p>Get E-mail Updates about our latest shop and <span>special offer.</span></p>
        </div>

        <div class="form">
            <input type="email" name="email" id="email" placeholder="Enter your e-maill adress"/>
            <button class="normal" type='submit'>Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLatter