

export type FullMeetingDetailType = {id: number, startTime: Date, endTime: Date, active: boolean, location: string}
export type DisplayMeetingType = {
  location: string
  id: number,
  active: boolean
  startTime: Date,
  endTime: Date
}