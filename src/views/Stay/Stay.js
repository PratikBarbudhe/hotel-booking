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
               <label for='travel-1'>I'm travelling for work</label> &nbsp; &nbsp; &nbsp; 

               <input type='checkbox' id='flight' />
               <label for='flight'>I'm looking for flights</label>
              </div>
        </div>    

           

    )
}

export default Stay