import React from "react";
import Banner from "../components/Banner/Banner";
import CommunityNews from "../components/communitynews/CommunityNews";
import Contact from "../components/Contact/Contact";
import EventCalendar from "../components/EventCalendar/EventCalendar";
import Header from "../components/Header/Header";
import KeyResources from "../components/KeyResources/KeyResources";
import News from "../components/news/News";
import Notification from "../components/notification/Notification";
import Resources from "../components/Resources/Resources";
import StrategyPlan from "../components/StrategyPlan/StrategyPlan";
import Task from "../components/Task/Task";

function HomePage() {
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

export default HomePage;
