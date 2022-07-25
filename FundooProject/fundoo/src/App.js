import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Header from './Components/header/Header';
import TakeNote1 from './Components/takeNote1/TakeNote1';
import TakeNote2 from './Components/takeNote2/TakeNote2';
import TakeNote3 from './Components/takeNote3/TakeNote3';
import Dashboard from './Pages/dashboard/Dashboard';
import Router from './Components/routers/Router';
import HeaderOne from './Components/header/HeaderOne';
import Xyz from './Components/header/xyz';
import Test from './Components/header/Test';
import TakeNoteOne from './Components/takeNote1/takeNoteOneMUI';
import TakeNoteTwoMUI from './Components/takeNote2/takeNoteTwoMUI';
import TakeNoteThreeMUI from './Components/takeNote3/takeNoteThreeMUI';
import TakeNoteThreeTest from './Pages/dashboard/takeNoteThreeTest';
import DashboardTest from './Pages/dashboard/dashboardTest';
import { Provider } from 'react-redux';
import store from './Components/redux/store';
import Test123 from './Components/test123';

function App() {
  return (
    <div className="App" >

      <Provider store={store}>
        <Router />
      </Provider>
      {/* <DashboardTest/> */}
      {/* <TakeNoteThreeTest/> */}
      {/* <TakeNoteThreeMUI/> */}
      {/* <TakeNoteTwoMUI/> */}
      {/* <TakeNoteOne/> */}
      {/* <HeaderOne/> */}


      {/* <Test/> */}
      {/* <Xyz/> */}

      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Header/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3/> */}
      {/* <Dashboard/> */}
      {/* <Test123/> */}

    </div>
  );
}

export default App;
