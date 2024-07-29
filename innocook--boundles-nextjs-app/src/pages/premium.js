
import Favorites from '@/components/Favorites';
import History from '@/components/History'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Head from 'next/head'

function Premium() {
  return (
    <div>
    <Head>
      <title>Premium | InnoCook Bundles</title>
    </Head>
    <main>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="favorites" title="Favorites">
        <Favorites />
      </Tab>
      <Tab eventKey="history" title="History">
        <History />
      </Tab>
    </Tabs>
    </main>
  </div>
   
  );
}

export default Premium;