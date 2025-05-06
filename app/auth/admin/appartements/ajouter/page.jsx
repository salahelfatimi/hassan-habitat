"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function UploaderPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-50">
      <UploadDropzone
        endpoint="imageUploader"
        className="w-full max-w-md border-2 border-dashed border-blue-500 rounded-xl bg-white p-6 shadow-lg"
        appearance={{
          button: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
          container: "flex flex-col items-center justify-center gap-4",
          uploadIcon:' max-w-16',
          label: "text-sm font-medium text-gray-700",
        }}
        onClientUploadComplete={(res) => { console.log("Uploaded files:", res); alert(`Uploaded ${res.length} file(s) successfully!`); }}
        onUploadError={(error) => { alert(`Upload failed: ${error.message}`); }}
      />
    </main>
  );
}
