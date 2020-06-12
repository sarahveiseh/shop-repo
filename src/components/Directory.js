import React from "react";
import MenuItem from "./MenuItem";

import "../styles/directory.scss";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: [
        { id: "C0000", title: "HATS", subtitle: "SHOP NOW" },
        { id: "C0001", title: "BOTTOM", subtitle: "SHOP NOW" },
        { id: "C0002", title: "TOP", subtitle: "SHOP NOW" },
        { id: "C0003", title: "MEN", subtitle: "SHOP NOW" },
        { id: "C0004", title: "WOMAN", subtitle: "SHOP NOW" },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.collections.map((collection) => (
          <MenuItem
            key={collection.id}
            title={collection.title}
            subtitle={collection.subtitle}
          />
        ))}
      </div>
    );
  }
}
