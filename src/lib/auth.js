// /utils/auth.ts

export async function refreshTokens() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const res = await fetch(
      "https://likelion.patulus.com/api/v1/users/refresh",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, refreshToken }),
      }
    );

    const json = await res.json();

    if (res.ok && json.success === "true") {
      const { accessToken: newAccess, refreshToken: newRefresh } = json.data;
      localStorage.setItem("accessToken", newAccess);
      localStorage.setItem("refreshToken", newRefresh);
      return newAccess;
    } else {
      throw new Error("토큰 재발급 실패");
    }
  } catch (err) {
    console.error("토큰 갱신 중 오류:", err);
    throw err;
  }
}
