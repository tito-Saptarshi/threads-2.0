import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/api/webhook/clerk', "/api/uploadthing"], // to enable webhook funtionalities for our application

    ignoredRoutes: ['/api/webhook/clerk']    // this are the routes which will be ignored by clerk
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};