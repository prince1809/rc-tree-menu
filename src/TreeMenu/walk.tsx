import { isEmpty } from "lodash";
import memoize from "fast-memoize";

export interface TreeNodeObject {
  [name: string]: TreeNode;
}

interface LocaleFunctionProps {
  label: string;
  [name: string]: any;
}

interface MatchSearchFunctionProps extends LocaleFunctionProps {
  searchItem: string;
}

export interface TreeNode extends LocaleFunctionProps {
  index: number;
  nodes?: TreeNodeObject;
}

export interface TreeNodeInArray extends LocaleFunctionProps {
  key: string;
  nodes?: TreeNodeInArray[];
}

export type LocaleFunction = (
  localeFunctionProps: LocaleFunctionProps
) => string;
export type MatchSearchFunction = (
  matchSearchFunctionProps: MatchSearchFunctionProps
) => boolean;

type Data = TreeNodeObject | TreeNodeInArray[];
interface WalkProps {
  data: Data | undefined;
  parent?: string;
  level?: number;
  openNodes: string[];
  searchTerm: string;
  locale?: LocaleFunction;
  matchSearch?: MatchSearchFunction;
}

interface BranchProps {
  parent: string;
  level: number;
  openNodes: string[];
  searchTerm: string;
  node: TreeNode | TreeNodeInArray;
  nodeName: string;
  index?: number;
  locale?: LocaleFunction;
  matchSearch?: MatchSearchFunction;
}

export interface Item {
  hasNodes: boolean;
  isOpen: boolean;
  level: number;
  key: string;
  label: string;
  [name: string]: any;
}

const validateData = (data: Data | undefined): boolean =>
  !!data && !isEmpty(data);
const getValidatedData = (data: Data | undefined) =>
  validateData(data) ? (data as Data) : [];

const walk = ({ data, ...props }: WalkProps): Item[] => {};

export default memoize(walk);
