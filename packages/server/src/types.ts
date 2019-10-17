export interface Context {
  request: any
  connection: any
}

export interface User {
  email: string
  media: Media | null
  firstName: string | null
  lastName: string | null
  birthdate: string | null
}

export interface MockUser {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  company: string
  bio: string
}

export interface AuthenticationError {
  path: string
  message: string
}

export interface Media {
  mimetype: string
  url: string
}

export interface Place {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  shortDescription: string
  description: string
  numBeds: number
  price: number
  amenities: Amenities
  tags: string[]
}

export interface Amenities {
  elevator: boolean
  petsAllowed: boolean
  internet: boolean
  kitchen: boolean
  wirelessInternet: boolean
  familyKidFriendly: boolean
  freeParkingOnPremises: boolean
  hotTub: boolean
  pool: boolean
  smokingAllowed: boolean
  wheelchairAccessible: boolean
  breakfast: boolean
  cableTv: boolean
  suitableForEvents: boolean
  dryer: boolean
  washer: boolean
  indoorFireplace: boolean
  tv: boolean
  heating: boolean
  hangers: boolean
  iron: boolean
  hairDryer: boolean
  doorman: boolean
  paidParkingOffPremises: boolean
  freeParkingOnStreet: boolean
  gym: boolean
  airConditioning: boolean
  shampoo: boolean
  essentials: boolean
  laptopFriendlyWorkspace: boolean
  privateEntrance: boolean
  buzzerWirelessIntercom: boolean
  babyBath: boolean
  babyMonitor: boolean
  babysitterRecommendations: boolean
  bathtub: boolean
  changingTable: boolean
  childrensBooksAndToys: boolean
  childrensDinnerware: boolean
  crib: boolean
}

export interface RegisterResult {
  me: User | null
  token: string | null
  errors: AuthenticationError[]
}

export interface LoginResult {
  me: User | null
  token: string | null
  errors: AuthenticationError[]
}

export interface ForgotPasswordChangeResult {
  errors: AuthenticationError[]
}

export interface UpdateMeMediaResult {
  me: User
  token: string
}

export interface UpdateMeResult {
  me: User
  token: string
}

export interface CreatePlaceResult {
  place: Place
}
