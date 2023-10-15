import React  from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import './Hotelcard.css';

function Hotelcard () {
    
    return (
<Tabs>
  <TabList className='tab-list'>
    <Tab className='menu'>Mumbai</Tab>
    <Tab className='menu'>Bangaluru</Tab>
    <Tab className='menu'>Delhi</Tab>
    <Tab className='menu'>Pune</Tab>
    <Tab className='menu'>Nagpur</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
        <div>
            
        </div>

    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

)
};
export default Hotelcard 