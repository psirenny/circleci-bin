// @flow

import type { GitHubAsset } from './GitHubAsset';

export type GitHubRelease = {|
  assets: GitHubAsset[],
  assets_url: string,
  author: {
    avatar_url: string,
    events_url: string,
    followers_url: string,
    following_url: string,
    id: number,
    gists_url: string,
    gravatar_id: string,
    html_url: string,
    login: string,
    node_id: string,
    organizations_url: string,
    received_events_url: string,
    repos_url: string,
    site_admin: false,
    starred_url: string,
    subscriptions_url: string,
    type: string,
    url: string,
  },
  body: string,
  created_at: string,
  draft: boolean,
  html_url: string,
  id: number,
  name: string,
  node_id: string,
  prerelease: boolean,
  published_at: string,
  tag_name: string,
  tarball_url: string,
  target_commitish: string,
  upload_url: string,
  url: string,
  zipball_url: string,
|};
