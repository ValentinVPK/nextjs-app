"use client";

export default function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Filed to create meal. Please try again.</p>
    </main>
  );
}
