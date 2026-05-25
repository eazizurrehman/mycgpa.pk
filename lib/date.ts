export function formatDate(date: Date | null | undefined) {
  if (!date) return "";

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function formatDateAndTime(date: Date | null | undefined) {
  if (!date) return "";

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export function getTranscriptTimestamp() {
  const value = new Date();

  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();
  const hours24 = value.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = value.getMinutes().toString().padStart(2, "0");
  const ampm = hours24 >= 12 ? "PM" : "AM";

  return `${day}-${month}-${year} ${hours12}-${minutes}-${ampm}`;
}
