// route handler
export function GET(request) {
  console.log(request);
  return new Response("hello");
}
// export function POST(request) {}
