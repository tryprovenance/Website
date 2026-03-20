import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, #060911 0%, #08101a 55%, #060911 100%)",
          color: "#f3f6fb",
          padding: "56px",
          fontFamily:
            '"Avenir Next","Segoe UI","Helvetica Neue",sans-serif',
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "24px",
            borderRadius: "30px",
            border: "1px solid rgba(142, 181, 255, 0.16)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "56%",
            zIndex: 2
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px"
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "18px",
                border: "1px solid rgba(142, 181, 255, 0.24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "999px",
                  background: "#8eb5ff"
                }}
              />
            </div>
            <span
              style={{
                fontSize: "30px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#9fb8e5"
              }}
            >
              Provenance
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px"
            }}
          >
            <span
              style={{
                fontSize: "18px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7ce0d0"
              }}
            >
              Decision traceability for regulated workflows
            </span>
            <h1
              style={{
                margin: 0,
                fontSize: "64px",
                lineHeight: 1.02,
                maxWidth: "620px",
                fontWeight: 600
              }}
            >
              Capture the why behind high-stakes decisions.
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "26px",
                lineHeight: 1.45,
                color: "#c2cce0",
                maxWidth: "620px"
              }}
            >
              Audit-ready decision traceability for AI-assisted and
              exception-heavy financial workflows.
            </p>
          </div>
        </div>

        <div
          style={{
            width: "44%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2
          }}
        >
          <div
            style={{
              width: "420px",
              height: "460px",
              borderRadius: "26px",
              border: "1px solid rgba(142, 181, 255, 0.18)",
              background: "rgba(7, 14, 24, 0.92)",
              display: "flex",
              flexDirection: "column",
              padding: "28px",
              boxShadow: "0 36px 80px rgba(0, 0, 0, 0.35)"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "26px"
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.14em",
                  color: "#8eb5ff",
                  textTransform: "uppercase"
                }}
              >
                Decision dossier
              </span>
              <span
                style={{
                  fontSize: "16px",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  background: "rgba(124, 224, 208, 0.1)",
                  color: "#7ce0d0"
                }}
              >
                Reviewed
              </span>
            </div>

            {[
              "Trigger",
              "Observed evidence",
              "Inferred reasoning",
              "Policy references",
              "Approval chain",
              "Outcome"
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: index === 5 ? 0 : "18px",
                  paddingBottom: index === 5 ? 0 : "18px",
                  borderBottom:
                    index === 5 ? "none" : "1px solid rgba(255, 255, 255, 0.07)"
                }}
              >
                <span style={{ fontSize: "14px", color: "#7b869e" }}>{item}</span>
                <span style={{ fontSize: "20px", lineHeight: 1.35 }}>
                  {index === 0
                    ? "AI exception review triggered by anomaly signal."
                    : index === 5
                      ? "Approved with reviewer signoff and export-ready narrative."
                      : "Source-linked context remains visible inside the output."}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
