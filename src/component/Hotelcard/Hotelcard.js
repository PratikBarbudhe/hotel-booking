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
                    <h2 className='tabpanal-heading'> Best Hotel In Nashik</h2>
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
                                      rating="⭐⭐⭐⭐⭐"
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
                                      rating="⭐⭐⭐⭐⭐"
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
                                      rating="⭐⭐⭐⭐⭐"
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
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Hotelcard 