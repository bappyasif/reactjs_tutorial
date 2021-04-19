import React from "react";

export function CollumnsFragment() {
  let items = [
    {
      id: 11,
      title: "Test Title",
    },
    {
      id: 22,
      title: "Test Title",
    },
  ];
  return (
    // short hand for React.Fragment is <></>, but limitation is that <></> does not support 'key' in list generations
    <>
      {/* <p>Collumns Fragment</p> */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <tr>
            <td>Title</td>
            <td>{item.title}</td>
          </tr>
        </React.Fragment>
      ))}
      {/* <td>sweetheart</td>
      <td>bretta</td> */}
      <tr>
        <td>sweetheart</td>
        <td>bretta</td>
      </tr>
    </>
  );
}
