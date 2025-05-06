import { createNextRouteHandler } from "uploadthing/next";
import { uploadRouter } from "../../utils/uploadthing";

export const { GET, POST } = createNextRouteHandler({
  router: uploadRouter,
});
