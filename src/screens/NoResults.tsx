import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export default function NoResultsScreen() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#000000",
        fontFamily: "var(--font-figtree), system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader active="/search" />
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 24px 56px",
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1
            style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "800", letterSpacing: "-0.025em" }}
          >
            Caregivers near Colombo 05
          </h1>
          <span style={{ fontSize: "15px", color: "#545454" }}>Sun 18 Oct · 6:00 AM · Companionship · within 5 km</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Link
            href="/search"
            style={{
              height: "30px",
              padding: "0 12px",
              borderRadius: "15px",
              background: "#EEEEEE",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Sun 18 Oct
          </Link>
          <Link
            href="/search"
            style={{
              height: "30px",
              padding: "0 12px",
              borderRadius: "15px",
              background: "#EEEEEE",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            6:00 AM
          </Link>
          <Link
            href="/search"
            style={{
              height: "30px",
              padding: "0 12px",
              borderRadius: "15px",
              background: "#EEEEEE",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Within 5 km
          </Link>
          <Link
            href="/search"
            style={{
              height: "30px",
              padding: "0 12px",
              borderRadius: "15px",
              background: "#EEEEEE",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Companionship
          </Link>
        </div>
        <div
          style={{
            maxWidth: "520px",
            margin: "40px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "14px",
          }}
        >
          <span
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "44px",
              background: "#EEEEEE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M20 20l-3.5-3.5"></path>
            </svg>
          </span>
          <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em" }}>
            No caregivers free then
          </h1>
          <span style={{ fontSize: "15px", color: "#333333", lineHeight: "1.5" }}>
            Nobody verified is free on Sun 18 at 6:00 AM within 5 km.
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
            <Link
              href="/search"
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#EEEEEE",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Widen to 10 km · 6 free
            </Link>
            <Link
              href="/search"
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#EEEEEE",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Any language
            </Link>
            <Link
              href="/search"
              style={{
                height: "30px",
                padding: "0 12px",
                borderRadius: "15px",
                background: "#EEEEEE",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Sat instead · 9 free
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "6px" }}>
            <Link
              href="/search"
              style={{
                height: "44px",
                padding: "0 22px",
                borderRadius: "22px",
                background: "#000000",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxSizing: "border-box",
                whiteSpace: "nowrap",
              }}
            >
              Try 7:00 AM · 4 free
            </Link>
            <Link
              href="/post-job"
              style={{
                height: "40px",
                padding: "0 18px",
                borderRadius: "20px",
                background: "#EEEEEE",
                color: "#000000",
                fontSize: "14px",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxSizing: "border-box",
                whiteSpace: "nowrap",
              }}
            >
              Post a job · caregivers apply
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
