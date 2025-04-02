import './App.css';
import TypeHead from './pages/typeHead';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from './hooks/useLocalStorage';
import UserInfo from './components/userInfo';
import { useStore } from './zuststore/userstore';
import UserProfile from './pages/profile';
import { schedulePoojaApi } from './action/scheduleAction';
import Call from './components/call/call';
import { useActionState, useEffect, useRef, useState } from 'react';
import MultiSelectDropDown from './components/multiselectdropdown/MultiSelectDropdown';
import EnhancedTable from './components/muiTable/MUITable';

async function increment(previousState, formData) {
  console.log("formddata", previousState, formData);
  return previousState + 1;
}


function App() {
  // const [state, formAction] = useActionState(increment, 0);
  // console.log("useActionState(increment, 0)", useActionState(increment, 0));
  const { setLocalValue, clearSession, localstate } = useLocalStorage();
  const { count, addCount, getApiProducts, userDetails } = useStore(state => state)

  const [checkstate, setCheckstate] = useState(0);

  const dispatch = useDispatch();
  const handleClick = async () => {
    getApiProducts();
    addCount(8)
  }

  const handleSession = (action) => {
    setLocalValue(true, 'login')
  }

  const handleSchedule = async () => {
    const { sucess } = await dispatch(schedulePoojaApi())
    setCheckstate(prev => prev + 1)
    if (sucess) {
      alert('sucess')
    }
    else {
      alert("error occured")
    }
  }

  const functionRef = useRef(null);
  let countRef = useRef(0);

  const useIncrementCount = () => {
    let prevStateRef = useRef(null);
    if (!prevStateRef.current && checkstate !== prevStateRef.current) {
      prevStateRef.current = checkstate;
      return countRef.current++
    }
    else {
      prevStateRef.current = checkstate;
    }
  }
  useEffect(() => {
    functionRef.current = useIncrementCount;
  }, [])



  console.log("furnction", functionRef?.current);

  return (
    <div className="App">
      {/* <Call/> */}
      <form>
        {/* {state} */}
        {/* <button formAction={formAction}>Increment</button> */}
      </form>
      <TypeHead />
      {count}
      IncrementRef =  {functionRef?.current ? functionRef?.current() : "Not Assigned"}
      <button onClick={handleClick}>Handle</button>
      <button onClick={handleSchedule}>Schedule</button>
      <button onClick={handleSession}>{localstate?.login ? "Logout" : "Login"}</button>
      <button onClick={clearSession}>logout</button>
      <UserInfo />
      <UserProfile />
      {userDetails?.firstname}
      {userDetails?.lastname}
      {userDetails?.address}
      <div>
        <MultiSelectDropDown />
        <EnhancedTable />
      </div>
    </div>
  );
}

export default App;
