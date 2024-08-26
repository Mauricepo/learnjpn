import { create } from 'zustand'
import { requestData } from '../gist'
import { sendData } from '../gist2'

export interface PointsStore {
  WhoImA: boolean
  MauricePkt: number
  SinaPkt: number
  MauriceWght: number
  SinaWght: number
  getData(): void
  setPerson(person: boolean): void
  updateData(mpkt: number, mwght: number, spkt: number, swght: number): void
}

export const usePointsStore = create<PointsStore>((set, get) => ({
  WhoImA: true,
  MauricePkt: 0,
  SinaPkt: 0,
  MauriceWght: 0,
  SinaWght: 0,

  updateData() {
    const data = {
      Maurice: {
        Points: get().MauricePkt,
        Weight: get().MauriceWght
      },
      Sina: {
        Points: get().SinaPkt,
        Weight: get().SinaWght
      }
    }

    sendData(data).then((response: any) => {
      if (response) {
        console.log('Data updated')
      }
    })
  },

  getData() {
    requestData().then((response: any) => {
      if (response) {
        set({
          MauricePkt: Number(JSON.stringify(response.Maurice.Points)),
          SinaPkt: Number(JSON.stringify(response.Sina.Points)),
          MauriceWght: Number(JSON.stringify(response.Maurice.Weight)),
          SinaWght: Number(JSON.stringify(response.Sina.Weight))
        })
      }
    })
  },
  setPerson: (WhoImA: boolean) => {
    set({ WhoImA })
  }
}))
