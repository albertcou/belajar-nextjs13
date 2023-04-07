import Card from "@/components/card";
import React from "react";

export default function Guestbook() {
  return <>
    <h1 className="text-3xl font-bold">Guest Book</h1>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
    <Card.GuestBook nama="Fahri" pesan="Bang makan bang!"/>
  </>;
}
