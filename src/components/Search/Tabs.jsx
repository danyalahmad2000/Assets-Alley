import React from "react";
import { Tabs } from "antd";
import Search from "./Search";

const { TabPane } = Tabs;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs onChange={onChange} type="card">
      <TabPane tab="Rent to Rent" key="1">
        <Search />
      </TabPane>
      <TabPane tab="Refurbish to Rent" key="2">
        <Search />
      </TabPane>
      <TabPane tab="Manage" key="3">
        <Search />
      </TabPane>
    </Tabs>
  );
};

export default App;
