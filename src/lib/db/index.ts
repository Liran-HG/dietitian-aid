// src/db/index.ts
import { PrismaClient } from '@prisma/client'
import { BorderAllIcon } from '@radix-ui/react-icons'

export const db = new PrismaClient().$extends({
    result:{
        meetings: {
            locationDisplayName:{
                needs: {location:true},
                compute:(meeting) => {

                    // pointless breaks added for auto indentation
                    switch(meeting.location){
                        case "Office":
                            return "משרדית"
                            break
                        case "ClientHouse":
                            return "בית לקוח"
                            break
                        case "FreelanceHouse":
                            return "בית לקוח (חיצוני)"
                            break
                        case "FreelanceOffice":
                            return "משרדית (חיצוני)"
                            break
                        default:
                            return "מיקום חסר"
                            break
                    }
                }
            }
        }
    }
})