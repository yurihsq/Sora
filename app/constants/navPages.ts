export const pages = [
  {
    pageName: 'movies',
    pageLink: 'movies',
    pageDropdown: [
      { pageName: 'Discover', pageLink: 'discover/movies' },
      { pageName: 'popular', pageLink: 'movies/popular' },
      { pageName: 'topRated', pageLink: 'movies/top-rated' },
      { pageName: 'upcoming', pageLink: 'movies/upcoming' },
    ],
  },
  {
    pageName: 'tv',
    pageLink: 'tv-shows',
    pageDropdown: [
      { pageName: 'Discover', pageLink: 'discover/tv-shows' },
      { pageName: 'popular', pageLink: 'tv-shows/popular' },
      { pageName: 'topRated', pageLink: 'tv-shows/top-rated' },
      { pageName: 'on-the-air', pageLink: 'tv-shows/on-the-air' },
    ],
  },
  {
    pageName: 'Anime',
    pageLink: 'anime',
    pageDropdown: [
      { pageName: 'Discover', pageLink: 'discover/anime' },
      { pageName: 'Recent Episodes', pageLink: 'anime/recent-episodes' },
      { pageName: 'Popular Anime', pageLink: 'anime/popular' },
      { pageName: 'Trending Anime', pageLink: 'anime/trending' },
    ],
  },
];

export const searchDropdown = [
  { pageName: 'search.title.movie', pageLink: 'search/movie' },
  { pageName: 'search.title.tv', pageLink: 'search/tv' },
  { pageName: 'search.title.people', pageLink: 'search/people' },
  { pageName: 'search.title.anime', pageLink: 'search/anime' },
];

export const bottomNavPages = [
  {
    pageName: 'Movies',
    pageLink: 'movies',
  },
  {
    pageName: 'TV Shows',
    pageLink: 'tv-shows',
  },
  {
    pageName: 'Anime',
    pageLink: 'anime',
  },
];

export const leftDrawerPages = [
  {
    pageName: 'trending',
    pageLink: 'trending',
  },
  {
    pageName: 'people',
    pageLink: 'people',
  },
  {
    pageName: 'Collections',
    pageLink: 'collections',
  },
  {
    pageName: 'My List',
    pageLink: 'list',
  },
  {
    pageName: 'history',
    pageLink: 'watch-history',
  },
  {
    pageName: 'Settings',
    pageLink: 'settings',
  },
];
