export interface IconJsonOptions {
  activeIconPack?: string;
  hidesExplorerArrows?: boolean;
  opacity?: number;
  saturation?: number;
  folders?: {
    theme?: string;
    color?: string;
    associations?: IconAssociations;
  };
  files?: {
    associations?: IconAssociations;
  };
  languages?: {
    associations?: IconAssociations;
  };
}

export interface IconAssociations {
  [pattern: string]: string;
}
