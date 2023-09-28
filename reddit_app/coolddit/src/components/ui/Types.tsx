export interface Root {
    kind: string
    data: Data
  }
  
  export interface Data {
    after: string
    dist: number
    modhash: string
    geo_filter: any
    children: Children[]
    before: any
  }
  
  export interface Children {
    kind: string
    data: Data2
  }
  
  export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls?: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type: any
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color?: string
    upvote_ratio: number
    author_flair_background_color?: string
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width?: number
    author_flair_template_id?: string
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: any
    author_flair_css_class?: string
    author_flair_richtext: AuthorFlairRichtext[]
    gildings: Gildings
    content_categories?: string[]
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls?: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html?: string
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    all_awardings: any[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished?: string
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color?: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status?: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status?: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    link_flair_template_id?: string
    post_hint?: string
    url_overridden_by_dest?: string
    preview?: Preview
    is_gallery?: boolean
    media_metadata?: MediaMetadata
    gallery_data?: GalleryData
  }
  
  export interface LinkFlairRichtext {
    e: string
    t?: string
    a?: string
    u?: string
  }
  
  export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
  }
  
  export interface SecureMedia {
    reddit_video?: RedditVideo
    oembed?: Oembed
    type?: string
  }
  
  export interface RedditVideo {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
    has_audio?: boolean
  }
  
  export interface Oembed {
    provider_url: string
    url: string
    html: string
    author_name: string
    height: any
    width: number
    version: string
    author_url: string
    provider_name: string
    cache_age: number
    type: string
  }
  
  export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
  }
  
  export interface AuthorFlairRichtext {
    e: string
    t?: string
    a?: string
    u?: string
  }
  
  export interface Gildings {}
  
  export interface Media {
    reddit_video?: RedditVideo2
    oembed?: Oembed2
    type?: string
  }
  
  export interface RedditVideo2 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
    has_audio?: boolean
  }
  
  export interface Oembed2 {
    provider_url: string
    url: string
    html: string
    author_name: string
    height: any
    width: number
    version: string
    author_url: string
    provider_name: string
    cache_age: number
    type: string
  }
  
  export interface Preview {
    images: Image[]
    enabled: boolean
  }
  
  export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
  }
  
  export interface Source {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution {
    url: string
    width: number
    height: number
  }
  
  export interface Variants {}
  
  export interface MediaMetadata {
    "40c8fb1nj4ob1": N40c8fb1nj4ob1
    h6bdra1nj4ob1: H6bdra1nj4ob1
    m9hm0b1nj4ob1: M9hm0b1nj4ob1
  }
  
  export interface N40c8fb1nj4ob1 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
  }
  
  export interface P {
    y: number
    x: number
    u: string
  }
  
  export interface S {
    y: number
    x: number
    u: string
  }
  
  export interface H6bdra1nj4ob1 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
  }
  
  export interface P2 {
    y: number
    x: number
    u: string
  }
  
  export interface S2 {
    y: number
    x: number
    u: string
  }
  
  export interface M9hm0b1nj4ob1 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
  }
  
  export interface P3 {
    y: number
    x: number
    u: string
  }
  
  export interface S3 {
    y: number
    x: number
    u: string
  }
  
  export interface GalleryData {
    items: Item[]
  }
  
  export interface Item {
    media_id: string
    id: number
  }
  