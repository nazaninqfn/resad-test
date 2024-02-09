import { dashboardFakeData } from '../../core/utils/fakeData'
import Clients from './components/Clients.component'
import Clients1 from './components/Clients.component1'
import Duties from './components/Duties.component'
import Guarding from './components/Guarding.component'
import ManagmentClients from './components/ManagmentClients.component'
import ManitorGuarding from './components/Manitor.component'
import UserPanel from './components/UserPanel.component'
import './styles.scss'
const Home = () => {
  
  return (
    <div className='home-page w-100'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 mb-4'>
          <Guarding guardingData={dashboardFakeData.guardingFakeData}/>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <ManitorGuarding manitorData={dashboardFakeData.manitorfakeData}/>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <Duties  dutiesData={dashboardFakeData.dutiesFakeData as any}/>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <Clients />
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <ManagmentClients managmentClientData={dashboardFakeData.managmentFakeData}/>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <UserPanel userPanel={dashboardFakeData.userPanelFakeData}/>
        </div>


      </div>
    </div>
  )
}

export default Home