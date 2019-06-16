import React from "react";

type TreeMenuProps = {
  data: { [name: string]: TreeNode } | TreeNodeInArray[];
};

type TreeMenuState = {};

class TreeMenu extends React.Component<TreeMenuProps, TreeMenuState> {}
