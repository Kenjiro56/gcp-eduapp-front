'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();

  const dummyUserData = [
    {
    "id": 1,
    "user_name": "test1",
    "email": "test1@test.com",
    "password": "test1@123"
    },
    {
    "id": 2,
    "user_name": "test2",
    "email": "test2@test.com",
    "password": "test2@123"
    },
    {
      "id": 3,
      "user_name": "test3",
      "email": "test3@test.com",
      "password": "test3@123"
    },
  ];

  const dummyLessonData = [
    {
      "id": 1,
      "title": "二次方程式の解の公式を導出せよ。",
      "subject": "数学",
      "difficulty": "中級",
    },
    {
      "id": 2,
      "title": "円周率が3.05よりも大きいことを証明せよ。",
      "subject": "数学",
      "difficulty": "上級",
    },
    {
      "id": 3,
      "title": "光の屈折率を求めよ。",
      "subject": "理科",
      "difficulty": "初級",
    },
    {      "id": 4,
      "title": "日本の首都を答えよ。",
      "subject": "社会",
      "difficulty": "初級",
    },
    {
      "id": 5,
      "title": "英語の文法を説明せよ。",
      "subject": "英語",
      "difficulty": "中級",
    },
    {
      "id": 6,
      "title": "化学反応式を書け。",
      "subject": "理科",
      "difficulty": "中級",
    },
  ]

  const subjectColorMap: { [subject: string]: string } = {
    国語: 'red-300',
    数学: 'indigo-300',
    理科: 'green-300',
    社会: 'yellow-300',
    英語: 'purple-300',
  }

  const subjectsIconMap = [
    { name: '国語', color: 'red-300', icon: <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="20" fill="white">文</text> },
    { name: '数学', color: 'indigo-300', icon: <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="24" fill="white">∑</text> },
    { name: '理科', color: 'green-300', icon: <path d="M24 16h16v4l-4 8v10a8 8 0 1 1 -8 0V28l-4 -8v-4z" fill="white" /> },
    {
      name: '社会',
      color: 'yellow-300',
      icon: (
        <>
          <circle cx="32" cy="32" r="16" stroke="white" strokeWidth="2" fill="none" />
          <path d="M16,32 H48 M32,16 V48 M22,22 A16,16 0 0,0 42,42" stroke="white" strokeWidth="2" fill="none" />
        </>
      ),
    },
    { name: '英語', color: 'purple-300', icon: <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="24" fill="white">A</text> },
  ]


  const currentUser = dummyUserData[0]; // 仮のユーザーデータを使用
  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <div className="bg-white w-full max-w-[768px] rounded-lg px-6 shadow-md">
        {/* アバターとユーザー情報 */}
        <div className="flex items-center gap-6">
          <Image
            src="/avator_sample.svg"
            alt="アバター"
            width={450}
            height={160}
            className="rounded-lg"
          />
          <div className="flex-1 ">
            <h1 className="text-5xl font-bold text-black">{currentUser.user_name}</h1>
            <button className="mt-3 w-full bg-black text-white py-2 rounded-md text-center"
              onClick={() => router.push('/lesson')}
            >
              今日の問題を解く
            </button>
            <div className="mt-2 text-center">
              <button className="w-full px-4 py-1 bg-indigo-200 text-indigo-800 text-sm rounded-md"
                onClick={() => router.push('/avator')}
              >
                アバター着せ替え
              </button>
            </div>
          </div>
        </div>

        {/* 曜日＋にこにこ */}
        <div className="mt-8 border-2 border-blue-400 rounded-xl p-2">
          <div className="grid grid-cols-7 text-center text-lg font-bold text-gray-700">
            {['月', '火', '水', '木', '金', '土', '日'].map((day, index) => (
              <div key={index} className={index === 5 ? 'text-blue-600' : index === 6 ? 'text-red-500' : ''}>
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 mt-2 text-center">
            {Array(7).fill(0).map((_, i) => (
              <div key={i} className="text-orange-400 text-3xl">😊</div>
            ))}
          </div>
        </div>

        {/* 教科バッジ */}
        <div className="mt-8 grid grid-cols-5 gap-4 text-center">
          {subjectsIconMap.map((subject, index) => (
            <div key={index}>
              <svg viewBox="0 0 64 64" className={`w-16 h-16 mx-auto rounded-full bg-${subject.color}`}>
                {subject.icon}
              </svg>
              <p className="mt-2 text-lg text-black">{subject.name}</p>
            </div>
          ))}
        </div>

        {/* 最近学習したもの */}
      <div className="mt-8">
          <h2 className="text-lg font-bold mb-2 text-black">最近学習したもの</h2>
          <div className="grid grid-cols-2 gap-4">
            {dummyLessonData.slice(-6).map((lesson) => (
          <div
            key={lesson.id}
            className={`border-2 p-4 rounded-md text-sm text-black border-${subjectColorMap[lesson.subject] ?? 'gray-300'}`}
          >
                <div className="font-semibold">{lesson.title}</div>
                <div className="text-xs text-gray-500 mt-1">
                  科目: {lesson.subject} ／ 難易度: {lesson.difficulty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
