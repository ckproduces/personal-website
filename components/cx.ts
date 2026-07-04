export function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}
