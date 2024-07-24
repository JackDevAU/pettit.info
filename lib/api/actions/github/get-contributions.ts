"use server";

export const getMyGitHubContributions = async () => {
  const username = "jackdevau";
  const token = process.env.GITHUB_TOKEN;

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

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return data.data.user.contributionsCollection.contributionCalendar
    .totalContributions;
};
