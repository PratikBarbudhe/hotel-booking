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
                        <div className='tabpanal-container'>
                            <div>
                                <div className='container'>
                                  <h2>Hotels In Mumbai</h2>
                                  <div className='cardContainer'>
                                      <Hotelcomp
                                      title="The Orchid Hotel Mumbai"
                                      description="Description for Card 1."
                                      imageUrl="https://www.in.cheapflights.com/rimg/himg/7e/f3/2d/ice-56580-97553033-161124.jpg?width=452&height=420&crop=true"
                                      />
                                      <Hotelcomp
                                      title="Card Title 2"
                                      description="Description for Card 2."
                                      imageUrl="https://via.placeholder.com/300"
                                      />
                                      <Hotelcomp
                                      title="Card Title 1"
                                      description="Description for Card 1."
                                      imageUrl="https://via.placeholder.com/300"
                                      />
                                      <Hotelcomp
                                      title="Card Title 2"
                                      description="Description for Card 2."
                                      imageUrl="https://via.placeholder.com/300"
                                      />
                                  </div>
                                </div>
                            
                      
                         </div>
                        
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