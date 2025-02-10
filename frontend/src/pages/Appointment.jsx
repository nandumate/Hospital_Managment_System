import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/Appointmentform";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | HavenLife Health Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;