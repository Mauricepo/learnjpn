'use client'
import { Inputs } from '@/components/Inputs'
import { Personbutton } from '@/components/Personbutton'
import { Progressbar } from '@/components/Progressbar'
import { Statistics } from '@/components/Statistics'
/**
 * Home Function
 * @return {ReactElement} ReactElement
 */
export default function Home() {
  return (
    <>
      <Personbutton></Personbutton>
      <Statistics></Statistics>
      <Inputs></Inputs>
      <Progressbar></Progressbar>
    </>
  )
}
