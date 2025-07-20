"use client";

import { useRouter } from "next/navigation";
import FlowerSelectionSummary from "@/components/order-page/flower-selection-summary";

export default function FlowerSelectionWrapper({ slug }) {
  const router = useRouter();

  return (
    <FlowerSelectionSummary onClickCart={() => router.push(`/order/${slug}`)} />
  );
}
