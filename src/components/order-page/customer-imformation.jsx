import { Info } from "lucide-react";

export default function CustomerInformation() {
  return (
    <div className="p-6 space-y-6 border border-[#ebebea] rounded-lg">
      <h2 className="text-2xl font-bold">Customer Information</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Anya Sharma"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 border-gray-400" />
            <span>Save as default information</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 border-gray-400" />
            <span>개인정보동의</span>
          </label>
        </div>

        <div className="flex items-center gap-2 p-4 rounded-lg bg-gray-100 text-sm text-gray-700">
          <Info className="w-5 h-5 text-gray-500" />
          <span>정보 동의 관련 문구</span>
        </div>
      </form>
    </div>
  );
}
