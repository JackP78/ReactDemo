import React from "react";

import Task from "../components/Task";

export default class Tasks extends React.Component {
  render() {
    const Tasks = [
      "Some Task",
      "Rejected Task",
      "Another Task",
    ].map((title, i) => <Task key={i} title={title}/> );

    const welcomeText = [
      "Welcome, Jack",
      "Welcome, Dave",
    ];
    const welcomeUser = welcomeText[Math.round( Math.random() * (welcomeText.length-1) )];

    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {welcomeUser}
            </div>
          </div>
        </div>

        <div class="row">{Tasks}</div>
      </div>
    );
  }
}
