"use server";

export const getMyGitHubContributions = async (): Promise<number> => {
  const username = "jackdevau";
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GITHUB_TOKEN not configured, returning 0 contributions");
    return 0;
  }

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.errors || !data.data?.user) {
      console.error("GitHub API error:", data.errors || "User not found");
      return 0;
    }

    return data.data.user.contributionsCollection.contributionCalendar
      .totalContributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return 0;
  }
};
