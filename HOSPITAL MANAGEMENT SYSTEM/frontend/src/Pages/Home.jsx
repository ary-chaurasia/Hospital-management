import React from "react";
import Hero from "../Component/Hero";
import Biography from "../Component/Biography";
import Department from "../Component/Department";
import MessageForm from "../Component/MessageForm";
const Home = () => {
  return (
    <>
      <Hero title={"Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.png"}/>
      <Department />
      <MessageForm />
    </>
  );
};

export default Home;
