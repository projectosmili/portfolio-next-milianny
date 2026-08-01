import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.github.com/repos/projectosmili/portfolio-next-milianny/commits"
  );

  const commits = await response.json();

  const activity = commits.map((commit) => ({
    sha: commit.sha,
    message: commit.commit.message,
    author: commit.commit.author.name,
    date: commit.commit.author.date,
    url: commit.html_url,
  }));

  return NextResponse.json(activity);
}