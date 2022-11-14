import React, { useState, useContext, useEffect } from 'react';
import { Children } from 'react';
import { getMonthbyNum, getMonthNum } from '../utils';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberOfDays, setNumberOfDays]= useState();
  const thisDate = new Date();
  const [thisMonth, setThisMonth] = useState(thisDate.toLocaleString('default', { month: 'long' }));
  const [thisYear, setThisYear] = useState(thisDate.getFullYear())

console.log("thisMonth", thisMonth);
  
const checkMonth = (num) => {
    if (num > 12) {
        setThisYear(thisYear + 1);
        setThisMonth("January");
        return;
    }
    if (num <= 0) {
        setThisYear(thisYear - 1);
        setThisMonth("December");
        return;
    }

    setThisMonth(getMonthbyNum(num - 1));
    return
}
const increaseMonth = () => {
    const num = getMonthNum(thisMonth) + 1;
    checkMonth(num);
}
const decreaseMonth = () => {
    const num = getMonthNum(thisMonth) - 1;
    checkMonth(num);
}

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        increaseMonth,
        decreaseMonth,
        thisMonth,
        thisYear,
        numberOfDays
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
