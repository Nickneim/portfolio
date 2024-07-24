'use client';
 
import Error from 'next/error';
 
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}

// export default function NotFound() {
//   return (
//     <section>
//       <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
//         404 - Page Not Found
//       </h1>
//       <p className="mb-4">The page you are looking for does not exist.</p>
//     </section>
//   )
// }
