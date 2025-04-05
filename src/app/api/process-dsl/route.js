import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { message: "No DSL code provided." },
      { status: 400 }
    );
  }

  code = decodeURIComponent(code);

  const base64Code = Buffer.from(code, "utf-8").toString("base64");

  return new Promise((resolve) => {
    exec(
      `py -3.11 src/python/main.py "${base64Code}"`,
      (error, stdout, stderr) => {
        if (error) {
          resolve(
            NextResponse.json({ message: `Error: ${stderr}` }, { status: 500 })
          );
        } else {
          resolve(NextResponse.json({ message: stdout }, { status: 200 }));
        }
      }
    );
  });
}
