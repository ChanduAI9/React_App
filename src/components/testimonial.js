import "./css.css"
import icon from "../assests/icon.png"
function Testimonial(){
    return (
      <div class="testimonial-bg back-image">
      <div class="wrapper">
            <div class="box">
          
          <div class="stars">
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
          </div>
          <br/>
          <p className="pa">I recently had the pleasure of using VB Enterprises for pigeon safety nets installation at my apartment balcony, and I must say I'm thoroughly impressed with their service and the quality of their products.
First and foremost, their customer service was top-notch.. They scheduled a site visit at my convenience .</p>
          <div class="content">
            <div class="info">
              <div class="name">Kishore Reddy</div>
              
            </div>
            <div class="right">
            <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
        <div class="box">
          
          <div class="stars">
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
          </div>
          <br/>
          <p className="pa">I  purchased sports nets from VB Enterprises for my backyard. VB Enterprises truly exceeded my expectations in terms of both product quality and customer service.
The installation was smooth and hassle-free. The team from VB Enterprises arrived on time and set up the sports net efficiently.</p>
          <div class="content">
            <div class="info">
              <div class="name">Vamsi Naik</div>
              
            </div>
            <div class="right">
            <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
        <div class="box">
          
          <div class="stars">
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
            <i class="fas fa-star star-filled"></i>
          </div>
          <br/>
          <p className="pa">VB Enterprises' bird spikes are a game-changer for bird control. The spikes are sharp enough to deter birds while remaining humane. Installation is hassle-free with clear instructions, and durability stands up to weather. Overall, VB Enterprises delivers effective, ethical, and long-lasting bird control solutions.</p>
          <div class="content">
            <div class="info">
              <div class="name">Subash</div>
              
            </div>
            <div class="right">
             <img src={icon} alt="icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
);
};
export default Testimonial;