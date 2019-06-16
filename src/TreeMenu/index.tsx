import React from "react";
import KeyDown from "../KeyDown";

import walk, { Item } from "./walk";
import { defaultChildren } from "./renderProps";

type TreeMenuProps = {
  //data: { [name: string]: TreeNode } | TreeNodeInArray[];
  hasSearch?: boolean;
  onClickItem?: (props: Item) => void;
};

type TreeMenuState = {};

class TreeMenu extends React.Component<TreeMenuProps, TreeMenuState> {
  static defaultProps: TreeMenuProps = {
    //data: {},
    hasSearch: true
  };

  generateItems = (): TreeMenu[] => {};

  render() {
    const { children, hasSearch, onClickItem } = this.props;
    const items = this.generateItems();
    const renderChildren = children || defaultChildren;

    const keyDownProps = {
      up: () => {},
      down: () => {},
      left: () => {},
      right: () => {},
      enter: () => {}
    };

    return (
      <KeyDown {...keyDownProps}>
        {renderChildren(hasSearch ? { search: this.search, items } : { items })}
      </KeyDown>
    );
  }
}

export default TreeMenu;
