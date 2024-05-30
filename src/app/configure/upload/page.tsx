"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { ImageIcon, Loader2, MousePointerSquareDashedIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(45);

  const router = useRouter();

  const {startUpload, isUploading} = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
        const configId = data.serverData.configId;
        startTransition(() => {
          router.push(`/configure/design?id=${configId}`);
        })
    },
    onUploadProgress(p) {
        setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} type is not supported`,
      description: "Please choose a PNG, JPEG or JPG image instead",
      variant: 'destructive'
    })
  };
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, {configId: undefined});
    setIsDragOver(false);
  };

  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "relative my-16 p-2 w-full h-full rounded-xl bg-gray-900/5 lg:rounded-2xl ring-1 ring-inset ring-gray-900/10 flex flex-1 justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="w-full relative flex flex-1 flex-col items-center justify-center">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="w-full h-full flex flex-1 flex-col justify-center items-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashedIcon className="mb-2 w-6 h-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2 className="w-6 h-6 mb-2 animate-spin text-zinc-500" />
              ) : (
                <ImageIcon className="mb-2 w-6 h-6 text-zinc-500" />
              )}
              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading....</p>
                    <Progress value={uploadProgress} className="mt-2 w-20 h-2 bg-gray-300" />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>
                        Redirecting, please wait
                    </p>
                  </div>
                ) : isDragOver ? (
                    <p>
                  <span className="font-semibold">Drop file</span>{' '}
                    to upload
                  </p>
                ) : (
                    <p>
                    <span className="font-semibold">Click to upload</span>{' '}
                      or drag and drop
                    </p>
                )}
              </div>
              {isPending?null:<p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
