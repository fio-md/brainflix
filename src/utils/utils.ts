const timeAgo = (timestamp: number): string => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timestampSecs = Math.floor(timestamp / 1000);
  const secondsAgo = currentTime - timestampSecs;

  if (secondsAgo < 10) {
    return "just now";
  } else if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 3600) {
    const minutes = Math.floor(secondsAgo / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 86400) {
    const hours = Math.floor(secondsAgo / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 604800) {
    const days = Math.floor(secondsAgo / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 2419200) {
    const weeks = Math.floor(secondsAgo / 604800);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 29030400) {
    const months = Math.floor(secondsAgo / 2419200);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(secondsAgo / 29030400);
    return `over a year ago`;
  }
};

export { timeAgo };
