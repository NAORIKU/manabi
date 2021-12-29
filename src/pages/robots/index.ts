import outdent from "outdent";

export const renderRobots = (): string => {
  return outdent`
        User-Agent: *
        Disallow: /
    `;
};
