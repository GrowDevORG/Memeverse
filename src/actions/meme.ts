"use server"
import { currentUser } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const uploadMeme = async (imageUrl: string, caption: string) => {
    try {
        const user = await currentUser();
        if (!user) {
            return;
        }
        const findUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
        if (!findUser) {
            console.log("user not found");
            return;
        }
        await prisma.post.create({
            data: {
                imageUrl,
                caption,
                authorId: findUser.id
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// export const getMemes = async ({page = 1, limit = 10}) => {
//     const offset = (page - 1) * limit;

//     const memes = await prisma.post.findMany({
//       take: limit,
//       skip: offset,
//       include: {
//         author: true,
//         likes: true,
//         _count: { select: { comments: true } },
//       },
//     });

//     return memes;
// }


export const updateMemeLike = async (memeId: string) => {
    try {
      const user = await currentUser();
      if (!user) return;
  
      const findUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
      if (!findUser) {
        console.log("User not found");
        return;
      }
  
    
      const existingLike = await prisma.like.findUnique({
        where: { userId_memeId: { userId: findUser.id, memeId } },
      });
  
      if (existingLike) {
        await prisma.like.delete({ where: { id: existingLike.id } });
      } else {
        await prisma.like.create({
          data: { userId: findUser.id, memeId },
        });
      }
  
      const newLikesCount = await prisma.like.count({ where: { memeId } });

      console.log(newLikesCount);
      console.log(!existingLike);
      return { likesCount: newLikesCount, liked: !existingLike };
    } catch (error) {
      console.error("Error updating meme like:", error);
      throw error;
    }
  };

export const getComments = async (memeId : string) => {
    try {
      const user = await currentUser();
      if (!user) return;
  
      const findUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
      if (!findUser) {
        console.log("User not found");
        return;
      }
      const comments = await prisma.comment.findMany({where : {id : memeId}});
      return comments;
    } catch (error) {
      console.log(error);
      return [];
    }
}

export const addComments = async (content : string, memeId : string) => {
  try {
    const user = await currentUser();
      if (!user) return;
  
      const findUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
      if (!findUser) {
        console.log("User not found");
        return;
      }
    const newComment = await prisma.comment.create({data : {
      content : content,
      userId : findUser.id,
      memeId : memeId
    }})
    return newComment;
  } catch (error) {
    console.log(error);
  }
}