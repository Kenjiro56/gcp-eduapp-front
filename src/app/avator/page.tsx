'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const avatarItems = [
  '/avatar1.png',
  '/avatar2.png',
  '/avatar3.png',
]

export default function AvatarSelectPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 md:px-6 py-6">
      <div className="w-full max-w-md md:max-w-[768px] flex flex-col items-center">
        {/* アバター画像 */}
          <Image
            src="/avator_sample.svg"
            alt="avatar"
            width={180}
            height={180}
            className="md:w-48 md:h-48"
          />

        {/* 選択中表示 */}
        <div className="flex items-center justify-end w-full mb-4 pr-4">
          <div className="flex flex-col items-center">
            <div className="bg-pink-300 rounded-full p-4 md:p-5">
              <Image
                src={avatarItems[selectedIndex]}
                alt="selected"
                width={80}
                height={80}
                className="md:w-24 md:h-24"
              />
            </div>
            <span className="mt-1 text-sm font-bold text-black">選択中</span>
          </div>
        </div>

        {/* 横スクロール一覧 */}
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 px-4 pb-4">
            {avatarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`rounded-full p-2 transition ${
                  index === selectedIndex ? 'bg-pink-200' : 'bg-blue-200'
                }`}
              >
                <Image
                  src={item}
                  alt={`avatar-${index}`}
                  width={80}
                  height={80}
                  className="md:w-20 md:h-20"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 決定ボタン */}
        <button
          onClick={() => alert('アバターを選択しました')}
          className="mt-8 bg-white border-2 border-black px-10 py-3 rounded-xl shadow-md font-bold text-xl text-black hover:bg-gray-100 transition duration-200 w-full md:w-auto"
        >
          決定
        </button>
      </div>
    </div>
  )
}
