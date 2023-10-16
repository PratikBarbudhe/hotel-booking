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
                    <Tab className='tablist-menu'>Aurangabad</Tab>
                    <Tab className='tablist-menu'>Pune</Tab>
                    <Tab className='tablist-menu'>Bengaluru</Tab>
                    <Tab className='tablist-menu'>Nagpur</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <h2 className='tabpanal-heading'> fgbdfkjd</h2>
                        <div className='tabpanal-container'>
                                 
                                      
                                      <Hotelcomp
                                      title="The Orchid Hotel Mumbai"
                                      description="Description for Card 1."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/7e/f3/2d/ice-56580-97553033-161124.jpg?width=452&height=420&crop=true"
                                      />
                                      
                                      <Hotelcomp
                                      title="A Luxury Collection Hotel, Mumbai"
                                      description="Description for Card 2."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/7f/76/f9/leonardo-99230-156448930-172946.jpg?width=968&height=607&crop=true"
                                      />
                                      
                                      <Hotelcomp
                                      title="Novotel Mumbai International Airport"
                                      description="Description for Card 1."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/5e/b9/19/ice-1070646355-106155592-969503.jpg?width=968&height=607&crop=true"
                                      />
                                      
                                      <Hotelcomp
                                      title="Taj Mahal Tower, Mumbai"
                                      description="Description for Card 2."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/74/83/0f/leonardo-1996235-015_Pooside_O-176626.jpg?width=968&height=607&crop=true"
                                      />
                                      
                                  </div>
                                  
                                
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            
                      
                    
                        
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

const styles = {
    
  };
export default Hotelcard 