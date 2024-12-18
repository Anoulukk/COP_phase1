
import {Response} from '../../../../../_metronic/helpers';
type ID = undefined | null | number;

export type fromData = {
  id?: ID
  "110A"?: {
    "110A1"?: string
    "110B2"?: string
  },
  "110B"? : { "110B"? : string },
  "110C"? : { "110C"? : string },
  "110D"? : { 
    "110D1"? : number
    "110D2"? : number
  },
  "110E"? : {"110E"? : number},
  "110F"? : { 
    "110F1"? : string
    "110F2"? : string
    "110F3"? : string
    "110F4"? : string },
  "110G"? : {"110G"? : string},
  "110H"? : {"110H"? : number},
  "110I"? : {"110I"? : string},
  "110K"? : {"110K"? : string},
  "110L"? : {"110L"? : string},
  "121"? : {"121"? : string},
  "122"? : {"122"? : string},
  "123"? : {"123"? : string},
  "131"? : {"131A"? : string},
  "132"? : {
    "132A"? : string
    "132B"? : string
  },
  "140"? : {
    "140A"? : string
    "140B"? : string
    "140C"? : string
    "140D"? : string
    "140E"? : string
    "140F"? : string
    "140G"? : string
    "140H"? : string
    "140I"? : string
    "140J"? : string
  },

}

export type UsersQueryResponse = Response<Array<fromData>>