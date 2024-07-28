
import Favorites from '@/components/Favorites';
import History from '@/components/History'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Premium() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="favorites" title="Favorites">
        <Favorites />
      </Tab>
      <Tab eventKey="history" title="History">        <History />

      </Tab>
    </Tabs>
  );
}

export default Premium;