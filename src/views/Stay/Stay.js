import Navbar from '../../component/Navbar/Navbar';
import './Stay.css';
import Goa from './goa-img.jpeg';
import Bangalore from './bangalore-img.jpeg';
import NewDelhi from './new-delhi-img.jpeg';
import Jaipur from './jaipur-img.jpeg';

function Stay(){
    return(
        <div>
          <Navbar/>
         <div className="backgroung-image-1" >
            <h1 className='heading-1'>-</h1>
            <h1 className='heading'>Howzat for a perfect stay</h1>
            <p className='text'>Search hotels, homes and much more</p>
            <button className='btn'>Discover More</button>

          </div>  

           

              <h2 className='offer-heading'> <a href=''>Offers</a></h2>
              <p className='sub-text'>Promotions, deals and special offers for you</p>
               
               <div className='sub-container'>
                <div className='fly-away-content'>
                  <div className='info-img'>
                  <h2 className='heading-flight'>Fly away to your dream holiday</h2>
                  <p className='flight-text'>Get inspired, compare and book flights with more flexibility</p>
                  <button className='flight-btn'>search for flight</button>

                  </div>
                  <div className='flight-img-section'>
                    <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=' alt='' className='flight-img'/>
                  </div>
                  
                </div>
                <div className='fly-away-content'>
                  <div>
                  <h2 className='heading-flight'>Take your longest holiday yet</h2>
                  <p className='flight-text'>Browse properties offering long-term stays, many at reduced monthly rates.</p>
                  <button className='flight-btn'>Find a stay</button>
                  </div>
                  <div>
                    <img src='https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=' alt='' className='family-img'/>

                  </div>
                </div>
               </div>

               <h2 className='offer-heading'><a href=''>Explore India </a></h2>
               <p className='sub-text m-b'>This popular destinations have a lot to offer</p>

               <div className='img-container'>
                <div className='img-card'>
                  <img src={Goa} alt='' className='state-img'/>
                  <h4 className='state-name'>Goa</h4>
                  <p>Goa is a not just about the parties; it's about the peace within. </p>
                </div>

                <div className='img-card'>
                  <img src={Bangalore} alt='' className='state-img'/>
                  <h4 className='state-name'>Bangalore</h4>
                  <p>Bangalore, a city that never sleeps, Its energy is contagious. </p>
                </div>

                <div className='img-card'>
                  <img src={Jaipur} alt='' className='state-img'/>
                  <h4 className='state-name'>Jaipur</h4>
                  <p>Welcome to Pink City. The City of Joy and Happines.</p>
                </div>

                <div className='img-card'>
                  <img src={NewDelhi} alt='' className='state-img'/>
                  <h4 className='state-name'>New Delhi</h4>
                  <p>Delhi is definitely foodie's paradise</p>
                </div>


               </div>

            

              
        </div> 
           
        

           

    )
}

export default Stay