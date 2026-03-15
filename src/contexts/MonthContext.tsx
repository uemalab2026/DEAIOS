import React, { createContext, useContext, useState, useEffect } from 'react';

// Using a fixed reference date since date-fns doesn't have an easily mockable 'now' without more setup
const MOCK_DATE = new Date('2025-10-15T12:00:00Z');

// Determine initial selected month from localStorage or default to current month
const getInitialSelectedMonth = () => {
  const storedValue = localStorage.getItem('monthlyPreference') || localStorage.getItem('monthPreference');
  if (storedValue) {
      return storedValue;
  }
  
  // Use October 2025 as the default for the mock data
  const defaultDate = MOCK_DATE;
  const mm = String(defaultDate.getMonth() + 1).padStart(2, '0');
  const yyyy = defaultDate.getFullYear();
  return `${yyyy}-${mm}`;
}

type MonthContextType = {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
};

const MonthContext = createContext<MonthContextType | undefined>(undefined);

export const MonthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMonth, setSelectedMonthState] = useState(getInitialSelectedMonth);

  // Sync to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('monthlyPreference', selectedMonth);
    // keeping old key for backward compatibility just in case
    localStorage.setItem('monthPreference', selectedMonth);
  }, [selectedMonth]);

  const setSelectedMonth = (month: string) => {
    setSelectedMonthState(month);
  }

  return (
    <MonthContext.Provider value={{ selectedMonth, setSelectedMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export const useMonth = () => {
  const context = useContext(MonthContext);
  if (context === undefined) {
    throw new Error('useMonth must be used within a MonthProvider');
  }
  return context;
};
