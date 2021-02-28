import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import MultiWizard from "./MultiWizard";
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ErrorBoundary from "./Errorboundary";

const saveToLocal = (widgetList) => {
  localStorage.setItem("widgetList", JSON.stringify(widgetList));
  return widgetList;
};

const Main = () => {
  const [widgetList, setState] = React.useState([
    { language: "English", name: "Todo App", id: uuidv4() },
    { language: "French", name: "Alarm", id: uuidv4() },
    { language: "Spanish", name: "Random app", id: uuidv4() },
    { language: "Deutsch", name: "Timer", id: uuidv4() },
  ]);
  React.useEffect(() => {
    saveToLocal(widgetList);
    return () => {
      localStorage.removeItem("widgetList");
    };
  }, [widgetList]);
  const onDeleteWidget = ({ name, id }) => {
    setState((prevState) => {
      const modifiedList = prevState.filter(
        ({ name: matchingName, id: matchingId }) =>
          matchingName !== name && matchingId !== id
      );
      return modifiedList;
    });
  };

  const onAddWidget = (newWizard) => {
    setState((prevState) => {
      const modifiedList = [...prevState, { ...newWizard, id: uuidv4() }];
      return modifiedList;
    });
  };
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Switch>
          <Route
            path="/addWidget"
            render={() => <MultiWizard onAddWidget={onAddWidget} />}
          />
          <Route
            path="/"
            render={() => (
              <Dashboard
                widgetList={widgetList}
                onDeleteWidget={onDeleteWidget}
              />
            )}
          />
        </Switch>
      </ErrorBoundary>
    </>
  );
};
export default Main;
