
import './App.css';
import Header from './components/navbar';
import ApplayForLeave from './components/requestLeave';
import ViewLeaveCalender from './components/viewLeaveRequest';
import AppRoutes from './AppRoutes';
function App() {
  return (
    <div>
      <Header />
    <AppRoutes/>
    </div>
  );
}

export default App;
