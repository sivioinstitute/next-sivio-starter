import { createContext, useContext, useState } from 'react';
import { Header, Tab, Panel } from './styles/tabs';

const TabsContext = createContext();

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      'Hey cool programmer, this component must be used within a <Tabs> component.'
    );
  }
  return context;
};

export const Tabs = ({ children, activeTab }) => {
  const [active, setActive] = useState(activeTab);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Header = ({ children, ...rest }) => {
  return <Header {...rest}>{children}</Header>;
};

Tabs.Tab = ({ label, icon, children, ...rest }) => {
  const { active, setActive } = useTabs();
  return (
    <Tab onClick={() => setActive(label)} {...rest} active={label === active}>
      <img src={icon} />
      {children}
    </Tab>
  );
};

Tabs.Panel = ({ children, label, ...rest }) => {
  const { active } = useTabs();
  return label === active ? <Panel {...rest}>{children}</Panel> : null;
};
