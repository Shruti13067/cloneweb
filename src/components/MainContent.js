import React from 'react';
import './MainContent.css';
import image from './images/Screenshot__147_-removebg-preview (4).png';
import logo from './images/Screenshot__148_-removebg-preview (3) 1 1.png';
import logo1 from './images/Screenshot__148__1-removebg-preview (1) (1) 2.png'
import logo2 from './images/Screenshot__148__2-removebg-preview (1) (1) 1.png';
import logo3 from './images/Screenshot__148__3-removebg-preview (2) 1.png';
import lg from './images/logo/d-l (1).png';
import lg1 from './images/logo/dilip (1).png';
import lg2 from './images/logo/furlenco (1).png';
import lg3 from './images/logo/happilo (1).png';
import lg4 from './images/logo/manohar (1).png';
import lg5 from './images/logo/pilgrim-removebg-preview (2).png';
import lg6 from './images/logo/plix (1).png';
import lg7 from './images/logo/swa (1).png';
import lg8 from './images/logo/wow (1).png';
import lg9 from './images/logo/rr (1).png';
import user from './images/diksha (3).png';
import samo from './images/samosa party (1).png';
import uno from './images/Screenshot__150_-removebg-preview (4).png';


const MainContent = () => {
  return (
    <main className="main-content">
    <section id="top">
        <div className='ltext'>Every order<br></br> fulfilled,<div className='text'> on time.</div></div>
        <div className='stext'>Eliminate overstocking and under-stocking with  CleverBooks. Built by supply-chain<br></br>
         experts, it brings the same technology used by large global brands to power <br></br>
         fast-growing startups. In short, we make supply meet demand, and then<br></br>
         help you grow both.</div>
         <div className='container'>
       <button className='btn' data="Get started with Clever"></button><img src={image} alt="Logo" className='img' />
       </div>
    </section>
      <section id="features">
        <h2 className='headin'>Four key questions answered by  CleverBooks</h2>
        <div className="feature-list">
          <div className="feature-item">
          <img src={logo} alt="Logo" className='imges'/>
            <h3>What to order</h3>
            <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
          </div>
          <div className="feature-item">
          <img src={logo1} alt="Logo" className='imges'/>
            <h3>When to order</h3>
            <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
          </div>
          <div className="feature-item">
          <img src={logo2} alt="Logo" className='imges'/>
           <br></br>
           
           <h3>How much to stock</h3>
            <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
          </div>
          <div className="feature-item">
          <img src={logo3} alt="Logo" className='imges'/>
            <h3>Where to place</h3>
            <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
          </div>
        </div>
      </section>
   
      <section>
      <div className="belt">
        <img src={lg} alt="Logo" className="bel" />
        <img src={lg1} alt="Logo" className="bel" />
        <img src={lg2} alt="Logo" className="bel" />
        <img src={lg3} alt="Logo" className="bel" />
        <img src={lg4} alt="Logo" className="bel" />
        <img src={lg5} alt="Logo" className="bel" />
        <img src={lg6} alt="Logo" className="bel" />
        <img src={lg7} alt="Logo" className="bel" />
        <img src={lg8} alt="Logo" className="bel" />
        <img src={lg9} alt="Logo" className="bel" />
      </div>
      
        </section>
        <section id="pricing">
        <h2>Pricing</h2>
        <div className="pricing-options">
          <div className="pricing-item1">
            <p>D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually.  CleverBooks automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see  CleverBooks unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.</p>
            <section id="pricing">
         <div className="pricing-options">
          <div className="pricing-item4">
          <img src={user} alt="Logo"  />
          <br></br>
          <br></br>
          <button className='btn1' data="<"></button><button className='btn1' data=">"></button>
          </div>
          <div className="pricing-item5">
          <img src={samo} alt="Logo"  />
          </div>
        </div>
      </section>
      <section id="pricing">
        <div className="pricing-options">
          <div className="pricing-item">
            <h3>upto 95%</h3>
            <p>Demand Fulfilment</p>
          </div>
          <div className="pricing-item">
            <h3>3%</h3>
            <p>Daily Stock-out</p>
          </div>
          <button className='btn2' data="Read story">

         </button>
        </div>
      </section>
          </div>
          <div className="pricing-item2">
          </div>
        </div>
      </section>


          <section id="pricing">
        <h1 className='tt'>Things your spreadsheet wishes it could do</h1>
        <div className="pricing-options">
          <div className="price">
            <h3 className='tttt'>Accurate Demand Forecasting</h3>
            <p>Dynamically predict future demand across all channels, with high accuracy and lowest granularity.  CleverBooks takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.
            </p>
            <p className='ttt'>Learn more...</p>
            <br></br>
            <br></br>
            <h2>HELIX: Workflow Automation</h2>
            <hr></hr>
            <h2>Automated Purchase Planning</h2>
            <hr></hr>
            <h2>Automated Distribution Planning</h2>
            <hr></hr>
            <h2>Easy Integration</h2>
            <hr></hr>
            <h2>Custom Dashboards</h2>
            <hr></hr>
            <h2>Consensus Planning</h2>
            <hr></hr>
          
          </div>
          <div className="price1" id="grad1">
          <img src={uno} alt="Logo"  />
           
          </div>
        </div>
      </section>
      <button className='bt' data="View all features"></button>
        
     
        
    </main>
  );
}

export default MainContent;
