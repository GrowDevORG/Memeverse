"use client";

import type React from "react";
// import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Loader2, Upload, ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import TextFormatting from "@/components/text-formating";

export default function MemeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const htmlToImageRef = useRef<HTMLDivElement>(null);

  // Text formatting state
  const [position, setPosition] = useState("top");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [fontSize, setFontSize] = useState(24);
  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "center"
  );
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result as string);
        setActiveTab("preview");
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result as string);
        setActiveTab("preview");
      };
      fileReader.readAsDataURL(droppedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const generateAICaption = async () => {
    if (!preview) return;

    setIsGeneratingCaption(true);

    try {
      // Using memegen.link API to get random meme templates
      const response = await fetch("https://api.memegen.link/templates");
      const templates = await response.json();

      // Select a random template and use its example text
      const randomTemplate =
        templates[Math.floor(Math.random() * templates.length)];

      if (randomTemplate && randomTemplate.example) {
        // Extract text from example URL
        const exampleText = randomTemplate.example.text || [
          "Funny meme caption",
          "Bottom text",
        ];
        setCaption(exampleText.join("\n"));
      } else {
        setCaption("This meme is fire! 🔥\nShare it before it gets banned!");
      }
    } catch (error) {
      console.error("Error generating caption:", error);
      setCaption("This meme is too funny!\nCan't stop laughing 😂");
    } finally {
      setIsGeneratingCaption(false);
    }
  };

  const convertToImageAndCreateFormData = async () => {
    try {
      if (htmlToImageRef.current === null) {
        return;
      }

      // Convert the HTML element to a PNG
      const dataUrl = await toPng(htmlToImageRef.current, { quality: 0.95 });
      
      // Convert dataUrl to a Blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      
      // Create FormData and append the image
      const formData = new FormData();
      formData.append('file', blob, `converted-image${Date.now()}.png`);
      formData.append('caption', caption);
      // console.log(formData);
      // console.log('FormData created successfully');
      
      return formData;
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const uploadToCloudinary = async () => {
    if (!file || !preview) return;
  
    setIsUploading(true);
    setUploadProgress(0);
  
    // Create a FormData instance
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "meme_uploads"); // Replace with your Cloudinary upload preset
  
    // // Correct way to send metadata
    // formData.append("context", `caption=${caption}|position=${position}|color=${textColor.replace("#", "")}|size=${fontSize}|bold=${isBold}|italic=${isItalic}`);

    // Convert HTML to image and create FormData
    // console.log("formdata"+ formData);
    const formData = await convertToImageAndCreateFormData();
    // console.log("formdata2" +  formData);
  
    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = prev + Math.random() * 10;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 200);
  
      // Upload to Cloudinary
      const response = await fetch(
        `api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      clearInterval(progressInterval);
      setUploadProgress(100);
  
      const data = await response.json();

      // add 
    

      console.log("Upload successful:", data);
  
      // Reset form after successful upload
      setTimeout(() => {
        setFile(null);
        setPreview(null);
        setCaption("");
        setUploadProgress(0);
        setIsUploading(false);
        setActiveTab("upload");
        setPosition("top");
        setTextColor("#FFFFFF");
        setFontSize(24);
        setTextAlign("center");
        setIsBold(false);
        setIsItalic(false);
      }, 1500);
    } catch (error) {
      console.error("Upload failed:", error);
      setIsUploading(false);
    }
  };
  

  const resetUpload = () => {
    setFile(null);
    setPreview(null);
    setCaption("");
    setActiveTab("upload");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-4xl mx-auto mt-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="preview" disabled={!preview}>
            Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={triggerFileInput}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/gif"
                  className="hidden"
                />
                <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-500 text-center mb-2">
                  Drag and drop your meme here, or click to browse
                </p>
                <p className="text-xs text-gray-400 text-center">
                  Supports: JPG, PNG, GIF
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={(e: any) => {
                    e.stopPropagation();
                    triggerFileInput();
                  }}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Select File
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="pt-6 space-y-6">
              {preview && (
                <div className="flex flex-col space-y-6">
                  <div className="relative w-full aspect-square max-h-[400px] overflow-hidden" ref={htmlToImageRef}>
                    <Image
                      src={preview || "/placeholder.svg"}
                      alt="Meme preview"
                      fill
                      className="object-fit"
                      layout="fill"
                      />
                    {caption && (
                      <div
                      className={`absolute inset-x-0 p-4 ${
                          position === "top"
                            ? "top-0"
                            : position === "middle"
                            ? "top-1/2 transform -translate-y-1/2"
                            : "bottom-0"
                          } `}
                          >
                        <div
                          style={{
                            color: textColor,
                            fontSize: `${fontSize}px`,
                            textAlign: textAlign,
                            fontWeight: isBold ? "bold" : "normal",
                            fontStyle: isItalic ? "italic" : "normal",
                          }}
                          >
                          {caption.split("\n").map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">
                        Meme Caption
                      </label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={generateAICaption}
                        disabled={isGeneratingCaption}
                      >
                        {isGeneratingCaption ? (
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                          <Sparkles className="h-4 w-4 mr-2" />
                        )}
                        Generate AI Caption
                      </Button>
                    </div>
                    <Textarea
                      placeholder="Add a funny caption to your meme..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      rows={3}
                    />

                    <TextFormatting
                      position={position}
                      setPosition={setPosition}
                      textColor={textColor}
                      setTextColor={setTextColor}
                      fontSize={fontSize}
                      setFontSize={setFontSize}
                      textAlign={textAlign}
                      setTextAlign={setTextAlign}
                      isBold={isBold}
                      setIsBold={setIsBold}
                      isItalic={isItalic}
                      setIsItalic={setIsItalic}
                    />
                  </div>

                  {isUploading && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{Math.round(uploadProgress)}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}

                  <div className="flex space-x-2 justify-end">
                    <Button
                      variant="outline"
                      onClick={resetUpload}
                      disabled={isUploading}
                    >
                      Cancel
                    </Button>
                    <Button onClick={uploadToCloudinary} disabled={isUploading}>
                      {isUploading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Meme
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}