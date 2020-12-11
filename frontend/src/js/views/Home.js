import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import ViewTitle from "../components/shared/ViewTitle";
import Card from "./Card";
import {fetchCards} from "../api/cards";

// functional component
export default function Home() {

  // useEffect(() => {
  //   let cards = fetchCards().then(cards => {
  //     console.log(`cards: `, cards)
  //
  //   })
  // }, [])

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <h1>App Stuff Goes Here</h1>
      </div>
      <div className="col-9 fh">
        <ViewTitle text={"View Title Here"}/>
        <div className="container-fluid">
          <h1>Stuff and things mostly</h1>
        </div>
      </div>
    </div>
  )
}