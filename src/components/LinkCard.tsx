import React from 'react'

export default function LinkCard() {
  return (
    <div className="flex  gap-5   rounded-lg p-5 bg-white border-2 ">
      <div className="flex justify-center items-center">✋</div>
      <div className="flex flex-col ">
        <span>Google.com</span>
        <span>https://google.com</span>
        <div className="mt-5">
          <ul className="flex gap-5">
            <li> Imagen </li>
            <li> 0 Clicks </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
