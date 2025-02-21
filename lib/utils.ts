import fs from "fs";

export async function saveImage(mealImage: File, mealName: string) {
  const extension = mealImage ? mealImage.name.split(".").pop() : "";
  const filename = `${mealName}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await mealImage.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Storing image failed");
    }
  });

  return filename;
}
