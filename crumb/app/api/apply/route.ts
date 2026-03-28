import { NextRequest, NextResponse } from "next/server";

// TODO: Install and configure Airtable SDK
// import Airtable from "airtable";
// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
//   process.env.AIRTABLE_BASE_ID!
// );

// TODO: Install and configure Resend SDK
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

interface ApplyBody {
  github: string;
  building: string;
  tools?: string[];
}

export async function POST(req: NextRequest) {
  let body: ApplyBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { github, building, tools = [] } = body;

  // Validate required fields
  if (!github || typeof github !== "string" || github.trim().length === 0) {
    return NextResponse.json(
      { error: "GitHub username is required." },
      { status: 422 }
    );
  }

  if (!building || typeof building !== "string" || building.trim().length === 0) {
    return NextResponse.json(
      { error: "Please tell us what you're building." },
      { status: 422 }
    );
  }

  if (github.trim().length > 100) {
    return NextResponse.json(
      { error: "GitHub username is too long." },
      { status: 422 }
    );
  }

  if (building.trim().length > 2000) {
    return NextResponse.json(
      { error: "Description is too long. Please keep it under 2000 characters." },
      { status: 422 }
    );
  }

  const submission = {
    github: github.trim(),
    building: building.trim(),
    tools: Array.isArray(tools) ? tools.filter((t) => typeof t === "string") : [],
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") ?? "unknown",
  };

  console.log("[Crumb Apply] New application:", JSON.stringify(submission, null, 2));

  // ─── Airtable Integration (TODO) ───────────────────────────────────────────
  // Env vars needed:
  //   AIRTABLE_API_KEY   — Personal access token from airtable.com/account
  //   AIRTABLE_BASE_ID   — Found in your base's API docs (starts with "app...")
  //   AIRTABLE_TABLE_ID  — Table name or ID (e.g. "Applications")
  //
  // try {
  //   await base(process.env.AIRTABLE_TABLE_ID!).create([
  //     {
  //       fields: {
  //         "GitHub Username": submission.github,
  //         "What are you building?": submission.building,
  //         "Tools": submission.tools.join(", "),
  //         "Submitted At": submission.submittedAt,
  //       },
  //     },
  //   ]);
  // } catch (err) {
  //   console.error("[Crumb Apply] Airtable error:", err);
  //   // Non-fatal — still proceed to Resend notification
  // }
  // ──────────────────────────────────────────────────────────────────────────

  // ─── Resend Notification Email (TODO) ─────────────────────────────────────
  // Env vars needed:
  //   RESEND_API_KEY        — From resend.com/api-keys
  //   NOTIFY_EMAIL          — Your email to receive new application notifications
  //   RESEND_FROM_EMAIL     — Verified sender (e.g. "noreply@crumb.dev")
  //
  // try {
  //   await resend.emails.send({
  //     from: process.env.RESEND_FROM_EMAIL!,
  //     to: process.env.NOTIFY_EMAIL!,
  //     subject: `New Crumb application: @${submission.github}`,
  //     html: `
  //       <h2>New application from @${submission.github}</h2>
  //       <p><strong>Building:</strong> ${submission.building}</p>
  //       <p><strong>Tools:</strong> ${submission.tools.join(", ") || "Not specified"}</p>
  //       <p><strong>Submitted:</strong> ${submission.submittedAt}</p>
  //     `,
  //   });
  // } catch (err) {
  //   console.error("[Crumb Apply] Resend error:", err);
  //   // Non-fatal
  // }
  // ──────────────────────────────────────────────────────────────────────────

  return NextResponse.json(
    {
      success: true,
      message: "Application received. We'll be in touch within 48 hours.",
    },
    { status: 200 }
  );
}
