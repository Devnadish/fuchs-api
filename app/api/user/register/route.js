import { addUser } from "@/DBAction/user";
export const dynamic = "force-dynamic"; // defaults to auto
// export async function GET() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//     headers: {
//       "Content-Type": "application/json",
//       "API-Key": process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return Response.json({ data });
// }

export const POST = async (request) => {
  try {
    const data = await request.json();
    // Log the extracted data
    console.log(data);

    // Call addUser function with the extracted data
    const user = await addUser(
      data.name,
      data.email,
      data.mobile,
      data.password
    );

    // Log the added user
    console.log(`User added: ${JSON.stringify(user)}`);

    // Return a response with the added user data
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
};
