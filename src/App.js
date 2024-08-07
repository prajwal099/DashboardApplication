
import './App.css';
import Cards from './Components/Cards';
import DataCard from './Components/DataCard';
import MoreInfo from './Components/MoreInfo';
import Feedback from './Components/Feedback';
import NavBarComponent from './Components/NavBarComponent';
import OrdersTable from './Components/OrdersTable';
import SideBarCompnent from './Components/SideBarCompnent';
import GraphData from './Components/GraphData';
function App() {
  
  return (
    <div className='app'>
      <div className='header'>     <div className='leftSide'> <SideBarCompnent /></div>
      <div className='rightSide'>

      <NavBarComponent />
      <div className='row'>
        <div className=' col-12 heading' style={{"margin":"10px 40px"}}><h2>Dashboard</h2></div>
<div className='col-7 d-flex'>
  
      <Cards icon={"https://img.icons8.com/avantgarde/100/shopping-cart--v1.png"} name={"Total Orders"} qty={75} data={3}/>
      
      <Cards icon={"https://img.icons8.com/dusk/64/checked-truck.png"} name={"Total Delivered"} qty={70} data={3}/>
      
      <Cards icon={"https://img.icons8.com/external-vectorslab-outline-color-vectorslab/53/external-Order-Cancel-delivery-and-logistics-navigation-vectorslab-outline-color-vectorslab-2.png"} name={"Total Cancelled"} qty={"05"} data={3}/>
      
      <Cards icon={"https://img.icons8.com/nolan/64/total-sales-1.png"} name={"Total Revenue"} qty={"$12K"} data={3}/></div>
      <div className='col-5'><DataCard /></div>
      </div>
      
      <div className='row'>
        <div className='col-7'>
          <GraphData />
          </div>
          <div className='col-5'><MoreInfo /></div>    
      </div>
      <div className='row'>
        <div className='col-7'>
          <OrdersTable />
          </div>
          <div className='col-5'><Feedback /></div>
          
                  
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
