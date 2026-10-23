import { prisma } from "../config/prisma.js";

export async function createContactMessage(data) {
  return prisma.contactMessage.create({
    data: {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    },
    select: {
      id: true,
      name: true,
      subject: true,
      createdAt: true,
    },
  });
}
