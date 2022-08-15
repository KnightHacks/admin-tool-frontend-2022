import React from "react";
import AttendeeRow from "./AttendeeRow";

/**
 * Creation of the Attendee Table component for the Attendee page. The filter for the Attendee Table will be applied here to display the corresponding hackers.
 * @returns the table of selected hackathon attendees.
 */
export default function AttendeeTable() {
  return (
    <>
      <table>
        <tr>
          <th> Name </th>
          <th> Email </th>
          <th> Discord </th>
          <th> Auth </th>
          <th> School </th>
          <th> Accepted </th>
          <th> Confirmed </th>
          <th> Checked In </th>
          <th> Filter </th>
        </tr>
        <AttendeeRow
          attendee={{
            name: "Jane Doe",
            email: "email@domain.com",
            discord: "discord#1234",
            auth: "google",
            school: "ucf",
            isAccepted: true,
            isConfirmed: true,
            isCheckedIn: true,
            userLink: "https://google.com",
          }}
        />
      </table>
    </>
  );
}
