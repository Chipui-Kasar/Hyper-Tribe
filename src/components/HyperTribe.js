import React from "react";
import Banner from "./Banner/Banner";
import CommunityNews from "./communitynews/CommunityNews";
import Contact from "./Contact/Contact";
import EventCalendar from "./EventCalendar/EventCalendar";
import Header from "./Header/Header";
import KeyResources from "./KeyResources/KeyResources";
import News from "./news/News";
import Notification from "./notification/Notification";
import Resources from "./Resources/Resources";
import StrategyPlan from "./StrategyPlan/StrategyPlan";
import Task from "./Task/Task";

function HyperTribe() {
  return (
    <main className="wrapper">
      <Header />
      <Banner />
      <section className="contentArea">
        <div className="container">
          <div className="row">
            <CommunityNews title="Community News" />
            <News title="News" />
          </div>
          <Notification />
          <div className="row">
            <StrategyPlan title="Strategy Plan" />
            <Task title="Task" />
            <KeyResources title="Key Resources" />
          </div>
          <EventCalendar title="Event Calendar" />
          <div className="row">
            <Resources title="Resources" />
            <KeyResources title="Documents & Media" />
            <Contact title="CONTACT YOUR ACCOUNT MANAGER" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HyperTribe;
