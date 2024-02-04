export interface WebsiteCards {
     link: string;
     name: string;
     image: string | undefined;
     author: string;
}

export interface RepoCardsProp {
     id: number;
     author: string;
     avatarUrl: string;
     repoTitle: string;
     star: number | undefined;
     fork: number | undefined;
     repoUrl: string;
     desc: string | null;
     language: string | null | undefined;
     create_at: undefined | null | string;
}

export type Response = {
     id: number;
     node_id: string;
     name: string; full_name: string;
     owner: { name?: string | null | undefined; email?: string | null | undefined; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gists_url: string; starred_url: string; subscriptions_url: string; organizations_url: string; repos_url: string; events_url: string; received_events_url: string; type: string; site_admin: boolean; starred_at?: string | undefined; }; private: boolean; html_url: string; description: string | null; fork: boolean; url: string; archive_url: string; assignees_url: string; blobs_url: string; branches_url: string; collaborators_url: string; comments_url: string; commits_url: string; compare_url: string; contents_url: string; contributors_url: string; deployments_url: string; downloads_url: string; events_url: string; forks_url: string; git_commits_url: string; git_refs_url: string; git_tags_url: string; git_url?: string | undefined; issue_comment_url: string; issue_events_url: string; issues_url: string; keys_url: string; labels_url: string; languages_url: string; merges_url: string; milestones_url: string; notifications_url: string; pulls_url: string; releases_url: string; ssh_url?: string | undefined; stargazers_url: string; statuses_url: string; subscribers_url: string; subscription_url: string; tags_url: string; teams_url: string; trees_url: string; clone_url?: string | undefined; mirror_url?: string | null | undefined; hooks_url: string; svn_url?: string | undefined; homepage?: string | null | undefined; language?: string | null | undefined; forks_count?: number | undefined; stargazers_count?: number | undefined; watchers_count?: number | undefined; size?: number | undefined; default_branch?: string | undefined; open_issues_count?: number | undefined; is_template?: boolean | undefined; topics?: string[] | undefined; has_issues?: boolean | undefined; has_projects?: boolean | undefined; has_wiki?: boolean | undefined; has_pages?: boolean | undefined; has_downloads?: boolean | undefined; has_discussions?: boolean | undefined; archived?: boolean | undefined; disabled?: boolean | undefined; visibility?: string | undefined; pushed_at?: string | null | undefined; created_at?: string | null | undefined; updated_at?: string | null | undefined; permissions?: { admin?: boolean | undefined; maintain?: boolean | undefined; push?: boolean | undefined; triage?: boolean | undefined; pull?: boolean | undefined; } | undefined; role_name?: string | undefined; temp_clone_token?: string | undefined; delete_branch_on_merge?: boolean | undefined; subscribers_count?: number | undefined; network_count?: number | undefined; code_of_conduct?: { key: string; name: string; url: string; body?: string | undefined; html_url: string | null; } | undefined; license?: { key?: string | undefined; name?: string | undefined; spdx_id?: string | undefined; url?: string | undefined; node_id?: string | undefined; } | null | undefined; forks?: number | undefined; open_issues?: number | undefined; watchers?: number | undefined; allow_forking?: boolean | undefined; web_commit_signoff_required?: boolean | undefined; security_and_analysis?: { advanced_security?: { status?: "enabled" | "disabled" | undefined; } | undefined; dependabot_security_updates?: { status?: "enabled" | "disabled" | undefined; } | undefined; secret_scanning?: { status?: "enabled" | "disabled" | undefined; } | undefined; secret_scanning_push_protection?: { status?: "enabled" | "disabled" | undefined; } | undefined; } | null | undefined;
}[];
