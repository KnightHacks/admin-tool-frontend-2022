import React from "react";

/**
 * @returns row for an attendee in the attendee table.
 */
export default function AttendeeRow({ attendee }) {
  return (
    <tr>
      <th> {attendee.name} </th>
      <th> {attendee.email} </th>
      <th> {attendee.discord} </th>
      <th> {attendee.auth} </th>
      <th> {attendee.school} </th>
      <th> {attendee.isAccepted} </th>
      <th> {attendee.isConfirmed} </th>
      <th> {attendee.isCheckedIn} </th>
      <th> {attendee.userLink} </th>
    </tr>
  );
}
