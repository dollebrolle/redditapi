export interface RedditQuery {
    name: string;
    limit: string;
    after: string;
    before: string;
    count: number;
}



export interface RedditData {
    kind: string;
    data: ListingData;
}

interface ListingData {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
    before?: any;
}

export interface Child {
    kind: string;
    data: Data;
}

export interface Data {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: Linkflairrichtext[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: string;
    downs: number;
    thumbnail_height?: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: Mediaembed;
    thumbnail_width?: number;
    author_flair_template_id?: string;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: Mediaembed;
    link_flair_text?: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean | number;
    author_flair_css_class?: string;
    author_flair_richtext: Linkflairrichtext[];
    gildings: Mediaembed;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    body?: string;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: string;
    likes?: any;
    suggested_sort?: string;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: Allawarding[];
    awarders: any[];
    media_only: boolean;
    link_flair_template_id?: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: string;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    replies?: RedditData;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: any;
    is_video: boolean;
    url_overridden_by_dest?: string;
}

interface Allawarding {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format?: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}



interface Preview {
    images: Image[];
    enabled: boolean;
}

interface Image {
    source: Source;
    resolutions: Source[];
    variants: Mediaembed;
    id: string;
}

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Mediaembed {
}

interface Linkflairrichtext {
    e: string;
    t: string;
}