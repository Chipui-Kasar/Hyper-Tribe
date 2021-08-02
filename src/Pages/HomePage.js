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
import axios from "axios";

function HomePage() {
  const [filteredUser, setFilteruser] = useState("All");
  const [searchData, setsearchData] = useState("All");
  console.log(filteredUser);

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

  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81849c4a33644af7934e6530eedb7195"
      )
      .then(response => {
        setData(response.data);
        // console.log(response);
      })
      .catch(errorMessage => {
        console.log("Error", errorMessage);
      });
  }, []);

  const onInputChange = event => {
    setsearchData(event.target.value);
  };

  return (
    <main className="wrapper">
      <Header />
      <Banner
        greet={greet}
        time={<Clock format={"h:mm A"} ticking={true} />}
        date={<Clock format={"dddd, DD-MMMM-YYYY"} ticking={true} />}
        // filterUser={filteredUser}
        onUserSelect={onUserSelected}
        searchData={searchData}
        onInputChange={onInputChange}
      />
      <section className="contentArea">
        <div className="container">
          <div className="row">
            <CommunityNews title="Community News" />
            <News
              title="News"
              data={NewsData.news}
              filterUser={filteredUser}
              data={data}
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
