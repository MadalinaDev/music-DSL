import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function GET() {
  return new Promise((resolve) => {
    exec(
      "python3 ./src/python-scripts/process-dsl.py",
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
