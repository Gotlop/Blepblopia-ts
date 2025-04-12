import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
  {
  "accountAssociation": {
    "header": "eyJmaWQiOjU0MDExOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDRjNjcwZDg1ZGQ2MzJlZmQwODVGODdjYWE1NEQ0Q2M5MTExZTkzYjgifQ",
    "payload": "eyJkb21haW4iOiJ0ZXN0ZnJhbWVkLTczZHMudmVyY2VsLmFwcCJ9",
    "signature": "MHgzNTE5NmQ1NGUzMThkYTczYzQ4NDIxMTg0YmE3ZGRkMGYxOGEzNGViNzg3NzI4ZTI4ZmJiNGU5OGYxZWM3ZTk3NzA0Y2UzOGFlZDU1MzA3NGM5NDAyNzkzODYzZmI5YTk4NGQzNzgxNmRkYzQ5M2VlOThiNzI3M2ZhOGYxYzk1MDFi"
  }
}
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og-image.png`,
      buttonTitle: "Translate",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#a1a1ff",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
