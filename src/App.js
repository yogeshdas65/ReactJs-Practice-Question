import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dropdown from './Task/Dropdown';
import RadioButton from './Task/RadioButton';
import RadioButton2 from './Task/RadioButton2';
import MultipleCounters from './Task/MultipleCounters';
import AccordionItems from './Task/AccordionItems';
import ProductSearchFilter from './Task/ProductSearchFilter';
import LoginPage from './Task/SignUp';
import SignUp from './Task/SignUp';
import Login from './Task/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Dropdown' element={<Dropdown />} />
        <Route path='/RadioButton' element={<RadioButton />} />
        <Route path='/RadioButton2' element={<RadioButton2 />} />
        <Route path='/MultipleCounters' element={<MultipleCounters />} />
        <Route path="/AccordionItems" element={<AccordionItems />} />
        <Route path="/ProductSearchFilter" element={<ProductSearchFilter />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
