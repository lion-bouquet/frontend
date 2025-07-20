import { Info } from "lucide-react";

export default function CustomerInformation({
  name,
  setName,
  phone,
  setPhone,
  nameErrorMsg,
  phoneErrorMsg,
  shakeName,
  shakePhone,
  agree,
  setAgree,
  agreeErrorMsg,
  shakeAgree,
}) {
  return (
    <div className="p-6 space-y-6 border border-[#ebebea] rounded-lg">
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">이름</label>
            <input
              type="text"
              placeholder="홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {nameErrorMsg && (
              <p
                className={`text-red-500 text-sm mt-1 ${
                  shakeName ? "shake" : ""
                }`}
              >
                {nameErrorMsg}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              휴대폰 번호
            </label>
            <input
              type="tel"
              placeholder="01012345678"
              maxLength={11}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {phoneErrorMsg && (
              <p
                className={`text-red-500 text-sm mt-1 ${
                  shakePhone ? "shake" : ""
                }`}
              >
                {phoneErrorMsg}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-400"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span>개인정보동의</span>
          </label>
        </div>

        <div className="flex items-center gap-2 p-4 rounded-lg bg-[#e9ebf9] text-sm text-gray-700">
          <Info className="w-5 h-5 text-gray-500" />
          <span>정보 동의 관련 문구</span>
        </div>
        {agreeErrorMsg && (
          <p
            className={`text-red-500 text-sm mt-1  ${
              shakeAgree ? "shake" : ""
            }`}
          >
            {agreeErrorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
