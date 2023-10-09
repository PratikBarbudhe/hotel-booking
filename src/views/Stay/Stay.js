import './Stay.css';



function Stay(){
    return(
        <div>
         <div className="backgroung-image" >
            <h1 className='heading-1'>-</h1>
            <h1 className='heading'>Howzat for a perfect stay</h1>
            <p className='text'>Search hotels, homes and much more</p>
            <button className='btn'>Discover More</button>

          </div>  

             <div>
               <input type='checkbox' id='travel-1' className='checkbox' />
               <label for='travel-1' className='checkbox-label'>I'm travelling for work</label> &nbsp; &nbsp; &nbsp; 

               <input type='checkbox' id='flight' />
               <label for='flight' className='checkbox-label'>I'm looking for flights</label>
              </div>

              <h2 className='sub-heading'> Offers</h2>
              <p className='sub-text'>Promotions, deals and special offers for you</p>
               
               <div className='sub-container'>
                <div>
                  <h2>Fly away to your dream holiday</h2>
                </div>
                <div>
                  <h2>Take your longest holiday yet</h2>
                </div>
               </div>


              
        </div>    
        

           

    )
}

export default Stay