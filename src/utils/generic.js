export function formatDateReadable(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
  
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
  
    const ordinal = getOrdinal(day);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
  
    return `${day}${ordinal} ${month}, ${year}`;
  }

  export function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = Math.floor((now - date) / 1000); // in seconds
  
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min${diff < 120 ? "" : "s"} ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hour${diff < 7200 ? "" : "s"} ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} day${diff < 172800 ? "" : "s"} ago`;
  
    return date.toLocaleDateString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }