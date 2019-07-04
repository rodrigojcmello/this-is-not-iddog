export interface ParamFeed {
  category: string;
}

export interface SuccessResFeed {
  category: string;
  list: string[];
}

export interface ErrorResFeed {
  error: {
    message: string;
  };
}

export type ResFeed = SuccessResFeed | ErrorResFeed;
