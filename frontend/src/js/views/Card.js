import React from 'react'
import {Link, useParams} from "react-router-dom";
import ViewTitle from "../components/shared/ViewTitle";

export default function CardView() {
  const {id} = useParams()

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <h1>Card Stuff</h1>
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Card ID: ${id}`} />
      </div>
    </div>

  )
};