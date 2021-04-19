import React from "react";
import { CollumnsFragment } from "./CollumnsFragment";

export function TableFragment() {
  return (
    <table>
      {/* <p>Table Fragment</p> */}
      {/* <thead>Table Fragment</thead>
            <thead>Collumns Fragment</thead> */}
      {/* <thead><span>Table Fragment</span></thead>
            <thead><span>Collumns Fragment</span></thead> */}
      <tbody>
        <tr>
          <CollumnsFragment />
        </tr>
      </tbody>
    </table>
  );
}
