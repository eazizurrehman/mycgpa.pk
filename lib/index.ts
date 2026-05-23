export function splitLabel(str: string | number) {
  if (!str) return "";

  return String(str)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
}

export function toOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function toTitleCase(input?: string) {
  if (!input) return "";

  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const constructFullName = (row: {
  firstName: string;
  lastName: string;
}) => {
  const { firstName, lastName } = row;

  return lastName ? `${firstName} ${lastName}` : firstName;
};

const convertToDate = (
  inputDate: Date | string | number,
  options: Intl.DateTimeFormatOptions,
): string | null => {
  let date: Date;

  if (typeof inputDate === "number") date = new Date(inputDate);
  else if (typeof inputDate === "string") date = new Date(inputDate);
  else date = inputDate;

  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString(undefined, options);
};

export const toLocaleDate = (inputDate: Date | string | number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return convertToDate(inputDate, options) || "";
};

export const toLocaleDateTime = (inputDateTime: Date | string | number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return convertToDate(inputDateTime, options) || "";
};

export const constructArrayFromLength = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
