import { gql } from 'apollo-server-express'

// TODO: ADD_KIDCOIN_BY_KIDCOIN_API 🚩 (Remove 'kidcoinAmount' from 'type User' 👇)
const typeDefs = gql`
  type User {
    _id: String
    email: String
    avatar: String
    name: String
    userStatus: String
    friends: [String]
    age: Int
    teamsCreated: Int
    gamesPlayed: Int
    commentsMade: Int
    role: [String]
    createdAt: String
    verified: Boolean
    photos: [Photo]
    followerIds: [String]
    followFollowers: Follower
    city: String
    country: String
    hasClaimed: Boolean
    createdBy: String
    unreadNotificationCount: Int
    kidCoinToken: String
    player: PlayerStats
    errorMessage: String
    affiliateCouponCode: String
    affiliateInfoDetails: Affiliate
    publicWalletAddresses: [String]
    dateOfBirth: String
    kidcoinAmount: Int
    userType: String
    baseInfo: Base
    gender: String
    paymentDetails: Payment
  }

  type Runs {
    teamOneRuns: [Int]
    teamTwoRuns: [Int]
  }

  type ExtraRuns {
    teamOneExtraRuns: [Int]
    teamTwoExtraRuns: [Int]
  }

  type GameStat {
    teamOneSO: Int
    teamTwoSO: Int
    teamOneLOB: Int
    teamTwoLOB: Int
    teamOneHits: Int
    teamTwoHits: Int
    teamOnePC: Int
    teamTwoPC: Int
    teamOneBB: Int
    teamTwoBB: Int
  }

  type ExtraRunsCalculated {
    teamOne: Int
    teamTwo: Int
  }

  type InfoMessage {
    errorMessage: String
    successMessage: String
  }

  type AdditionalMessage {
    additionalData: String
    errorMessage: String
    successMessage: String
  }

  type Match {
    _id: String
    tournamentId: String
    tournamentName: String
    teamObj: Team
    team: String
    teamId: String
    against: String
    againstId: String
    teamLogo: String
    againstLogo: String
    time: String
    place: String
    winner: String
    hasEnded: Boolean
    byeTeam: Boolean
    isSeries: Boolean
    isRunning: Boolean
    bestOf: Int
    seriesTeamOneWin: Int
    seriesTeamTwoWin: Int
    teamOneRuns: [Int]
    teamTwoRuns: [Int]
    teamOneExtraRuns: [Int]
    teamTwoExtraRuns: [Int]
    allGamesScore: [Runs]
    allGamesStats: [GameStat]
    allGamesExtraRuns: [ExtraRuns]
    allGamesExtraInningsListed: [Boolean]
    allGamesExtraRunsCalculated: ExtraRunsCalculated
    teamOneSO: Int
    teamTwoSO: Int
    teamOneLOB: Int
    teamTwoLOB: Int
    teamOneHits: Int
    teamTwoHits: Int
    teamOnePC: Int
    teamTwoPC: Int
    teamOneBB: Int
    teamTwoBB: Int
    battingTeam: Boolean
    currentInnings: Int
    extraInnings: Boolean
    numberOfInnings: Int
    createdAt: String
    initiatedBy: String
    teamMembers: [Player]
    againstMembers: [Player]
    base: Base
    isWorldSeries: Boolean
  }

  type Rivals {
    rivalName: String
    rivalId: String
    rivalOwner: String
    teamName: String
    teamId: String
    teamOwner: String
    playedAgainst: Int
    runsFor: Int
    runsAgainst: Int
    teamWin: Int
    teamLoss: Int
  }

  type SoccerRivals {
    rivalName: String
    rivalId: String
    rivalOwner: String
    teamName: String
    teamId: String

    playedAgainst: Int
    goalsFor: Int
    goalsAgainst: Int
    teamWin: Int
    teamLoss: Int
  }

  type TournamentCommonData {
    tournamentId: String
    tournamentName: String
    tournamentType: Int
    tournamentGameType: Int
  }

  type HockeyRivals {
    rivalName: String
    rivalId: String
    rivalOwner: String
    teamName: String
    teamId: String

    playedAgainst: Int
    goalsFor: Int
    goalsAgainst: Int
    teamWin: Int
    teamLoss: Int
  }

  type SoccerStats {
    _id: String
    teamName: String
    teamId: String
    owner: String
    ownerId: String
    logo: String
    avatar: String
    singleWin: Int
    singleLoss: Int
    seriesWin: Int
    seriesLoss: Int
    totalNumberOfGames: Int
    goalsFor: Int
    goalsAgainst: Int
    shotAtGoal: Int
    shotSaved: Int
    fans: Int
    comments: Int
    likes: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    createdBy: String
    teamsCreated: Int
    rivals: [SoccerRivals]
    leaders: [SoccerStats]
    singles: [SoccerMatch]
    series: [SoccerMatch]
    tournaments: [SoccerTournament]
    members: [Player]
    base: [Base]
    photos: [Photo]
    teamInfo: Team
    ownerDetails: User
    streamingRecords: [StreamingRecord]
  }

  type SocerPlayerStats {
    avatar: String
    soccerAvatar: String
    totalWin: Int
    totalLoss: Int
    totalNumberOfGames: Int
    score: Int
    fouls: Int
    totalRedCard: Int
    totalYellowCard: Int
    shotAtGoal: Int
    shotSaved: Int
    playedAgainstTeam: [String]
  }

  type HockeyPlayerStats {
    hockeyAvatar: String
    totalWin: Int
    totalLoss: Int
    totalNumberOfGames: Int
    score: Int
    fouls: Int
    totalRedCard: Int
    totalYellowCard: Int
    shotAtGoal: Int
    shotSaved: Int
    playedAgainstTeam: [String]
  }

  type baseBallPlayerStats {
    baseBallAvatar: String
    totalWin: Int
    totalLoss: Int
    totalNumberOfGames: Int
    runs: Int
    playedAgainstTeam: [String]
  }

  type PlayerStats {
    _id: String
    name: String
    userId: String
    teamId: String
    createdBy: String
    avatar: String
    jerseyNumber: Int
    soccerStats: SocerPlayerStats
    hockeyStats: HockeyPlayerStats
    baseBallStats: baseBallPlayerStats
    soccerTeamId: [String]
    baseBallTeamId: [String]
    hockeyTeamId: [String]
    user: User
    base: [Base]
    soccerTeams: [Team]
    baseBallTeams: [Team]
    hockeyTeams: [Team]
    photos: [Photo]
    description: String
    reportType: [String]
    reportBy: [String]
    banned: Boolean
    successMessage: String
    errorMessage: String
    streamingRecords: [StreamingRecord]
    selfPlay: [SelfPlay]
    sport: [String]
    parentRelation: String
  }

  type SelfPlayPlayerData {
    _id: String
    playerId: String
    successMissHits: [Int]
    totalScores: Int
    PlayerStats: [PlayerStats]
  }

  type SelfPlayGameStats {
    playerId: String
    successScore: Int
    missScore: Int
    penaltyArray: [Int]
    roundScore: [Int]
    taskCompletedTime: Int
    totalRoundWin: Int
  }

  input EventTypeData {
    name: String
    gameName: String
    gameType: String
    gameMode: String
    totalPenalty: Int
    timeLength: Int
    isFinished: Boolean
    winner: String
    selfPlayGameId: String
  }

  type EventType {
    _id: String
    name: String
    gameMode: String
    gameType: String
    totalPenalty: Int
    timeLength: Int
    winner: String
    selfPlayGameId: String
  }

  type SelfPlayEvent {
    _id: String
    eventName: String
    isOpen: Boolean
    finished: Boolean
    createdBy: String
    baseId: String
    participantsIds: [String]
    eventGameType: [EventType]
    allContestsIds: [String]
    allContestGame: [SelfPlay]
    participantsPlayer: [PlayerStats]
    base: Base
    ranking: [Int]
    winningArray: [Int]
  }

  type SelfPlay {
    _id: String
    totalPlayers: Int
    participantsIds: [String]
    gameType: String
    eventName: String
    createdBy: String
    participantsPlayer: [PlayerStats]
    timeLength: Int #In penalty mode this time length number will be the number of penalty shots
    ranking: [Int]
    finished: Boolean
    running: Boolean
    currentHitPerson: Int
    baseId: String
    base: Base
    streamingRecords: [StreamingRecord]
    gameMode: String
    contestType: String
    totalRound: Int
    createdAt: String
    timeAttack: [SelfPlayGameStats]
    penaltyAttack: [SelfPlayGameStats]
    fixedTimeAttack: [SelfPlayGameStats]
    roundAttack: [SelfPlayGameStats]
    completedRound: Int
    eventGameType: [EventType]
    goneToTie: Boolean
    totalTiePlayer: Int
    tieParticipantsPlayer: [Int]
    tieCompletedPlayers: Int
    configure: String #general, event
    eventId: String

    ##### extra property for tournament match #####
    tournamentName: String
    tournamentId: String
  }

  type SelfPlayTournament {
    _id: String
    tournamentName: String
    createdBy: String
    bestOf: Int
    tournamentType: Int
    baseId: String
    participantsIds: [String] # //Player Ids
    gameMode: String
    timeLength: Int
    schedule: String
    gameType: String
    isOpen: Boolean
    currentStatus: String
    participantsPlayer: [PlayerStats]
    finished: Boolean
    winner: String
    round64: [SelfPlay]
    round32: [SelfPlay]
    round16: [SelfPlay]
    round8: [SelfPlay]
    round4: [SelfPlay]
    round1: [SelfPlay]
    base: Base
    errorMessage: String
  }

  type HockeyStats {
    _id: String
    teamName: String
    teamId: String
    owner: String
    ownerId: String
    logo: String
    avatar: String
    singleWin: Int
    singleLoss: Int
    seriesWin: Int
    seriesLoss: Int
    totalNumberOfGames: Int
    goalsFor: Int
    goalsAgainst: Int
    shotAtGoal: Int
    shotSaved: Int
    fans: Int
    comments: Int
    likes: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    createdBy: String
    teamsCreated: Int
    rivals: [HockeyRivals]
    leaders: [HockeyStats]
    singles: [HockeyMatch]
    series: [HockeyMatch]
    tournaments: [HockeyTournament]
    members: [Player]
    base: [Base]
    photos: [Photo]
    teamInfo: Team
    ownerDetails: User
    streamingRecords: [StreamingRecord]
  }

  type Stats {
    teamName: String
    teamId: String
    owner: String
    ownerId: String
    logo: String
    avatar: String
    singleWin: Int
    singleLoss: Int
    soWin: Int
    soLoss: Int
    seriesWin: Int
    seriesLoss: Int
    totalNumberOfGames: Int
    homeRuns: Int
    hits: Int
    runsFor: Int
    runsAgainst: Int
    lob: Int
    strikeOuts: Int
    walks: Int
    pitches: Int
    fans: Int
    comments: Int
    likes: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    inningsPlayed: Int
    createdAt: String
    teamsCreated: Int
    gamesPlayed: Int
    singles: [Match]
    rivals: [Rivals]
    series: [Match]
    leaders: [Stats]
    tournyWinner: [String]
    tournyGames: [Match]
    liveTournyGames: [Match]
    gamePreference: [String]
    members: [Player]
    base: [Base]
    createdBy: String
    photos: [Photo]
    teamInfo: Team
    ownerDetails: User
    streamingRecords: [StreamingRecord]
  }

  type PlayerBBStat {
    _id: String
    user: User
    totalNumberOfGames: Int
    homeRuns: Int
    hits: Int
    runs: Int
    lob: Int
    strikeOuts: Int
    walks: Int
    pitches: Int
    comments: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    inningsPlayed: Int
    createdAt: String
    gamesPlayed: Int
  }

  type PlayerSoccerStat {
    _id: String
    user: User
    totalNumberOfGames: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    inningsPlayed: Int
    gamesPlayed: Int
    goalsFor: Int
    shotAtGoal: Int
    shotSaved: Int
    fouls: Int
    createdAt: String
  }

  type PlayerHockeyStat {
    _id: String
    user: User
    totalNumberOfGames: Int
    tournamentCompleted: Int
    tournamentEntered: Int
    tournamentActive: Int
    tournamentWon: Int
    inningsPlayed: Int
    gamesPlayed: Int
    goalsFor: Int
    shotAtGoal: Int
    shotSaved: Int
    fouls: Int
    createdAt: String
  }

  type Player {
    _id: String
    userId: String
    teamId: String
    createdBy: String
    name: String
    avatar: String
    score: Int
    fouls: Int
    shotAtGoal: Int
    goalSaved: Int
    pitcher: Boolean
    totalPitch: Int
    isOut: Boolean
    battingInHomeBase: Boolean
    oneB: Int
    twoB: Int
    threeB: Int
    totalPlayedGames: Int
    jersey: Int
    player: Player
  }

  type Team {
    _id: String
    teamName: String
    mascot: String
    avatar: String
    game: String
    teamType: Int
    owner: String
    ownerId: String
    ownerDetail: User
    createdBy: String
    friends: [String]
    baseballSingleWin: Int
    baseballSingleLoss: Int
    soccerSingleWin: Int
    soccerSingleLoss: Int
    hockeySingleWin: Int
    hockeySingleLoss: Int
    hasClaimed: Boolean
    members: [Player]
    base: String
    bases: [Base]
    city: String
    country: String
    errorMessage: String
    photos: [Photo]
    description: String
  }

  type Sponsor {
    _id: String
    name: String
    marketingLine: String
    logoAddress: String
    active: Boolean
  }

  type Tournament {
    _id: String
    tournamentName: String
    createdBy: String
    status: Boolean
    tournamentType: Int
    isSeries: Boolean
    bestOf: Int
    numberOfInnings: Int
    hasSemiBeenIntroduced: Boolean
    winner: String
    isRunning: Boolean
    teams: [String]
    teamIds: [String]
    mascots: [String]
    semiFinalStatus: Boolean
    quarterFinalTeams: [Match]
    semiFinalTeams: [Match]
    finalStatus: Boolean
    finalTeams: Match
    createdAt: String
    place: String
    tournamentGameType: Int
    invitedTeams: [String]
    time: String
    isOpen: Boolean
    comments: [Comment]
    base: Base
    runningStatus: String
    involvedUsers: [String]
    photos: [Photo]
    isWorldSeries: Boolean
    streamingRecords: [StreamingRecord]
  }

  type Pod {
    pod: String
  }

  type Auth {
    token: String
    user: User
    errorMessage: String
  }

  type Comment {
    _id: String
    body: String
    post: String
    likes: Int
    tournamentId: String
    createdBy: User
    createdAt: String
    reportType: [String]
    reportBy: [String]
    banned: Boolean
    successMessage: String
    errorMessage: String
  }

  input undoActionObj {
    type: String
    team: Int
    player: String
  }

  type GameData {
    matchId: String
    team: String
    teamId: String
    teamLogo: String
    against: String
    againstId: String
    againstLogo: String
    winner: String
  }

  input TeamObject {
    teamName: String
    teamId: String
    mascot: String
  }

  input nftAvailabilityCheckObject {
    country: String
    amount: Int
  }
  type countryWiseAmounts {
    country: String
    amount: Int
  }

  type notAvailableNftCountries {
    country: String
    available: Int
  }

  type nftAvailableResponse {
    notAvailableCountries: [notAvailableNftCountries]
    successMessage: String
  }

  type SoccerMatch {
    _id: String
    initiatedBy: String
    team: String
    teamObj: Team
    against: String
    teamId: String
    againstId: String
    teamLogo: String
    againstLogo: String
    winner: String
    firstHalf: Boolean
    hasEnded: Boolean
    isRunning: Boolean
    teamOneGoals: Int
    teamTwoGoals: Int
    extraTimes: Boolean
    time: String
    place: String
    isSeries: Boolean
    bestOf: Int
    byeTeam: Boolean
    tournamentId: String
    tournamentName: String
    teamOneSeriesGoals: [Int]
    teamTwoSeriesGoals: [Int]
    teamOneSeriesWin: Int
    teamTwoSeriesWin: Int
    teamOneTieBreakerGoals: [Int]
    teamTwoTieBreakerGoals: [Int]
    goneToTieBreaker: Boolean
    timeLength: Int
    restTime: Float
    totalPlay: Int
    hasFirstMatchEnded: Boolean
    endedByTb: Boolean
    teamOneSeriesPenalties: [Int]
    teamTwoSeriesPenalties: [Int]
    fullSeriesPenaltyStatus: [Boolean]
    memberNumber: Int
    teamMembers: [Player]
    againstMembers: [Player]
    photos: [Photo]
    base: Base
    streamingRecords: [StreamingRecord]
  }

  type slotMembershipDetails {
    price: Int
    discount: Int
    subTtile: String
    description: String
  }

  input baseExtraDetails {
    price: Int
    discount: Int
    subTtile: String
    description: String
  }

  input PlayerInput {
    name: String
    userId: String
    teamId: String
    avatar: String
    jersey: Int
    score: Int
    fouls: Int
    shotAtGoal: Int
    goalSaved: Int
    runs: Int
    pitcher: Boolean
    totalPitch: Int
    isOut: Boolean
    battingInHomeBase: Boolean
    oneB: Int
    twoB: Int
    threeB: Int
  }

  type HockeyMatch {
    _id: String
    initiatedBy: String
    team: String
    teamObj: Team
    against: String
    teamId: String
    againstId: String
    teamLogo: String
    againstLogo: String
    winner: String
    firstHalf: Boolean
    hasEnded: Boolean
    isRunning: Boolean
    teamOneGoals: Int
    teamTwoGoals: Int
    extraTimes: Boolean
    time: String
    place: String
    isSeries: Boolean
    bestOf: Int
    byeTeam: Boolean
    tournamentId: String
    tournamentName: String
    teamOneSeriesGoals: [Int]
    teamTwoSeriesGoals: [Int]
    teamOneSeriesWin: Int
    teamTwoSeriesWin: Int
    teamOneTieBreakerGoals: [Int]
    teamTwoTieBreakerGoals: [Int]
    goneToTieBreaker: Boolean
    timeLength: Int
    restTime: Float
    totalPlay: Int
    hasFirstMatchEnded: Boolean
    endedByTb: Boolean
    teamOneSeriesPenalties: [Int]
    teamTwoSeriesPenalties: [Int]
    fullSeriesPenaltyStatus: [Boolean]
    memberNumber: Int
    teamMembers: [Player]
    againstMembers: [Player]
    photos: [Photo]
    base: Base
  }

  type SoccerTournament {
    _id: String
    tournamentName: String
    createdBy: String
    status: Boolean
    tournamentType: Int
    tournamentGameType: Int
    hasSemiBeenIntroduced: Boolean
    teams: [String]
    teamIds: [String]
    mascots: [String]
    bestOf: Int
    timeLength: Int
    invitedTeams: [String]
    semiFinalStatus: Boolean
    quarterFinalStatus: Boolean
    quarterFinalTeams: [SoccerMatch]
    semiFinalTeams: [SoccerMatch]
    finalStatus: Boolean
    finalTeams: SoccerMatch
    createdAt: String
    isSeries: Boolean
    time: String
    isRunning: Boolean
    winner: String
    place: String
    comments: [Comment]
    base: Base
    isOpen: Boolean
    photos: [Photo]
    runningStatus: String
    involvedUsers: [String]
    streamingRecords: [StreamingRecord]
    includedTeams: [Team]
  }

  type HockeyTournament {
    _id: String
    tournamentName: String
    createdBy: String
    status: Boolean
    tournamentType: Int
    tournamentGameType: Int
    hasSemiBeenIntroduced: Boolean
    teams: [String]
    teamIds: [String]
    mascots: [String]
    bestOf: Int
    timeLength: Int
    invitedTeams: [String]
    semiFinalStatus: Boolean
    quarterFinalStatus: Boolean
    quarterFinalTeams: [SoccerMatch]
    semiFinalTeams: [SoccerMatch]
    finalStatus: Boolean
    finalTeams: SoccerMatch
    createdAt: String
    isSeries: Boolean
    time: String
    isRunning: Boolean
    winner: String
    place: String
    comments: [Comment]
    base: Base
    isOpen: Boolean
    photos: [Photo]
    runningStatus: String
    involvedUsers: [String]
    streamingRecords: [StreamingRecord]
  }

  type Post {
    _id: String
    body: String
    postType: String
    likes: Int
    comments: Int
    tournamentId: String
    tournamentName: String
    imageAddress: String
    gameData: GameData
    createdAt: String
    place: String
    gameType: Int
    base: Base
    country: String
    city: String
    tournamentDetails: TournamentCommonData
  }

  type Short {
    _id: String
    body: String
    url: String
  }

  type Edge {
    cursor: String
    node: Post
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type Response {
    edges: [Edge]
    pageInfo: PageInfo
  }

  type MatchStream {
    _id: String
    userId: String
    userDetails: User
    appId: String
    channelName: String
    gameName: String
    city: String
    country: String
    baseId: String
    baseDetails: Base
    tournamentId: String
    teamIds: [String]
    playerIds: [String]
    gameId: String
    sport: String
    likes: Int
    caption: String
    isLive: Boolean
    videoThumbnailUrl: String
    tournamentStatus: String
    agoraChannelStatus: String
    updatedAt: String
    createdAt: String
  }

  type StreamingRecord {
    _id: String
    userId: String
    userDetails: User
    url: String
    city: String
    country: String
    baseId: String
    baseDetails: Base
    tournamentId: String
    teamIds: [String]
    playerIds: [String]
    gameId: String
    sport: String
    likes: Int
    resourceId: String
    sid: String
    caption: String
    successMessage: String
    errorMessage: String
    videoThumbnailUrl: String
    otherVideos: [StreamingRecord]
    updatedAt: String
    createdAt: String
  }

  type Contact {
    _id: String
    name: String
    email: String
    userID: String
    contactType: String
    subject: String
    body: String
    baseSlug: String
    childName: String
    kidGender: String
    sports: [String]
    relation: String
    eventId: String
    eventDetails: Event
    successMessage: String
    errorMessage: String
    updatedAt: String
    createdAt: String
  }

  type BaseStreamsAndVideos {
    baseId: String
    photos: [Photo]
    gearPhotos: [GearPhoto]
    otherPhotos: [Photo]
    otherGearPhotos: [GearPhoto]
    baseDetails: Base
    baseLiveStreams: [MatchStream]
    otherBasesLiveStream: [MatchStream]
    baseStreamingRecords: [StreamingRecord]
    otherBaseStreamingRecords: [StreamingRecord]
  }

  type AgoraRestApiResponse {
    agoraResponse: String
    successMessage: String
    errorMessage: String
  }

  type Photo {
    _id: String
    userId: String
    url: String
    city: String
    country: String
    baseId: String
    tournamentId: String
    teamIds: [String]
    playerIds: [String]
    gameId: String
    sport: String
    likes: Int
    caption: String
    baseDetails: Base
    otherPhotos: [Photo]
    otherVideos: [StreamingRecord]
  }

  type GearPhoto {
    _id: String
    url: String
    city: String
    country: String
    baseId: String
    sport: String
    likes: Int
    caption: String
    baseDetails: Base
  }

  type Base {
    _id: String
    name: String
    logo: String
    bannerImage: String
    lattitude: String
    longitude: String
    city: String
    country: String
    organizerUserId: String
    organizerDetails: User
    playersType: [String]
    photos: [Photo]
    videos: [String]
    difficulty: String
    sport: [String]
    type: String
    followerIds: [String]
    teams: [Team]
    members: [String]
    membersDetail: [User]
    messages: [BaseMessage]
    joinRequests: [BaseMessage]
    baseballTournaments: [Tournament]
    soccerTournaments: [SoccerTournament]
    hockeyTournaments: [HockeyTournament]
    baseballMatches: [Match]
    soccerMatches: [SoccerMatch]
    hockeyMatches: [HockeyMatch]
    errorMessage: String
    createdBy: String
    gearPhotos: [GearPhoto]
    description: String
    reportType: [String]
    reportBy: [String]
    banned: Boolean
    streamingRecords: [StreamingRecord]
    successMessage: String
    selfPlay: [SelfPlay]
    slotPurchased: [SlotPurchased]
    slotDetails: slotMembershipDetails
    membershipDetails: slotMembershipDetails
    adminIds: [String]
    isSuperbase: Boolean
    slug: String
    events: [Event]
    baseContacts: [Contact]
    adminsDetails: [User]
  }

  type SlotPurchased {
    parentId: String
    slotAvailable: Int
  }

  type PromoCodesType {
    code: String
  }

  input acceptInvitationKids {
    name: String
  }

  input invitedToEmail {
    email: String
    acceptStatus: Boolean
    userId: String
  }

  input PromoCodes {
    code: String
  }

  type invitedTo {
    email: String
    acceptStatus: Boolean
    userId: String
  }

  type Event {
    _id: String
    createdBy: String
    baseId: String
    eventType: String
    caption: String
    dateTime: String
    normalDate: String
    eventPrice: Int
    duration: Int
    sports: [String]
    gameType: String
    slot: Int
    participantKidIds: [String]
    participantKidDetails: [User]
    description: String
    easyDescription: String
    bannerImage: String
    promoCodes: [PromoCodesType]
    bookedBy: String
    invitedTo: [invitedTo]
    errorMessage: String
  }

  type EventParticipant {
    _id: String
    eventId: String
    userId: String
    joinStatus: String
    joinTime: String
    contactId: String
    eventDetails: Event
    participantDetails: PlayerStats
    participantUserDetails: User
    guardianDetails: User
    createdAt: String
  }

  type CountryCount {
    name: String
    total: Int
  }

  type Nft {
    _id: String
    url: String
    metadata: String
    isMinted: Boolean
    mintBy: String
    mintByWalletAddress: String
    mintByDetails: User
    mintPrice: Float
    mintPriceUnit: String
    createdAt: String
    errorMessage: String
    serial: String
    isUsing: Boolean
    nftName: String
    openSeaParmaLink: String
    country: String
    skin: String
    hair: String
    mouth: String
    eyebrows: String
    jersey: String
    dominantLeg: String
    position: String
    jerseyNumber: Int
    collectionType: String
    easyImageUrl: String
  }

  type Airdrop {
    _id: String
    who: String
    nftIds: [String]
    nftNames: [String]
    toPublicKey: String
    finalPublicWalletAddressToSendNfts: String
    receiverEmail: String
    countryWiseAmounts: [countryWiseAmounts]
    nftIdsDetails: [Nft]
    isExistCryptoEncyptedPrivateKey: Boolean
    collectionType: String
    createdAt: String
  }

  type RevealPrivateKey {
    privateKey: String
    successMessage: String
    errorMessage: String
  }

  type Payment {
    _id: String
    paymentMethod: String
    paymentFor: String
    paymentBy: String
    paymentByDetails: User
    nftId: String
    nftDetails: Nft
    nftIds: [String]
    nftIdsDetails: [Nft]
    amountToPay: Float
    paidAmount: Float
    currency: String
    paymentStatus: String
    paymentTransactionId: String
    token: String
    paymentResponse: String
    createdAt: String
    giftReceiverUserId: String
    collectionType: String
    eventId: String
    baseId: String
    baseSlug: String
    subscriptionDate: String
    baseDetails: Base
    kidDetails: [User]
    eventDetails: Event
    errorMessage: String
  }

  type AffiliateBasePurchaseDetails {
    parentId: String
    kidIds: [String]
    eventId: String
    baseId: String
    paymentId: String
  }

  type Affiliate {
    _id: String
    userId: String
    affiliateCouponCode: String
    adminUserId: String
    totalNftSell: Int
    totalNftPayout: Float
    totalSingleEventSell: Int
    totalMonthlySubscriptionSell: Int
    totalBasePayout: Int
    affiliateBasePurchaseDetails: [AffiliateBasePurchaseDetails]
    affiliateUserDetails: User
    createdAt: String
    errorMessage: String
  }

  type FindBaseObject {
    label: String
    baseId: String
  }

  type BaseMessage {
    _id: String
    userId: String
    user: User
    baseId: String
    message: String
    type: String
    status: String
    createdAt: String
    errorMessage: String
    reportBy: [String]
  }

  type BaseRunningMember {
    member: User
    followerIds: [String]
  }

  type Follower {
    _id: String
    type: String
    typeId: String
    followerIds: [String]
    followers: [User]
    followings: [User]
    errorMessage: String
  }

  type PlayerDetail {
    bases: [Base]
    teams: [Team]
  }

  type Notification {
    _id: String
    notificationFor: String
    type: String
    teamId: String
    team: Team
    baseId: String
    base: Base
    memberId: String
    tournamentId: String
    createdBy: User
    accepted: Boolean
    notification: String
    createdAt: String
    errorMessage: String
  }

  type TeamsBySearchForBase {
    teamInfo: Team
    requested: Boolean
  }

  type MembersBySearchForBase {
    userInfo: User
    requested: Boolean
  }

  type NotificationCount {
    unreadNotifactions: Int
  }

  type SuccessResponse {
    status: String
  }

  type Query {
    me(_id: String!): User
    findATournament(id: String): Tournament
    findMyTournaments(userId: String): [Tournament]
    findOldTournaments(userId: String): [Tournament]

    # TEAM
    findMyFriends(userId: String, game: String): [Team]
    findATeam(_id: String): Team
    findMyTeams(userId: String): [Team]
    findGameWiseTeam(createdBy: String, game: String): [Team]
    findMyTeam(userId: String, game: String): Team
    findTeamsViaBaseLocation(
      baseId: String
      teamName: String
      ownCity: Boolean
      teamType: Int
      game: String
    ): [Team]
    findMyTeamsToSendAddRequestInBase(
      userId: String
      baseId: String
    ): [TeamsBySearchForBase]
    findTeamsInAbase(baseId: String, game: String): [Team]

    findMyGames(userId: String): [Match]
    findMyFinals(userId: String): [Match]
    generateUniqueName: String

    findPosts(
      first: Int
      after: Int
      delay: Boolean
      soccerFilter: Boolean
      hockeyFilter: Boolean
      baseBallFilter: Boolean
      country: String
      city: String
    ): Response

    findNewsPosts: [Post]
    findComments(postId: String): [Comment]
    findCommentsForTournament(tournamentId: String): [Comment]
    findPods: [Pod]
    findAGame(id: String): Match
    findAllBaseBallMatchWithTeamIncluded(teamId: String): [Match]
    findSingleGames(id: String): [Match]
    findMyStats(teamId: String): Stats
    getTTTeamsSorted(userId: String): [Match]
    findSponsor: Sponsor
    findSponsors: [Sponsor]
    findSoccerSingles(soccerTeamId: String): [SoccerMatch]
    findSoccerRunningMatch: [SoccerMatch]
    findBaseBallRunningMatch: [Match]

    findSoccerSeries(soccerTeamId: String): [SoccerMatch]
    findASoccerMatch(_id: String): SoccerMatch

    findAllSoccerMatchWithTeamIncluded(teamId: String): [SoccerMatch]
    findAllHockeyMatchWithTeamIncluded(teamId: String): [HockeyMatch]
    findASoccerTournament(id: String): SoccerTournament
    findSoccerTournamentMatch(
      tournamentId: String
      matchId: String
    ): SoccerMatch
    findHockeyTournamentMatch(
      tournamentId: String
      matchId: String
    ): HockeyMatch
    findMySoccerTournaments(id: String): [SoccerTournament]
    findInvoldedSoccerTournaments(id: String): [SoccerTournament]
    findInvoldedHockeyTournaments(id: String): [HockeyTournament]
    findInvoldedBaseBallTournaments(id: String): [Tournament]
    findRunningSoccerTournaments: [SoccerTournament]
    findRunningHockeyTournaments: [HockeyTournament]
    findRunningBaseBallTournaments: [Tournament]

    findMySoccerStats(teamId: String): SoccerStats

    findHockeySingles(hockeyTeamId: String): [HockeyMatch]
    findHockeyRunningMatch: [HockeyMatch]
    findHockeySeries(hockeyTeamId: String): [HockeyMatch]
    findAHockeyMatch(_id: String): HockeyMatch
    findMyHockeyStats(teamId: String): HockeyStats
    findMyHockeyTournaments(id: String): [HockeyTournament]
    findAHockeyTournament(id: String): HockeyTournament

    findAllPlayerStats(createdBy: String): [PlayerStats]

    findSinglePlayerStats(_id: String): PlayerStats

    # Streaming related queries
    findMatchStream(channelName: String): MatchStream
    findStreamingRecords(userId: String): [StreamingRecord]
    findVideoDetails(videoId: String): StreamingRecord
    getAgoraChannelAudiences(channelName: String): AgoraRestApiResponse
    findBaseStreamsAndVideos(
      baseId: String
      videosPage: Int
      videosLimit: Int
      otherVideosPage: Int
      otherVideosLimit: Int
      highlightsPage: Int
      highlightsLimit: Int
      otherHighlightsPage: Int
      otherHighlightsLimit: Int
      gearsPage: Int
      gearsLimit: Int
      otherGearsPage: Int
      otherGearsLimit: Int
    ): BaseStreamsAndVideos

    # Photo
    findHighlightDetails(highlightId: String, userId: String): Photo

    findMatchStreamById(matchStreamId: String): MatchStream

    # Bases
    findMyBases(userId: String): [Base]
    findABase(_id: String): Base
    findOtherBases(userId: String): [Base]
    findPlayersByUsernameForBase(
      baseId: String
      username: String
      ownCity: Boolean
    ): [MembersBySearchForBase]
    findTeamsByNameForBase(
      baseId: String
      teamName: String
      ownCity: Boolean
    ): [TeamsBySearchForBase]

    # Base
    findBaseDetails(baseSlug: String, baseId: String): Base
    findEvent(eventId: String): Event
    findEventParticipants(eventId: String): [EventParticipant]
    checkBaseEventSubscription(userId: String, baseSlug: String): Payment
    findPaymentsOfBase(baseSlug: String, baseId: String): [Payment]
    findEventsByDateFilter(date: String): [Event]
    findMyInvitedEvent(userId: String): [Event]
    findMyBookedEvents(userId: String): [Event]
    findUpcomingEvents(baseSlug: String): [Event]
    findKidsForParent(parentId: String): [User]
    findMyAllKidsToSubscribeBase(parentId: String, baseSlug: String): [User]
    findMyKidDetails(kidUserId: String): [User]
    findBasePaymentHistory(userId: String): [Payment]
    findAffiliates(baseSlug: String): [Affiliate]

    # Follower
    findFollowers(type: String, typeId: String): Follower

    # Player
    findPlayerDetails(userId: String): PlayerDetail
    findPlayersInAbase(baseId: String): [PlayerStats]

    # Notification
    findNotificationsOfAUser(userId: String): [Notification]
    makeNotificationsSeen(userId: String): SuccessResponse
    findNotificationCount(userId: String): NotificationCount

    # Shorts
    findAllShorts: [Short]
    findBasesIamMemberOf(userId: String): [Base]

    # changePlayerAvatar
    changePlayerAvatar: [PlayerStats]
    updataUserStatus: [User]
    updatePlayerSoccerRegulaAvatar: [PlayerStats]
    updateUsedNft: [Nft]

    # Self Play
    findASelfPlayEvent(_id: String): SelfPlayEvent
    findMySelfPlayEvent(userId: String): [SelfPlayEvent]
    findBaseWiseEvent(baseId: String): [SelfPlayEvent]

    # Self Play
    findASelfPlayMatch(_id: String): SelfPlay
    findMySelfPlayMatch(userId: String): [SelfPlay]
    updateCurrentHitPerson: [SelfPlay]
    updateOldSelfPlay: [SelfPlay]
    updateOldSelfPlayConfig: [SelfPlay]

    # Self Play Tournament
    findASelfPlayTournament(_id: String): SelfPlayTournament
    findBaseWiseSelfPlayTournament(baseId: String): [SelfPlayTournament]

    findMySelfPlayTournament(userId: String): [SelfPlayTournament]

    findASelfPlayTournamentMatch(
      tournamentId: String
      matchId: String
      roundName: String
    ): SelfPlay

    #Nft
    findNfts: [Nft]
    findANft(_id: String): Nft
    findRandomUnmintedNfts(
      collectionType: String
      country: [String]
      paginationPage: Int
      fromOpenSea: Boolean
      skin: [String]
      hair: [String]
      jersey: [String]
      jerseyNumber: [Int]
      dominantLeg: [String]
      position: [String]
      mouth: [String]
    ): [Nft]
    findANftBySerial(serial: String): Nft
    findMyNfts(mintBy: String): [Nft]
    findMyNftHistory(userId: String): [Payment]
    checkMultipleNftsAvailableOrNot(
      nfts: [nftAvailabilityCheckObject]
    ): nftAvailableResponse

    findIndividualCountryMintedNft(collectionType: String): [CountryCount]

    #Airdrop
    findAirdropHistory(who: String): [Airdrop]
    findAffiliateDetails(userId: String): Affiliate
  }

  type Mutation {
    createRookieUser(
      name: String
      avatar: String
      dateOfBirth: String
      base: String
      city: String
      country: String
      selectedSports: [String]
    ): User

    signUp(
      email: String!
      password: String!
      username: String!
      avatar: String!
      dateOfBirth: String
      city: String
      country: String
    ): Auth

    # Contact
    sendMessage(
      name: String!
      email: String!
      subject: String!
      body: String!
    ): Contact
    saveBaseContactInfo(
      name: String
      email: String
      contactType: String
      baseSlug: String
      eventId: String
      childName: String
      kidGender: String
      sports: [String]
      relation: String
    ): Auth
    saveBSportBaseContactInfo(
      name: String
      email: String
      contactType: String
      eventId: String
      childName: String
      kidGender: String
      sports: [String]
      relation: String
    ): Auth

    logIn(email: String, password: String): Auth
    forgetPassword(email: String): Auth
    updatePassword(id: String, password: String): Auth
    rookieLogIn(id: String, email: String, password: String): Auth
    verify(passCode: String!, userId: String!): Auth
    resendVerification(userId: String!): Auth

    createTeam(
      name: String
      teamName: String
      mascot: String
      avatar: String
      owner: String
      game: String
      friends: [String]
      createdBy: String
      base: String
      selected: [String]
    ): Team

    createTournament(
      tournamentName: String
      createdBy: String
      teams: [String]
      teamIds: [String]
      mascots: [String]
      tournamentType: Int
      tournamentGameType: Int
      isSeries: Boolean
      bestOf: Int
      numberOfInnings: Int
      place: String
      isOpen: Boolean
      time: String
      isWorldSeries: Boolean
    ): Tournament

    changeSeriesStatus(
      matchId: String
      tournamentId: String
      winner: String
      isFinal: Boolean
    ): Tournament

    editTournament(
      matchId: String
      tournamentId: String
      winner: String
    ): Tournament

    finishTournament(tournamentId: String, winner: String): Tournament

    like(postId: String): Post

    createComment(
      body: String
      postId: String
      createdBy: String
      tournamentId: String
    ): Comment

    reportComment(_id: String, type: String, reportBy: String): Comment
    reportBaseMessage(_id: String, type: String, reportBy: String): Base
    reportPlayer(_id: String, type: String, reportBy: String): PlayerStats

    createCommentFromTournament(
      body: String
      createdBy: String
      tournamentId: String
    ): Comment

    createPod(pod: String): Pod

    score(
      team: Boolean
      inning: Int
      run: Int
      matchId: String
      tournamentId: String
      isFinal: Boolean
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match

    undoScore(team: Boolean, inning: Int, matchId: String): Match
    undoExtraScore(team: Boolean, matchId: String): Match

    undoScoreBBT(
      team: Boolean
      inning: Int
      matchId: String
      tournamentId: String
      isFinal: Boolean
    ): Match
    undoExtraScoreBBT(
      team: Boolean
      matchId: String
      tournamentId: String
      isFinal: Boolean
    ): Match

    extraScoreInTournament(
      team: Boolean
      run: Int
      matchId: String
      tournamentId: String
      isFinal: Boolean
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match

    changeInnings(
      team: Boolean
      innings: Int
      matchId: String
      tournamentId: String
      isFinal: Boolean
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match

    startExtraInningsInTournament(
      team: Boolean
      matchId: String
      tournamentId: String
      isFinal: Boolean
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match

    createGame(
      team: String
      teamId: String
      teamLogo: String
      against: String
      againstId: String
      againstLogo: String
      time: String
      place: String
      isSeries: Boolean
      bestOf: Int
      numberOfInnings: Int
      hostId: String
      memberNumber: Int
      teamMembers: [PlayerInput]
      againstMembers: [PlayerInput]
    ): Match

    scoreInGame(
      team: Boolean
      inning: Int
      run: Int
      matchId: String
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match

    outInGame(matchId: String, userId: String, isTeam: Boolean): Match
    runsSDT(matchId: String, isTeam: Boolean): Match
    outInTournamentGame(
      tournamentId: String
      matchId: String
      userId: String
      isTeam: Boolean
      isFinal: Boolean
    ): Match
    playerOrderChangeInTournamentGame(
      tournamentId: String
      matchId: String
      playerData: [PlayerInput]
      isTeam: Boolean
      isFinal: Boolean
    ): Match
    whoRunsInTournamentGame(
      tournamentId: String
      matchId: String
      isTeam: Boolean
      isFinal: Boolean
    ): Match
    runsSDTTournamentGame(
      tournamentId: String
      matchId: String
      isTeam: Boolean
      isFinal: Boolean
    ): Match
    changePitcherInTournamentGame(
      tournamentId: String
      matchId: String
      userId: String
      isTeam: Boolean
      isFinal: Boolean
    ): Match
    changePitcher(matchId: String, userId: String, isTeam: Boolean): Match
    whoRuns(matchId: String, isTeam: Boolean): Match
    changeGameInnings(
      team: Boolean
      innings: Int
      matchId: String
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match
    finishGame(matchId: String, winner: String): Match
    changeSSForSingleGame(matchId: String, winner: String): Match
    startExtraInnings(
      team: Boolean
      matchId: String
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match
    extraScoreInGame(
      team: Boolean
      inning: Int
      run: Int
      matchId: String
      teamOneSO: Int
      teamTwoSO: Int
      teamOneLOB: Int
      teamTwoLOB: Int
      teamOneHits: Int
      teamTwoHits: Int
      teamOnePC: Int
      teamTwoPC: Int
      teamOneBB: Int
      teamTwoBB: Int
    ): Match
    createSponsor(
      name: String!
      logoAddress: String!
      marketingLine: String!
    ): Sponsor
    deleteSponsor(_id: String): Sponsor
    createNewsPost(body: String, imageAddress: String): Post
    deletePost(_id: String): Post

    # Streaming related mutations
    createMatchStream(
      appId: String
      channelName: String
      gameName: String
      userId: String
      playerIds: [String]
      teamIds: [String]
      baseId: String
      gameId: String
      tournamentId: String
      tournamentStatus: String
      sport: String
      caption: String
    ): MatchStream

    deleteMatchStream(_id: String): MatchStream
    updateMatchStream(_id: String, isLive: Boolean): MatchStream

    createStreamingRecord(
      userId: String
      url: String
      playerIds: [String]
      teamIds: [String]
      baseId: String
      gameId: String
      tournamentId: String
      sport: String
      resourceId: String
      sid: String
      folderCommonPrefix: String
      caption: String
    ): StreamingRecord

    updateStreamingRecord(
      streamingRecordId: String
      caption: String
    ): StreamingRecord

    saveStreamingRecordSnapshots(
      userId: String
      folderCommonPrefix: String
    ): StreamingRecord

    createSoccerMatch(
      initiatedBy: String
      team: String
      teamId: String
      against: String
      againstId: String
      teamLogo: String
      againstLogo: String
      isSeries: Boolean
      bestOf: Int
      teamOneSeriesWin: Int
      teamTwoSeriesWin: Int
      totalPlay: Int
      timeLength: Int
      place: String
      hostId: String
      memberNumber: Int
      teamMembers: [PlayerInput]
      againstMembers: [PlayerInput]
    ): SoccerMatch

    createHockeyMatch(
      initiatedBy: String
      team: String
      teamId: String
      against: String
      againstId: String
      teamLogo: String
      againstLogo: String
      isSeries: Boolean
      bestOf: Int
      teamOneSeriesWin: Int
      teamTwoSeriesWin: Int
      totalPlay: Int
      timeLength: Int
      place: String
      hostId: String
      memberNumber: Int
      teamMembers: [PlayerInput]
      againstMembers: [PlayerInput]
    ): HockeyMatch

    changeSoccerScore(
      _id: String
      teamOneGoals: Int
      teamTwoGoals: Int
      restTime: Float
    ): SoccerMatch

    undoSoccerMatchLastAction(
      _id: String
      actionObj: undoActionObj
    ): SoccerMatch

    undoSoccerTournamentMatchLastAction(
      tournamentId: String
      matchId: String
      matchStatus: String
      actionObj: undoActionObj
    ): SoccerMatch

    undoHockeyTournamentMatchLastAction(
      tournamentId: String
      matchId: String
      matchStatus: String
      actionObj: undoActionObj
    ): SoccerMatch

    undoHockeyMatchLastAction(
      _id: String
      actionObj: undoActionObj
    ): HockeyMatch

    changeHockeyScore(
      _id: String
      teamOneGoals: Int
      teamTwoGoals: Int
      restTime: Float
    ): HockeyMatch
    changeSoccerRestTime(_id: String, restTime: Float): SoccerMatch
    soccerMatchRunningOrPause(_id: String, running: Boolean): SoccerMatch
    changeHockeyRestTime(_id: String, restTime: Float): HockeyMatch
    hockeyMatchRunningOrPause(_id: String, running: Boolean): HockeyMatch
    baseBallMatchRunningOrPause(_id: String, running: Boolean): Match
    soccerTieBreaker(
      _id: String
      teamOnePenalty: Int
      teamTwoPenalty: Int
    ): SoccerMatch

    hockeyTieBreaker(
      _id: String
      teamOnePenalty: Int
      teamTwoPenalty: Int
    ): HockeyMatch

    finishSoccerMatch(_id: String, winner: String): SoccerMatch
    finishHockeyMatch(_id: String, winner: String): HockeyMatch

    drawSoccer(_id: String): SoccerMatch
    drawHockey(_id: String): HockeyMatch

    changeSoccerHalf(_id: String, isFirstHalf: Boolean): SoccerMatch
    changeHockeyHalf(_id: String, isFirstHalf: Boolean): HockeyMatch

    addBaseballTeamForOwner(
      baseballTeamName: String
      baseballMascot: String
      avatar: String
      owner: String
      ownerId: String
      base: String
    ): Team

    addSoccerTeamForOwner(
      soccerTeamName: String
      soccerMascot: String
      avatar: String
      owner: String
      ownerId: String
      base: String
    ): Team

    addHockeyTeamForOwner(
      hockeyTeamName: String
      hockeyMascot: String
      avatar: String
      owner: String
      ownerId: String
      base: String
    ): Team

    changeSSForSingleHockey(_id: String, winner: String): HockeyMatch
    changeSSForSingleSoccer(_id: String, winner: String): SoccerMatch

    createSoccerTournament(
      tournamentName: String
      createdBy: String
      teams: [String]
      teamIds: [String]
      mascots: [String]
      tournamentType: Int
      tournamentGameType: Int
      place: String
      bestOf: Int
      isSeries: Boolean
      timeLength: Int
      isOpen: Boolean
      time: String
    ): SoccerTournament

    changeSoccerTournamentSettings(
      tournamentId: String
      tournamentName: String
      isSeries: Boolean
      numberOfTeams: Int
      bestOf: Int
      gameType: Int
      date: String
      timeLength: Int
    ): SoccerTournament

    changeBaseBallTournamentSettings(
      tournamentId: String
      tournamentName: String
      isSeries: Boolean
      bestOf: Int
      numberOfTeams: Int
      gameType: Int
      date: String
    ): Tournament

    shuffleTeamSequence(
      tournamentId: String
      teamIds: [String]
      teams: [String]
      mascots: [String]
    ): SoccerTournament

    shuffleBaseBallTeamSequence(
      tournamentId: String
      teamIds: [String]
      teams: [String]
      mascots: [String]
    ): Tournament

    entryNonUserTeamInOpenSoccerTournament(
      tournamentId: String
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      createdBy: String
      base: String
      createdBy: String
    ): SoccerTournament

    entryNonUserTeamInOpenBaseBallTournament(
      tournamentId: String
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      createdBy: String
      base: String
      createdBy: String
    ): Tournament

    entryNonUserTeamInOpenHockeyTournament(
      tournamentId: String
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      createdBy: String
      base: String
      createdBy: String
    ): HockeyTournament

    entryTeamOpenSoccerTournament(
      tournamentId: String
      teamId: String
    ): SoccerTournament

    entryTeamOpenBaseBallTournament(
      tournamentId: String
      teamId: String
    ): Tournament

    startSoccerOpenTournament(tournamentId: String): SoccerTournament

    startBaseBallOpenTournament(tournamentId: String): Tournament

    sendNotificationToJoinInOpenTournament(
      tournamentId: String
      teamId: String
      authUserId: String
      permissionType: String
      gameType: String
    ): Notification

    acceptOrRejectToJoinInOpenTournament(
      notificationId: String
      accepted: Boolean
    ): Notification

    soccerTournamentMatchScore(
      tournamentId: String
      matchId: String
      teamOneGoals: Int
      teamTwoGoals: Int
    ): SoccerMatch

    soccerTournamentWhoScore(
      tournamentId: String
      matchId: String
      userId: String
      isTeam: Boolean
    ): SoccerMatch

    hockeyTournamentWhoScore(
      tournamentId: String
      matchId: String
      userId: String
      isTeam: Boolean
    ): HockeyMatch

    changeSoccerTournamentHalf(
      tournamentId: String
      matchId: String
      isFirstHalf: Boolean
    ): SoccerMatch

    soccerTournamentMatchRunningOrPause(
      tournamentId: String
      matchId: String
      running: Boolean
      runningStatus: String
    ): SoccerMatch

    baseBallTournamentMatchRunningOrPause(
      tournamentId: String
      matchId: String
      running: Boolean
      runningStatus: String
    ): Match

    hockeyTournamentMatchRunningOrPause(
      tournamentId: String
      matchId: String
      running: Boolean
      runningStatus: String
    ): HockeyMatch

    changeSoccerTournamentRestTime(
      tournamentId: String
      matchId: String
      restTime: Float
    ): SoccerMatch

    drawSoccerTournamentMatch(
      tournamentId: String
      matchId: String
      goneToTieBreaker: Boolean
    ): SoccerMatch

    soccerTournamentMatchFinish(
      tournamentId: String
      matchId: String
      winner: String
    ): SoccerMatch

    soccerTournamentTieBreaker(
      tournamentId: String
      matchId: String
      teamOnePenalty: Int
      teamTwoPenalty: Int
    ): SoccerMatch

    createHockeyTournament(
      tournamentName: String
      createdBy: String
      teams: [String]
      teamIds: [String]
      mascots: [String]
      tournamentType: Int
      tournamentGameType: Int
      place: String
      bestOf: Int
      isSeries: Boolean
      timeLength: Int
      isOpen: Boolean
      time: String
    ): HockeyTournament

    startHockeyOpenTournament(tournamentId: String): HockeyTournament

    entryTeamOpenHockeyTournament(
      tournamentId: String
      teamId: String
    ): HockeyTournament

    shuffleHockeyTeamSequence(
      tournamentId: String
      teamIds: [String]
      teams: [String]
      mascots: [String]
    ): HockeyTournament

    changeHockeyTournamentSettings(
      tournamentId: String
      tournamentName: String
      isSeries: Boolean
      numberOfTeams: Int
      bestOf: Int
      gameType: Int
      date: String
      timeLength: Int
    ): HockeyTournament

    hockeyTournamentMatchScore(
      tournamentId: String
      matchId: String
      teamOneGoals: Int
      teamTwoGoals: Int
    ): HockeyMatch

    changeHockeyTournamentHalf(
      tournamentId: String
      matchId: String
      isFirstHalf: Boolean
    ): HockeyMatch

    changeHockeyTournamentRestTime(
      tournamentId: String
      matchId: String
      restTime: Float
    ): HockeyMatch

    drawHockeyTournamentMatch(
      tournamentId: String
      matchId: String
      goneToTieBreaker: Boolean
    ): HockeyMatch

    hockeyTournamentMatchFinish(
      tournamentId: String
      matchId: String
      winner: String
    ): HockeyMatch

    hockeyTournamentTieBreaker(
      tournamentId: String
      matchId: String
      teamOnePenalty: Int
      teamTwoPenalty: Int
    ): HockeyMatch

    addTeamMember(
      teamId: String
      name: [String]
      avatar: [String]
      createdBy: String
    ): Team

    soccerWhoScored(
      matchId: String
      userId: String
      isTeam: Boolean
    ): SoccerMatch

    hockeyWhoScored(
      matchId: String
      userId: String
      isTeam: Boolean
    ): HockeyMatch

    addSoccerTeamMember(
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      friends: [String]
      createdBy: String
      base: String
    ): Team

    addHockeyTeamMember(
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      friends: [String]
      createdBy: String
      base: String
    ): Team

    addBaseBallTeamMember(
      players: [PlayerInput]
      mascot: String
      owner: String
      game: String
      teamName: String
      friends: [String]
      createdBy: String
      base: String
    ): Team

    changeHockeySeriesStatus(
      tournamentId: String
      matchId: String
      isFinal: Boolean
      winner: String
    ): HockeyMatch

    changeSoccerSeriesStatus(
      tournamentId: String
      matchId: String
      isFinal: Boolean
      winner: String
    ): SoccerMatch

    changeTeamName(teamId: String, name: String): Team

    changeTeamSettings(
      teamId: String
      teamName: String
      mascot: String
      description: String
    ): Team

    changePlayerSettings(
      playerId: String
      playerName: String
      avatar: String
      description: String
      game: String
    ): PlayerStats

    # Base
    createBase(
      name: String
      logo: String
      city: String
      country: String
      organizerUserId: String
      playersType: [String]
      sport: [String]
    ): Base
    updateBase(
      _id: String
      name: String
      bannerImage: String
      logo: String
      playersType: [String]
      description: String
    ): Base
    sendNotificationToAddTeamInBase(
      teamOwnerId: String
      baseId: String
      teamId: String
      authUserId: String
    ): Notification
    acceptOrRejectInvitationToAddTeamInBase(
      notificationId: String
      accepted: Boolean
    ): Notification
    AddNotClaimedTeamToBase(baseId: String, teamId: String): Base
    AddNotClaimedUserToBase(baseId: String, userId: String): Base
    addBasesInTeam(teamId: String, baseIds: [String]): Team
    addBaseMessage(
      baseId: String
      userId: String
      message: String
      type: String
      status: String
    ): BaseMessage
    sendNotificationToAddMemberInBase(
      baseId: String
      notificationFor: String
      memberId: String
      authUserId: String
    ): Notification
    acceptOrRejectInvitationToAddMemberInBase(
      notificationId: String
      accepted: Boolean
    ): Notification
    addPhotosToBase(_id: String, photoUrl: String): Base
    addPhotosEveryWhere(
      url: String
      sport: String
      gameId: String
      baseId: String
      tournamentId: String
      playerIds: [String]
      teamIds: [String]
      caption: String
    ): Photo
    addMultiplePhotosEveryWhere(
      urls: [String]
      sport: String
      gameId: String
      baseId: String
      tournamentId: String
      playerIds: [String]
      teamIds: [String]
    ): Photo
    addGearPhoto(
      url: String
      sport: String
      baseId: String
      caption: String
    ): GearPhoto

    acceptOrRejectBaseMember(
      status: Boolean
      baseId: String
      userId: String
    ): BaseMessage
    sendNotificationToAddMeAsMemberInBase(
      baseId: String
      memberId: String
    ): Notification
    sendNotificationToAddMyTeamInBase(
      baseOwnerId: String
      baseId: String
      teamId: String
      authUserId: String
    ): Notification
    acceptOrRejectRequestToAddMyTeamInBase(
      notificationId: String
      accepted: Boolean
    ): Notification

    migrateAllFieldToBase: InfoMessage

    # Base
    updateBaseByAdmin(
      baseId: String
      bannerImage: String
      slotDetails: baseExtraDetails
      membershipDetails: baseExtraDetails
    ): Base

    addBaseSubAdmin(userId: String, email: String, baseSlug: String): User

    participateEvent(userId: String, eventId: String, kidIds: [String]): Payment

    enrollKidsUsingSlot(
      parentId: String
      eventId: String
      kidIds: [String]
    ): InfoMessage

    enrollMultiKidsUsingSlot(
      parentId: String
      eventId: String
      kidIds: [String]
    ): InfoMessage

    purchaseSpecialEventByIAP(
      userId: String
      eventId: String
      kidIds: [String]
      couponCode: String
      paymentResponse: String
    ): InfoMessage

    invitePeoplesToJoinEvent(
      userId: String
      eventId: String
      invitedTo: [invitedToEmail]
    ): InfoMessage

    acceptInvitationWithoutLogin(
      email: String
      eventId: String
      kids: [acceptInvitationKids]
    ): Auth

    acceptInvitationWithLogin(
      userId: String
      eventId: String
      kidIds: [String]
    ): InfoMessage

    subscribeEventsForMonth(
      userId: String
      baseSlug: String
      token: String
      paymentResponse: String
    ): Payment

    initiateStripeSession(
      project: String
      userId: String
      eventId: String
      kidIds: [String]
      baseSlug: String
      couponCode: String
      slotAmountToPurchase: Int
    ): AdditionalMessage

    createCouponCodeByAdmin(
      adminUserId: String
      email: String
      couponCode: String
      baseSlug: String
    ): Affiliate

    initiateStripeSetupSession(userId: String): AdditionalMessage
    initiateStripeBillingPortalSession(userId: String): AdditionalMessage
    createKidByParent(
      parentId: String
      childName: String
      kidGender: String
      sports: [String]
      relation: String
      dateOfBirth: String
    ): InfoMessage

    makeParentKidRelation(
      parentId: String
      kidUserId: String
      relation: String
    ): InfoMessage

    createEvent(
      createdBy: String
      baseSlug: String
      eventType: String
      caption: String
      dateTime: String
      eventPrice: Int
      duration: Int
      sports: [String]
      gameType: String
      slot: Int
      description: String
      easyDescription: String
      bannerImage: String
      promoCodes: [PromoCodes]
    ): Event

    updateEvent(
      eventId: String
      eventType: String
      caption: String
      dateTime: String
      eventPrice: Int
      duration: Int
      sports: [String]
      gameType: String
      slot: Int
      description: String
      easyDescription: String
      bannerImage: String
      promoCodes: [PromoCodes]
    ): Event

    checkEventCouponValidity(
      couponCode: String
      eventId: String
      paymentFor: String
    ): AdditionalMessage

    multiKidsSubscription(baseSlug: String, userIds: [String]): Payment

    # Follower
    addOrRemoveFollower(
      type: String
      typeId: String
      followerId: String
      follow: Boolean
    ): Follower

    # Claim
    claimTeam(email: String, teamId: String): Team
    claimUser(email: String, userId: String): Team

    # Short
    createShort(url: String, body: String): Short

    # Players
    createPlayer(
      createdBy: String
      playerName: String
      avatar: String
      jersey: Int
      placeId: String
    ): PlayerStats

    # Delete
    deleteTournament(tournamentId: String, game: String): InfoMessage

    # Nft
    makeUserAffiliate(userId: String): Affiliate
    revealPrivateKey(
      basementSportsSecretKey: String
      publicWalletAddress: String
    ): RevealPrivateKey
    mintNft(
      paymentMethod: String
      paymentBy: String
      nftId: String
      token: String
      paymentResponse: String
    ): Payment
    mintMultipleNft(
      collectionType: String
      paymentMethod: String
      paymentBy: String
      nfts: [nftAvailabilityCheckObject]
      token: String
      paymentResponse: String
      toPublicAddress: String
      purchaseAsAGiftEmail: String
      couponCode: String
      giftMessage: String
    ): Payment

    saveKidcoinPurchaseInfo(
      paymentBy: String
      paymentMethod: String
      paymentResponse: String
    ): Payment

    airdropMultipleNfts(
      collectionType: String
      verificationCode: Int
      who: String
      toPublicKey: String
      receiverEmail: String
      nfts: [nftAvailabilityCheckObject]
      giftMessage: String
      dateOfBirth: String
    ): InfoMessage
    generateNfts(folderName: String): InfoMessage
    checkCouponCodeValidity(couponCode: String): InfoMessage
    resendBlockchainFailledNfts: InfoMessage
    resendBlockchainFailledNfts2023WomenCollection: InfoMessage
    createIconFinderCasesFromNfts: InfoMessage
    createIconFinderObjectForBinarySearch: InfoMessage

    setMintByInMongoNftsCollectionFromWalletsAndUsersMongoCollection(
      publicWalletAddress: String
    ): InfoMessage

    setMintByToAParticularUserIdForAParticularWalletAddress(
      willBeMintByUserId: String
      publicWalletAddressToSearch: String
    ): InfoMessage

    setOpenseaPermaLinkInNft: InfoMessage
    startOpenSeaStreamingAPI: InfoMessage
    setCurrentOwnerWalletAddressInNftsFromBlockchain: InfoMessage
    findTheNftsWhoseAreExistInBlockchainButNotMintedInDatabase: InfoMessage
    addCollectionTypeInPreviousNfts: InfoMessage
    updateNftsMintprice: InfoMessage
    uploadNftToCloudinary(countryName: String): InfoMessage

    uploadAvatarToCloudinary(userFolderName: String): InfoMessage

    updateOpenseaParmaLinkAndCurrentOwnerWalletAddress: InfoMessage

    mintNftWithKidCoin(
      paymentBy: String
      nftId: String
      transaction_id: String
    ): Payment

    mintMultipleNftWithKidCoin(
      collectionType: String
      paymentBy: String
      nfts: [nftAvailabilityCheckObject]
      transaction_id: String!
      paidKidCoin: Int
    ): Payment

    createTwoFactorVerification(type: String, who: String): InfoMessage

    # kidCoin
    addKidCoinTokenToUser(_id: String, kidToken: String): User

    # Self Play Event
    createSelfPlayEvent(
      eventName: String
      createdBy: String
      baseId: String
      eventGameType: [EventTypeData]
    ): SelfPlayEvent

    changeEventSettings(
      _id: String
      eventGameType: [EventTypeData]
    ): SelfPlayEvent

    startSelfPlayEvent(_id: String): SelfPlayEvent

    entryPlayerOpenSelfPlayEvent(_id: String, playerId: String): SelfPlayEvent

    # Self Play
    createSelfPlay(
      participantsIds: [String]
      gameType: String
      createdBy: String
      baseId: String
      timeLength: Int
      gameMode: String
      totalRound: Int
      contestType: String
    ): SelfPlay

    changeSelfPlayScore(_id: String, type: String, playerNumber: Int): SelfPlay
    changeSelfPlayRoundTimeTask(
      _id: String
      playerNumber: Int
      taskTime: Int
    ): SelfPlay

    changeRoundPlace(_id: String): SelfPlay

    changeSelfPlayRoundScore(
      _id: String
      type: String
      playerNumber: Int
    ): SelfPlay

    changeSelfPlayHit(
      _id: String
      type: String
      playerNumber: Int
      hitNumber: Int
    ): SelfPlay

    changeSelfPlayRoundHit(
      _id: String
      type: String
      playerNumber: Int
      hitNumber: Int
    ): SelfPlay

    changePlayerSecuence(_id: String, currentPlayer: Int): SelfPlay

    undoSelfPlayScore(_id: String, playerNumber: Int): SelfPlay

    finishedSelfPlay(_id: String): SelfPlay

    checkIsGoneToTie(_id: String): SelfPlay

    # Self Play Tournament
    createSelfPlayTournament(
      tournamentName: String
      createdBy: String
      tournamentType: Int
      timeLength: Int
      schedule: String
      gameMode: String
      gameType: String
      baseId: String
    ): SelfPlayTournament

    entryPlayerOpenSelfPlayTournament(
      tournamentId: String
      playerId: String
    ): SelfPlayTournament

    startSelfPlayTournament(tournamentId: String): SelfPlayTournament

    changeSelfPlayTournamentScore(
      tournamentId: String
      matchId: String
      roundName: String
      type: String
      playerNumber: Int
    ): SelfPlay

    changeSelfPlayTournamentHit(
      tournamentId: String
      matchId: String
      roundName: String
      type: String
      playerNumber: Int
      hitNumber: Int
    ): SelfPlay

    changeSelfPlayTournamentTimeTask(
      tournamentId: String
      matchId: String
      roundName: String
      playerNumber: Int
      taskTime: Int
    ): SelfPlay

    changePlayerSecuenceInTournament(
      tournamentId: String
      matchId: String
      roundName: String
      currentPlayer: Int
    ): SelfPlay

    finishedSelfPlayTournamentMatch(
      tournamentId: String
      matchId: String
      roundName: String
    ): SelfPlay

    checkIsGoneToTieInTournament(
      tournamentId: String
      matchId: String
      roundName: String
    ): SelfPlay

    changePlayerSeedingInTournament(
      tournamentId: String
      playerIds: [String]
    ): SelfPlayTournament

    slotPurchase(baseId: String, totalSlot: Int, userId: String): Payment
  }
`

export default typeDefs
