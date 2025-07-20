// components/order-page/request-note.jsx

"use client";

export default function RequestNote({ requestNote, setRequestNote }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">요청사항</h3>
      <div className="border border-[#eee] rounded-xl p-4">
        <p className="text-sm text-gray-400 mb-2">
          <strong>ex)</strong> 꽃다발에 카드 추가해주세요 / 포장지는 노란색으로
          해주세요
        </p>
        <textarea
          value={requestNote}
          onChange={(e) => setRequestNote(e.target.value)}
          rows={4}
          placeholder="요청사항을 입력해주세요"
          className="w-full bg-[#f8f9ff] p-4 rounded-md outline-none"
        />
      </div>
    </div>
  );
}
