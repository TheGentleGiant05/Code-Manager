import React, { useState, useEffect } from "react";
import firebase from "../firebase";

function Habit_Tracker() {
  const [habitList, setHabitList] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  // fetch data with useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const habitRef = firebase.database().ref("habits/");
    habitRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let newList = [];
      for (let d in data) {
        let item = { id: d, habit: data[d].habit };
        newList.push(item);
      }
      setHabitList(newList);
      console.log(habitList);
    });
  };
  // handle new habit
  // handle +1 to habit number
  // handle delete habit
  // handle reset habit number
  return (
    <div>
      <h1>Habit Tracker</h1>
      {/* map habits here from useState */}
      {habitList.map((habits, index) => {
        <div>
          <ul>
            <li key={habits.id}>{habits.habit}</li>
          </ul>
        </div>;
      })}
    </div>
  );
}

export default Habit_Tracker;
