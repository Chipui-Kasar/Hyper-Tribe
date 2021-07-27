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
import { useState, useEffect } from "react";
import NewsData from "../../src/Data/JSONDATA.json";
import Clock from "react-live-clock";

function HomePage() {
  const [filteredUser, setFilteruser] = useState("All");

  var date = new Date();
  var currentHour = date.getHours();
  var greet;
  if (currentHour < 12) {
    greet = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 18) {
    greet = "Good Afternoon";
  } else if (currentHour >= 18 && currentHour <= 22) {
    greet = "Good Evening";
  } else if (currentHour >= 22 && currentHour <= 24) {
    greet = "Good Night";
  }

  const onUserSelected = event => {
    setFilteruser(event);
    // console.log(event);
  };
  return (
    <main className="wrapper">
      <Header />
      <Banner
        greet={greet}
        time={<Clock format={"h:mm A"} ticking={true} />}
        date={<Clock format={"dddd, Mo MMMM, YYYY"} ticking={true} />}
        // filterUser={filteredUser}
        onUserSelect={onUserSelected}
      />
      <section className="contentArea">
        <div className="container">
          <div className="row">
            <CommunityNews title="Community News" />
            <News
              title="News"
              data={NewsData.news}
              filterUser={filteredUser}
              // onUserSelect={onUserSelected}
            />
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
