export default function OrderThankYouHeader({ orderCode }) {
  return (
    <div
      className="text-center py-16 rounded-xl shadow"
      style={{
        background:
          "linear-gradient(135deg, #BEDEF2 0%, #D1DCF6 30%, #D8CDEE 70%, #F5D5E2 100%)",
      }}
    >
      <h1 className="text-lg font-extrabold mb-2" style={{ color: "#7A75E3" }}>
        {orderCode}
      </h1>
      <h2 className="text-xl font-bold" style={{ color: "#5b5967" }}>
        주문이 완료되었습니다!
      </h2>
      <p style={{ color: "#5b5967", marginTop: "8px", fontSize: "10px" }}>
        주문이 정상적으로 완료되었습니다. 관련 내역은 이메일을 통해 다시 한 번
        안내드리며, 문제가 있을 경우 언제든지 고객센터로 문의해주세요.
      </p>
    </div>
  );
}
