const rickAndMortyEpisodes = [
  {
    id: 1,
    season: 1,
    episode: 1,
    title: "Pilot",
    releaseDate: "2013-12-02",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 2,
    season: 1,
    episode: 2,
    title: "Lawnmower Dog Pilot",
    releaseDate: "2013-12-09",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 3,
    season: 1,
    episode: 3,
    title: "Anatomy Park",
    releaseDate: "2013-12-16",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 4,
    season: 1,
    episode: 4,
    title: "M. Night Shaym-Aliens!",
    releaseDate: "2014-01-13",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 5,
    season: 1,
    episode: 5,
    title: "Meeseeks and Destroy",
    releaseDate: "2014-01-20",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 6,
    season: 1,
    episode: 6,
    title: "Rick Potion #9",
    releaseDate: "2014-01-27",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 7,
    season: 1,
    episode: 7,
    title: "Raising Gazorpazorp",
    releaseDate: "2014-03-10",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 8,
    season: 1,
    episode: 8,
    title: "Rixty Minutes",
    releaseDate: "2014-03-17",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 9,
    season: 1,
    episode: 9,
    title: "Something Ricked This Way Comes",
    releaseDate: "2014-03-24",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 10,
    season: 1,
    episode: 10,
    title: "Close Rick-Counters of the Rick Kind",
    releaseDate: "2014-04-07",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 11,
    season: 1,
    episode: 11,
    title: "Ricksy Business",
    releaseDate: "2014-04-14",
    duration: "22 min",
    coverPhoto: "./Images/season1.jfif"
  },
  {
    id: 12,
    season: 2,
    episode: 1,
    title: "A Rickle in Time",
    releaseDate: "2015-07-26",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 13,
    season: 2,
    episode: 2,
    title: "Mortynight Run",
    releaseDate: "2015-08-02",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 14,
    season: 2,
    episode: 3,
    title: "Auto Erotic Assimilation",
    releaseDate: "2015-08-09",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 15,
    season: 2,
    episode: 4,
    title: "Total Rickall",
    releaseDate: "2015-08-16",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 16,
    season: 2,
    episode: 5,
    title: "Get Schwifty",
    releaseDate: "2015-08-23",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 17,
    season: 2,
    episode: 6,
    title: "The Ricks Must Be Crazy",
    releaseDate: "2015-08-30",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 18,
    season: 2,
    episode: 7,
    title: "Big Trouble in Little Sanchez",
    releaseDate: "2015-09-13",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 19,
    season: 2,
    episode: 8,
    title: "Interdimensional Cable 2: Tempting Fate",
    releaseDate: "2015-09-20",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 20,
    season: 2,
    episode: 9,
    title: "Look Who's Purging Now",
    releaseDate: "2015-09-27",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 21,
    season: 2,
    episode: 10,
    title: "The Wedding Squanchers",
    releaseDate: "2015-10-04",
    duration: "22 min",
    coverPhoto: "./Images/s2.jfif"
  },
  {
    id: 22,
    season: 3,
    episode: 1,
    title: "The Rickshank Rickdemption",
    releaseDate: "2017-04-01",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 23,
    season: 3,
    episode: 2,
    title: "Rickmancing the Stone",
    releaseDate: "2017-07-30",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 24,
    season: 3,
    episode: 3,
    title: "Pickle Rick",
    releaseDate: "2017-08-06",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 25,
    season: 3,
    episode: 4,
    title: "Vindicators 3: The Return of Worldender",
    releaseDate: "2017-08-13",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 26,
    season: 3,
    episode: 5,
    title: "The Whirly Dirly Conspiracy",
    releaseDate: "2017-08-20",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 27,
    season: 3,
    episode: 6,
    title: "Rest and Ricklaxation",
    releaseDate: "2017-08-27",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 28,
    season: 3,
    episode: 7,
    title: "The Ricklantis Mixup",
    releaseDate: "2017-09-10",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 29,
    season: 3,
    episode: 8,
    title: "Morty's Mind Blowers",
    releaseDate: "2017-09-17",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 30,
    season: 3,
    episode: 9,
    title: "The ABC's of Beth",
    releaseDate: "2017-09-24",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 31,
    season: 3,
    episode: 10,
    title: "The Rickchurian Mortydate",
    releaseDate: "2017-10-01",
    duration: "22 min",
    coverPhoto: "./Images/s3.jfif"
  },
  {
    id: 32,
    season: 4,
    episode: 1,
    title: "Edge of Tomorty: Rick Die Rickpeat",
    releaseDate: "2019-11-10",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 33,
    season: 4,
    episode: 2,
    title: "The Old Man and the Seat",
    releaseDate: "2019-11-17",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 34,
    season: 4,
    episode: 3,
    title: "One Crew over the Crewcoo's Morty",
    releaseDate: "2019-11-24",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 35,
    season: 4,
    episode: 4,
    title: "Claw and Hoarder: Special Ricktim's Morty",
    releaseDate: "2019-12-08",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 36,
    season: 4,
    episode: 5,
    title: "Rattlestar Ricklactica",
    releaseDate: "2019-12-15",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 37,
    season: 4,
    episode: 6,
    title: "Never Ricking Morty",
    releaseDate: "2020-05-03",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 38,
    season: 4,
    episode: 7,
    title: "Promortyus",
    releaseDate: "2020-05-10",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 39,
    season: 4,
    episode: 8,
    title: "The Vat of Acid Episode",
    releaseDate: "2020-05-17",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 40,
    season: 4,
    episode: 9,
    title: "Childrick of Mort",
    releaseDate: "2020-05-24",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  },
  {
    id: 41,
    season: 4,
    episode: 10,
    title: "Star Mort Rickturn of the Jerri",
    releaseDate: "2020-05-31",
    duration: "22 min",
    coverPhoto: "./Images/s4.jfif"
  }
];

console.log(rickAndMortyEpisodes);
export default rickAndMortyEpisodes;
