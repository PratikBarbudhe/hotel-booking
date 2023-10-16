import React from 'react'
import "./Hotelcard.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Hotelcomp from '../Hotelcard/Hotelcomp';

function Hotelcard() {
    return (
        <div className='tab-container'>
            
            <Tabs variant='soft-rounded' colorScheme='green' >
                <TabList className='tab-list'>
                    <Tab className='tablist-menu'>Mumbai</Tab>
                    <Tab className='tablist-menu'>Nashik</Tab>
                    <Tab className='tablist-menu'>Bangaluru</Tab>
                    <Tab className='tablist-menu'>Pune</Tab>
                    <Tab className='tablist-menu'>Nagpur</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <h2 className='tabpanal-heading'> Best Hotel In Mumbai</h2>
                        <div className='tabpanal-container'>
                                      <Hotelcomp
                                      name="The Orchid Hotel Mumbai"
                                      description="Luxury beachfront resort offering breathtaking ocean views."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/7e/f3/2d/ice-56580-97553033-161124.jpg?width=452&height=420&crop=true"
                                      price="5,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="A Luxury Collection Hotel, Mumbai"
                                      description="Charming boutique hotel nestled in the heart of the city's historic district."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/7f/76/f9/leonardo-99230-156448930-172946.jpg?width=968&height=607&crop=true"
                                      price="6,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Novotel Mumbai International Airport"
                                      description="Modern urban oasis with state-of-the-art amenities and panoramic skyline vistas"
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/5e/b9/19/ice-1070646355-106155592-969503.jpg?width=968&height=607&crop=true"
                                      price="6,500"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Taj Mahal Tower, Mumbai"
                                      description="Sleek and stylish high-rise hotel with a vibrant and lively atmosphere"
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/74/83/0f/leonardo-1996235-015_Pooside_O-176626.jpg?width=968&height=607&crop=true"
                                      price="10,000"
                                      rating="⭐⭐⭐⭐⭐"

                                      />  
                                  </div>          
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> Best Hotel In Nashik</h2>
                    <div className='tabpanal-container'>
                                     <Hotelcomp
                                      name="Radisson Blu Hotel & Spa, Nashik"
                                      description="Luxury beachfront resort offering breathtaking ocean views."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/383933792.webp?k=5cc0afc4fa527d349cffb8df4fc6194743a6dee44e66985fa0cde5ee960217b4&o="
                                      price="5,500"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Hotelcomp
                                      name="Aria Resort & Spa"
                                      description="Charming boutique hotel nestled in the heart of the city's historic district."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/266551505.webp?k=e42517576c3bddcb805f7f2532d55c7cb02df2541644c198e455c22b21192732&o="
                                      price="6,500"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="THE ONE HOTEL, NASHIK"
                                      description="Modern urban oasis with state-of-the-art amenities and panoramic skyline vistas"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/471855156.webp?k=f329de5a4c7e93dcde6ac4c457798d27c38b774fbffa7d085b6697ab27f5b163&o="
                                      price="7,500"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Courtyard by Marriott Nashik"
                                      description="Sleek and stylish high-rise hotel with a vibrant and lively atmosphere"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/456064654.webp?k=58f454212ff343760c5634b04d7eafaf80996964ba2fd16a9c48c475749e1c99&o="
                                      price="7,000"
                                      rating="⭐⭐⭐⭐"
                                      />
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> Best Hotel In Bangaluru</h2>
                    <div className='tabpanal-container'>
                        <Hotelcomp
                                      name="Bengaluru Race Course Hotel"
                                      description="Luxury beachfront resort offering breathtaking ocean views."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/463618471.webp?k=2054321ec9165c2f62a4259e021667ba63a7de768fd0e02fa57db685af44be91&o="
                                      price="5,000"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Hotelcomp
                                      name="Heritage Suites                                      "
                                      description="Charming boutique hotel nestled in the heart of the city's historic district."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/494065384.webp?k=430040c7647c62eaa383b70a75b44393f71963e366e488f2c318f8077fa8d777&o="
                                      price="5,000"
                                      rating="⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Novotel International Airport"
                                      description="Modern urban oasis with state-of-the-art amenities and panoramic skyline vistas"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/482124163.webp?k=03b117a97bafb47b9aec68a3d75a49293c012b6885e762d8332be12f7145853e&o="
                                      price="6,500"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Taj Mahal Tower,"
                                      description="Sleek and stylish high-rise hotel with a vibrant and lively atmosphere"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/31211348.webp?k=a8869335c2d3f78c272422935df075e7c8fc1d2b8c132468c2b472e1b9511831&o="
                                      price="10,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> Best Hotel In Pune</h2>
                    <div className='tabpanal-container'>
                        <Hotelcomp
                                      name="Sheraton Grand Pune Bund Garden Hote"
                                      description="Luxury beachfront resort offering breathtaking ocean views."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/327909212.webp?k=fc83fc281980c11e77f528d82f5c33a11f24289fec3c314bfb43323422b9b4ad&o="
                                      price="5,000"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Hotelcomp
                                      name="A Luxury Collection Hotel"
                                      description="Charming boutique hotel nestled in the heart of the city's historic district."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/495294799.webp?k=9b8def2ebead886978cbca49543b03bc3d4c1814d7270b3a5b4fe7b7c0fd59a2&o="
                                      price="6,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Novotel International Airport"
                                      description="Modern urban oasis with state-of-the-art amenities and panoramic skyline vistas"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/483829810.webp?k=482668c80606a9f3e772a3d2e7b37e0de3feca8696dbd78a30e31115df75ff52&o="
                                      price="6,500"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Taj Mahal Tower"
                                      description="Sleek and stylish high-rise hotel with a vibrant and lively atmosphere"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/488302668.webp?k=808ef8091f58fc03c532ae236fe456795f2e964d4169d08b23297234cd2b92f6&o="
                                      price="10,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 className='tabpanal-heading'> Best Hotel In Nagpur</h2>
                    <div className='tabpanal-container'>
                        <Hotelcomp
                                      name="Radisson Blu Hotel, Nagpur"
                                      description="Luxury beachfront resort offering breathtaking ocean views."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/318295484.webp?k=023da7af8455f168dc7b5f8401fd41ec0b87da63d44ed577b69b863c6bd3f958&o="
                                      price="5,000"
                                      rating="⭐⭐⭐⭐⭐"

                                      />
                                      
                                      <Hotelcomp
                                      name="A Luxury Collection Hotel"
                                      description="Charming boutique hotel nestled in the heart of the city's historic district."
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/451610636.webp?k=41070848b2e742ae9b7c089ade555d3ab413bc750108d002d47f4cef5152e27e&o="
                                      price="6,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Novotel International Airport"
                                      description="Modern urban oasis with state-of-the-art amenities and panoramic skyline vistas"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/446971345.webp?k=81688dd3fc8b372f65745f1c95635f52fae19d6f22e423b670c3004a36b8e415&o="
                                      price="6,500"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                                      
                                      <Hotelcomp
                                      name="Taj Mahal Tower"
                                      description="Sleek and stylish high-rise hotel with a vibrant and lively atmosphere"
                                      imageUrl="https://cf.bstatic.com/xdata/images/hotel/square600/446998674.webp?k=f0a69ad3ea93a77e2116423e0383a5c0330fc19fd1c390ca45f9766cb43b4a90&o="
                                      price="10,000"
                                      rating="⭐⭐⭐⭐⭐"
                                      />
                        
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Hotelcard 