import React from "react";
import MenuItem from "./MenuItem";

import "../styles/directory.scss";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: [
        {
          id: "C0000",
          title: "HATS",
          subtitle: "SHOP NOW",
          linkURL: "hats",
        },
        {
          id: "C0001",
          title: "BOTTOM",
          subtitle: "SHOP NOW",
          linkURL: "bottoms",
        },
        {
          id: "C0002",
          title: "TOP",
          subtitle: "SHOP NOW",
          linkURL: "tops",
        },
        {
          id: "C0003",
          title: "MEN",
          subtitle: "SHOP NOW",
          linkURL: "men",
        },
        {
          id: "C0004",
          title: "WOMAN",
          subtitle: "SHOP NOW",
          linkURL: "woman",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <MenuItem key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
