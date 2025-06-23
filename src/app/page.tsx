'use client'

import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen py-10">
      <div className="bg-white w-full max-w-[768px] rounded-lg p-6 shadow-md">
        {/* アバターとユーザー情報 */}
        <div className="flex items-center gap-6">
          <Image
            src="/public/avator-sample.svg"
            alt="アバター"
            width={160}
            height={160}
            className="rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">ワンダー</h1>
            <button className="mt-3 w-full bg-black text-white py-2 rounded-md text-center">
              今日の問題を解く
            </button>
            <div className="mt-2 text-center">
              <button className="px-4 py-1 bg-indigo-200 text-indigo-800 text-sm rounded-md">
                アバター着せ替え
              </button>
            </div>
          </div>
        </div>

        {/* 曜日＋にこにこ */}
        <div className="mt-8 border-2 border-blue-400 rounded-xl p-4">
          <div className="grid grid-cols-7 text-center text-base font-bold text-gray-700">
            {['月', '火', '水', '木', '金', '土', '日'].map((day, index) => (
              <div key={index} className={index === 5 ? 'text-blue-600' : index === 6 ? 'text-red-500' : ''}>
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 mt-2 text-center">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="text-orange-400 text-xl">😊</div>
            ))}
          </div>
        </div>

        {/* 教科バッジ */}
        <div className="mt-8 grid grid-cols-4 gap-4 text-center overflow-x-auto">
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-red-300" />
            <p className="mt-2 text-sm">国語</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-300" />
            <p className="mt-2 text-sm">数学</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-green-300" />
            <p className="mt-2 text-sm">理科</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-300" />
            <p className="mt-2 text-sm">社会</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-300" />
            <p className="mt-2 text-sm">英語</p>
          </div>
        </div>

        {/* 最近学習したもの */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">最近学習したもの</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-md text-sm bg-white">
              二次方程式の解の公式を導出せよ。
            </div>
            <div className="border border-gray-300 p-4 rounded-md text-sm bg-white">
              二次方程式の解の公式を導出せよ。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
