export type UsersResponse = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: number;
};

export type UsersRepositoriesResponse = {
  id: string;
  name: string;
  description: string;
  html_url: string;
  fork: boolean;
  stargazers_count: number;
  language: string;
};
