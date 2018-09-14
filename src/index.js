export default function sqsum(a, b, c) {
  return Math.sqrt(a)
    |> (_ => Math.sqrt(b) + _)
    |> (_ => Math.sqrt(c) + _);
}
